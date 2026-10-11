"""Headless browser checks for Waterside Press (Playwright + Chromium).
Run:  python3 tests/browser_test.py  (from the project root, after `node build.mjs`)
Serves dist/ on a local port, then checks every page at phone and desktop widths
for console errors and horizontal overflow, and exercises the liturgy and library.
"""
import functools, http.server, json, os, socketserver, sys, threading
from playwright.sync_api import sync_playwright

DIST = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else 'dist')
SHOTS = os.path.abspath(sys.argv[2] if len(sys.argv) > 2 else 'tests/screenshots')
os.makedirs(SHOTS, exist_ok=True)
Handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=DIST)
class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
Handler = functools.partial(Quiet, directory=DIST)
srv = socketserver.TCPServer(('127.0.0.1', 0), Handler)
port = srv.server_address[1]
threading.Thread(target=srv.serve_forever, daemon=True).start()
BASE = f'http://127.0.0.1:{port}/'

pages = []
for root, _, files in os.walk(DIST):
    for f in files:
        if f.endswith('.html'):
            pages.append(os.path.relpath(os.path.join(root, f), DIST))
pages.sort()
results, failures = [], 0

def fail(msg):
    global failures
    failures += 1
    print('FAIL', msg)

with sync_playwright() as p:
    b = p.chromium.launch()
    for width, label in [(375, 'phone'), (1280, 'desktop')]:
        ctx = b.new_context(viewport={'width': width, 'height': 900})
        # Block third-party font requests: the test must not depend on the network.
        ctx.route('**/*', lambda r: r.abort() if 'fonts.g' in r.request.url else r.continue_())
        pg = ctx.new_page()
        errors = []
        pg.on('console', lambda m: errors.append(m.text) if m.type == 'error' and 'fonts' not in m.text and 'ERR_FAILED' not in m.text else None)
        pg.on('pageerror', lambda e: errors.append(str(e)))
        for path in pages:
            errors.clear()
            pg.goto(BASE + path)
            over = pg.evaluate('document.documentElement.scrollWidth - document.documentElement.clientWidth')
            if over > 1: fail(f'{label} {path}: horizontal overflow {over}px')
            if errors: fail(f'{label} {path}: console errors {errors}')
        print(f'{label}: {len(pages)} pages loaded')

        # Liturgy: correct day, tabs, simplified mode, text size
        pg.goto(BASE + 'daily-liturgy/index.html')
        info = pg.evaluate('''() => {
          const vis = [...document.querySelectorAll('.day')].filter(d => !d.hidden).map(d => d.id);
          const names = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
          return {visible: vis, expected: names[new Date().getDay()], today: document.getElementById('today-line').textContent};
        }''')
        if info['visible'] != [info['expected']]: fail(f'{label} liturgy shows {info["visible"]} expected {info["expected"]}')
        else: print(f'{label}: liturgy shows today ({info["expected"]}) — "{info["today"]}"')
        pg.click('#tab-wednesday')
        if not pg.is_visible('#wednesday') or pg.is_visible('#' + info['expected'] if info['expected'] != 'wednesday' else '#monday'):
            fail(f'{label}: tab switch failed')
        pg.focus('#tab-wednesday'); pg.keyboard.press('ArrowRight')
        if not pg.is_visible('#thursday'): fail(f'{label}: arrow-key tab navigation failed')
        full_h = pg.evaluate("document.getElementById('thursday').offsetHeight")
        pg.click('#simple-toggle')
        simple_h = pg.evaluate("document.getElementById('thursday').offsetHeight")
        if not simple_h < full_h * 0.8: fail(f'{label}: simplified mode did not shorten ({full_h}->{simple_h})')
        else: print(f'{label}: simplified mode {full_h}px -> {simple_h}px')
        pg.click('#simple-toggle')
        pg.click('#size-up'); pg.click('#size-up')
        if pg.text_content('#size-label') != '120%': fail(f'{label}: text size label {pg.text_content("#size-label")}')
        pg.click('#size-down'); pg.click('#size-down')
        pg.goto(BASE + 'daily-liturgy/index.html?day=friday')
        if not pg.is_visible('#friday'): fail(f'{label}: ?day=friday not honoured')
        pg.emulate_media(media='print')
        if pg.is_visible('.lit-bar') or pg.is_visible('.site-header'): fail(f'{label}: print hides controls failed')
        pg.emulate_media(media='screen')

        # Library: search and filters
        pg.goto(BASE + 'library/index.html')
        def shown(): return pg.evaluate("[...document.querySelectorAll('.book-item')].filter(c=>!c.hidden).map(c=>c.querySelector('h3').textContent)")
        total = len(shown())
        pg.fill('#lib-q', 'bunyan')
        if shown() != ["The Pilgrim's Progress"]: fail(f'{label}: search bunyan -> {shown()}')
        pg.fill('#lib-q', 'xyzzy')
        if shown() or not pg.is_visible('#no-results'): fail(f'{label}: empty state')
        pg.click('#lib-reset')
        pg.check('#lib-pdf')
        if sorted(shown()) != sorted(["The Pilgrim's Progress", 'A Serious Call to a Devout and Holy Life']): fail(f'{label}: pdf filter -> {shown()}')
        pg.uncheck('#lib-pdf'); pg.check('#lib-trans')
        if len(shown()) != 2: fail(f'{label}: transcription filter -> {shown()}')
        pg.uncheck('#lib-trans'); pg.select_option('#lib-cat', 'catechisms')
        if len(shown()) != 2: fail(f'{label}: category filter -> {shown()}')
        pg.goto(BASE + 'library/index.html?q=catechism')
        if 'The Westminster Shorter Catechism' not in shown(): fail(f'{label}: ?q= param ignored')
        print(f'{label}: library {total} works; search and filters behave')

        # Mobile nav
        if label == 'phone':
            pg.goto(BASE + 'index.html')
            if pg.is_visible('#site-nav'): fail('phone: nav visible before toggle')
            pg.click('.nav-toggle')
            if not pg.is_visible('#site-nav a[href$="library/index.html"]'): fail('phone: nav toggle failed')
            pg.keyboard.press('Escape')
        for name in ['index.html', 'daily-liturgy/index.html', 'library/index.html', 'library/pilgrims-progress/index.html']:
            pg.goto(BASE + name)
            pg.screenshot(path=os.path.join(SHOTS, f'{label}-{name.replace("/", "_").replace("index.html", "")}.png'), full_page=False)
        ctx.close()

    # Dark mode renders without overflow
    ctx = b.new_context(viewport={'width': 1280, 'height': 900}, color_scheme='dark')
    ctx.route('**/*', lambda r: r.abort() if 'fonts.g' in r.request.url else r.continue_())
    pg = ctx.new_page(); pg.goto(BASE + 'daily-liturgy/index.html')
    pg.screenshot(path=os.path.join(SHOTS, 'desktop-dark-liturgy.png'))
    b.close()

srv.shutdown()
print(f'\nBrowser checks complete: {failures} failures.')
sys.exit(1 if failures else 0)

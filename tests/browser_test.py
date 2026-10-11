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
    for width, label in [(375, 'phone'), (768, 'tablet'), (1280, 'desktop')]:
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

        # Daily Office: date, psalter, lesson plan, Sunday form, shorter form, tabs, date navigation
        pg.goto(BASE + 'daily-office/index.html')
        info = pg.evaluate("""() => ({
          date: document.getElementById('office-date').textContent,
          mps: document.getElementById('morning-psalms').textContent,
          eps: document.getElementById('evening-psalms').textContent,
          ot: document.getElementById('morning-lesson').textContent,
          nt: document.getElementById('evening-lesson').textContent,
          sunday: document.getElementById('office-root').classList.contains('is-sunday'),
          dom: new Date().getDate(), dow: new Date().getDay()})""")
        print(f'{label}: office {info["date"]} | M {info["mps"]} | E {info["eps"]} | {info["ot"]} / {info["nt"]}')
        if info['sunday'] != (info['dow'] == 0): fail(f'{label}: Sunday form mismatch')
        # Known values: 1 Jan 2026 = Genesis 1 / Matthew 1, psalter day 1; 31 Jan = day 30 repeated
        pg.goto(BASE + 'daily-office/index.html?date=2026-01-01')
        v = pg.evaluate("[document.getElementById('morning-psalms').textContent, document.getElementById('morning-lesson').textContent, document.getElementById('evening-lesson').textContent]")
        if v != ['Psalm 1, Psalm 2, Psalm 3, Psalm 4, Psalm 5', 'Genesis 1', 'Matthew 1']: fail(f'{label}: plan epoch wrong {v}')
        pg.goto(BASE + 'daily-office/index.html?date=2026-01-31')
        if pg.text_content('#evening-psalms') != 'Psalm 147, Psalm 148, Psalm 149, Psalm 150': fail(f'{label}: 31st rubric wrong')
        pg.goto(BASE + 'daily-office/index.html?date=2026-03-22')  # day 80 (a Sunday): Exodus 31 / John 13, checked by hand
        v = pg.evaluate("[document.getElementById('morning-lesson').textContent, document.getElementById('evening-lesson').textContent, document.getElementById('office-root').classList.contains('is-sunday')]")
        if v != ['Exodus 31', 'John 13', True]: fail(f'{label}: 2026-03-22 plan/Sunday {v}')
        if not pg.is_visible('#panel-morning .sunday-only') and not pg.is_visible('#panel-evening .sunday-only'): fail(f'{label}: Sunday blocks hidden on Sunday')
        pg.goto(BASE + 'daily-office/index.html?date=2026-10-12')
        if pg.evaluate("document.getElementById('office-root').classList.contains('is-sunday')"): fail(f'{label}: Monday shown as Sunday')
        pg.click('#tab-evening')
        if not pg.is_visible('#panel-evening') or pg.is_visible('#panel-morning'): fail(f'{label}: office tab switch')
        full_h = pg.evaluate("document.getElementById('panel-evening').offsetHeight")
        pg.click('#short-toggle')
        short_h = pg.evaluate("document.getElementById('panel-evening').offsetHeight")
        if not short_h < full_h * 0.75: fail(f'{label}: shorter form {full_h}->{short_h}')
        else: print(f'{label}: shorter form {full_h}px -> {short_h}px')
        pg.click('#short-toggle')
        pg.click('#next-day')
        if '13' not in pg.text_content('#office-date'): fail(f'{label}: next day -> {pg.text_content("#office-date")}')
        pg.click('#size-up'); pg.click('#size-up')
        if pg.text_content('#size-label') != '120%': fail(f'{label}: text size')
        pg.click('#size-down'); pg.click('#size-down')
        pg.emulate_media(media='print')
        if pg.is_visible('.office-bar') or pg.is_visible('.site-header'): fail(f'{label}: print hides controls')
        pg.emulate_media(media='screen')

        # Family Catechesis: landing lists sessions; a session has all nine steps and next link
        pg.goto(BASE + 'family-catechesis/index.html')
        n = pg.evaluate("document.querySelectorAll('.session-list a').length")
        pg.click('.session-list a >> nth=0')
        steps = pg.evaluate("document.querySelectorAll('.step').length")
        if n != 7 or steps != 9: fail(f'{label}: catechesis sessions {n}, steps {steps}')
        else: print(f'{label}: catechesis {n} sessions, {steps} steps each')

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
        for name in ['index.html', 'daily-liturgy/index.html', 'library/index.html', 'library/pilgrims-progress/index.html', 'family-catechesis/first-questions/chief-end/index.html']:
            pg.goto(BASE + name)
            pg.screenshot(path=os.path.join(SHOTS, f'{label}-{name.replace("/", "_").replace("index.html", "")}.png'), full_page=False)
        ctx.close()

    # Dark mode renders without overflow
    ctx = b.new_context(viewport={'width': 1280, 'height': 900}, color_scheme='dark')
    ctx.route('**/*', lambda r: r.abort() if 'fonts.g' in r.request.url else r.continue_())
    pg = ctx.new_page(); pg.goto(BASE + 'daily-office/index.html')
    pg.screenshot(path=os.path.join(SHOTS, 'desktop-dark-liturgy.png'))
    b.close()

srv.shutdown()
print(f'\nBrowser checks complete: {failures} failures.')
sys.exit(1 if failures else 0)

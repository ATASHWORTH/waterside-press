#!/usr/bin/env node
// Waterside Press — static site generator. No dependencies; Node 18+.
// Usage:  node build.mjs                    (relative links; works from any host or folder)
//         SITE_URL=https://example.org node build.mjs   (adds canonical URLs, og:url, sitemap)
import { mkdirSync, writeFileSync, copyFileSync, rmSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as off from './content/office.mjs';
import * as cat from './content/catechesis.mjs';
import * as hymns from './content/hymns.mjs';
import * as lib from './content/library.mjs';
import { pages } from './content/pages.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, 'dist');
const SITE_URL = (process.env.SITE_URL || '').replace(/\/$/, '');
const SITE = 'Waterside Press';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const attr = esc;

// ── Emblem: a tree planted by streams of water (Psalm 1:3). Monochrome, legible at 16px. ──
export const emblem = (title = '') => `<svg viewBox="0 0 64 64" role="${title ? 'img' : 'presentation'}" ${title ? `aria-label="${attr(title)}"` : 'aria-hidden="true"'} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
<circle cx="32" cy="32" r="30" stroke-width="1.5"/><circle cx="32" cy="32" r="27" stroke-width=".8"/>
<path d="M32 9.5c-8.6 0-14 5.8-14 12.4 0 5.6 4.3 9.4 9.4 9.9h9.2c5.1-.5 9.4-4.3 9.4-9.9 0-6.6-5.4-12.4-14-12.4z" stroke-width="1.8"/>
<path d="M32 44V25M32 34l-5.5-5.5M32 30l5-5" stroke-width="2"/>
<path d="M32 44c-3 0-6 1-8.5 2.6M32 44c3 0 6 1 8.5 2.6M32 44v3" stroke-width="1.6"/>
<path d="M13 50.5c3.2-1.8 6.3-1.8 9.5 0s6.3 1.8 9.5 0 6.3-1.8 9.5 0 6.3 1.8 9.5 0" stroke-width="1.6"/>
<path d="M18 55.5c2.3-1.3 4.7-1.3 7 0s4.7 1.3 7 0 4.7-1.3 7 0 4.7 1.3 7 0" stroke-width="1.3"/>
</svg>`;

// Bookplate engraving for the home page: tree, roots reaching to the stream, river banks.
const heroArt = `<svg viewBox="0 0 300 380" role="img" aria-label="Engraving-style drawing of a tree planted beside a stream of water, after Psalm 1:3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
<rect x="6" y="6" width="288" height="368" rx="2" stroke-width="1.4"/>
<rect x="13" y="13" width="274" height="354" rx="1" stroke-width=".7"/>
<g stroke-width="1.5">
  <path d="M150 62c-24 0-41 13-46 30-17 2-28 15-28 31 0 13 8 24 21 28-3 15 9 29 26 29 6 0 11-2 15-5 4 3 8 4 12 4s8-1 12-4c4 3 9 5 15 5 17 0 29-14 26-29 13-4 21-15 21-28 0-16-11-29-28-31-5-17-22-30-46-30z"/>
  <path d="M150 260V150M150 203l-27-24M150 186l24-25M150 226l21-15M139 172l-14 4M163 148l10-9"/>
  <path d="M146 260c-12 1-24 6-33 13M154 260c12 1 24 6 33 13M150 260v18M141 262c-5 7-8 14-9 21M159 262c5 7 8 14 9 21"/>
</g>
<g stroke-width=".7" opacity=".85">
  <path d="M108 98c8-9 18-15 30-18M122 110c6-6 14-10 22-12M192 98c-8-9-18-15-30-18M178 110c-6-6-14-10-22-12"/>
  <path d="M88 130c3 8 9 14 17 17M212 130c-3 8-9 14-17 17M110 160c4 5 10 8 16 9M190 160c-4 5-10 8-16 9"/>
  <path d="M146 214v40M154 214v40M147 170v30M153 168v30"/>
</g>
<g stroke-width="1.2"><circle cx="118" cy="120" r="3.4"/><circle cx="186" cy="114" r="3.4"/><circle cx="168" cy="152" r="3.4"/><circle cx="134" cy="92" r="3.4"/><circle cx="104" cy="146" r="3.4"/><circle cx="198" cy="146" r="3.4"/></g>
<g stroke-width="1.2">
  <path d="M24 290c18-6 40-8 62-4M214 286c22-4 44-2 62 4"/>
  <path d="M24 302c22-8 44-8 66 0s44 8 66 0 44-8 66 0 32 6 54 2"/>
  <path d="M30 318c20-7 40-7 60 0s40 7 60 0 40-7 60 0 40 7 60 0"/>
  <path d="M48 333c17-6 34-6 51 0s34 6 51 0 34-6 51 0 34 6 51 0"/>
  <path d="M78 347c12-4 24-4 36 0s24 4 36 0 24-4 36 0 24 4 36 0"/>
</g>
<path d="M44 286l-6-22M52 285l2-24M60 286l8-20M240 286l6-22M248 286l-2-24" stroke-width=".9"/>
<text x="150" y="40" text-anchor="middle" font-family="Georgia, serif" font-size="11" letter-spacing="3" fill="currentColor" stroke="none">PSALM I · 3</text>
</svg>`;

// A plain five-line staff, used as the Music page's rule. Decorative; it notates no tune.
const staffRule = `<svg class="staff" viewBox="0 0 600 30" preserveAspectRatio="none" aria-hidden="true" stroke="currentColor" stroke-width="1"><path d="M0 3h600M0 9h600M0 15h600M0 21h600M0 27h600"/></svg>`;

const ornament = `<div class="rule-orn" aria-hidden="true">${emblem()}</div>`;

const NAV = [
  ['', 'Home'], ['daily-office/', 'Daily Office'], ['family-catechesis/', 'Family Catechesis'], ['library/', 'Library'],
  ['music/', 'Music'], ['learning/', 'Learning'], ['about/', 'About'],
];

function layout({ path, title, description, body, scripts = [], current, absolute = false }) {
  const depth = path === '' ? 0 : path.split('/').filter(Boolean).length;
  // The 404 page is served at arbitrary URLs, so it uses root-absolute links.
  const p = absolute ? '/' : '../'.repeat(depth);
  const href = (to) => p + to + 'index.html';
  const full = title === SITE ? SITE : `${title} — ${SITE}`;
  const canonical = SITE_URL ? `${SITE_URL}/${path}` : '';
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(full)}</title>
<meta name="description" content="${attr(description)}">
${canonical ? `<link rel="canonical" href="${attr(canonical)}">\n<meta property="og:url" content="${attr(canonical)}">` : ''}
<meta property="og:site_name" content="${SITE}">
<meta property="og:title" content="${attr(full)}">
<meta property="og:description" content="${attr(description)}">
<meta property="og:type" content="website">
<meta name="theme-color" content="#233d32">
<link rel="icon" href="${p}assets/emblem.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=Spectral:ital,wght@0,400;0,600;1,400&family=Alegreya+Sans:wght@400;500;700&family=Alegreya+Sans+SC:wght@500;700&display=swap">
<link rel="stylesheet" href="${p}assets/site.css">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="${href('')}">${emblem()}<span class="brand-name">Waterside Press</span></a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav class="site-nav" id="site-nav" aria-label="Main">
      <ul>${NAV.map(([to, label]) => `<li><a href="${href(to)}"${current === to ? ' aria-current="page"' : ''}>${label}</a></li>`).join('')}</ul>
      <form class="header-search" role="search" action="${href('library/')}" method="get">
        <label class="visually-hidden" for="site-q">Search the library</label>
        <input id="site-q" type="search" name="q" placeholder="Search library" autocomplete="off">
        <button class="btn small" type="submit">Search</button>
      </form>
    </nav>
  </div>
</header>
<main id="main" tabindex="-1">
${body(href, p)}
</main>
<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <span class="footer-motif">${emblem()}</span>
        <p class="verse">“He is like a tree planted by streams of water that yields its fruit in its season.”</p>
        <p class="meta">Psalm 1:3 (ESV)</p>
      </div>
      <nav aria-labelledby="f-pray"><h2 id="f-pray">Pray and learn</h2><ul>
        <li><a href="${href('daily-office/')}">Daily Office</a></li>
        <li><a href="${href('family-catechesis/')}">Family Catechesis</a></li>
        <li><a href="${href('lords-day/')}">The Lord’s Day</a></li>
      </ul></nav>
      <nav aria-labelledby="f-coll"><h2 id="f-coll">Collections</h2><ul>
        <li><a href="${href('library/')}">Library</a></li>
        <li><a href="${href('music/')}">Music</a></li>
        <li><a href="${href('learning/')}">Learning</a></li>
      </ul></nav>
      <nav aria-labelledby="f-pub"><h2 id="f-pub">The press</h2><ul>
        <li><a href="${href('about/')}">About</a></li>
        <li><a href="${href('editorial-principles/')}">Editorial Principles</a></li>
        <li><a href="${href('copyright/')}">Copyright and Permissions</a></li>
        <li><a href="${href('privacy/')}">Privacy</a></li>
        <li><a href="${href('accessibility/')}">Accessibility</a></li>
      </ul></nav>
    </div>
    <div class="footer-base">
      <span>Recover the inheritance. Preserve its integrity. Make it usable at home.</span>
      <span>Scripture quotations: ESV®, © 2001 Crossway. Used by permission.</span>
    </div>
  </div>
</footer>
<script src="${p}assets/site.js" defer></script>
${scripts.map((s) => `<script src="${p}assets/${s}" defer></script>`).join('\n')}
</body>
</html>
`;
  const file = path === '' ? 'index.html' : path.endsWith('.html') ? path : join(path, 'index.html');
  const dest = join(OUT, file);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, html);
  built.push({ path, title: full });
}
const built = [];

// ── Shared rendering helpers ──
const kindLabel = { scripture: 'Scripture · ESV', historic: 'Historic text', original: 'Waterside Press original', editorial: 'Editorial note', arrangement: 'Waterside arrangement' };
const kind = (k) => `<span class="kind">${kindLabel[k]}</span>`;
const note = (summary, html) => html ? `<details class="note"><summary>${summary}</summary><p>${html}</p></details>` : '';
const src = (k, text) => `<p class="source">${kind(k)}${esc(text)}</p>`;
const verse = (r) => `<p class="scripture">${r.text}</p>`;
const lines = (arr) => arr.map(([who, line]) => `<p class="versicle${who === 'All' ? ' all' : ''}"><b>${who}</b><span>${esc(line)}</span></p>`).join('');
const esvLink = (ref) => `https://www.esv.org/${ref.replace(/[–]/g, '-').replace(/(\d)[a-z]\b/g, '$1').replace(/,\s*/g, ',').replace(/\s+/g, '+')}/`;
const part = (id, title, inner, extra = '') => `<section class="part ${extra}" id="${id}" aria-labelledby="h-${id}"><div class="part-head"><h3 id="h-${id}">${title}</h3></div>${inner}</section>`;

function canticle(c) {
  const pointed = (s) => esc(s).replace(/ : /g, ' <span class="colon" aria-hidden="true">:</span> ');
  return `${src('historic', c.source)}<p class="meta">${esc(c.subtitle)}</p>
  <div class="canticle">${c.lines.map((l) => `<p>${pointed(l)}</p>`).join('')}<p class="gloria">${pointed(off.canticles.gloria)}</p></div>
  ${c.note ? note('About this canticle', esc(c.note)) : ''}`;
}
function hymnBlock(h) {
  return `${src('historic', h.source)}<p class="meta">Suggested tune: ${esc(h.tune)}</p>${h.stanzas.map((s) => `<p class="stanza">${esc(s)}</p>`).join('')}${note('About this hymn', esc(h.note))}`;
}
const collectBlock = (c) => `<h4>${esc(c.title)}</h4>${src('historic', c.source)}<p>${esc(c.text)}</p>${c.note ? note('A word in this prayer', esc(c.note)) : ''}`;

// ── Daily Office ──
function renderOffice(key) {
  const o = off.offices[key];
  const t = off.texts;
  const id = (s) => `${key}-part-${s}`; // distinct from the ${key}-psalms / ${key}-lesson slots filled by office.js
  const both = (render, field) => `<div class="weekday-only"><p class="when nojs-only">On weekdays</p>${render(field.weekday)}</div><div class="sunday-only"><p class="when nojs-only">On Sundays</p>${render(field.sunday)}</div>`;
  const sentence = (s) => `${src('scripture', s.ref)}${verse(s)}`;
  const cant = (k) => canticle(off.canticles[k]);
  const sameCanticle = o.canticle.weekday === o.canticle.sunday;
  const sections = [
    ['sentence', 'Opening'], ['confession', 'Confession', 'full-only'], ['versicles', 'Praise'], ['psalms', 'Psalms'],
    ['lesson', 'Scripture'], ['canticle', 'Canticle'], ...(o.canticle2 ? [['canticle2', 'Nunc Dimittis', 'full-only']] : []),
    ['creed', 'Creed', 'full-only'], ['prayers', 'Prayers'], ['hymn', 'Hymn'], ['blessing', 'Grace'],
  ];
  return `<div class="office-panel" id="panel-${key}" role="tabpanel" aria-labelledby="tab-${key}">
  <header class="office-title">
    <h2>${o.name}</h2>
    <p class="meta"><span class="weekday-only">The weekday form</span><span class="sunday-only">The Lord’s Day form</span></p>
  </header>
  <nav class="office-index" aria-label="${o.name}: sections"><ol>${sections.map(([s, label, cls]) => `<li${cls ? ` class="${cls}"` : ''}><a href="#${id(s)}">${label}</a></li>`).join('')}</ol></nav>
  ${part(id('sentence'), 'Opening sentence', both(sentence, o.sentence))}
  ${part(id('confession'), 'Confession of sin', `
    <p class="rubric">All kneel or bow, and say together:</p>
    ${src('historic', t.confession.source)}<p>${esc(t.confession.text)}</p>
    <p class="rubric">The leader then reads:</p>
    ${src('scripture', t.assurance.ref)}${verse(t.assurance)}
    ${note('About the confession', esc(t.confession.note))}`, 'full-only')}
  ${part(id('versicles'), 'Invitation to praise', `${src('historic', t.versicles.source)}${lines(t.versicles.lines)}`)}
  ${part(id('psalms'), 'The Psalms appointed', `
    <p class="source">${kind('historic')}Book of Common Prayer (1662) psalter, read through each month · <span id="${key}-psalter-day">See the table at the foot of this page</span></p>
    <div class="appointed js-only" hidden><strong>Read today</strong><span id="${key}-psalms"></span></div>
    <p class="nojs-only">Find the psalms for today’s date in the psalter table at the foot of this page.</p>
    <p class="rubric">The psalms are read aloud, leader and household taking alternate verses, each ending with the Gloria Patri. <span class="short-only">In the shorter form, read the first psalm appointed, or sing a metrical psalm from the <a href="../music/index.html">Music</a> page.</span></p>
    <p class="meta">Each link opens the psalm in the ESV at esv.org. Waterside does not reprint whole psalms, to stay within the ESV’s quotation limits.</p>`)}
  ${part(id('lesson'), o.lessonLabel, `
    <p class="source">${kind('arrangement')}Waterside continuous-reading plan · <a href="#about-plan">how the plan works</a></p>
    <div class="appointed js-only" hidden><strong>Read today</strong><span id="${key}-lesson"></span></div>
    <p class="nojs-only">The lesson is calculated from the date and needs JavaScript. You may instead continue reading where you left off.</p>
    <p class="rubric short-only">In the shorter form, a few verses are enough.</p>`)}
  ${part(id('canticle'), 'Canticle', sameCanticle ? cant(o.canticle.weekday) : both(cant, o.canticle))}
  ${o.canticle2 ? part(id('canticle2'), 'Second canticle', cant(o.canticle2), 'full-only') : ''}
  ${part(id('creed'), "The Apostles' Creed", `<p class="rubric">All say together:</p>${src('historic', t.creed.source)}${t.creed.text.map((x) => `<p>${esc(x)}</p>`).join('')}${note('Notes on the words', esc(t.creed.note))}`, 'full-only')}
  ${part(id('prayers'), 'The Prayers', `
    <h4>The Lord’s Prayer</h4>${src('historic', t.lordsPrayer.source)}<p>${esc(t.lordsPrayer.text)}</p>
    <div class="full-only"><h4>Suffrages</h4>${src('historic', t.suffrages.source)}${lines(t.suffrages.lines)}</div>
    ${both((cs) => cs.map((c, i) => `<div class="${i ? 'full-only' : ''}">${collectBlock(c)}</div>`).join(''), o.collects)}
    <div class="full-only">
      <h4>Intercessions</h4>${src('original', t.intercessions.source)}
      <ul class="intercessions">${t.intercessions.items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
    </div>
    <details class="note"><summary>A prayer for our children</summary>${src('original', t.forChildren.source)}<p>${esc(t.forChildren.text)}</p></details>`)}
  ${part(id('hymn'), 'Hymn', `<p class="rubric">A hymn may be sung here, or at the beginning.</p>${hymnBlock(hymns.byId[o.hymn])}`)}
  ${part(id('blessing'), 'The Grace', `${src('scripture', o.blessing.ref)}${verse(o.blessing)}<p class="meta no-copy">Praying alone or as a household without a minister, many say “us” for “you”. The words of Scripture are otherwise unaltered.</p>`)}
</div>`;
}

function psalterTable() {
  return `<div class="table-scroll"><table class="psalter"><caption>The psalter by day of the month (Book of Common Prayer, 1662). On the 31st, the psalms of the 30th day are read again.</caption>
  <thead><tr><th scope="col">Day</th><th scope="col">Morning</th><th scope="col">Evening</th></tr></thead>
  <tbody>${off.psalter.map(([m, e], i) => `<tr><th scope="row">${i + 1}</th><td>${m.join(', ')}</td><td>${e.join(', ')}</td></tr>`).join('')}</tbody></table></div>`;
}

function buildOffice() {
  const plan = { epoch: off.PLAN_EPOCH, psalter: off.psalter, ot: off.otBooks, nt: off.ntBooks };
  layout({
    path: 'daily-office/', current: 'daily-office/', title: 'Daily Office',
    description: 'Morning and Evening Prayer for the household, from the Book of Common Prayer tradition, with the psalms and lessons appointed for each day.',
    scripts: ['office.js'],
    body: (href) => `
<div class="wrap page-head">
  <p class="kicker">Pray the Office</p>
  <h1>Daily Office</h1>
  <p class="lede">Morning and Evening Prayer, adapted for the household from the Book of Common Prayer. Pray it alone, on behalf of your household, or with everyone gathered.</p>
  <details class="note prose"><summary>How to use the Office</summary>
    <p>The order stays the same each day so that it can be learned; the psalms and lessons change according to a set plan. The full form takes about twenty minutes. The shorter form takes about eight and suits young children. Words in <span style="color:var(--rubric);font-style:italic">red italic</span> are instructions and are not read aloud. Lines marked <b>Leader</b> and <b>All</b> are said in turn.</p>
  </details>
</div>
<div class="office-bar no-print js-only" hidden>
  <div class="wrap">
    <div class="date-nav" role="group" aria-label="Date">
      <button class="btn small secondary" id="prev-day" type="button" aria-label="Previous day">‹</button>
      <span id="office-date" aria-live="polite"></span>
      <button class="btn small secondary" id="next-day" type="button" aria-label="Next day">›</button>
      <button class="btn small secondary" id="back-today" type="button" hidden>Today</button>
    </div>
    <div class="office-controls">
      <a class="btn small secondary" href="#office-top">Contents</a>
      <button class="btn small secondary" id="short-toggle" type="button" aria-pressed="false">Shorter form</button>
      <span role="group" aria-label="Text size" class="size-group">
        <button class="btn small secondary" id="size-down" type="button" aria-label="Smaller text">A−</button>
        <span id="size-label" class="meta">100%</span>
        <button class="btn small secondary" id="size-up" type="button" aria-label="Larger text">A+</button>
      </span>
      <button class="btn small secondary" id="copy-btn" type="button">Copy</button>
      <button class="btn small" id="print-btn" type="button">Print</button>
      <span id="copy-status" class="visually-hidden" role="status"></span>
    </div>
  </div>
</div>
<div class="wrap" id="office-root">
  <div class="prose-center office">
    <div class="office-tabs" id="office-top" role="tablist" aria-label="Office">
      <button type="button" role="tab" id="tab-morning" aria-controls="panel-morning" aria-selected="true">Morning Prayer</button>
      <button type="button" role="tab" id="tab-evening" aria-controls="panel-evening" aria-selected="false" tabindex="-1">Evening Prayer</button>
    </div>
    <p class="notice sunday-note" data-sunday-note hidden>Today is the Lord’s Day. The Office takes its Sunday form, and households may also use the <a href="${href('family-catechesis/the-lords-day/first-day/')}">Lord’s Day catechesis session</a>. Read more about <a href="${href('lords-day/')}">the Lord’s Day</a>.</p>
    ${renderOffice('morning')}
    ${renderOffice('evening')}
    <section class="part" id="about-plan" aria-labelledby="h-plan">
      <div class="part-head"><h2 id="h-plan">How the readings are appointed</h2></div>
      <p><strong>Psalms.</strong> The Book of Common Prayer (1662) divides the 150 psalms over thirty days, morning and evening, so that the whole psalter is read every month. Waterside follows that table exactly.</p>
      <p><strong>Lessons.</strong> One chapter of the Old Testament at Morning Prayer and one of the New Testament at Evening Prayer, read in order from Genesis and Matthew, beginning 1 January 2026. The Old Testament (without the Psalms) takes about two years and two months; the New Testament about eight and a half months. This is a Waterside plan, modelled on the Reformed practice of reading Scripture continuously, book by book. It is <em>not</em> the 1662 calendar of lessons, which appoints readings by date and includes the Apocrypha. If you miss a day, read on from the day’s chapter; nothing is lost by skipping ahead or catching up.</p>
      <p><strong>The Church year.</strong> Seasonal collects and readings for Advent, Christmas, Lent, and Easter are not yet included.</p>
      ${psalterTable()}
    </section>
    <section class="part">
      <p class="copyright-line" id="esv-notice">${esc(off.ESV_NOTICE)}</p>
      <p class="copyright-line">Prayer Book texts (1662): public domain outside the United Kingdom; within the UK the Book of Common Prayer is subject to Crown rights under letters patent. Canticles are the Prayer Book translations. Hymn texts are pre-1800 and in the public domain. See <a href="${href('copyright/')}">Copyright and Permissions</a>.</p>
      <p class="copyright-line">The Office complements, and does not replace, the worship, preaching, sacraments, fellowship, and pastoral care of the local church.</p>
    </section>
  </div>
  <script type="application/json" id="office-plan">${JSON.stringify(plan)}</script>
</div>`,
  });
}

// ── Family Catechesis ──
const unitDir = (u) => (u.id === 'lords-day' ? 'the-lords-day' : u.id);
const sessionPath = (u, s) => `family-catechesis/${unitDir(u)}/${s.slug}/`;

function renderSession(s) {
  const qs = s.questions.map((n) => `<div class="catechism-q">
    <p class="qnum">Question ${n}</p>
    <p class="question">${esc(cat.wsc[n][0])}</p>
    <p class="answer"><span class="a">A.</span>${esc(cat.wsc[n][1])}</p>
  </div>`).join('');
  const steps = [
    ['gather', 'Gather', `${src('historic', cat.gatherPrayer.source)}<p>${esc(cat.gatherPrayer.text)}</p>`],
    ['recite', 'Recite', `<p class="rubric">${esc(s.recite)}</p>`],
    ['learn', 'Today’s question', `${qs}<p class="rubric">The leader asks; everyone answers together. Repeat until the youngest can say part of it.</p>${src('historic', `${cat.WSC_SOURCE}. Older spelling retained`)}`],
    ['read', 'Read', s.reading.map((r) => `${src('scripture', r.ref)}${verse(r)}`).join('') + `<p class="meta"><a class="ext" href="${esvLink(s.reading[0].ref)}" rel="noopener">Read ${esc(s.reading[0].ref)} in context at esv.org</a></p>`],
    ['explain', 'Explain', `<div class="leader-note"><p class="step-label">For the leader · Waterside Press note</p><p>${esc(s.explain)}</p></div>`],
    ['discuss', 'Discuss', `<p class="rubric">Everyone answers, adults included. Start with the youngest.</p><dl class="ages">
      <dt>Young children</dt><dd>${esc(s.discuss.young)}</dd>
      <dt>Older children</dt><dd>${esc(s.discuss.older)}</dd>
      <dt>Teenagers</dt><dd>${esc(s.discuss.teens)}</dd>
      <dt>Adults</dt><dd>${esc(s.discuss.adults)}</dd></dl>`],
    ['remember', 'Remember', `<p class="remember">${esc(s.remember)}</p>`],
    ['practice', 'Practice', `${src('editorial', 'For the week ahead')}<p>${esc(s.practice)}</p>`],
    ['pray', 'Pray', `${s.prayerSource ? src('historic', s.prayerSource) : src('original', 'Written for this session')}<p>${esc(s.prayer)}</p>`],
  ];
  return steps.map(([k, t, inner], i) => `<section class="step" id="step-${k}" aria-labelledby="s-${k}"><div class="part-head"><span class="part-num" aria-hidden="true">${i + 1}</span><h2 id="s-${k}">${t}</h2></div>${inner}</section>`).join('');
}

function buildCatechesis() {
  layout({
    path: 'family-catechesis/', current: 'family-catechesis/', title: 'Family Catechesis',
    description: 'Short, participatory sessions in which parents and children learn the Christian faith together from Scripture, the creeds, and the catechisms.',
    body: (href) => `
<div class="wrap page-head">
  <p class="kicker">Learn the Faith Together</p>
  <h1>Family Catechesis</h1>
  <p class="lede">Sessions in which the whole household learns the faith together: reciting, reading, asking questions, and putting what is learned into practice.</p>
</div>
<div class="wrap grid main-aside">
  <div>
    ${cat.units.map((u) => `<section class="unit" aria-labelledby="u-${u.id}">
      <p class="kicker">${u.sunday ? 'For the Lord’s Day' : `Unit · ${u.sessions.length} sessions`}</p>
      <h2 id="u-${u.id}">${esc(u.title)}</h2>
      <p class="prose">${esc(u.summary)}</p>
      <ol class="session-list">${u.sessions.map((s) => `<li><div><a href="${href(sessionPath(u, s))}">${esc(s.title)}</a><span class="meta">Westminster Shorter Catechism ${s.questions.map((n) => 'Q. ' + n).join(', ')} · ${esc(s.reading.map((r) => r.ref).join('; '))}</span></div></li>`).join('')}</ol>
    </section>`).join('')}
  </div>
  <aside>
    <h2 style="margin-top:0;font-size:1.6rem">How a session works</h2>
    <p>Catechesis is different from the <a href="${href('daily-office/')}">Daily Office</a>. The Office is prayer; catechesis is instruction, and it is meant to be a conversation. Parents lead, children respond, and adults answer the questions too.</p>
    <ol class="meta" style="font-size:.95rem;padding-left:1.2rem">
      <li><strong>Gather</strong> with a short prayer.</li>
      <li><strong>Recite</strong> what you learned last time.</li>
      <li><strong>Learn</strong> the new question and answer.</li>
      <li><strong>Read</strong> the Scripture behind it.</li>
      <li><strong>Explain</strong> it briefly, from the leader’s note.</li>
      <li><strong>Discuss</strong>, with questions for every age.</li>
      <li><strong>Remember</strong> one phrase.</li>
      <li><strong>Practice</strong> something in the week ahead.</li>
      <li><strong>Pray</strong> to close.</li>
    </ol>
    <p class="meta">Fifteen to twenty-five minutes, once or twice a week. Skip a step when it doesn’t serve your household that day, but keep everyone on the same question.</p>
    <h3>Sources</h3>
    <p class="meta">These units use the Westminster Shorter Catechism, the most widely used catechism of the English-speaking Reformed churches. Where other traditions teach differently, the leader’s notes say so.</p>
    <h3>In preparation</h3>
    <ul class="soon-list">${['The Apostles’ Creed', 'The Ten Commandments', 'The Lord’s Prayer', 'Heidelberg alongside Westminster', 'Readings from the Church Fathers'].map((x) => `<li><span>${esc(x)}</span><span class="tag soon">Coming soon</span></li>`).join('')}</ul>
  </aside>
</div>`,
  });

  for (const u of cat.units) {
    u.sessions.forEach((s, i) => {
      const next = u.sessions[i + 1];
      const prev = u.sessions[i - 1];
      layout({
        path: sessionPath(u, s), current: 'family-catechesis/', title: `${s.title} — Family Catechesis`,
        description: `A family catechesis session on Westminster Shorter Catechism ${s.questions.map((n) => 'Q. ' + n).join(' and ')}: ${s.title.toLowerCase()}.`,
        body: (href) => `
<div class="wrap page-head">
  <p class="kicker"><a href="${href('family-catechesis/')}">Family Catechesis</a> · ${esc(u.title)}</p>
  <h1>${esc(s.title)}</h1>
  ${u.sessions.length > 1 ? `<p class="session-progress">Session ${i + 1} of ${u.sessions.length}</p>` : ''}
</div>
<div class="wrap"><div class="prose-center office session">
  ${renderSession(s)}
  <nav class="session-nav no-print" aria-label="Previous and next session">
    ${prev ? `<a class="btn secondary" href="${href(sessionPath(u, prev))}">‹ ${esc(prev.title)}</a>` : '<span></span>'}
    ${next ? `<a class="btn" href="${href(sessionPath(u, next))}">${esc(next.title)} ›</a>` : `<a class="btn secondary" href="${href('family-catechesis/')}">All sessions</a>`}
  </nav>
  ${u.sessions.length > 1 ? `<nav class="unit-contents no-print" aria-label="${esc(u.title)}: sessions"><p class="step-label">${esc(u.title)}</p><ol>${u.sessions.map((x) => `<li>${x === s ? `<span aria-current="page">${esc(x.title)}</span>` : `<a href="${href(sessionPath(u, x))}">${esc(x.title)}</a>`}</li>`).join('')}</ol></nav>` : ''}
  <p class="copyright-line">${esc(off.ESV_NOTICE)}</p>
</div></div>`,
      });
    });
  }
}

// ── The Lord's Day ──
function buildLordsDay() {
  layout({
    path: 'lords-day/', title: 'The Lord’s Day',
    description: 'Why Christians worship and rest on Sunday, the first day of the week: resurrection, new creation, and rest in Christ, with the main historic views of Sabbath and Sunday.',
    body: (href) => `
<div class="wrap page-head"><p class="kicker">Sunday</p><h1>The Lord’s Day</h1>
<p class="lede">Sunday is the weekly feast of Christ’s resurrection, the first day of the new creation, and a day of worship and rest for the people of God.</p></div>
<div class="wrap prose-center">
  <h2 style="margin-top:0">The first day of the week</h2>
  <p>All four Gospels place the resurrection on “the first day of the week.” The risen Christ came to his disciples on the evening of that day (John 20:19). Afterwards the church gathered on it to break bread (Acts 20:7) and set aside gifts (1 Corinthians 16:2), and John names it “the Lord’s day” (Revelation 1:10). Early Christian writers confirm the practice. The <em>Didache</em> tells believers to gather on the Lord’s day, break bread, and give thanks; Justin Martyr, writing around 155, describes Christians meeting on Sunday for the reading of the prophets and apostles, preaching, prayer, and the Lord’s Supper (<em>First Apology</em> 67). Ignatius of Antioch speaks of believers who no longer keep the Sabbath but live according to the Lord’s day (<em>To the Magnesians</em> 9).</p>
  <h2>Resurrection, new creation, and rest</h2>
  <p>The seventh-day Sabbath looked back to creation finished (Genesis 2:2–3) and to Israel’s deliverance from Egypt (Deuteronomy 5:15). The first day looks to new creation begun: Christ raised as the firstfruits of those who will rise (1 Corinthians 15:20). Hebrews speaks of “a Sabbath rest for the people of God” that remains, entered by faith (Hebrews 4:9–10). Christians keep Sunday as a weekly sign of that rest: we stop our work because Christ has finished his.</p>
  <h2>How Christians have understood Sabbath and Sunday</h2>
  <p>Orthodox Christians agree that Sunday is the chief day of Christian worship. They differ on how it relates to the fourth commandment.</p>
  <dl class="record wide-record">
    <dt>Westminster Standards (1640s)</dt><dd>The moral duty of the Sabbath continues, and since the resurrection it falls on the first day: “the Christian sabbath.” The whole day is to be spent in worship and works of necessity and mercy (Westminster Confession 21.7–8; Shorter Catechism Q. 57–62). This has been the teaching of Scottish, English, and American Presbyterians and Puritans.</dd>
    <dt>Heidelberg Catechism (1563)</dt><dd>Question 103 applies the fourth commandment to faithful attendance at public worship on the day of rest, and to resting from evil works every day so as to begin the eternal Sabbath now. Continental Reformed churches have generally kept Sunday as a day of worship and rest with less detailed rules than the Westminster tradition.</dd>
    <dt>Lutheran</dt><dd>The Augsburg Confession (Article 28) teaches that the church appointed Sunday for public worship and that Christians are not bound to the Old Testament Sabbath as a ceremony. Luther’s Small Catechism explains the commandment as holding preaching and God’s word sacred and gladly hearing and learning it.</dd>
    <dt>Roman Catholic and Eastern Orthodox</dt><dd>Sunday is the Lord’s Day and the day of the Eucharist. Catholic teaching treats attendance at Mass as an obligation and asks the faithful to refrain from unnecessary work; Orthodox churches keep Sunday as the weekly Pascha (Easter).</dd>
  </dl>
  <h2>Where Waterside Press stands</h2>
  <p>Waterside Press writes from the Reformed tradition and holds that the Lord’s Day is a gift to be received with joy: the day God’s people gather for the Word, the sacraments, and prayer, and rest from their ordinary labour. We present the Westminster view in our catechesis because those are the catechism’s words. We do not treat Christians who keep the day differently as unfaithful.</p>
  <h2>Keeping the day at home</h2>
  <ul>
    <li><strong>Prepare on Saturday.</strong> Settle what work you can, lay out clothes, and go to bed in time. The <a href="${href('family-catechesis/the-lords-day/first-day/')}">Lord’s Day catechesis session</a> fits Saturday evening well.</li>
    <li><strong>Gather with the church.</strong> Household prayer prepares for public worship; it does not replace it. The sacraments are received in the congregation, under its ministers.</li>
    <li><strong>Pray the Office in its Sunday form.</strong> The <a href="${href('daily-office/')}">Daily Office</a> uses a resurrection sentence, the Te Deum, and a collect for the Lord’s Day.</li>
    <li><strong>Remember the sermon.</strong> At the evening meal, ask each person for one thing they heard.</li>
    <li><strong>Rest and do good.</strong> Visits, hospitality, walks, and works of mercy suit the day.</li>
  </ul>
  <p class="meta">This page summarizes historic documents in Waterside’s own words. Scripture references are to the ESV; read the passages at esv.org.</p>
</div>`,
  });
}

// ── Library ──
const catName = Object.fromEntries(lib.categories);
const hasPdf = (w) => !!(w.pdf && w.pdf.status === 'link-checked');
const isExcerpt = (w) => /Excerpt/.test(w.type);
const onlineOf = (w) => w.online || [];
const modernOf = (w) => w.modern || [];
const hasScan = (w) => onlineOf(w).some((o) => o.kind === 'scan');
const hasText = (w) => onlineOf(w).some((o) => o.kind !== 'scan');
const linkLabel = (o, fallback) => o.label ? `${fallback} · ${o.label}` : fallback;
function formatsLine(w) {
  const f = [];
  if (hasPdf(w)) f.push(`<b>Full-text PDF</b> (external, ${esc(w.pdf.host)})`);
  if (w.transcription) f.push(isExcerpt(w) ? '<b>Read online</b> (excerpt)' : '<b>Read online</b> (transcription)');
  if (hasText(w)) f.push('<b>Read free online</b> (external)');
  if (hasScan(w)) f.push('<b>Page scans</b> (external)');
  if (modernOf(w).length) f.push('<b>Modern English</b> (Updated Works)');
  f.push('Modern introduction');
  return `<p class="formats">${f.join(' · ')}</p>`;
}
function textActions(w, href, detail = false) {
  const a = [];
  if (!detail) a.push(`<li><a class="arrow" href="${href('library/' + w.id + '/')}">Read introduction<span class="visually-hidden">: ${esc(w.title)}</span></a></li>`);
  if (w.transcription) a.push(`<li><a href="${href('library/' + w.id + '/')}#text">Read online<span class="visually-hidden">: ${esc(w.title)}</span></a></li>`);
  if (hasPdf(w)) a.push(`<li><a class="ext" href="${attr(w.pdf.url)}" rel="noopener">Download PDF<span class="visually-hidden">: ${esc(w.title)}, hosted at ${esc(w.pdf.host)}</span></a></li>`);
  for (const o of onlineOf(w)) a.push(`<li><a class="ext" href="${attr(o.url)}" rel="noopener">${esc(linkLabel(o, o.kind === 'scan' ? 'Page scans' : 'Read free online'))}<span class="meta">&nbsp;· ${esc(o.host)}</span><span class="visually-hidden">: ${esc(w.title)}</span></a></li>`);
  for (const m of modernOf(w)) a.push(`<li><a class="ext modern" href="${attr(m.url)}" rel="noopener">${esc(linkLabel(m, 'Modern English'))}<span class="meta">&nbsp;· updatedworks.com</span><span class="visually-hidden">: ${esc(w.title)}</span></a></li>`);
  if (w.sourcePage && !onlineOf(w).some((o) => o.url === w.sourcePage)) a.push(`<li><a class="ext" href="${attr(w.sourcePage)}" rel="noopener">View source<span class="visually-hidden">: ${esc(w.repository)}</span></a></li>`);
  return `<ul class="text-actions">${a.join('')}</ul>`;
}
function catalogRow(w, href) {
  const search = [w.title, w.subtitle, w.author, w.summary, w.tradition, w.period, ...w.tags, ...w.categories.map((c) => catName[c])].join(' ');
  return `<li class="book-item catalog-row" data-search="${attr(search)}" data-cats="${w.categories.join(' ')}" data-author="${attr(w.authorKey)}" data-period="${attr(w.periodKey)}" data-pdf="${hasPdf(w) ? 'yes' : 'no'}" data-online="${onlineOf(w).length || w.transcription ? 'yes' : 'no'}" data-modern="${modernOf(w).length ? 'yes' : 'no'}" data-trans="${w.transcription ? 'yes' : 'no'}">
  <p class="catalog-date"><strong>${esc(w.original.split(';')[0].replace(/^Developed from.*/, 'Ancient'))}</strong>${esc(w.periodKey)}</p>
  <div>
    <h3><a href="${href('library/' + w.id + '/')}">${esc(w.title)}</a></h3>
    <p class="author">${esc(w.author)} · <span class="meta">${esc(w.tradition)}</span></p>
    <p class="summary">${esc(w.summary)}</p>
    ${formatsLine(w)}
    ${textActions(w, href)}
  </div>
</li>`;
}

function transcription(w) {
  if (w.transcription === 'creed') return off.texts.creed.text.map((t) => `<p>${esc(t)}</p>`).join('') + `<p class="meta">${esc(off.texts.creed.note)}</p>`;
  if (w.transcription === 'wsc') {
    const nums = Object.keys(cat.wsc).map(Number).sort((a, b) => a - b);
    return `<dl class="qa">${nums.map((n) => `<dt>Q. ${n}. ${esc(cat.wsc[n][0])}</dt><dd>A. ${esc(cat.wsc[n][1])}</dd>`).join('')}</dl><p class="meta">Selected questions only, as used in Family Catechesis. The full catechism has 107 questions; a complete, collated transcription is planned.</p>`;
  }
  return '';
}

const FORMAT_LEGEND = `<dl class="format-legend">
  <dt>Full-text PDF</dt><dd>A file of the whole stated edition, hosted by the repository named on the record. We link to it and do not re-host it. We check the link and title page; each record says whether every page has been checked.</dd>
  <dt>Read online</dt><dd>Text transcribed by Waterside Press from a stated edition and shown on this site. Marked <em>excerpt</em> when it is only part of a work.</dd>
  <dt>Read free online</dt><dd>The text on another free library's site, such as CCEL, Project Gutenberg, or the OPC. We checked that each link opens the stated work; the record names the edition the host presents.</dd>
  <dt>Page scans</dt><dd>Page images of a historical printing, hosted by the Internet Archive, the Library of Congress, or another library. The record notes any missing pages we know of.</dd>
  <dt>Modern English</dt><dd>An updated-language edition from <a class="ext" href="https://updatedworks.com/" rel="noopener">Updated Works</a>, a recommended outside resource. Free to read with a free account. Their editions are their own work.</dd>
  <dt>Modern introduction</dt><dd>Every record has one, written by Waterside Press. It is commentary, not the historical text.</dd>
</dl>`;

function buildLibrary() {
  const uniq = (k) => [...new Set(lib.works.map((w) => w[k]))].sort();
  const usedCats = lib.categories.filter(([k]) => lib.works.some((w) => w.categories.includes(k)));
  const featured = lib.works.find((w) => w.id === 'pilgrims-progress');
  layout({
    path: 'library/', current: 'library/', title: 'Library',
    description: 'Historic Christian texts with introductions, verified links to full-text PDFs, and short transcriptions — catechisms, creeds, and devotional classics.',
    scripts: ['library.js'],
    body: (href) => `
<div class="wrap page-head">
  <p class="kicker">The Library</p>
  <h1>Library</h1>
  <p class="lede">Scripture, the catechisms, the Prayer Book, the psalters, and the Puritan divines, each linked to a place you can read it free online. Every record states the edition linked, what we have checked, and its rights status. <a href="${href('editorial-principles/')}">How we check sources</a>.</p>
</div>
<div class="wrap grid main-aside">
  <div>
    <form id="lib-form" class="filters" role="search" aria-label="Search and filter the library">
      <div class="field"><label for="lib-q">Search titles, authors, descriptions, and tags</label><input id="lib-q" type="search" name="q" autocomplete="off"></div>
      <div class="field"><label for="lib-cat">Category</label><select id="lib-cat"><option value="">All categories</option>${usedCats.map(([k, v]) => `<option value="${k}">${esc(v)}</option>`).join('')}</select></div>
      <div class="field"><label for="lib-author">Author</label><select id="lib-author"><option value="">All authors</option>${uniq('authorKey').map((a) => `<option>${esc(a)}</option>`).join('')}</select></div>
      <div class="field"><label for="lib-period">Period</label><select id="lib-period"><option value="">All periods</option>${uniq('periodKey').map((a) => `<option>${esc(a)}</option>`).join('')}</select></div>
      <div class="checks">
        <label><input type="checkbox" id="lib-online"> Read free online</label>
        <label><input type="checkbox" id="lib-modern"> Modern English edition</label>
        <label><input type="checkbox" id="lib-pdf"> Full-text PDF available</label>
        <label><input type="checkbox" id="lib-trans"> Can be read online here</label>
        <button type="button" class="btn small secondary" id="lib-reset">Clear</button>
      </div>
    </form>
    <p class="results-count" id="results-count" role="status" aria-live="polite">${lib.works.length} works.</p>
    <h2 class="visually-hidden">Catalogue</h2>
    <ol class="catalog" id="book-list">${lib.works.map((w) => catalogRow(w, href)).join('')}</ol>
    <p id="no-results" class="notice" hidden>No published work matches that search. Try fewer words, or clear the filters. Many classics are still being checked and are not yet listed.</p>
  </div>
  <aside>
    <div class="feature-work">
      <p class="kicker">From the collection</p>
      <h3><a href="${href('library/' + featured.id + '/')}">${esc(featured.title)}</a></h3>
      <p class="meta">${esc(featured.author)} · ${esc(featured.original)}</p>
      <p style="font-size:1rem">${esc(featured.family)}</p>
    </div>
    <h2 style="font-size:1.5rem">Formats</h2>
    ${FORMAT_LEGEND}
    <h2 style="font-size:1.5rem">Being prepared</h2>
    <p class="meta">Listed once an edition and its rights status have been checked.</p>
    <ul class="soon-list">${['Augustine, Confessions', 'Athanasius, On the Incarnation', 'Thomas Boston, Human Nature in Its Fourfold State', 'The complete Westminster Shorter Catechism, transcribed here'].map((t) => `<li><span>${esc(t)}</span><span class="tag soon">Coming soon</span></li>`).join('')}</ul>
  </aside>
</div>`,
  });

  for (const w of lib.works) {
    const rightsText = { 'pd-us': 'Public domain in the United States (published before 1931)', 'pd-historic': 'Public domain historic text; Waterside Press transcription', 'pd-text': 'Public domain work; online edition presented by its host', 'in-copyright': 'In copyright; free to read online from the rights holder' }[w.rights];
    const related = lib.works.filter((x) => x !== w && x.categories.some((c) => w.categories.includes(c)));
    const rowsFor = (href) => [
      ['Author', esc(w.author)],
      ['First published', esc(w.original)],
      ['Edition represented', esc(w.edition)],
      w.publisher && ['Publisher / printer', esc(w.publisher)],
      w.translator && ['Translator', esc(w.translator)],
      w.editor && ['Editor', esc(w.editor)],
      ['Tradition', esc(w.tradition)],
      ['Language', esc(w.language)],
      ['Resource type', esc(w.type)],
      w.repository && ['Source', `<a class="ext" href="${attr(w.sourcePage)}" rel="noopener">${esc(w.repository)}</a>`],
      onlineOf(w).length && ['Read online', onlineOf(w).map((o) => `<a class="ext" href="${attr(o.url)}" rel="noopener">${esc(linkLabel(o, o.host))}</a>`).join('<br>') + '<br><span class="meta">Link opened and work confirmed 2026-10-11. Edition collation and page-by-page completeness not checked unless stated above.</span>'],
      modernOf(w).length && ['Modern English', modernOf(w).map((m) => `<a class="ext" href="${attr(m.url)}" rel="noopener">${esc(linkLabel(m, 'Updated Works'))}</a>`).join('<br>') + '<br><span class="meta">Free to read with a free Updated Works account.</span>'],
      hasPdf(w) && ['PDF', `<a class="ext" href="${attr(w.pdf.url)}" rel="noopener">${esc(w.pdf.url.replace(/^https:\/\//, ''))}</a><br><span class="meta">Link and title page checked ${esc(w.pdf.checked)}. Completeness of every page not yet checked. File size not recorded.</span>`],
      ['Rights', `${esc(rightsText)}<br><span class="meta">${esc(w.rightsNote)}</span>`],
      ['Audience', esc(w.audience)],
      ['Categories', w.categories.map((c) => `<a href="${href('library/')}?category=${c}">${esc(catName[c])}</a>`).join(', ')],
    ].filter(Boolean);
    layout({
      path: `library/${w.id}/`, current: 'library/', title: w.title,
      description: `${w.title} by ${w.author}: ${w.summary}`.slice(0, 300),
      body: (href) => `
<div class="wrap page-head">
  <p class="kicker"><a href="${href('library/')}">Library</a> · ${esc(w.period)}</p>
  <h1 class="work-title">${esc(w.title)}</h1>
  ${w.subtitle ? `<p class="lede" style="margin-bottom:.4rem">${esc(w.subtitle)}</p>` : ''}
  <p class="meta" style="font-size:1rem">${esc(w.author)}</p>
  ${formatsLine(w)}
  ${textActions(w, href, true)}
</div>
<div class="wrap grid main-aside">
  <div class="prose">
    <h2 style="margin-top:0">Introduction</h2>
    <p class="source">${kind('editorial')}Modern introduction by Waterside Press. Commentary, not the historical text</p>
    <p>${esc(w.summary)}</p>
    ${w.context.map((t) => `<p>${esc(t)}</p>`).join('')}
    ${w.family ? `<h3>Reading it at home</h3>
    <p>${esc(w.family)}</p>` : ''}
    ${w.transcription ? `<h2 id="text">Text</h2><p class="source">${kind('historic')}${esc(w.edition)}</p>${transcription(w)}` : ''}
    ${related.length ? `<h2>Related works</h2><ul>${related.map((x) => `<li><a class="work-title" href="${href('library/' + x.id + '/')}">${esc(x.title)}</a> <span class="meta">${esc(x.author)}</span></li>`).join('')}</ul>` : ''}
  </div>
  <aside>
    <section class="record-card" aria-labelledby="rec-h">
      <h2 id="rec-h">Catalogue record</h2>
      <dl class="record">${rowsFor(href).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
    </section>
  </aside>
</div>`,
    });
  }
}

// ── Plain pages from content/pages.mjs ──
function buildPages() {
  for (const pg of pages) {
    layout({
      path: pg.path, current: pg.nav ? pg.path : undefined, title: pg.title, description: pg.description,
      body: (href) => pg.body({ href, esc, ornament, heroArt, staffRule, emblem, off, cat, hymns, lib, hasPdf, catalogRow: (w) => catalogRow(w, href) }),
    });
  }
}

// ── Run ──
rmSync(OUT, { recursive: true, force: true });
mkdirSync(join(OUT, 'assets'), { recursive: true });
for (const f of readdirSync(join(ROOT, 'src/assets'))) copyFileSync(join(ROOT, 'src/assets', f), join(OUT, 'assets', f));
writeFileSync(join(OUT, 'assets/emblem.svg'), emblem().replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ').replace(/currentColor/g, '#233d32'));
buildPages();
buildOffice();
buildCatechesis();
buildLordsDay();
buildLibrary();
// 404
layout({
  path: '404.html', absolute: true, title: 'Page not found', description: 'This page could not be found.',
  body: (href) => `<div class="wrap page-head"><h1>Page not found</h1><p class="lede">That address does not match a page on Waterside Press. It may have moved, or the link may be mistyped.</p><div class="actions"><a class="btn" href="${href('')}">Return home</a><a class="btn secondary" href="${href('library/')}">Search the library</a></div></div>`,
});
// robots + sitemap
const pagesForMap = built.filter((b) => !b.path.endsWith('.html'));
writeFileSync(join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n${SITE_URL ? `Sitemap: ${SITE_URL}/sitemap.xml\n` : ''}`);
if (SITE_URL) {
  writeFileSync(join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pagesForMap.map((b) => `  <url><loc>${SITE_URL}/${b.path}</loc></url>`).join('\n')}\n</urlset>\n`);
} else {
  console.warn('SITE_URL not set: canonical URLs and sitemap.xml were skipped. Set SITE_URL for production builds.');
}
console.log(`Built ${built.length} pages into dist/`);

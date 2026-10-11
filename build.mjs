#!/usr/bin/env node
// Waterside Press — static site generator. No dependencies; Node 18+.
// Usage:  node build.mjs                    (relative links; works from any host or folder)
//         SITE_URL=https://example.org node build.mjs   (adds canonical URLs, og:url, sitemap)
import { mkdirSync, writeFileSync, copyFileSync, rmSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as lit from './content/liturgy.mjs';
import * as lib from './content/library.mjs';
import { pages } from './content/pages.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, 'dist');
const SITE_URL = (process.env.SITE_URL || '').replace(/\/$/, '');
const SITE = 'Waterside Press';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const attr = esc;

// ── Emblem: a tree planted by streams of water (Psalm 1:3) ──
export const emblem = (title = '') => `<svg viewBox="0 0 64 64" role="${title ? 'img' : 'presentation'}" ${title ? `aria-label="${attr(title)}"` : 'aria-hidden="true"'} fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<circle cx="32" cy="32" r="29.5" stroke-width="1.6"/>
<path d="M32 46V27M32 36l-6-6M32 32l6-6M32 40l5-4"/>
<path d="M32 9c-9 0-15 6.5-15 13.5 0 6 4.6 10 10 10.5M32 9c9 0 15 6.5 15 13.5 0 6-4.6 10-10 10.5" />
<path d="M24 46c2.5-1.2 5-1.8 8-1.8s5.5.6 8 1.8"/>
<path d="M12 51c3.3-2 6.7-2 10 0s6.7 2 10 0 6.7-2 10 0 6.7 2 10 0" stroke-width="1.6"/>
<path d="M17 56.5c2.5-1.5 5-1.5 7.5 0s5 1.5 7.5 0 5-1.5 7.5 0 5 1.5 7.5 0" stroke-width="1.4"/>
</svg>`;

const heroArt = `<svg viewBox="0 0 320 300" role="img" aria-label="Line drawing of a tree beside a stream" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
<g stroke-width="1.6">
<path d="M160 232V130M160 172l-34-30M160 158l30-34M160 196l26-20M140 154l-20 2M178 132l16-6"/>
<path d="M160 52c-50 0-80 34-80 70 0 30 22 52 52 54M160 52c50 0 80 34 80 70 0 30-22 52-52 54"/>
<path d="M104 96c10-14 26-22 40-24M216 96c-10-14-26-22-40-24M96 132c4 10 12 18 22 22M224 132c-4 10-12 18-22 22" stroke-width="1.1"/>
<circle cx="122" cy="118" r="4"/><circle cx="198" cy="112" r="4"/><circle cx="176" cy="150" r="4"/><circle cx="140" cy="88" r="4"/>
<path d="M132 232c8-6 18-9 28-9s20 3 28 9M146 232l-10 10M174 232l10 10M160 232v12"/>
</g>
<g stroke-width="1.3">
<path d="M30 258c18-10 36-10 54 0s36 10 54 0 36-10 54 0 36 10 54 0 36-10 54 0"/>
<path d="M50 274c15-8 30-8 45 0s30 8 45 0 30-8 45 0 30 8 45 0 30-8 45 0"/>
<path d="M80 289c12-6 24-6 36 0s24 6 36 0 24-6 36 0 24 6 36 0"/>
</g></svg>`;

const ornament = `<div class="rule-orn" aria-hidden="true">${emblem()}</div>`;

const NAV = [
  ['', 'Home'], ['daily-liturgy/', 'Daily Liturgy'], ['library/', 'Library'], ['family-worship/', 'Family Worship'],
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
<meta name="theme-color" content="#24402f">
<link rel="icon" href="${p}assets/emblem.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Source+Sans+3:wght@400;600&display=swap">
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
  <div class="wrap footer-grid">
    <div>
      <p><a class="brand" href="${href('')}" style="display:inline-flex">${emblem()}<span class="brand-name">Waterside Press</span></a></p>
      <p class="motto">Recover the inheritance. Preserve its integrity. Make it usable at home.</p>
      <p class="meta">“He is like a tree planted by streams of water that yields its fruit in its season.” — Psalm 1:3 (ESV)</p>
    </div>
    <nav aria-label="Publication">
      <ul>
        <li><a href="${href('about/')}">About</a></li>
        <li><a href="${href('editorial-principles/')}">Editorial Principles</a></li>
        <li><a href="${href('copyright/')}">Copyright and Permissions</a></li>
        <li><a href="${href('letter-to-the-head-of-the-household/')}">Letter to the Head of the Household (draft)</a></li>
      </ul>
    </nav>
    <nav aria-label="Site information">
      <ul>
        <li><a href="${href('privacy/')}">Privacy</a></li>
        <li><a href="${href('accessibility/')}">Accessibility</a></li>
        <li><a href="${href('copyright/')}#corrections">Sources and corrections</a></li>
      </ul>
      <p class="meta" style="margin-top:1rem">Scripture quotations: ESV®, © 2001 Crossway. Used by permission.</p>
    </nav>
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

// ── Liturgy rendering ──
const kindLabel = { scripture: 'Scripture · ESV', historic: 'Historic text', original: 'Waterside Press original', editorial: 'Editorial note' };
const kind = (k) => `<span class="kind">${kindLabel[k]}</span>`;
const note = (summary, html, extra = '') => html ? `<details class="note ${extra}"><summary>${summary}</summary><p>${html}</p></details>` : '';
const part = (n, title, inner, extra = '') => `<section class="part ${extra}" aria-labelledby="h-${n.id}"><div class="part-head"><span class="part-num" aria-hidden="true">${n.i}</span><h3 id="h-${n.id}">${title}</h3></div>${inner}</section>`;

function renderDay(d, i) {
  let step = 0;
  const N = (s) => ({ id: `${d.slug}-${s}`, i: ++step });
  const c = lit.common;
  const versicles = c.versicles.lines.map(([who, line]) => `<p class="versicle${who === 'All' ? ' all' : ''}"><b>${who}</b> ${esc(line)}</p>`).join('');
  const song = d.song;
  const stanzas = song.stanzas.map((s, k) => `<p class="stanza${k > 0 ? ' full-only' : ''}">${esc(s)}</p>`).join('');
  const cat = d.catechism;
  return `<article class="day" id="${d.slug}" data-name="${d.name}" aria-labelledby="t-${d.slug}">
  <header>
    <p class="kicker">${d.name}</p>
    <h2 id="t-${d.slug}" style="margin-top:0">${esc(d.theme)}</h2>
    <p class="full-only">${esc(d.intro)}</p>
  </header>
  ${part(N('gather'), 'Gathering and invocation', `
    <p class="source">${kind('historic')}${esc(c.versicles.source)}</p>
    ${versicles}
    <p class="full-only">${esc(c.gloria.text)}</p>`)}
  ${part(N('reading'), `Scripture: ${esc(d.reading.ref)}`, `
    <p class="source">${kind('scripture')}${esc(d.reading.ref)} · <a class="no-print" href="https://www.esv.org/${d.reading.ref.replace(/[–]/g, '-').replace(/(\d)[a-z]\b/g, '$1').replace(/,\s*/g, ',').replace(/\s+/g, '+')}/">open at esv.org</a></p>
    <p class="scripture">${d.reading.text}</p>
    <div class="full-only">${note('About this passage', esc(d.reading.note))}</div>`)}
  ${d.creed ? part(N('creed'), "The Apostles' Creed", `
    <p class="source">${kind('historic')}${esc(lit.apostlesCreed.source)}</p>
    ${lit.apostlesCreed.text.map((t) => `<p>${esc(t)}</p>`).join('')}
    <div class="full-only">${note('Notes on the words', esc(lit.apostlesCreed.note))}</div>`) : ''}
  ${part(N('song'), `Song: ${esc(song.title)}`, `
    <p class="source">${kind('historic')}${esc(song.source)}<br><span class="full-only">Suggested tune: ${esc(song.tune)}</span></p>
    ${stanzas}
    <div class="full-only">${note('About this text', esc(song.note))}</div>`)}
  ${part(N('catechism'), `Catechism: Question ${cat.n}`, `
    <p class="source">${kind('historic')}Westminster Shorter Catechism (1647), Q. ${cat.n}</p>
    <div class="qa-block">
      <p class="q"><span class="label">Q.</span>${esc(cat.q)}</p>
      <p><span class="label">A.</span>${esc(cat.a)}</p>
    </div>
    <div class="full-only">${note('For parents', esc(cat.adult))}</div>
    <p class="for-children"><span class="kind">Editorial note</span><strong>Ask the children:</strong> ${esc(cat.child)}</p>`)}
  ${part(N('prayer'), 'Prayers', `
    <div class="full-only">
      <h4 style="margin:.2rem 0 .1rem">${esc(d.collect.title)}</h4>
      <p class="source">${kind('historic')}${esc(d.collect.source)}</p>
      <p>${esc(d.collect.text)}</p>
      ${d.collect.note ? note('About this prayer', esc(d.collect.note)) : ''}
    </div>
    <h4 style="margin:1.2rem 0 .1rem">A prayer with the children</h4>
    <p class="source">${kind('original')}Written for this observance; not a historic text</p>
    <p>${esc(d.childPrayer)}</p>
    <h4 style="margin:1.2rem 0 .1rem">${esc(c.lordsPrayer.title)}</h4>
    <p class="source">${kind('historic')}${esc(c.lordsPrayer.source)}</p>
    <p>${esc(c.lordsPrayer.text)}</p>`)}
  ${part(N('blessing'), 'Blessing', `
    <p class="source">${kind('scripture')}${esc(d.blessing.ref)}</p>
    <p class="scripture">${d.blessing.text}</p>
    <p class="meta full-only no-copy">A leader may say “The Lord bless us and keep us…”, changing “you” to “us”, when no minister is present. The words of Scripture are otherwise unaltered.</p>`)}
</article>`;
}

function buildLiturgy() {
  const tabs = lit.days.map((d, i) => `<li role="presentation"><button type="button" role="tab" id="tab-${d.slug}" aria-controls="${d.slug}" aria-selected="false" tabindex="-1">${d.name.slice(0, 3)}<span class="today-dot"></span><span class="visually-hidden"> ${d.name}</span></button></li>`).join('');
  layout({
    path: 'daily-liturgy/', current: 'daily-liturgy/', title: 'Daily Liturgy',
    description: 'A ten-to-fifteen-minute order of household worship for each day of the week: Scripture, psalm or hymn, catechism, prayer, and blessing.',
    scripts: ['liturgy.js'],
    body: (href) => `
<div class="wrap page-head">
  <p class="kicker">Household worship</p>
  <h1>Daily Liturgy</h1>
  <div class="prose">
    <p class="lede">A short order of household worship for each day of the week, drawn from Scripture, the Book of Common Prayer, the metrical psalms, and the Westminster Shorter Catechism.</p>
    <p>The full order takes about ten to fifteen minutes. <em>Simplified</em> mode keeps only what young children can follow in about five. No account is needed; nothing you do here is sent anywhere.</p>
    <p class="today-line" id="today-line" aria-live="polite"></p>
    <ul class="day-tabs" role="tablist" aria-label="Day of the week" hidden>${tabs}</ul>
  </div>
</div>
<div class="lit-bar no-print" hidden>
  <div class="wrap">
    <span id="showing" class="meta" aria-live="polite"></span><span class="spacer"></span>
    <button class="btn small secondary" id="simple-toggle" type="button" aria-pressed="false">Simplified</button>
    <span role="group" aria-label="Text size" style="display:inline-flex;gap:.25rem;align-items:center">
      <button class="btn small secondary" id="size-down" type="button" aria-label="Smaller text">A−</button>
      <span id="size-label" class="meta" style="min-width:2.8rem;text-align:center">100%</span>
      <button class="btn small secondary" id="size-up" type="button" aria-label="Larger text">A+</button>
    </span>
    <button class="btn small secondary" id="copy-btn" type="button">Copy</button>
    <button class="btn small" id="print-btn" type="button">Print</button>
    <span id="copy-status" class="visually-hidden" role="status"></span>
  </div>
</div>
<div class="wrap" id="liturgy">
  <div class="prose-center office" id="office">
    <noscript><p class="notice">JavaScript is off, so all seven days are shown in order. Find today’s day by its heading.</p></noscript>
    ${lit.days.map(renderDay).join(ornament)}
    <div class="part">
      <p class="copyright-line" id="esv-notice">${esc(lit.ESV_NOTICE)}</p>
      <p class="copyright-line">Book of Common Prayer (1662) texts: public domain outside the United Kingdom; within the UK the BCP is subject to Crown rights under letters patent. Metrical psalms and hymns are pre-1800 texts in the public domain; tune names are given for reference only. Catechism: ${esc(lit.catechismSource)} See <a href="${href('copyright/')}">Copyright and Permissions</a>.</p>
      <p class="copyright-line">Household worship complements, and does not replace, the worship, sacraments, preaching, and pastoral care of the local church.</p>
    </div>
  </div>
</div>`,
  });
}

// ── Library ──
const catName = Object.fromEntries(lib.categories);
const hasPdf = (w) => !!(w.pdf && w.pdf.status === 'link-checked');
function bookActions(w, href, detail = false) {
  const a = [];
  if (!detail) a.push(`<a class="btn small secondary" href="${href('library/' + w.id + '/')}">Read introduction<span class="visually-hidden">: ${esc(w.title)}</span></a>`);
  if (w.transcription) a.push(`<a class="btn small${detail ? '' : ' secondary'}" href="${href('library/' + w.id + '/')}#text">Read online<span class="visually-hidden">: ${esc(w.title)}</span></a>`);
  if (hasPdf(w)) a.push(`<a class="btn small" href="${attr(w.pdf.url)}" rel="noopener">Open PDF<span class="visually-hidden">: ${esc(w.title)}</span> <span aria-hidden="true">↗</span></a>`);
  if (w.sourcePage) a.push(`<a class="btn small secondary" href="${attr(w.sourcePage)}" rel="noopener">View source page<span class="visually-hidden"> at ${esc(w.repository)}</span> <span aria-hidden="true">↗</span></a>`);
  return `<div class="actions">${a.join('')}</div>`;
}
function bookCard(w, href) {
  const search = [w.title, w.subtitle, w.author, w.summary, w.tradition, w.period, ...w.tags, ...w.categories.map((c) => catName[c])].join(' ');
  return `<li class="book-item card book" data-search="${attr(search)}" data-cats="${w.categories.join(' ')}" data-author="${attr(w.authorKey)}" data-period="${attr(w.periodKey)}" data-pdf="${hasPdf(w) ? 'yes' : 'no'}" data-trans="${w.transcription ? 'yes' : 'no'}">
  <p class="kicker">${esc(w.period)}</p>
  <h3><a href="${href('library/' + w.id + '/')}">${esc(w.title)}</a></h3>
  <p class="author">${esc(w.author)}</p>
  <p>${esc(w.summary)}</p>
  <p>${hasPdf(w) ? '<span class="tag ok">Full-text PDF · external</span>' : ''}${w.transcription ? '<span class="tag ok">Read online</span>' : ''}${/Excerpt/.test(w.type) ? '<span class="tag">Excerpt</span>' : ''}<span class="tag">${esc(w.tradition)}</span></p>
  ${bookActions(w, href)}
</li>`;
}

function transcription(w) {
  if (w.transcription === 'creed') return lit.apostlesCreed.text.map((t) => `<p>${esc(t)}</p>`).join('') + `<p class="meta">${esc(lit.apostlesCreed.note)}</p>`;
  if (w.transcription === 'wsc') {
    const qs = [...lit.days.map((d) => d.catechism)].sort((a, b) => a.n - b.n);
    return `<dl class="qa">${qs.map((c) => `<dt>Q. ${c.n}. ${esc(c.q)}</dt><dd>A. ${esc(c.a)}</dd>`).join('')}</dl><p class="meta">Selected questions only. The full catechism has 107 questions; a complete, collated transcription is planned.</p>`;
  }
  return '';
}

function buildLibrary() {
  const uniq = (k) => [...new Set(lib.works.map((w) => w[k]))].sort();
  const usedCats = lib.categories.filter(([k]) => lib.works.some((w) => w.categories.includes(k)));
  layout({
    path: 'library/', current: 'library/', title: 'Library',
    description: 'Historic Christian texts with introductions, verified links to full-text PDFs, and short transcriptions — catechisms, creeds, and devotional classics.',
    scripts: ['library.js'],
    body: (href) => `
<div class="wrap page-head">
  <p class="kicker">The Library</p>
  <h1>Library</h1>
  <div class="prose">
    <p class="lede">A small, carefully checked collection. Each work has an introduction, its exact edition, and a plain statement of its rights status.</p>
    <p>PDFs marked <em>external</em> are hosted by the repository named on the record; Waterside Press links to them and does not re-host them. The library will grow only as fast as editions can be checked. <a href="${href('editorial-principles/')}">How we check sources.</a></p>
  </div>
</div>
<div class="wrap">
  <form id="lib-form" class="filters" role="search" aria-label="Search and filter the library">
    <div class="field"><label for="lib-q">Search titles, authors, descriptions, and tags</label><input id="lib-q" type="search" name="q" autocomplete="off"></div>
    <div class="field"><label for="lib-cat">Category</label><select id="lib-cat"><option value="">All categories</option>${usedCats.map(([k, v]) => `<option value="${k}">${esc(v)}</option>`).join('')}</select></div>
    <div class="field"><label for="lib-author">Author</label><select id="lib-author"><option value="">All authors</option>${uniq('authorKey').map((a) => `<option>${esc(a)}</option>`).join('')}</select></div>
    <div class="field"><label for="lib-period">Period</label><select id="lib-period"><option value="">All periods</option>${uniq('periodKey').map((a) => `<option>${esc(a)}</option>`).join('')}</select></div>
    <div class="checks">
      <label><input type="checkbox" id="lib-pdf"> Has a full-text PDF</label>
      <label><input type="checkbox" id="lib-trans"> Can be read online here</label>
      <button type="button" class="btn small secondary" id="lib-reset">Clear</button>
    </div>
  </form>
  <p class="results-count" id="results-count" role="status" aria-live="polite">${lib.works.length} works.</p>
  <ul class="grid two" id="book-list" style="list-style:none;padding:0;margin:0">${lib.works.map((w) => bookCard(w, href)).join('')}</ul>
  <p id="no-results" class="notice" hidden>No published work matches that search. Try fewer words, or clear the filters. Many classics are still being checked and are not yet listed — see the <a href="${href('editorial-principles/')}">editorial principles</a>.</p>
  <h2>Being prepared</h2>
  <p class="prose">These works are under review. They are not listed as available until an edition, a complete file, and its rights status have been checked.</p>
  <ul class="soon-list prose">${['Augustine, Confessions', 'Athanasius, On the Incarnation', 'Thomas à Kempis, The Imitation of Christ', 'The Heidelberg Catechism', "Luther's Small Catechism", 'The Book of Common Prayer (1662)', 'The Scottish Metrical Psalter (1650)', 'Lewis Bayly, The Practice of Piety'].map((t) => `<li><span>${esc(t)}</span><span class="tag soon">Coming soon</span></li>`).join('')}</ul>
</div>`,
  });

  for (const w of lib.works) {
    const rightsText = { 'pd-us': 'Public domain in the United States (published before 1931)', 'pd-historic': 'Public domain historic text; Waterside Press transcription' }[w.rights];
    const rowsFor = (href) => [
      ['Title', `${esc(w.title)}${w.subtitle ? `: ${esc(w.subtitle)}` : ''}`],
      ['Author', esc(w.author)],
      ['Original date', esc(w.original)],
      ['Tradition', esc(w.tradition)],
      ['Edition represented', esc(w.edition)],
      w.publisher && ['Publisher / printer', esc(w.publisher)],
      w.translator && ['Translator', esc(w.translator)],
      w.editor && ['Editor', esc(w.editor)],
      ['Language', esc(w.language)],
      ['Resource type', esc(w.type)],
      w.repository && ['Source repository', `<a href="${attr(w.sourcePage)}" rel="noopener">${esc(w.repository)}</a>`],
      hasPdf(w) && ['PDF', `<a href="${attr(w.pdf.url)}" rel="noopener">${esc(w.pdf.url)}</a><br><span class="meta">Hosted by ${esc(w.pdf.host)}. Link and title page checked ${esc(w.pdf.checked)}. File size: not recorded.</span>`],
      ['Rights', `${esc(rightsText)}<br><span class="meta">${esc(w.rightsNote)}</span>`],
      ['Audience', esc(w.audience)],
      ['Categories', w.categories.map((c) => `<a href="${href('library/')}?category=${c}">${esc(catName[c])}</a>`).join(', ')],
      ['Tags', w.tags.map(esc).join(', ')],
    ].filter(Boolean);
    layout({
      path: `library/${w.id}/`, current: 'library/', title: w.title,
      description: `${w.title} by ${w.author}: ${w.summary}`.slice(0, 300),
      body: (href) => `
<div class="wrap page-head">
  <p class="kicker"><a href="${href('library/')}">Library</a> · ${esc(w.period)}</p>
  <h1>${esc(w.title)}</h1>
  <p class="lede prose">${esc(w.author)}</p>
  ${bookActions(w, href, true)}
</div>
<div class="wrap">
  <div class="prose">
    <h2 style="margin-top:0">Introduction</h2>
    <p class="meta"><span class="kind">Modern introduction</span>Written by Waterside Press. This is commentary, not the historical text.</p>
    <p>${esc(w.summary)}</p>
    ${w.context.map((t) => `<p>${esc(t)}</p>`).join('')}
    <h3>Reading it at home</h3>
    <p>${esc(w.family)}</p>
    ${w.transcription ? `<h2 id="text">Text</h2><p class="meta"><span class="kind">Historic text</span>${esc(w.edition)}</p>${transcription(w)}` : ''}
  </div>
  <h2>Record</h2>
  <dl class="record">${rowsFor(href).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
</div>`,
    });
  }
}

// ── Plain pages from content/pages.mjs ──
function buildPages() {
  for (const pg of pages) {
    layout({
      path: pg.path, current: pg.nav ? pg.path : undefined, title: pg.title, description: pg.description,
      body: (href) => pg.body({ href, esc, ornament, heroArt, emblem, lit, lib, hasPdf, bookCard: (w) => bookCard(w, href) }),
    });
  }
}

// ── Run ──
rmSync(OUT, { recursive: true, force: true });
mkdirSync(join(OUT, 'assets'), { recursive: true });
for (const f of readdirSync(join(ROOT, 'src/assets'))) copyFileSync(join(ROOT, 'src/assets', f), join(OUT, 'assets', f));
writeFileSync(join(OUT, 'assets/emblem.svg'), emblem().replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" style="color:#24402f" ').replace(/currentColor/g, '#24402f'));
buildPages();
buildLiturgy();
buildLibrary();
// 404
layout({
  path: '404.html', absolute: true, title: 'Page not found', description: 'This page could not be found.',
  body: (href) => `<div class="wrap page-head prose"><h1>Page not found</h1><p>That address does not match a page on Waterside Press. It may have moved, or the link may be mistyped.</p><div class="actions"><a class="btn" href="${href('')}">Return home</a><a class="btn secondary" href="${href('library/')}">Search the library</a></div></div>`,
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

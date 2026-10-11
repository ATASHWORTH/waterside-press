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

// ── Shared rendering helpers ──
const kindLabel = { scripture: 'Scripture · ESV', historic: 'Historic text', original: 'Waterside Press original', editorial: 'Editorial note', arrangement: 'Waterside arrangement' };
const kind = (k) => `<span class="kind">${kindLabel[k]}</span>`;
const note = (summary, html) => html ? `<details class="note"><summary>${summary}</summary><p>${html}</p></details>` : '';
const src = (k, text) => `<p class="source">${kind(k)}${esc(text)}</p>`;
const verse = (r) => `<p class="scripture">${r.text}</p>`;
const lines = (arr) => arr.map(([who, line]) => `<p class="versicle${who === 'All' ? ' all' : ''}"><b>${who}</b> ${esc(line)}</p>`).join('');
const esvLink = (ref) => `https://www.esv.org/${ref.replace(/[–]/g, '-').replace(/(\d)[a-z]\b/g, '$1').replace(/,\s*/g, ',').replace(/\s+/g, '+')}/`;
let partN = 0;
const part = (id, title, inner, extra = '') => `<section class="part ${extra}" aria-labelledby="h-${id}"><div class="part-head"><h3 id="h-${id}">${title}</h3></div>${inner}</section>`;

function canticle(c) {
  return `${src('historic', c.source)}<p class="meta" style="margin-top:-.4rem">${esc(c.subtitle)}</p>
  <div class="canticle">${c.lines.map((l) => `<p>${esc(l).replace(' : ', ' <span class="colon" aria-hidden="true">:</span> ')}</p>`).join('')}<p class="gloria">${esc(off.canticles.gloria).replace(/ : /g, ' <span class="colon" aria-hidden="true">:</span> ')}</p></div>
  ${c.note ? note('About this canticle', esc(c.note)) : ''}`;
}
function hymnBlock(h) {
  return `${src('historic', h.source)}<p class="meta" style="margin-top:-.4rem">Suggested tune: ${esc(h.tune)}</p>${h.stanzas.map((s) => `<p class="stanza">${esc(s)}</p>`).join('')}${note('About this hymn', esc(h.note))}`;
}
const collectBlock = (c) => `<h4>${esc(c.title)}</h4>${src('historic', c.source)}<p>${esc(c.text)}</p>${c.note ? note('A word in this prayer', esc(c.note)) : ''}`;

// ── Daily Office ──
function renderOffice(key) {
  const o = off.offices[key];
  const t = off.texts;
  const id = (s) => `${key}-${s}`;
  const both = (render, field) => `<div class="weekday-only"><p class="when nojs-only">On weekdays</p>${render(field.weekday)}</div><div class="sunday-only"><p class="when nojs-only">On Sundays</p>${render(field.sunday)}</div>`;
  const sentence = (s) => `${src('scripture', s.ref)}${verse(s)}`;
  const cant = (k) => canticle(off.canticles[k]);
  const sameCanticle = o.canticle.weekday === o.canticle.sunday;
  return `<div class="office-panel" id="panel-${key}" role="tabpanel" aria-labelledby="tab-${key}">
  <h2 class="office-name">${o.name}</h2>
  ${part(id('sentence'), 'Opening sentence', both(sentence, o.sentence))}
  ${part(id('confession'), 'Confession of sin', `
    <p class="rubric">All kneel or bow, and say together:</p>
    ${src('historic', t.confession.source)}<p>${esc(t.confession.text)}</p>
    <p class="rubric">The leader then reads:</p>
    ${src('scripture', t.assurance.ref)}${verse(t.assurance)}
    ${note('About the confession', esc(t.confession.note))}`, 'full-only')}
  ${part(id('versicles'), 'Invitation to praise', `${src('historic', t.versicles.source)}${lines(t.versicles.lines)}`)}
  ${part(id('psalms'), 'The Psalms appointed', `
    <p class="source">${kind('historic')}Book of Common Prayer (1662) psalter, read through each month · <span id="${key}-psalter-day">See the table below</span></p>
    <p class="appointed js-only" hidden><strong>Read:</strong> <span id="${key}-psalms"></span></p>
    <p class="nojs-only">Turn to the psalms for today’s date in the psalter table at the foot of this page.</p>
    <p class="rubric">Read the psalms aloud, alternating verses between leader and household, and end with the Gloria Patri. <span class="short-only">In the shorter form, read the first psalm appointed, or sing a metrical psalm from the <a href="${'../music/index.html'}">Music</a> page.</span></p>
    <p class="meta">Links open the ESV at esv.org. Waterside does not reprint whole psalms, to stay within the ESV’s quotation limits.</p>`)}
  ${part(id('lesson'), o.lessonLabel, `
    <p class="source">${kind('arrangement')}Waterside continuous-reading plan · <a href="#about-plan">how the plan works</a></p>
    <p class="appointed js-only" hidden><strong>Read:</strong> <span id="${key}-lesson"></span></p>
    <p class="nojs-only">The lesson is calculated from the date and needs JavaScript. You may instead continue reading where you left off.</p>
    <p class="rubric short-only">In the shorter form, a few verses are enough.</p>`)}
  ${part(id('canticle'), 'Canticle', sameCanticle ? cant(o.canticle.weekday) : both(cant, o.canticle))}
  ${o.canticle2 ? part(id('canticle2'), 'Second canticle', cant(o.canticle2), 'full-only') : ''}
  ${part(id('creed'), "The Apostles' Creed", `${src('historic', t.creed.source)}${t.creed.text.map((x) => `<p>${esc(x)}</p>`).join('')}${note('Notes on the words', esc(t.creed.note))}`, 'full-only')}
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
  <div class="prose">
    <p class="lede">Morning and Evening Prayer for the household: the Church’s inherited pattern of daily prayer, adapted from the Book of Common Prayer.</p>
    <p>The Office is first of all prayer. A parent may pray it alone, on behalf of the household, or with the whole family; it does not need everyone present. The order stays the same each day, so it can be learned. The psalms and lessons change according to a set plan. The full form takes about twenty minutes; the <em>shorter form</em> takes about eight and suits young children.</p>
  </div>
</div>
<div class="office-bar no-print js-only" hidden>
  <div class="wrap">
    <div class="date-nav" role="group" aria-label="Date">
      <button class="btn small secondary" id="prev-day" type="button" aria-label="Previous day">‹</button>
      <span id="office-date" class="meta" aria-live="polite"></span>
      <button class="btn small secondary" id="next-day" type="button" aria-label="Next day">›</button>
      <button class="btn small secondary" id="back-today" type="button" hidden>Today</button>
    </div>
    <div class="office-controls">
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
    <div class="office-tabs" role="tablist" aria-label="Office">
      <button type="button" role="tab" id="tab-morning" aria-controls="panel-morning" aria-selected="true">Morning Prayer</button>
      <button type="button" role="tab" id="tab-evening" aria-controls="panel-evening" aria-selected="false" tabindex="-1">Evening Prayer</button>
    </div>
    <p class="notice sunday-note" data-sunday-note hidden>Today is the Lord’s Day. The Office takes its Sunday form, and households may also use the <a href="${href('family-catechesis/the-lords-day/first-day/')}">Lord’s Day catechesis session</a>. Read more about <a href="${href('lords-day/')}">the Lord’s Day</a>.</p>
    ${renderOffice('morning')}
    ${renderOffice('evening')}
    <section class="part" id="about-plan" aria-labelledby="h-plan">
      <h2 id="h-plan">How the readings are appointed</h2>
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
function renderSession(s, href) {
  const prev = s.recite;
  const qs = s.questions.map((n) => `<div class="qa-block"><p class="q"><span class="label">Q. ${n}.</span>${esc(cat.wsc[n][0])}</p><p><span class="label">A.</span>${esc(cat.wsc[n][1])}</p></div>`).join('');
  const steps = [
    ['gather', 'Gather', `${src('historic', cat.gatherPrayer.source)}<p>${esc(cat.gatherPrayer.text)}</p>`],
    ['recite', 'Recite', `<p class="rubric">${esc(prev)}</p>`],
    ['learn', 'Today’s question', `${src('historic', `${cat.WSC_SOURCE}. Older spelling retained`)}${qs}<p class="rubric">The leader asks; everyone answers together. Repeat until the youngest can say part of it.</p>`],
    ['read', 'Read', s.reading.map((r) => `${src('scripture', r.ref)}${verse(r)}`).join('') + `<p class="meta"><a href="${esvLink(s.reading[0].ref)}" rel="noopener">Read ${esc(s.reading[0].ref)} in context at esv.org</a></p>`],
    ['explain', 'Explain', `${src('editorial', 'For the leader. Read it beforehand, or aloud to older children')}<p>${esc(s.explain)}</p>`],
    ['discuss', 'Discuss', `${src('editorial', 'Everyone answers, adults included')}<dl class="ages">
      <dt>Young children</dt><dd>${esc(s.discuss.young)}</dd>
      <dt>Older children</dt><dd>${esc(s.discuss.older)}</dd>
      <dt>Teenagers</dt><dd>${esc(s.discuss.teens)}</dd>
      <dt>Adults</dt><dd>${esc(s.discuss.adults)}</dd></dl>`],
    ['remember', 'Remember', `<p class="remember">${esc(s.remember)}</p>`],
    ['practice', 'Practice', `${src('editorial', 'For the week ahead')}<p>${esc(s.practice)}</p>`],
    ['pray', 'Pray', `${s.prayerSource ? src('historic', s.prayerSource) : src('original', 'Written for this session')}<p>${esc(s.prayer)}</p>`],
  ];
  return steps.map(([k, t, inner], i) => `<section class="part step" aria-labelledby="s-${k}"><div class="part-head"><span class="part-num" aria-hidden="true">${i + 1}</span><h2 id="s-${k}">${t}</h2></div>${inner}</section>`).join('');
}

function buildCatechesis() {
  layout({
    path: 'family-catechesis/', current: 'family-catechesis/', title: 'Family Catechesis',
    description: 'Short, participatory sessions in which parents and children learn the Christian faith together from Scripture, the creeds, and the catechisms.',
    body: (href) => `
<div class="wrap page-head">
  <p class="kicker">Learn the Faith Together</p>
  <h1>Family Catechesis</h1>
  <div class="prose">
    <p class="lede">Sessions in which the whole household learns the faith together: reciting, reading, asking questions, and putting what is learned into practice.</p>
    <p>Catechesis is different from the <a href="${href('daily-office/')}">Daily Office</a>. The Office is prayer; catechesis is instruction, and it is meant to be a conversation. Parents lead, children respond, and adults answer the questions too.</p>
  </div>
</div>
<div class="wrap grid two">
  <div>
    ${cat.units.map((u) => `<section class="card unit" aria-labelledby="u-${u.id}">
      <p class="kicker">${u.sunday ? 'For the Lord’s Day' : `Unit · ${u.sessions.length} sessions`}</p>
      <h2 id="u-${u.id}" style="margin-top:0">${esc(u.title)}</h2>
      <p>${esc(u.summary)}</p>
      <ol class="session-list">${u.sessions.map((s) => `<li><a href="${href(`family-catechesis/${u.id === 'lords-day' ? 'the-lords-day' : u.id}/${s.slug}/`)}">${esc(s.title)}</a> <span class="meta">WSC ${s.questions.map((n) => 'Q. ' + n).join(', ')}</span></li>`).join('')}</ol>
    </section>`).join('')}
  </div>
  <aside class="prose">
    <h2 style="margin-top:0">How a session works</h2>
    <ol>
      <li><strong>Gather</strong> with a short prayer.</li>
      <li><strong>Recite</strong> what you learned last time.</li>
      <li><strong>Learn</strong> the new question and answer together.</li>
      <li><strong>Read</strong> the Scripture behind it.</li>
      <li><strong>Explain</strong> it briefly. A note for the leader is provided.</li>
      <li><strong>Discuss</strong> with questions for every age, adults included.</li>
      <li><strong>Remember</strong> one phrase.</li>
      <li><strong>Practice</strong> something concrete in the week ahead.</li>
      <li><strong>Pray</strong> to close.</li>
    </ol>
    <p>A session takes fifteen to twenty-five minutes. Once or twice a week is plenty. Skip any step that doesn’t serve your household that day, and keep everyone on the same question rather than splitting into separate lessons.</p>
    <h3>Sources</h3>
    <p>These first units use the Westminster Shorter Catechism, the most widely used catechism of the English-speaking Reformed churches. Where other traditions teach differently, the leader’s notes say so.</p>
    <h3>In preparation</h3>
    <ul class="soon-list">${['The Apostles’ Creed', 'The Ten Commandments', 'The Lord’s Prayer', 'The Heidelberg Catechism alongside Westminster', 'Readings from the Church Fathers'].map((x) => `<li><span>${esc(x)}</span><span class="tag soon">Coming soon</span></li>`).join('')}</ul>
  </aside>
</div>`,
  });

  for (const u of cat.units) {
    const dir = u.id === 'lords-day' ? 'the-lords-day' : u.id;
    u.sessions.forEach((s, i) => {
      const next = u.sessions[i + 1];
      const prev = u.sessions[i - 1];
      layout({
        path: `family-catechesis/${dir}/${s.slug}/`, current: 'family-catechesis/', title: `${s.title} — Family Catechesis`,
        description: `A family catechesis session on Westminster Shorter Catechism ${s.questions.map((n) => 'Q. ' + n).join(' and ')}: ${s.title.toLowerCase()}.`,
        body: (href) => `
<div class="wrap page-head">
  <p class="kicker"><a href="${href('family-catechesis/')}">Family Catechesis</a> · ${esc(u.title)}${u.sunday ? '' : ` · Session ${i + 1} of ${u.sessions.length}`}</p>
  <h1>${esc(s.title)}</h1>
</div>
<div class="wrap"><div class="prose-center office session">
  ${renderSession(s, href)}
  <nav class="session-nav no-print" aria-label="Sessions">
    ${prev ? `<a class="btn secondary" href="${href(`family-catechesis/${dir}/${prev.slug}/`)}">‹ ${esc(prev.title)}</a>` : '<span></span>'}
    ${next ? `<a class="btn" href="${href(`family-catechesis/${dir}/${next.slug}/`)}">${esc(next.title)} ›</a>` : `<a class="btn secondary" href="${href('family-catechesis/')}">All sessions</a>`}
  </nav>
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
<p class="lede prose">Sunday is the weekly feast of Christ’s resurrection, the first day of the new creation, and a day of worship and rest for the people of God.</p></div>
<div class="wrap prose">
  <h2 style="margin-top:0">The first day of the week</h2>
  <p>All four Gospels place the resurrection on “the first day of the week.” The risen Christ came to his disciples on the evening of that day (John 20:19). Afterwards the church gathered on it to break bread (Acts 20:7) and set aside gifts (1 Corinthians 16:2), and John names it “the Lord’s day” (Revelation 1:10). Early Christian writers confirm the practice. The <em>Didache</em> tells believers to gather on the Lord’s day, break bread, and give thanks; Justin Martyr, writing around 155, describes Christians meeting on Sunday for the reading of the prophets and apostles, preaching, prayer, and the Lord’s Supper (<em>First Apology</em> 67). Ignatius of Antioch speaks of believers who no longer keep the Sabbath but live according to the Lord’s day (<em>To the Magnesians</em> 9).</p>
  <h2>Resurrection, new creation, and rest</h2>
  <p>The seventh-day Sabbath looked back to creation finished (Genesis 2:2–3) and to Israel’s deliverance from Egypt (Deuteronomy 5:15). The first day looks to new creation begun: Christ raised as the firstfruits of those who will rise (1 Corinthians 15:20). Hebrews speaks of “a Sabbath rest for the people of God” that remains, entered by faith (Hebrews 4:9–10). Christians keep Sunday as a weekly sign of that rest: we stop our work because Christ has finished his.</p>
  <h2>How Christians have understood Sabbath and Sunday</h2>
  <p>Orthodox Christians agree that Sunday is the chief day of Christian worship. They differ on how it relates to the fourth commandment.</p>
  <dl class="record">
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
  if (w.transcription === 'creed') return off.texts.creed.text.map((t) => `<p>${esc(t)}</p>`).join('') + `<p class="meta">${esc(off.texts.creed.note)}</p>`;
  if (w.transcription === 'wsc') {
    const nums = Object.keys(cat.wsc).map(Number).sort((a, b) => a - b);
    return `<dl class="qa">${nums.map((n) => `<dt>Q. ${n}. ${esc(cat.wsc[n][0])}</dt><dd>A. ${esc(cat.wsc[n][1])}</dd>`).join('')}</dl><p class="meta">Selected questions only, as used in Family Catechesis. The full catechism has 107 questions; a complete, collated transcription is planned.</p>`;
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
      body: (href) => pg.body({ href, esc, ornament, heroArt, emblem, off, cat, hymns, lib, hasPdf, bookCard: (w) => bookCard(w, href) }),
    });
  }
}

// ── Run ──
rmSync(OUT, { recursive: true, force: true });
mkdirSync(join(OUT, 'assets'), { recursive: true });
for (const f of readdirSync(join(ROOT, 'src/assets'))) copyFileSync(join(ROOT, 'src/assets', f), join(OUT, 'assets', f));
writeFileSync(join(OUT, 'assets/emblem.svg'), emblem().replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" style="color:#24402f" ').replace(/currentColor/g, '#24402f'));
buildPages();
buildOffice();
buildCatechesis();
buildLordsDay();
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

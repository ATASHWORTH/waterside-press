// Waterside Press — page content. Each body() receives helpers from build.mjs.
// Keep factual claims modest and sourced; mark anything unfinished as "Coming soon".

const soon = (items, esc) => `<ul class="soon-list">${items.map((t) => `<li><span>${esc(t)}</span><span class="tag soon">Coming soon</span></li>`).join('')}</ul>`;

export const pages = [
  // ───────── HOME ─────────
  {
    path: '', nav: true, title: 'Waterside Press',
    description: 'Texts, prayers, psalms, music, and resources for Christian worship and learning in the household, drawn from the riches of historic Christianity.',
    body: ({ href, esc, heroArt, lib, hymns, catalogRow }) => `
<div class="wrap">
  <section class="hero" aria-labelledby="hero-title">
    <div>
      <p class="kicker">A digital library and household worship project</p>
      <h1 id="hero-title">The riches of historic Christianity, <em>brought home.</em></h1>
      <p class="lede">Texts, prayers, psalms, music, and resources for Christian worship and learning in the household.</p>
      <div class="actions">
        <a class="btn" href="${href('daily-office/')}">Begin Today’s Office</a>
        <a class="btn secondary" href="${href('library/')}">Explore the Library</a>
      </div>
    </div>
    <div class="hero-art">${heroArt}</div>
  </section>

  <div class="offerings">
    <section class="offering" aria-labelledby="h-office">
      <p class="kicker">Daily Office · for prayer</p>
      <h2 id="h-office">Pray the Office</h2>
      <p>Morning and Evening Prayer in the Prayer Book tradition: the psalms appointed for the day of the month, a lesson read in course, the canticles, the Creed, and the Church’s prayers. The order stays the same each day so it can be learned.</p>
      <ul class="use">
        <li>A parent may pray it alone, or on behalf of the children.</li>
        <li>The household may pray it together.</li>
        <li>A shorter form suits young children.</li>
      </ul>
      <p class="actions"><a class="btn" href="${href('daily-office/')}">Begin Today’s Office</a></p>
    </section>
    <section class="offering" aria-labelledby="h-catechesis">
      <p class="kicker">Family Catechesis · for learning</p>
      <h2 id="h-catechesis">Learn the Faith Together</h2>
      <p>Short sessions for the whole household. Recite a catechism answer, read the Scripture behind it, talk it over with questions for every age, and put it into practice during the week.</p>
      <ul class="use">
        <li>Parents lead; children respond; adults answer too.</li>
        <li>Fifteen to twenty-five minutes, once or twice a week.</li>
        <li>Begins with the Westminster Shorter Catechism.</li>
      </ul>
      <p class="actions"><a class="btn secondary" href="${href('family-catechesis/first-questions/chief-end/')}">Begin with the first session</a></p>
    </section>
  </div>
  <p class="meta" style="text-align:center;margin-top:var(--s5)">On Sundays both take a Lord’s Day form. <a href="${href('lords-day/')}">Why Christians keep the first day</a>.</p>

  <section class="home-section" aria-labelledby="h-library">
    <div class="section-head"><div><p class="kicker">The Library</p><h2 id="h-library" style="margin-top:0">From the collection</h2></div><a class="arrow" href="${href('library/')}">The full catalogue</a></div>
    <p class="prose">${lib.works.length} works, from the catechisms and the 1662 Prayer Book to Watson, Gouge, Owen, and Edwards. Each links to a place you can read it free online, with modern-English editions where the old English is hard going.</p>
    <ol class="catalog">${['pilgrims-progress', 'heidelberg-catechism', 'gouge-domestical-duties', 'watson-body-of-divinity'].map((id) => lib.works.find((w) => w.id === id)).map(catalogRow).join('')}</ol>
  </section>

  <div class="grid two home-section">
    <section aria-labelledby="h-music">
      <p class="kicker">Music</p>
      <h2 id="h-music" style="margin-top:0">Singing at home</h2>
      <p>Metrical psalms and historic hymns, with their metres and suggested tunes. ${hymns.hymns.length} texts so far, from the Scottish Psalter of 1650, Isaac Watts, and Thomas Ken. Recordings and part tracks are in preparation.</p>
      <p><a class="arrow" href="${href('music/')}">Psalms and hymns</a></p>
    </section>
    <section aria-labelledby="h-learning">
      <p class="kicker">Learning</p>
      <h2 id="h-learning" style="margin-top:0">Understanding what we pray</h2>
      <p>Short guides to using a catechism, reading historic texts, the scholastic method, and the questions on which Christian traditions differ.</p>
      <p><a class="arrow" href="${href('learning/')}">Guides and introductions</a></p>
    </section>
  </div>

  <section class="home-section prose-center" aria-labelledby="h-principles" style="text-align:center">
    <p class="kicker">Editorial principles</p>
    <h2 id="h-principles" style="margin-top:0">Every source named, every addition marked</h2>
    <p>Waterside Press draws on the historic Western Christian tradition with a Reformed sensibility, and welcomes the Church Fathers and the devotional writers of orthodox Christianity across the centuries. Historic texts are identified by edition. Modern prayers and notes are labelled as modern. Nothing is attributed to a writer who did not write it.</p>
    <p><a href="${href('editorial-principles/')}">Read the editorial principles</a> · <a href="${href('about/')}">About Waterside Press</a></p>
  </section>
</div>`,
  },

  // ───────── MUSIC ─────────
  {
    path: 'music/', nav: true, title: 'Music',
    description: 'Metrical psalms and historic hymns for singing at home, with metres, suggested tunes, and notes on copyright.',
    body: ({ href, esc, hymns, staffRule }) => {
      const metre = (t) => (/Long Metre/.test(t) ? 'L.M. · 8.8.8.8' : /Common Metre/.test(t) ? 'C.M. · 8.6.8.6' : '');
      return `
<div class="wrap page-head"><p class="kicker">Singing at home</p><h1>Music</h1>
<p class="lede">“Let the word of Christ dwell in you richly … singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God.” <span class="meta">Colossians 3:16 (ESV)</span></p></div>
<div class="wrap grid main-aside">
  <div>
    <h2 style="margin-top:0">Psalms and hymns for the household</h2>
    <p class="availability">Texts only for now. Scores and recordings will be added as they are made and cleared for use.</p>
    <ol class="hymn-index">${hymns.hymns.map((h) => `<li><a href="#hy-${h.id}">${esc(h.title)}</a><span class="metre">${metre(h.tune)}</span></li>`).join('')}</ol>
    ${staffRule}
    ${hymns.hymns.map((h) => `<section class="hymn" aria-labelledby="hy-${h.id}"><h3 id="hy-${h.id}">${esc(h.title)}</h3><p class="source"><span class="kind">Historic text</span>${esc(h.source)}</p><p class="meta">Suggested tune: ${esc(h.tune)}${metre(h.tune) ? ` · ${metre(h.tune)}` : ''}</p>${h.stanzas.map((x) => `<p class="stanza">${esc(x)}</p>`).join('')}<details class="note"><summary>About this text</summary><p>${esc(h.note)}</p></details></section>`).join('')}
  </div>
  <aside class="prose">
    <h2 style="margin-top:0;font-size:1.6rem">Metrical psalmody</h2>
    <p>A metrical psalm is a psalm set in regular rhyming stanzas so that a congregation can sing it to a common tune. The practice spread from Calvin’s Geneva to Scotland, England, and America; the Scottish Psalter of 1650 is still sung today.</p>
    <p><strong>Common Metre</strong> (C.M., 8.6.8.6) has lines of eight and six syllables. <strong>Long Metre</strong> (L.M., 8.8.8.8) has four lines of eight. Any tune fits any text of the same metre, so a household that learns two or three tunes can sing dozens of psalms.</p>
    <h3>Hymnody, chant, and canticles</h3>
    <p>English hymnody grew alongside the metrical psalms; Isaac Watts (1674–1748) is its great early writer. Older still is the Western chant tradition, in which psalms and canticles such as the Magnificat were sung to simple recited tones. The canticles in the <a href="${href('daily-office/')}">Daily Office</a> keep the Prayer Book’s colon marking, which divides each verse for chanting.</p>
    <h3>A note on copyright</h3>
    <p>A hymn text being public domain does not make every arrangement, edition, or recording public domain. Waterside gives tune names for reference only and publishes no sheet music or audio until each item’s rights are checked. See <a href="${href('copyright/')}">Copyright and Permissions</a>.</p>
    <h3>In preparation</h3>
    <ul class="soon-list">${['Melody recordings of these texts', 'Soprano, alto, tenor, and bass part tracks', 'Psalm-tone and chant demonstrations', 'Printable melody-line scores', 'Basic music reading for families'].map((t) => `<li><span>${esc(t)}</span><span class="tag soon">Coming soon</span></li>`).join('')}</ul>
  </aside>
</div>`;
    },
  },

  // ───────── LEARNING ─────────
  {
    path: 'learning/', nav: true, title: 'Learning',
    description: 'Introductions to catechisms, historic texts, primary sources, and the scholastic method, with notes for different ages.',
    body: ({ href, esc }) => `
<div class="wrap page-head"><p class="kicker">Understanding the inheritance</p><h1>Learning</h1>
<p class="lede">Short guides that help a household understand what it reads and prays.</p></div>
<div class="wrap grid main-aside">
  <div>
    <ol class="article-index">
      <li><a href="#catechism">How to use a catechism</a><p>Why question-and-answer teaching works, and how to use it with each age. <span class="meta">For parents</span></p></li>
      <li><a href="#sources">Primary sources and modern commentary</a><p>Telling the historical text from what is said about it, and questions to ask of any old text. <span class="meta">Reading historic texts</span></p></li>
      <li><a href="#scholastic">The scholastic method</a><p>The five-part way of working through hard questions, and an exercise for older children. <span class="meta">Reasoning</span></p></li>
      <li><a href="#traditions">Where traditions differ</a><p>How Waterside handles questions on which Christians disagree. <span class="meta">Traditions</span></p></li>
      <li><a href="${href('lords-day/')}">The Lord’s Day</a><p>Sabbath and Sunday across the Reformed, Lutheran, Catholic, and Orthodox traditions. <span class="meta">Worship</span></p></li>
    </ol>
    <div class="prose">
    <article class="article" id="catechism" aria-labelledby="a-catechism">
      <h2 id="a-catechism">How to use a catechism</h2>
      <p>A catechism teaches by question and answer. Its strength is repetition: a child who has said an answer a hundred times owns its words long before grasping all of its meaning, and the meaning grows with the child.</p>
      <ul>
        <li><strong>Young children:</strong> learn the answer by heart, one question a week. Praise effort, not perfection.</li>
        <li><strong>Older children:</strong> ask what one key word means, and find a Bible verse that says the same thing.</li>
        <li><strong>Teenagers and adults:</strong> ask why the answer is phrased as it is, and compare it with another catechism (for example, Heidelberg Q. 1 beside Westminster Q. 1).</li>
      </ul>
      <p>The <a href="${href('family-catechesis/')}">Family Catechesis</a> sessions put this into practice.</p>
    </article>
    <article class="article" id="sources" aria-labelledby="a-sources">
      <h2 id="a-sources">Primary sources and modern commentary</h2>
      <p>A <em>primary source</em> is the historical text itself: Augustine’s words, the Westminster Assembly’s catechism, a prayer as printed in 1662. <em>Commentary</em> is what a later writer says about it, including every introduction on this website. Waterside Press labels the two separately so that a reader always knows which is which.</p>
      <p>When reading an old text, ask: Who wrote this, when, and for whom? What question was the author answering? Which words have changed meaning since? (“Prevent” once meant “go before”; “quick” meant “living.”)</p>
    </article>
    <article class="article" id="scholastic" aria-labelledby="a-scholastic">
      <h2 id="a-scholastic">The scholastic method</h2>
      <p>The medieval schools developed a disciplined way of working through hard questions, seen most clearly in the articles of Thomas Aquinas’s <em>Summa Theologiae</em>. Protestant scholastics of the sixteenth and seventeenth centuries used the same method. A typical article proceeds in five steps:</p>
      <ol>
        <li><strong>The question</strong> is stated precisely.</li>
        <li><strong>Objections</strong> are set out: the strongest arguments for the answer the author will reject.</li>
        <li><strong>An authority</strong> is cited on the other side (“On the contrary…”), often Scripture or a Father.</li>
        <li><strong>The response</strong> works through distinctions and reasons to an answer.</li>
        <li><strong>Each objection is answered</strong> in turn, often granting what is true in it.</li>
      </ol>
      <p>The method is not mere hair-splitting: it requires stating an opponent’s case fairly before replying. It is one valuable form of Christian reasoning among others, alongside biblical exposition, preaching, and devotional writing.</p>
      <p class="leader-note"><strong>For older children:</strong> pick a family question (“Should we have a dog?”), write two objections, find one good reason on the other side, decide, and answer both objections. Then try it with a catechism question.</p>
    </article>
    <article class="article" id="traditions" aria-labelledby="a-traditions">
      <h2 id="a-traditions">Where traditions differ</h2>
      <p>Christians who share the Apostles’ and Nicene Creeds still differ on real questions: justification, the sacraments, the authority of tradition, the keeping of the Lord’s Day. Waterside Press writes from a Reformed standpoint and says so. When a note touches a disputed point, it aims to state other positions as their own teachers would recognize them, without pretending the difference is small.</p>
    </article>
    </div>
  </div>
  <aside>
    <h2 style="margin-top:0;font-size:1.6rem">Planned guides</h2>
    ${soon(['The Church Fathers: who they were', 'An introduction to historic Western liturgy', 'The Reformation in historical context', 'Christian prayer and devotional reading', 'The Psalms in Christian worship', 'The basics of Gregorian chant', 'Reading musical notation', 'Teaching children to sing', 'Logic and theological reasoning'], esc)}
  </aside>
</div>`,
  },

  // ───────── ABOUT ─────────
  {
    path: 'about/', nav: true, title: 'About',
    description: 'The mission, theological orientation, and editorial standards of Waterside Press.',
    body: ({ href }) => `
<div class="wrap page-head"><p class="kicker">About</p><h1>About Waterside Press</h1>
<p class="lede">Waterside Press equips Christian households to worship, learn, sing, and grow in the faith through the riches of historic Christian texts, liturgy, catechesis, music, and devotional practice.</p></div>
<div class="wrap prose-center">
  <h2 style="margin-top:0">Why “Waterside”</h2>
  <p>The name comes from Psalm 1: the one who delights in the law of the Lord “is like a tree planted by streams of water that yields its fruit in its season” (Psalm 1:3, ESV). The image is of rootedness and slow, steady growth, the kind of formation that happens in a household over years.</p>
  <h2>Theological orientation</h2>
  <p>Waterside Press draws from the historic Western Christian tradition. Its theological instincts are Reformed: it holds to the authority and sufficiency of Scripture, salvation by grace alone through faith in Christ, the covenant faithfulness of God across generations, and the ordinary means by which faith is nourished: the Word, the sacraments, and prayer.</p>
  <p>It is also <em>catholic</em> in the old sense of the word: it reads the Church Fathers, prays the prayers of the medieval and Reformation churches, and welcomes the devotional writers of orthodox Christianity across the centuries. Here “orthodox” means the broad faith confessed in the historic creeds, not membership in a particular modern body.</p>
  <p>The library serves Christians across orthodox traditions while acknowledging real differences. It does not ask readers to subscribe to a particular confession, and it does not pretend all traditions teach the same thing.</p>
  <h2>Editorial standards</h2>
  <p>Every historical text is identified by edition; every modern prayer or note is labelled as modern; every link to a file is checked before it is published. See <a href="${href('editorial-principles/')}">Editorial Principles</a> and <a href="${href('copyright/')}">Copyright and Permissions</a>.</p>
  <h2>What Waterside Press is not</h2>
  <p>It is not a church, and household worship is not a substitute for the church. It is not endorsed by any denomination or institution and claims no ecclesiastical authority.</p>
</div>`,
  },

  // ───────── EDITORIAL PRINCIPLES ─────────
  {
    path: 'editorial-principles/', title: 'Editorial Principles and Text Integrity',
    description: 'How Waterside Press handles historical texts, editions, attribution, modernization, and verification of sources and links.',
    body: ({ href }) => `
<div class="wrap page-head"><p class="kicker">Text integrity</p><h1>Editorial Principles</h1>
<p class="lede">How Waterside Press transcribes, modernizes, attributes, and checks the texts it publishes.</p></div>
<div class="wrap prose-center">
  <nav aria-label="On this page"><ol class="toc">
    <li><a href="#transcription">Historical transcription</a></li>
    <li><a href="#modernization">Editorial modernization</a></li>
    <li><a href="#attribution">Attribution</a></li>
    <li><a href="#verification">Source verification</a></li>
    <li><a href="#copyright">Copyright and permissions</a></li>
    <li><a href="#translations">Modern translations and editions</a></li>
    <li><a href="#corrections">Corrections and uncertainty</a></li>
    <li><a href="#labels">Labels used on this site</a></li>
  </ol></nav>
  <h2 id="transcription">Historical transcription</h2>
  <p>Texts are transcribed from a named edition. We do not invent quotations, authors, dates, editions, translations, or provenance. Omissions are marked with an ellipsis (…), and a selection is labelled as an excerpt.</p>
  <h2 id="modernization">Editorial modernization</h2>
  <p>Where spelling has been modernized (for example “Catholick” to “Catholic”), the source line says so. Wording is not modernized silently; older words are explained in notes instead (“preventing” meaning “going before”).</p>
  <h2 id="attribution">Attribution</h2>
  <p>Every element of the Office and the catechesis sessions names its source. Prayers and notes written by Waterside Press are labelled as such and are never attributed to historical writers. Where authorship is traditional rather than certain, as with the “Prayer of St. Chrysostom” or the Te Deum, we say so.</p>
  <h2 id="verification">Source verification</h2>
  <p>A library item is listed only after these steps:</p>
  <ol>
    <li>Identify the exact work and edition.</li>
    <li>Identify the repository or rights holder.</li>
    <li>Determine the copyright status of that edition, not merely of the original work.</li>
    <li>Open the file and confirm it matches the title and edition.</li>
    <li>Test the direct link and record the date.</li>
    <li>Write the record and introduction; publish only when complete.</li>
  </ol>
  <p><strong>A limit we state openly:</strong> for externally hosted PDFs we confirm that the link works and that the title page matches. We have not yet compared every page of each file against its printed source, and each record says so. Works that fail any step are withheld. A smaller library of accurate records is better than a large catalogue of doubtful ones.</p>
  <h2 id="copyright">Copyright and permissions</h2>
  <p>Scripture is quoted from the ESV within Crossway’s published limits; longer readings are given as references with links. Historic texts are public domain, with the Book of Common Prayer’s Crown rights in the United Kingdom noted. Full details are on the <a href="${href('copyright/')}">Copyright and Permissions</a> page.</p>
  <h2 id="translations">Modern translations and editions</h2>
  <p>An ancient or historic work does not make every modern edition free to reuse. Modern translations, introductions, notes, typesetting, scans, arrangements, and recordings may each carry their own copyright. We record the translator and edition of every work, and we withhold an edition whose rights we cannot establish, as with a 1940 translation of <em>The Imitation of Christ</em>.</p>
  <h2 id="corrections">Corrections and uncertainty</h2>
  <p>Where a fact is uncertain we say so rather than choose a likely answer. Broken links and errors are corrected when found. Texts that have not yet been compared word for word against their printed sources are recorded as such in the project’s source manifest. A correspondence address for reporting errors has not yet been set up.</p>
  <h2 id="labels">Labels used on this site</h2>
  <dl class="record wide-record">
    <dt>Historic text</dt><dd>Words from a named historical source, reproduced as printed or with disclosed light modernization.</dd>
    <dt>Scripture · ESV</dt><dd>Quoted from the English Standard Version under Crossway’s published permissions.</dd>
    <dt>Waterside Press original</dt><dd>Written for this site. Not a historical text.</dd>
    <dt>Waterside arrangement</dt><dd>A Waterside choice of order or selection, such as the continuous-reading plan in the Office.</dd>
    <dt>Editorial note / Modern introduction</dt><dd>Commentary written by Waterside Press.</dd>
    <dt>Excerpt</dt><dd>Part of a work, not the whole.</dd>
    <dt>Full-text PDF</dt><dd>A file of the whole work, hosted by the named repository. We have opened the link and checked the title page against the stated edition.</dd>
    <dt>Read online</dt><dd>Text typed by Waterside Press from a stated edition and shown on this site.</dd>
  </dl>
</div>`,
  },

  // ───────── COPYRIGHT ─────────
  {
    path: 'copyright/', title: 'Copyright and Permissions',
    description: 'Copyright, permissions, and attribution for texts, Scripture quotations, and linked files on Waterside Press.',
    body: ({ off }) => `
<div class="wrap page-head"><p class="kicker">Rights</p><h1>Copyright and Permissions</h1></div>
<div class="wrap prose-center">
  <h2 style="margin-top:0">Scripture</h2>
  <p>${off.ESV_NOTICE}</p>
  <p>Crossway permits quotation of the ESV without written permission within published limits (as stated by Crossway: up to 500 verses, provided the verses quoted amount to no more than one-half of any one book of the Bible and less than 25 percent of the total text of the work in which they are quoted). Waterside Press quotes well under that limit and gives the notice above. The psalms and lessons of the Daily Office are given as references with links to esv.org rather than reprinted.</p>
  <h2>Historic texts</h2>
  <ul>
    <li><strong>Book of Common Prayer (1662)</strong>, including the canticles in their Prayer Book translation: public domain in most of the world. In the United Kingdom, rights in the Book of Common Prayer are vested in the Crown and administered under letters patent; short liturgical texts are reproduced here for worship.</li>
    <li><strong>Westminster Shorter Catechism (1647):</strong> public domain.</li>
    <li><strong>Scottish Metrical Psalter (1650), Isaac Watts, Thomas Ken:</strong> public domain texts. Musical arrangements and recordings of these texts may be under copyright and are not reproduced.</li>
  </ul>
  <h2>Linked files</h2>
  <p>PDFs in the library are hosted by the repositories named on each record. Those repositories set their own terms of use. Waterside Press links to the files and does not copy or re-host them.</p>
  <h2>Waterside Press content</h2>
  <p>Introductions, notes, and original prayers are © Waterside Press. Families and churches may print the Daily Office and catechesis sessions for use in worship and teaching.</p>
  <h2 id="corrections">Sources and corrections</h2>
  <p>Each library record names its source and edition. If you find an error — a wrong reading, a broken link, a misattributed text — it will be corrected once a contact address is published on this page. A correspondence address has not yet been set up.</p>
</div>`,
  },

  // ───────── PRIVACY ─────────
  {
    path: 'privacy/', title: 'Privacy',
    description: 'What Waterside Press does and does not collect.',
    body: () => `
<div class="wrap page-head"><p class="kicker">Privacy</p><h1>Privacy</h1></div>
<div class="wrap prose-center">
  <p>Waterside Press has no accounts, no mailing list, no analytics, no advertising, and no tracking pixels. It sets no cookies.</p>
  <h2>What your browser stores</h2>
  <p>On the Daily Office page, two preferences — the shorter form and text size — are kept in your own browser’s local storage so they are remembered next time. They never leave your device. Clearing your browser’s site data removes them.</p>
  <p>If you choose the dark theme with the switch at the top of every page, that choice is kept in your browser’s local storage in the same way.</p>
  <h2>Third-party requests</h2>
  <ul>
    <li><strong>Fonts:</strong> pages load the IM Fell English, Spectral, and Alegreya Sans typefaces from Google Fonts. Your browser therefore contacts Google’s servers, which receive your IP address and browser details as part of that request. See Google’s privacy policy for how that data is handled.</li>
    <li><strong>Linked sites:</strong> library links open files at other sites (such as ccel.org and esv.org). Those sites have their own privacy policies.</li>
  </ul>
  <h2>Hosting</h2>
  <p>The web host that serves these pages may keep standard server logs (such as IP addresses and requested pages). Details depend on the host chosen at deployment and should be added here when it is.</p>
</div>`,
  },

  // ───────── ACCESSIBILITY ─────────
  {
    path: 'accessibility/', title: 'Accessibility',
    description: 'The accessibility goals and known limitations of Waterside Press.',
    body: () => `
<div class="wrap page-head"><p class="kicker">Accessibility</p><h1>Accessibility</h1></div>
<div class="wrap prose-center">
  <p>Waterside Press aims to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA. We have not had an independent audit, and we do not claim full conformance.</p>
  <h2>What the site does</h2>
  <ul>
    <li>Semantic headings, landmarks, and a “Skip to content” link.</li>
    <li>Full keyboard operation, with visible focus outlines.</li>
    <li>Text colours chosen for at least 4.5:1 contrast against their backgrounds, in light and dark modes.</li>
    <li>Adjustable text size on the Daily Office, and layouts that reflow on small screens and at 200% zoom.</li>
    <li>No autoplaying media, no pop-ups, and no motion beyond optional smooth scrolling (turned off if you prefer reduced motion).</li>
  </ul>
  <h2>Known limitations</h2>
  <ul>
    <li>Linked PDFs are produced by other repositories; their accessibility varies. Where Waterside offers a transcription, it is the more accessible option.</li>
    <li>Song texts are given without audio or notation for now.</li>
  </ul>
</div>`,
  },

  // ───────── LETTER (DRAFT) ─────────
  {
    path: 'letter-to-the-head-of-the-household/', title: 'Letter to the Head of the Household (Draft)',
    description: 'A draft letter on household worship as ordinary Christian discipleship, grounded in Deuteronomy 6:4–7. Under editorial review.',
    body: ({ href }) => `
<div class="wrap page-head"><p class="kicker">Draft for editorial review</p><h1>A Letter to the Head of the Household</h1>
<p class="notice draft prose">This is a <strong>working draft</strong> prepared for the editors. No approved version of this letter has been supplied yet. When the approved text is available it will replace this draft.</p></div>
<div class="wrap prose-center">
  <p>Dear friend,</p>
  <p>You have been given charge of a household, and with it a quiet and serious work. Long before there were Sunday schools or Christian publishers, God told his people where the faith would be handed on:</p>
  <blockquote><p>“Hear, O Israel: The <span class="sc">Lord</span> our God, the <span class="sc">Lord</span> is one. You shall love the <span class="sc">Lord</span> your God with all your heart and with all your soul and with all your might. And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise.”<br><span class="meta">Deuteronomy 6:4–7 (ESV)</span></p></blockquote>
  <p>Notice the order. The words are first to be on <em>your</em> heart. Only then are they to be taught. A household learns to love God less from what it is told than from what it sees loved.</p>
  <p>Notice also the places: sitting in the house, walking by the way, lying down, rising up. This is not a programme for special occasions. It is the ordinary rhythm of a home, gently shaped around the Word of God.</p>
  <p>The apostle Paul describes the same life in the language of the church: “Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom, singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God” (Colossians 3:16, ESV). And to fathers he gives a charge and a caution together: “Fathers, do not provoke your children to anger, but bring them up in the discipline and instruction of the Lord” (Ephesians 6:4, ESV). The instruction is to be the Lord’s, and it is to be given without harshness.</p>
  <p>Family worship, then, is nothing exotic. It is reading the Scriptures together, praying together, singing together, and teaching the faith — a few minutes, most days, for years. You do not need training or a fine voice. You need a Bible, a little time, and the willingness to begin again when you miss a day.</p>
  <p>Take courage from the Lord’s promise: “For where two or three are gathered in my name, there am I among them” (Matthew 18:20, ESV). Christ spoke those words of his church, and a household at prayer is not the whole church. But it is a place where his people gather in his name, and he does not despise small things.</p>
  <p>Keep this work in its place. Your household is not a substitute for the congregation, nor are you a substitute for its ministers. The preaching of the Word, the sacraments, and the care of faithful pastors are gifts your family needs. Household worship prepares hearts for the Lord’s Day and carries its fruit through the week.</p>
  <p>Begin small. Begin tonight, if you can. The <a href="${href('daily-office/')}">Daily Office</a> is set out so that you can simply open it and pray, and <a href="${href('family-catechesis/')}">Family Catechesis</a> gives you a place to start teaching.</p>
  <p>With hope in Christ,<br><em>Waterside Press</em></p>
  <p class="meta">Scripture quotations are from the ESV® Bible, © 2001 by Crossway. Used by permission. All rights reserved.</p>
</div>`,
  },
];

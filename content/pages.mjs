// Waterside Press — page content. Each body() receives helpers from build.mjs.
// Keep factual claims modest and sourced; mark anything unfinished as "Coming soon".

const soon = (items, esc) => `<ul class="soon-list">${items.map((t) => `<li><span>${esc(t)}</span><span class="tag soon">Coming soon</span></li>`).join('')}</ul>`;

export const pages = [
  // ───────── HOME ─────────
  {
    path: '', nav: true, title: 'Waterside Press',
    description: 'Texts, prayers, psalms, music, and resources for Christian worship and learning in the household, drawn from the riches of historic Christianity.',
    body: ({ href, esc, ornament, heroArt, lit, lib, bookCard }) => `
<div class="wrap">
  <section class="hero" aria-labelledby="hero-title">
    <div>
      <p class="kicker">A digital library and household worship project</p>
      <h1 id="hero-title">The riches of historic Christianity, brought home.</h1>
      <p class="lede">Texts, prayers, psalms, music, and resources for Christian worship and learning in the household.</p>
      <div class="actions">
        <a class="btn" href="${href('daily-liturgy/')}">Begin Today’s Liturgy</a>
        <a class="btn secondary" href="${href('library/')}">Explore the Library</a>
      </div>
    </div>
    <div class="hero-art">${heroArt}</div>
  </section>
  ${ornament}
  <section class="section grid two" aria-labelledby="h-liturgy">
    <div>
      <p class="kicker">Daily Liturgy</p>
      <h2 id="h-liturgy" style="margin-top:0">A short order for every day of the week</h2>
      <p>Each day follows the same pattern: gathering, a reading from Scripture, a psalm or hymn, one catechism question, prayer, and a blessing. It takes ten to fifteen minutes, and a simplified mode serves families with very young children.</p>
      <p class="actions"><a class="btn" href="${href('daily-liturgy/')}">Open the Daily Liturgy</a></p>
    </div>
    <ul class="card" style="list-style:none;margin:0">
      ${lit.days.map((d) => `<li style="padding:.35rem 0;border-bottom:1px solid var(--linen)"><a href="${href('daily-liturgy/')}?day=${d.slug}"><strong>${d.name}</strong></a> — ${esc(d.theme)}</li>`).join('')}
    </ul>
  </section>
  ${ornament}
  <section class="section" aria-labelledby="h-library">
    <p class="kicker">The Library</p>
    <h2 id="h-library" style="margin-top:0">Historic texts with honest records</h2>
    <p class="prose">Every work lists its exact edition, where the file is hosted, and its rights status. Only works that have been checked appear here — the collection is small on purpose.</p>
    <ul class="grid two" style="list-style:none;padding:0;margin:1rem 0 0">${lib.works.map(bookCard).join('')}</ul>
    <p class="actions"><a class="btn secondary" href="${href('library/')}">Browse and search the library</a></p>
  </section>
  ${ornament}
  <section class="section grid three" aria-label="Household resources">
    <div class="card">
      <p class="kicker">Family Worship</p>
      <h3>A rhythm you can keep</h3>
      <p>Practical guidance for parents beginning household prayer: what to do, how long to take, and what to do when it goes badly.</p>
      <p><a href="${href('family-worship/')}">Family Worship</a></p>
    </div>
    <div class="card">
      <p class="kicker">Music</p>
      <h3>Learning to sing together</h3>
      <p>Metrical psalms and historic hymns, with notes on meter and tunes. Recordings and part tracks are in preparation.</p>
      <p><a href="${href('music/')}">Music</a></p>
    </div>
    <div class="card">
      <p class="kicker">Learning</p>
      <h3>Understanding what we pray</h3>
      <p>Short introductions to catechisms, creeds, historic sources, and the scholastic method, with notes for different ages.</p>
      <p><a href="${href('learning/')}">Learning</a></p>
    </div>
  </section>
  ${ornament}
  <section class="section prose-center feature" aria-labelledby="h-principles">
    <h2 id="h-principles" style="margin-top:0">Our editorial principles</h2>
    <p>Waterside Press draws on the historic Western Christian tradition with a Reformed sensibility, and welcomes the Church Fathers and orthodox devotional writers of every century. We name every source, mark every modern prayer and note as modern, and never invent a quotation, edition, or link.</p>
    <p><a href="${href('editorial-principles/')}">Read the editorial principles</a> · <a href="${href('about/')}">About Waterside Press</a></p>
  </section>
</div>`,
  },

  // ───────── FAMILY WORSHIP ─────────
  {
    path: 'family-worship/', nav: true, title: 'Family Worship',
    description: 'A simple, sustainable pattern of household worship: gather, read Scripture, sing, learn the catechism, pray, and close with a blessing.',
    body: ({ href, esc }) => `
<div class="wrap page-head"><p class="kicker">Household formation</p><h1>Family Worship</h1>
<p class="lede prose">Brief and steady is better than long and occasional. A household that reads, sings, and prays for ten minutes most days will learn more than one that attempts an hour and gives up in a week.</p></div>
<div class="wrap grid two">
  <div class="prose">
    <h2 style="margin-top:0">A basic pattern</h2>
    <ol>
      <li><strong>Gather the family.</strong> The same time and place each day helps — after breakfast or after supper. Phones away.</li>
      <li><strong>Read Scripture.</strong> A short passage, read clearly. Ask one question about it.</li>
      <li><strong>Pray together.</strong> A written prayer gives words to the shy and order to the talkative; add your own petitions.</li>
      <li><strong>Sing or recite a psalm.</strong> One stanza sung poorly is still praise. Sing the same psalm all week.</li>
      <li><strong>Learn a catechism question.</strong> One question a week, repeated each day.</li>
      <li><strong>Close with a blessing</strong> or the Lord’s Prayer.</li>
    </ol>
    <p>The <a href="${href('daily-liturgy/')}">Daily Liturgy</a> sets out this pattern in full for every day of the week, so that no preparation is needed.</p>
    <h2>When it goes badly</h2>
    <p>It will. Children fidget, evenings run late, someone cries during the psalm. Shorten rather than skip: a verse, the Lord’s Prayer, and a blessing still count. Consistency is built over months, not days.</p>
    <h2>The household and the church</h2>
    <p>Household worship belongs alongside, never in place of, the gathered worship of the local church: the preaching of the Word, the sacraments, the fellowship of the saints, and the care of pastors and elders. A family that prays at home should be found with God’s people on the Lord’s Day.</p>
    <p>See also the <a href="${href('letter-to-the-head-of-the-household/')}">Letter to the Head of the Household</a> (draft for editorial review).</p>
  </div>
  <aside>
    <div class="card">
      <h2 style="margin-top:0;font-size:1.4rem">In preparation</h2>
      <p class="meta">These resources are being written. Nothing below is available yet.</p>
      ${soon(['A One-Week Family Worship Rule', 'A Household Catechism Companion', 'Morning and Evening Family Prayer', 'Household Psalms and Hymns', 'A guide to establishing household worship', 'Age-graded discussion prompts', 'Seasonal and Christian-calendar resources', 'Teaching children to pray and sing', 'Historic liturgy explained for parents'], esc)}
    </div>
  </aside>
</div>`,
  },

  // ───────── MUSIC ─────────
  {
    path: 'music/', nav: true, title: 'Music',
    description: 'Metrical psalmody, historic hymns, and chant for singing at home, with notes on meter, tunes, and copyright.',
    body: ({ href, esc, lit }) => `
<div class="wrap page-head"><p class="kicker">Singing at home</p><h1>Music</h1>
<p class="lede prose">“Let the word of Christ dwell in you richly … singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God.” — Colossians 3:16 (ESV)</p></div>
<div class="wrap grid two">
  <div class="prose">
    <h2 style="margin-top:0">Metrical psalmody</h2>
    <p>A metrical psalm is a psalm turned into regular rhyming stanzas so that a congregation can sing it to a common tune. The practice spread from Calvin’s Geneva to Scotland, England, and America; the Scottish Psalter of 1650 is still sung today.</p>
    <p>Most of these psalms are in <strong>Common Metre</strong> (8.6.8.6: lines of eight and six syllables). Any Common Metre tune fits any Common Metre text, so a family that learns two or three tunes can sing dozens of psalms. <strong>Long Metre</strong> (8.8.8.8) works the same way.</p>
    <h2>Hymnody, chant, and canticles</h2>
    <p>English hymnody grew alongside the metrical psalms; Isaac Watts (1674–1748) is its great early writer. Older still is the Western chant tradition, in which the psalms and biblical canticles (such as the Magnificat and Nunc Dimittis) were sung to simple recited tones. Waterside Press hopes to offer short introductions to each.</p>
    <h2>Texts in the Daily Liturgy</h2>
    <ul>${lit.days.map((d) => `<li><a href="${href('daily-liturgy/')}?day=${d.slug}">${d.name}</a>: ${esc(d.song.title)} — <span class="meta">${esc(d.song.tune)}</span></li>`).join('')}</ul>
    <h2>A note on copyright</h2>
    <p>A hymn text being public domain does not make every musical arrangement, edition, or recording public domain. Waterside Press gives tune names for reference only and publishes no sheet music or audio until each item’s rights are checked. See <a href="${href('copyright/')}">Copyright and Permissions</a>.</p>
  </div>
  <aside>
    <div class="card">
      <h2 style="margin-top:0;font-size:1.4rem">Audio and scores in preparation</h2>
      <p class="meta">No recordings or sheet music are published yet.</p>
      ${soon(['Full ensemble recordings', 'Soprano, alto, tenor, and bass part tracks', 'Melody-only tracks', 'Psalm-tone and chant demonstrations', 'Printable sheet music', 'Basic music reading for families'], esc)}
    </div>
  </aside>
</div>`,
  },

  // ───────── LEARNING ─────────
  {
    path: 'learning/', nav: true, title: 'Learning',
    description: 'Introductions to catechisms, historic texts, primary sources, and the scholastic method, with notes for different ages.',
    body: ({ href, esc }) => `
<div class="wrap page-head"><p class="kicker">Understanding the inheritance</p><h1>Learning</h1>
<p class="lede prose">Short introductions that help a household understand what it reads and prays. The aim is understanding, not a collection of quotations.</p></div>
<div class="wrap grid two">
  <div class="prose">
    <h2 style="margin-top:0" id="catechism">How to use a catechism</h2>
    <p>A catechism teaches by question and answer. Its strength is repetition: a child who has said an answer a hundred times owns its words long before grasping all of its meaning, and the meaning grows with the child.</p>
    <ul>
      <li><strong>Young children:</strong> learn the answer by heart, one question a week. Praise effort, not perfection.</li>
      <li><strong>Older children:</strong> ask what one key word means, and find a Bible verse that says the same thing.</li>
      <li><strong>Teenagers and adults:</strong> ask why the answer is phrased as it is, and compare it with another catechism (for example, Heidelberg Q. 1 beside Westminster Q. 1).</li>
    </ul>

    <h2 id="sources">Primary sources and modern commentary</h2>
    <p>A <em>primary source</em> is the historical text itself: Augustine’s words, the Westminster Assembly’s catechism, a prayer as printed in 1662. <em>Commentary</em> is what a later writer says about it — including every introduction on this website. Waterside Press labels the two separately so that a reader always knows which is which.</p>
    <p>When reading an old text, ask: Who wrote this, when, and for whom? What question was the author answering? Which words have changed meaning since? (“Prevent” once meant “go before”; “quick” meant “living.”)</p>

    <h2 id="scholastic">The scholastic method</h2>
    <p>The medieval schools developed a disciplined way of working through hard questions, seen most clearly in the articles of Thomas Aquinas’s <em>Summa Theologiae</em>. Protestant scholastics of the sixteenth and seventeenth centuries used the same method. A typical article proceeds in five steps:</p>
    <ol>
      <li><strong>The question</strong> is stated precisely.</li>
      <li><strong>Objections</strong> are set out — the strongest arguments for the answer the author will reject.</li>
      <li><strong>An authority</strong> is cited on the other side (“On the contrary…”), often Scripture or a Father.</li>
      <li><strong>The response</strong> works through distinctions and reasons to an answer.</li>
      <li><strong>Each objection is answered</strong> in turn, often granting what is true in it.</li>
    </ol>
    <p>The method is not mere hair-splitting: it requires stating an opponent’s case fairly before replying. It is one valuable form of Christian reasoning among others, alongside biblical exposition, preaching, and devotional writing.</p>
    <p class="meta"><strong>For older children:</strong> pick a family question (“Should we have a dog?”), write two objections, find one good reason on the other side, decide, and answer both objections. Then try it with a catechism question.</p>

    <h2 id="traditions">Where traditions differ</h2>
    <p>Christians who share the Apostles’ and Nicene Creeds still differ on real questions — justification, the sacraments, the authority of tradition, the keeping of the Lord’s Day. Waterside Press writes from a Reformed standpoint and says so. When a note touches a disputed point, it aims to state other positions as their own teachers would recognize them, without pretending the difference is small.</p>
  </div>
  <aside>
    <div class="card">
      <h2 style="margin-top:0;font-size:1.4rem">Planned introductions</h2>
      ${soon(['The Church Fathers: who they were', 'An introduction to historic Western liturgy', 'The Reformation in historical context', 'Christian prayer and devotional reading', 'The Psalms in Christian worship', 'The basics of Gregorian chant', 'Reading musical notation', 'Teaching children to sing', 'Logic and theological reasoning'], esc)}
    </div>
  </aside>
</div>`,
  },

  // ───────── ABOUT ─────────
  {
    path: 'about/', nav: true, title: 'About',
    description: 'The mission, theological orientation, and editorial standards of Waterside Press.',
    body: ({ href }) => `
<div class="wrap page-head"><p class="kicker">About</p><h1>About Waterside Press</h1></div>
<div class="wrap prose">
  <p class="lede">Waterside Press equips Christian households to worship, learn, sing, and grow in the faith through the riches of historic Christian texts, liturgy, catechesis, music, and devotional practice.</p>
  <h2>Why “Waterside”</h2>
  <p>The name comes from Psalm 1: the one who delights in the law of the Lord “is like a tree planted by streams of water that yields its fruit in its season” (Psalm 1:3, ESV). The image is of rootedness and slow, steady growth — the kind of formation that happens in a household over years.</p>
  <h2>Theological orientation</h2>
  <p>Waterside Press draws from the historic Western Christian tradition. Its theological instincts are Reformed: it holds to the authority and sufficiency of Scripture, salvation by grace alone through faith in Christ, the covenant faithfulness of God across generations, and the ordinary means by which faith is nourished — the Word, the sacraments, and prayer.</p>
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
<p class="lede prose">Recover the inheritance. Preserve its integrity. Make it usable at home.</p></div>
<div class="wrap prose">
  <h2 style="margin-top:0">Rules we keep</h2>
  <ul>
    <li>We do not invent quotations, authors, dates, editions, translations, or provenance.</li>
    <li>We distinguish exact quotation from paraphrase, and the historical text from modern commentary.</li>
    <li>We say when spelling has been modernized or a text abridged, and we mark omissions (…).</li>
    <li>Prayers and notes written by Waterside Press are labelled as such and are never attributed to historical writers.</li>
    <li>Where authorship is traditional rather than certain (for example, the “Prayer of St. Chrysostom”), we say so.</li>
    <li>We link to original sources wherever possible, and correct broken links and errors when they are found.</li>
    <li>Where traditions disagree, we describe positions fairly and say which one we hold.</li>
  </ul>
  <h2>Labels used on this site</h2>
  <dl class="record">
    <dt>Historic text</dt><dd>Words from a named historical source, reproduced as printed or with disclosed light modernization.</dd>
    <dt>Scripture · ESV</dt><dd>Quoted from the English Standard Version under Crossway’s published permissions.</dd>
    <dt>Waterside Press original</dt><dd>Written for this site. Not a historical text.</dd>
    <dt>Editorial note / Modern introduction</dt><dd>Commentary written by Waterside Press.</dd>
    <dt>Excerpt</dt><dd>Part of a work, not the whole.</dd>
    <dt>Full-text PDF · external</dt><dd>A PDF hosted by the named repository. We have opened the link and checked the title page against the stated edition.</dd>
    <dt>Waterside transcription</dt><dd>Text typed by Waterside Press from a stated edition.</dd>
  </dl>
  <h2>How a library item is checked</h2>
  <ol>
    <li>Identify the exact work and edition.</li>
    <li>Identify the repository or rights holder.</li>
    <li>Determine the copyright status of that edition (not merely of the original work).</li>
    <li>Open the file and confirm it matches the title and edition.</li>
    <li>Test the direct link and record the date.</li>
    <li>Write the record and introduction; publish only when complete.</li>
  </ol>
  <p><strong>A limit we state openly:</strong> for externally hosted PDFs we confirm that the link works and that the title page matches. We have not yet compared every page of each file against its printed source. Where that fuller check has not been made, the record says so.</p>
  <p>Works that fail any step are withheld. A smaller library of accurate records is better than a large catalogue of doubtful ones.</p>
  <p>See also <a href="${href('copyright/')}">Copyright and Permissions</a>.</p>
</div>`,
  },

  // ───────── COPYRIGHT ─────────
  {
    path: 'copyright/', title: 'Copyright and Permissions',
    description: 'Copyright, permissions, and attribution for texts, Scripture quotations, and linked files on Waterside Press.',
    body: ({ lit }) => `
<div class="wrap page-head"><p class="kicker">Rights</p><h1>Copyright and Permissions</h1></div>
<div class="wrap prose">
  <h2 style="margin-top:0">Scripture</h2>
  <p>${lit.ESV_NOTICE}</p>
  <p>Crossway permits quotation of the ESV without written permission within published limits (as stated by Crossway: up to 500 verses, provided the verses quoted amount to no more than one-half of any one book of the Bible and less than 25 percent of the total text of the work in which they are quoted). Waterside Press quotes well under that limit and gives the notice above. Readers can open every passage at esv.org.</p>
  <h2>Historic texts</h2>
  <ul>
    <li><strong>Book of Common Prayer (1662):</strong> public domain in most of the world. In the United Kingdom, rights in the Book of Common Prayer are vested in the Crown and administered under letters patent; short liturgical texts are reproduced here for worship.</li>
    <li><strong>Westminster Shorter Catechism (1647):</strong> public domain.</li>
    <li><strong>Scottish Metrical Psalter (1650), Isaac Watts, Thomas Ken:</strong> public domain texts. Musical arrangements and recordings of these texts may be under copyright and are not reproduced.</li>
  </ul>
  <h2>Linked files</h2>
  <p>PDFs in the library are hosted by the repositories named on each record. Those repositories set their own terms of use. Waterside Press links to the files and does not copy or re-host them.</p>
  <h2>Waterside Press content</h2>
  <p>Introductions, notes, and original prayers are © Waterside Press. Families and churches may print the Daily Liturgy for use in worship and teaching.</p>
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
<div class="wrap prose">
  <p>Waterside Press has no accounts, no mailing list, no analytics, no advertising, and no tracking pixels. It sets no cookies.</p>
  <h2>What your browser stores</h2>
  <p>On the Daily Liturgy page, two preferences — simplified mode and text size — are kept in your own browser’s local storage so they are remembered next time. They never leave your device. Clearing your browser’s site data removes them.</p>
  <h2>Third-party requests</h2>
  <ul>
    <li><strong>Fonts:</strong> pages load the EB Garamond and Source Sans 3 typefaces from Google Fonts. Your browser therefore contacts Google’s servers, which receive your IP address and browser details as part of that request. See Google’s privacy policy for how that data is handled.</li>
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
<div class="wrap prose">
  <p>Waterside Press aims to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA. We have not had an independent audit, and we do not claim full conformance.</p>
  <h2>What the site does</h2>
  <ul>
    <li>Semantic headings, landmarks, and a “Skip to content” link.</li>
    <li>Full keyboard operation, with visible focus outlines.</li>
    <li>Text colours chosen for at least 4.5:1 contrast against their backgrounds, in light and dark modes.</li>
    <li>Adjustable text size on the Daily Liturgy, and layouts that reflow on small screens and at 200% zoom.</li>
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
<div class="wrap prose">
  <p>Dear friend,</p>
  <p>You have been given charge of a household, and with it a quiet and serious work. Long before there were Sunday schools or Christian publishers, God told his people where the faith would be handed on:</p>
  <blockquote><p>“Hear, O Israel: The <span class="sc">Lord</span> our God, the <span class="sc">Lord</span> is one. You shall love the <span class="sc">Lord</span> your God with all your heart and with all your soul and with all your might. And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise.”<br><span class="meta">Deuteronomy 6:4–7 (ESV)</span></p></blockquote>
  <p>Notice the order. The words are first to be on <em>your</em> heart. Only then are they to be taught. A household learns to love God less from what it is told than from what it sees loved.</p>
  <p>Notice also the places: sitting in the house, walking by the way, lying down, rising up. This is not a programme for special occasions. It is the ordinary rhythm of a home, gently shaped around the Word of God.</p>
  <p>The apostle Paul describes the same life in the language of the church: “Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom, singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God” (Colossians 3:16, ESV). And to fathers he gives a charge and a caution together: “Fathers, do not provoke your children to anger, but bring them up in the discipline and instruction of the Lord” (Ephesians 6:4, ESV). The instruction is to be the Lord’s, and it is to be given without harshness.</p>
  <p>Family worship, then, is nothing exotic. It is reading the Scriptures together, praying together, singing together, and teaching the faith — a few minutes, most days, for years. You do not need training or a fine voice. You need a Bible, a little time, and the willingness to begin again when you miss a day.</p>
  <p>Take courage from the Lord’s promise: “For where two or three are gathered in my name, there am I among them” (Matthew 18:20, ESV). Christ spoke those words of his church, and a household at prayer is not the whole church. But it is a place where his people gather in his name, and he does not despise small things.</p>
  <p>Keep this work in its place. Your household is not a substitute for the congregation, nor are you a substitute for its ministers. The preaching of the Word, the sacraments, and the care of faithful pastors are gifts your family needs. Household worship prepares hearts for the Lord’s Day and carries its fruit through the week.</p>
  <p>Begin small. Begin tonight, if you can. The <a href="${href('daily-liturgy/')}">Daily Liturgy</a> is set out so that you can simply open it and read.</p>
  <p>With hope in Christ,<br><em>Waterside Press</em></p>
  <p class="meta">Scripture quotations are from the ESV® Bible, © 2001 by Crossway. Used by permission. All rights reserved.</p>
</div>`,
  },
];

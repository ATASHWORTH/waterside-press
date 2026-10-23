// Waterside Press — Library records.
// Only records that are actually published appear here. Withheld candidates are listed
// in docs/WITHHELD.md, never on the site.
//
// pdf.status values:
//   "link-checked"  – URL fetched on `checked`, returned a PDF whose title page matches the
//                     edition below. Page-by-page completeness was NOT machine-verified.
// rights values:
//   "pd-us"         – Public domain in the United States by publication date (pre-1931).
//   "pd-historic"   – Historic text, public domain; Waterside transcription of a short portion.
//   "pd-text"       – The work is public domain; the online edition we link to is the host's own,
//                     and its separate status (e.g. a modern transcription) has not been checked.
//   "in-copyright"  – In copyright; the rights holder makes it free to read online. Link only.
//
// online: [{ url, host, kind: 'text' | 'scan', label? }] – where the work can be read free online.
//   Checked 2026-10-11: each URL loaded and showed the stated work and author. Edition-level
//   collation and page-by-page completeness were NOT checked unless the record says so.
// modern: [{ url, label? }] – modern-English editions at Updated Works (updatedworks.com), a
//   recommended outside resource. Free to read with a free account; their editions are their own
//   copyright. Each URL loaded and showed the stated work on 2026-10-11.

export const categories = [
  ['catechisms', 'Catechisms and doctrinal instruction'],
  ['prayer', 'Prayer books and liturgical texts'],
  ['psalters', 'Psalters, hymns, and sacred music'],
  ['devotional', 'Devotionals, meditations, and spiritual formation'],
  ['scripture', 'Scripture reading and lectionaries'],
  ['theology', 'Theology and historical Christian thought'],
  ['household', 'Christian education and household formation'],
  ['history', 'Church history and primary sources'],
  ['music-theory', 'Music theory and singing at home'],
  ['literature', 'Literature and the Christian imagination'],
];

export const works = [
  {
    id: 'pilgrims-progress',
    title: "The Pilgrim's Progress",
    subtitle: 'From This World to That Which Is to Come',
    author: 'John Bunyan (1628–1688)',
    authorKey: 'John Bunyan',
    period: 'Post-Reformation (17th century)',
    periodKey: '17th century',
    original: 'Part I, 1678; Part II, 1684',
    tradition: 'English Puritan / Nonconformist',
    language: 'English',
    categories: ['devotional', 'household'],
    tags: ['allegory', 'Puritan', 'reading aloud', 'family reading'],
    type: 'Full-text PDF (repository edition)',
    audience: 'Older children (read aloud), teenagers, adults',
    summary: 'Bunyan’s allegory of the Christian life: Christian leaves the City of Destruction, loses his burden at the cross, and travels through trial and companionship to the Celestial City.',
    context: [
      'Bunyan, a tinker and Baptist preacher from Bedfordshire, wrote much of Part I while imprisoned for preaching without a licence after the Restoration. The book became one of the most widely read works in the English language and was for generations a staple of household reading alongside the Bible.',
      'Its theology is that of English Puritanism: conviction of sin, justification by faith in Christ, and a long pilgrimage of perseverance. Readers from other traditions will notice its strong emphasis on personal conversion and its sharp portraits of formalism and worldliness.',
    ],
    family: 'Read a short episode aloud each evening. Younger children follow the journey; older children can trace each character to a Bible passage. The Slough of Despond, the Interpreter’s House, and the Cross (Part I) make good starting points.',
    edition: 'CCEL electronic edition, prepared by Logos Research Systems from the edition published at Auburn by Derby and Miller and at Buffalo by Geo. H. Derby and Co., 1853.',
    publisher: 'Derby and Miller (1853 source); electronic edition by Christian Classics Ethereal Library',
    translator: null,
    editor: null,
    repository: 'Christian Classics Ethereal Library (Calvin University)',
    sourcePage: 'https://ccel.org/ccel/bunyan/pilgrim',
    rights: 'pd-us',
    rightsNote: 'Bunyan’s text is public domain. The 1853 source edition is public domain in the United States. The CCEL electronic edition is offered by CCEL for free reading and download; Waterside links to it and does not re-host it.',
    pdf: {
      url: 'https://ccel.org/ccel/bunyan/pilgrim/cache/pilgrim.pdf',
      host: 'ccel.org',
      status: 'link-checked',
      checked: '2026-10-11',
      size: null,
    },
    transcription: null,
    online: [
      { url: 'https://ccel.org/ccel/bunyan/pilgrim/pilgrim', host: 'ccel.org', kind: 'text', label: 'Parts I and II' },
      { url: 'https://www.gutenberg.org/ebooks/131', host: 'gutenberg.org', kind: 'text', label: 'Part I only' },
    ],
    modern: [{ url: 'https://updatedworks.com/books/the-pilgrims-progress-modern-translation/' }],
  },
  {
    id: 'serious-call',
    title: 'A Serious Call to a Devout and Holy Life',
    subtitle: 'Adapted to the State and Condition of All Orders of Christians',
    author: 'William Law (1686–1761)',
    authorKey: 'William Law',
    period: 'Eighteenth century',
    periodKey: '18th century',
    original: '1729',
    tradition: 'Church of England (Nonjuror)',
    language: 'English',
    categories: ['devotional', 'household'],
    tags: ['holiness', 'daily prayer', 'Anglican', 'rule of life'],
    type: 'Full-text PDF (repository edition)',
    audience: 'Adults, older teenagers',
    summary: 'A searching call to order every part of daily life — work, money, time, and prayer — toward God, illustrated with sketches of imaginary characters.',
    context: [
      'Law was a Cambridge fellow who lost his position for refusing the oath of allegiance to George I (a “Nonjuror”). A Serious Call deeply affected John and Charles Wesley, George Whitefield, and Samuel Johnson, and shaped eighteenth-century piety on both sides of the Atlantic.',
      'Law’s emphasis falls on intention and disciplined devotion; he proposes set hours of prayer through the day. Reformed readers will want to read it alongside clear teaching on justification by grace, a theme Law presupposes more than he develops. In later life Law was drawn to the speculative writings of Jacob Boehme; those later works are not this book.',
    ],
    family: 'Better suited to parents than to children. Chapters 14–15 on morning devotion and psalm-singing speak directly to household worship.',
    edition: 'CCEL electronic edition of the text first printed for William Innys, London, 1729.',
    publisher: 'William Innys, London (1729 source); electronic edition by Christian Classics Ethereal Library',
    translator: null,
    editor: null,
    repository: 'Christian Classics Ethereal Library (Calvin University)',
    sourcePage: 'https://ccel.org/ccel/law/serious_call',
    rights: 'pd-us',
    rightsNote: 'Law’s 1729 text is public domain. Waterside links to the CCEL edition and does not re-host it.',
    pdf: {
      url: 'https://ccel.org/ccel/law/serious_call/cache/serious_call.pdf',
      host: 'ccel.org',
      status: 'link-checked',
      checked: '2026-10-11',
      size: null,
    },
    transcription: null,
    online: [{ url: 'https://www.ccel.org/ccel/law/serious_call', host: 'ccel.org', kind: 'text' }],
    modern: [{ url: 'https://updatedworks.com/books/a-serious-call-to-a-devout-and-holy-life-modern-translation/' }],
  },
  {
    id: 'westminster-shorter-catechism',
    title: 'The Westminster Shorter Catechism',
    subtitle: 'Questions used in Family Catechesis',
    author: 'Westminster Assembly of Divines',
    authorKey: 'Westminster Assembly',
    period: 'Reformation and post-Reformation (17th century)',
    periodKey: '17th century',
    original: 'Completed 1647; approved by the General Assembly of the Church of Scotland, 1648',
    tradition: 'Reformed / Presbyterian',
    language: 'English',
    categories: ['catechisms', 'household'],
    tags: ['catechism', 'Reformed', 'memorization', 'children'],
    type: 'Excerpt — Waterside transcription',
    audience: 'Children and adults',
    summary: 'The best-known catechism of the English-speaking Reformed churches: 107 questions and answers, beginning with “What is the chief end of man?”',
    context: [
      'The Westminster Assembly was summoned by the English Parliament in 1643. Alongside the Confession of Faith and the Larger Catechism it produced the Shorter Catechism “for such as are of weaker capacity,” meaning children and new learners. It became the standard catechism of Presbyterian churches and was widely used by Congregationalists and Baptists in adapted forms.',
      'Its answers repeat the language of the question, so that each answer can be recited as a complete sentence. This is a deliberate aid to memory.',
    ],
    family: 'Learn one question a week. The Family Catechesis sessions are built around these questions.',
    edition: 'Selected questions (1–6, 9, 10, 59) with older spelling retained. Not a complete text. Wording follows the traditional English text; to be collated against a 1648 printing before the full catechism is published.',
    publisher: null,
    translator: null,
    editor: 'Waterside Press (selection)',
    repository: null,
    sourcePage: null,
    rights: 'pd-historic',
    rightsNote: 'The 1647 text is public domain. The selection is a Waterside Press transcription.',
    pdf: null,
    transcription: 'wsc',
    online: [{ url: 'https://www.opc.org/sc.html', host: 'opc.org', kind: 'text', label: 'All 107 questions' }],
  },
  {
    id: 'apostles-creed',
    title: "The Apostles' Creed",
    subtitle: 'In the form of the Book of Common Prayer (1662)',
    author: 'Ancient Western baptismal creed',
    authorKey: 'Anonymous / ancient',
    period: 'Early and medieval Church',
    periodKey: 'Early Church',
    original: 'Developed from the Old Roman Creed (2nd–4th centuries); received form attested by the 8th century',
    tradition: 'Common to the Western Church',
    language: 'English',
    categories: ['catechisms', 'prayer', 'history'],
    tags: ['creed', 'baptism', 'catechism'],
    type: 'Waterside transcription (complete short text)',
    audience: 'All ages',
    summary: 'The baptismal confession of the Western Church, used in morning and evening prayer and taught in nearly every Western catechism.',
    context: [
      'The name reflects a medieval legend that each apostle contributed a clause. The creed in fact grew from the baptismal questions of the church at Rome — the “Old Roman Creed” — and reached its received form in the early Middle Ages.',
      'Luther’s Small Catechism, the Heidelberg Catechism, and the Westminster Shorter Catechism (in an appendix) all use it to teach the faith, though they arrange their exposition differently.',
    ],
    family: 'It is said at Morning and Evening Prayer in the Daily Office. Young children can learn it a clause at a time.',
    edition: 'Text of the Book of Common Prayer (1662), Morning Prayer. Spelling “Catholick” modernized to “Catholic.”',
    publisher: null,
    translator: null,
    editor: 'Waterside Press (transcription)',
    repository: null,
    sourcePage: null,
    rights: 'pd-historic',
    rightsNote: 'The creed is public domain. Note: in the United Kingdom the Book of Common Prayer is subject to Crown rights administered under letters patent; this short liturgical text is reproduced for worship.',
    pdf: null,
    transcription: 'creed',
  },

  // ── Records added 2026-10-11: read-free-online links (see header for what was checked) ──
  ...[
    // Scripture
    { id: 'esv-bible', title: 'The Holy Bible, English Standard Version', author: 'Crossway', authorKey: 'Crossway', period: 'Modern', periodKey: 'Modern', original: '2001', tradition: 'Protestant (translation)', categories: ['scripture'], tags: ['Bible', 'ESV'], audience: 'All ages',
      summary: 'An essentially literal modern translation in the Tyndale and King James tradition. The Scripture text used in the Daily Office.',
      family: 'Read the Office lessons here. The Daily Office links each psalm and lesson to esv.org.',
      edition: 'ESV text as published by Crossway at esv.org.', publisher: 'Crossway', rights: 'in-copyright',
      rightsNote: 'The ESV is © Crossway. Crossway makes it free to read at esv.org. Waterside quotes it within Crossway’s published permissions and links to it for reading.',
      online: [{ url: 'https://www.esv.org/Genesis+1/', host: 'esv.org', kind: 'text' }] },
    { id: 'kjv-bible', title: 'The Holy Bible, King James Version', subtitle: 'The Authorized Version', author: 'Translators under James I', authorKey: 'King James translators', period: 'Post-Reformation (17th century)', periodKey: '17th century', original: '1611', tradition: 'Church of England', categories: ['scripture'], tags: ['Bible', 'KJV'], audience: 'All ages',
      summary: 'The English Bible of the Prayer Book, the Puritans, and every work in this library written before 1880.',
      edition: 'Project Gutenberg e-text #10 (modern standard KJV text, not the 1611 printing).', repository: 'Project Gutenberg', sourcePage: 'https://www.gutenberg.org/ebooks/10', rights: 'pd-text',
      rightsNote: 'Public domain in the United States. In the United Kingdom the Authorized Version is subject to Crown rights under letters patent.',
      online: [{ url: 'https://www.gutenberg.org/ebooks/10', host: 'gutenberg.org', kind: 'text' }] },

    // Catechisms and confessions
    { id: 'luther-small-catechism', title: 'The Small Catechism', author: 'Martin Luther (1483–1546)', authorKey: 'Martin Luther', period: 'Reformation (16th century)', periodKey: '16th century', original: '1529', tradition: 'Lutheran', categories: ['catechisms', 'household'], tags: ['catechism', 'Lutheran', 'children'], audience: 'Children and adults',
      summary: 'Written for heads of households: the Commandments, Creed, Lord’s Prayer, and sacraments, each followed by “What does this mean?”',
      family: 'Luther meant the father to teach it at home. One part a week, recited at the table.',
      edition: 'Project Gutenberg e-text #1670, “Luther’s Little Instruction Book,” translated by Robert E. Smith.', translator: 'Robert E. Smith', repository: 'Project Gutenberg', sourcePage: 'https://www.gutenberg.org/ebooks/1670', rights: 'pd-text',
      rightsNote: 'Luther’s text is public domain. This is a modern translation distributed free by Project Gutenberg; its own copyright status has not been checked. Read it there; do not reprint.',
      online: [{ url: 'https://www.gutenberg.org/ebooks/1670', host: 'gutenberg.org', kind: 'text' }] },
    { id: 'heidelberg-catechism', title: 'The Heidelberg Catechism', author: 'Zacharias Ursinus and Caspar Olevianus', authorKey: 'Ursinus and Olevianus', period: 'Reformation (16th century)', periodKey: '16th century', original: '1563', tradition: 'Reformed', categories: ['catechisms', 'household'], tags: ['catechism', 'Reformed', 'Lord’s Day'], audience: 'Teenagers and adults; children with help',
      summary: '129 questions arranged in 52 Lord’s Days, opening with “What is thy only comfort in life and death?”',
      family: 'One Lord’s Day each Sunday takes a family through it in a year.',
      edition: 'CCEL web text in an older English translation (translator not stated by the host). A modern translation is available from the Christian Reformed Church.', repository: 'Christian Classics Ethereal Library', sourcePage: 'https://www.ccel.org/creeds/heidelberg-cat.html', rights: 'pd-text',
      rightsNote: 'The 1563 catechism is public domain. Modern translations, including the CRC’s, are copyrighted by their publishers.',
      online: [{ url: 'https://www.ccel.org/creeds/heidelberg-cat.html', host: 'ccel.org', kind: 'text', label: 'Older translation' }, { url: 'https://www.crcna.org/welcome/beliefs/confessions/heidelberg-catechism', host: 'crcna.org', kind: 'text', label: 'Modern translation' }] },
    { id: 'owen-two-catechisms', title: 'Two Short Catechisms', author: 'John Owen (1616–1683)', authorKey: 'John Owen', period: 'Post-Reformation (17th century)', periodKey: '17th century', original: '1645', tradition: 'English Puritan / Congregational', categories: ['catechisms', 'household'], tags: ['catechism', 'Puritan', 'children'], audience: 'Children and adults',
      summary: 'A lesser catechism for children and a greater one for older learners, written for his parishioners at Fordham.',
      edition: 'CCEL electronic edition.', repository: 'Christian Classics Ethereal Library', sourcePage: 'https://ccel.org/ccel/owen/catechisms/catechisms', rights: 'pd-text', rightsNote: 'Owen’s text is public domain.',
      online: [{ url: 'https://ccel.org/ccel/owen/catechisms/catechisms', host: 'ccel.org', kind: 'text' }] },
    { id: 'westminster-confession', title: 'The Westminster Confession of Faith', author: 'Westminster Assembly of Divines', authorKey: 'Westminster Assembly', period: 'Post-Reformation (17th century)', periodKey: '17th century', original: '1646', tradition: 'Reformed / Presbyterian', categories: ['catechisms', 'theology'], tags: ['confession', 'Reformed'], audience: 'Adults, older teenagers',
      summary: 'Thirty-three chapters, from Holy Scripture to the Last Judgment. The doctrinal standard behind the Shorter Catechism.',
      edition: 'Web text of the Orthodox Presbyterian Church (American revision of 1788 and later).', repository: 'Orthodox Presbyterian Church', sourcePage: 'https://www.opc.org/wcf.html', rights: 'pd-text',
      rightsNote: 'The 1646 text is public domain. The OPC’s text includes its later American revisions.',
      online: [{ url: 'https://www.opc.org/wcf.html', host: 'opc.org', kind: 'text' }] },
    { id: 'westminster-larger-catechism', title: 'The Westminster Larger Catechism', author: 'Westminster Assembly of Divines', authorKey: 'Westminster Assembly', period: 'Post-Reformation (17th century)', periodKey: '17th century', original: '1647', tradition: 'Reformed / Presbyterian', categories: ['catechisms'], tags: ['catechism', 'Reformed'], audience: 'Adults, older teenagers',
      summary: '196 questions, with fuller treatment of the Commandments and of the duties of each station of life.',
      edition: 'Web text of the Orthodox Presbyterian Church.', repository: 'Orthodox Presbyterian Church', sourcePage: 'https://www.opc.org/lc.html', rights: 'pd-text', rightsNote: 'The 1647 text is public domain.',
      online: [{ url: 'https://www.opc.org/lc.html', host: 'opc.org', kind: 'text' }] },

    // Prayer and worship
    { id: 'bcp-1662', title: 'The Book of Common Prayer', subtitle: '1662', author: 'Church of England', authorKey: 'Church of England', period: 'Post-Reformation (17th century)', periodKey: '17th century', original: '1662', tradition: 'Church of England', categories: ['prayer', 'scripture'], tags: ['liturgy', 'collects', 'psalter', 'lectionary'], audience: 'All ages',
      summary: 'Morning and Evening Prayer, the collects, the Psalter, and the daily lectionary. The source of most fixed prayers in English, and of the Daily Office on this site.',
      edition: 'John Baskerville’s 1762 Cambridge printing, presented section by section as PDFs by the Society of Archbishop Justus.', publisher: 'John Baskerville, Cambridge, 1762', repository: 'Society of Archbishop Justus', sourcePage: 'http://justus.anglican.org/resources/bcp/1662/baskerville.htm', rights: 'pd-us',
      rightsNote: 'Public domain in the United States. In the United Kingdom the Book of Common Prayer is subject to Crown rights under letters patent.',
      online: [{ url: 'http://justus.anglican.org/resources/bcp/1662/baskerville.htm', host: 'justus.anglican.org', kind: 'scan' }] },
    { id: 'directory-family-worship', title: 'The Directory for Family Worship', author: 'Church of Scotland', authorKey: 'Church of Scotland', period: 'Post-Reformation (17th century)', periodKey: '17th century', original: '1647', tradition: 'Reformed / Presbyterian', categories: ['prayer', 'household'], tags: ['family worship', 'Puritan'], audience: 'Heads of households',
      summary: 'Fourteen short directions for daily worship in the home: prayer, Scripture, singing, and catechizing.',
      family: 'The pattern behind household worship as the Puritans kept it. Read it once a year.',
      edition: 'Modernized text presented by Semper Reformanda; wording differs from the 1647 original.', repository: 'Semper Reformanda', sourcePage: 'https://www.semperreformanda.com/creeds/the-directory-for-family-worship/', rights: 'pd-text',
      rightsNote: 'The 1647 text is public domain. The modernized wording is the host’s.',
      online: [{ url: 'https://www.semperreformanda.com/creeds/the-directory-for-family-worship/', host: 'semperreformanda.com', kind: 'text', label: 'Modernized' }] },
    { id: 'owen-worship', title: 'A Brief Instruction in the Worship of God', author: 'John Owen (1616–1683)', authorKey: 'John Owen', period: 'Post-Reformation (17th century)', periodKey: '17th century', original: '1667', tradition: 'English Puritan / Congregational', categories: ['prayer', 'theology'], tags: ['worship', 'Puritan', 'catechism'], audience: 'Adults',
      summary: 'A catechism on how God is to be worshiped.', edition: 'CCEL electronic edition.', repository: 'Christian Classics Ethereal Library', sourcePage: 'https://ccel.org/ccel/owen/worship/worship', rights: 'pd-text', rightsNote: 'Owen’s text is public domain.',
      online: [{ url: 'https://ccel.org/ccel/owen/worship/worship', host: 'ccel.org', kind: 'text' }] },
    { id: 'henry-method-for-prayer', title: 'A Method for Prayer', author: 'Matthew Henry (1662–1714)', authorKey: 'Matthew Henry', period: 'Eighteenth century', periodKey: '18th century', original: '1710', tradition: 'English Presbyterian / Nonconformist', categories: ['prayer', 'household'], tags: ['prayer', 'Scripture'], audience: 'Heads of households, adults',
      summary: 'Scripture phrases arranged under each part of prayer: adoration, confession, petition, thanksgiving, and intercession.',
      family: 'A handbook for the one who leads family prayer. Borrow its Scripture language a section at a time.',
      edition: 'Available here in a modern-English edition only.', rights: 'pd-text', rightsNote: 'Henry’s 1710 text is public domain. The Updated Works edition is their own.',
      modern: [{ url: 'https://updatedworks.com/books/a-method-for-prayer-modern-translation/' }] },

    // Psalters
    { id: 'bay-psalm-book', title: 'The Bay Psalm Book', subtitle: 'The Whole Booke of Psalmes Faithfully Translated into English Metre', author: 'Massachusetts Bay Colony ministers', authorKey: 'Bay Psalm Book', period: 'Post-Reformation (17th century)', periodKey: '17th century', original: '1640', tradition: 'English Puritan / Congregational', categories: ['psalters', 'history'], tags: ['psalter', 'metrical psalms', 'America'], audience: 'Adults; history',
      summary: 'The first book printed in British North America. Metrical psalms only.',
      edition: 'Library of Congress page images of the 1640 Cambridge, Massachusetts first edition. This copy is imperfect: the title page and 18 other leaves are missing.', repository: 'Library of Congress', sourcePage: 'https://www.loc.gov/resource/rbc0001.2008amimp02405/', rights: 'pd-us', rightsNote: 'Public domain.',
      online: [{ url: 'https://www.loc.gov/resource/rbc0001.2008amimp02405/', host: 'loc.gov', kind: 'scan' }] },
    { id: 'scottish-psalter-1650', title: 'The Scottish Metrical Psalter', author: 'Church of Scotland', authorKey: 'Church of Scotland', period: 'Post-Reformation (17th century)', periodKey: '17th century', original: '1650', tradition: 'Reformed / Presbyterian', categories: ['psalters', 'household'], tags: ['psalter', 'metrical psalms', 'common meter', 'singing'], audience: 'All ages',
      summary: 'All 150 psalms in meter, almost all in common meter, so nearly any psalm fits a tune the family already knows. Still sung today.',
      family: 'Learn five common-meter tunes and use them for everything.',
      edition: 'Web text presented one psalm per page by The Westminster Standard.', repository: 'The Westminster Standard', sourcePage: 'https://thewestminsterstandard.org/1650-scottish-metrical-psalter/', rights: 'pd-text', rightsNote: 'The 1650 text is public domain.',
      online: [{ url: 'https://thewestminsterstandard.org/1650-scottish-metrical-psalter/', host: 'thewestminsterstandard.org', kind: 'text', label: 'Psalm by psalm' }] },
    { id: 'tate-brady', title: 'A New Version of the Psalms of David', subtitle: 'Fitted to the Tunes Used in Churches', author: 'Nahum Tate (1652–1715) and Nicholas Brady (1659–1726)', authorKey: 'Tate and Brady', period: 'Post-Reformation (17th century)', periodKey: '17th century', original: '1696', tradition: 'Church of England', categories: ['psalters'], tags: ['psalter', 'metrical psalms'], audience: 'Adults',
      summary: 'The “New Version” that replaced Sternhold and Hopkins in many English parishes. Source of “Through all the changing scenes of life” and “As pants the hart.”',
      edition: 'Internet Archive scan of the 1698 London edition (T. Hodgkin), Princeton Theological Seminary Library copy. Pages 25–26 and 239–240 are damaged and missing.', publisher: 'T. Hodgkin, London, 1698', repository: 'Internet Archive', sourcePage: 'https://archive.org/details/newversionofpsal1698brad', rights: 'pd-us', rightsNote: 'Public domain.',
      online: [{ url: 'https://archive.org/details/newversionofpsal1698brad', host: 'archive.org', kind: 'scan' }] },
    { id: 'watts-psalms-imitated', title: 'The Psalms of David Imitated in the Language of the New Testament', author: 'Isaac Watts (1674–1748)', authorKey: 'Isaac Watts', period: 'Eighteenth century', periodKey: '18th century', original: '1719', tradition: 'English Congregational / Nonconformist', categories: ['psalters'], tags: ['psalter', 'hymns'], audience: 'All ages',
      summary: 'Watts’ Christianized psalms, the source of “O God, Our Help in Ages Past” and “Joy to the World.”',
      edition: 'Internet Archive scan of the 1799 Northampton edition (William Butler), Princeton Theological Seminary Library copy. CCEL also has a web text combined with his Hymns.', publisher: 'William Butler, Northampton, 1799', repository: 'Internet Archive', sourcePage: 'https://archive.org/details/psalmsofdavidimi1799watt', rights: 'pd-us', rightsNote: 'Public domain.',
      online: [{ url: 'https://archive.org/details/psalmsofdavidimi1799watt', host: 'archive.org', kind: 'scan', label: '1799 edition' }, { url: 'https://www.ccel.org/ccel/watts/psalmshymns', host: 'ccel.org', kind: 'text', label: 'With his Hymns' }] },

    // Devotional
    { id: 'imitation-of-christ', title: 'The Imitation of Christ', author: 'Thomas à Kempis (c. 1380–1471)', authorKey: 'Thomas à Kempis', period: 'Late medieval', periodKey: '15th century', original: 'c. 1427', tradition: 'Late medieval (Devotio Moderna)', categories: ['devotional'], tags: ['devotion', 'humility'], audience: 'Adults, older teenagers',
      summary: 'Short chapters on humility, self-denial, and love for Christ. Read a paragraph and let it sit.',
      context: ['A product of the late-medieval Devotio Moderna. Protestant readers have loved it for centuries while reading with discernment, especially in its fourth book on the Mass.'],
      edition: 'Project Gutenberg e-text #1653, translated by William Benham (1831–1910). This replaces the 1940 Croft & Bolton translation withheld earlier.', translator: 'William Benham', repository: 'Project Gutenberg', sourcePage: 'https://www.gutenberg.org/ebooks/1653', rights: 'pd-us',
      rightsNote: 'Benham’s translation predates 1931 and is public domain in the United States.',
      online: [{ url: 'https://www.gutenberg.org/ebooks/1653', host: 'gutenberg.org', kind: 'text' }], modern: [{ url: 'https://updatedworks.com/books/imitation-of-christ-modern-translation/' }] },
    { id: 'practice-of-piety', title: 'The Practice of Piety', subtitle: 'Directing a Christian How to Walk, That He May Please God', author: 'Lewis Bayly (c. 1575–1631)', authorKey: 'Lewis Bayly', period: 'Post-Reformation (17th century)', periodKey: '17th century', original: '1611', tradition: 'English Puritan / Church of England', categories: ['devotional', 'household'], tags: ['devotion', 'Puritan', 'Lord’s Day'], audience: 'Adults',
      summary: 'The best-selling devotional of the seventeenth century: practical directions for prayer, the Lord’s Day, and household order.',
      edition: 'Soli Deo Gloria edition, offered as free PDF and ePub (original and modernized) by Monergism.', repository: 'Monergism', sourcePage: 'https://monergism.com/practice-piety', rights: 'pd-text',
      rightsNote: 'Bayly’s text is public domain. The digital editions are Monergism’s.',
      online: [{ url: 'https://monergism.com/practice-piety', host: 'monergism.com', kind: 'text' }] },
    { id: 'rutherford-letters', title: 'Letters', author: 'Samuel Rutherford (c. 1600–1661)', authorKey: 'Samuel Rutherford', period: 'Post-Reformation (17th century)', periodKey: '17th century', original: '1664', tradition: 'Scottish Presbyterian', categories: ['devotional'], tags: ['letters', 'comfort', 'Covenanter'], audience: 'Adults',
      summary: 'Letters of comfort, many written from exile in Aberdeen. This is a selection.', edition: 'CCEL electronic edition of a selection.', repository: 'Christian Classics Ethereal Library', sourcePage: 'https://www.ccel.org/ccel/rutherford/letters', rights: 'pd-text', rightsNote: 'Public domain.',
      online: [{ url: 'https://www.ccel.org/ccel/rutherford/letters', host: 'ccel.org', kind: 'text', label: 'Selection' }] },
    { id: 'spurgeon-morning-evening', title: 'Morning and Evening', subtitle: 'Daily Readings', author: 'C. H. Spurgeon (1834–1892)', authorKey: 'C. H. Spurgeon', period: 'Nineteenth century', periodKey: '19th century', original: '1865–1868', tradition: 'English Particular Baptist', categories: ['devotional', 'household'], tags: ['daily readings', 'devotion'], audience: 'Adults, teenagers',
      summary: 'A short reading for every morning and evening of the year.', family: 'A parent can read the day’s page aloud after the Office in a minute or two.',
      edition: 'CCEL electronic edition.', repository: 'Christian Classics Ethereal Library', sourcePage: 'https://www.ccel.org/ccel/spurgeon/morneve', rights: 'pd-us', rightsNote: 'Public domain.',
      online: [{ url: 'https://www.ccel.org/ccel/spurgeon/morneve', host: 'ccel.org', kind: 'text' }] },

    // Bunyan
    { id: 'holy-war', title: 'The Holy War', author: 'John Bunyan (1628–1688)', authorKey: 'John Bunyan', period: 'Post-Reformation (17th century)', periodKey: '17th century', original: '1682', tradition: 'English Puritan / Nonconformist', categories: ['devotional', 'household'], tags: ['allegory', 'reading aloud'], audience: 'Older children, teenagers',
      summary: 'The siege and recapture of the town of Mansoul. An allegory for older children.', edition: 'CCEL electronic edition.', repository: 'Christian Classics Ethereal Library', sourcePage: 'https://ccel.org/ccel/bunyan/holy_war/holy_war', rights: 'pd-text', rightsNote: 'Public domain.',
      online: [{ url: 'https://ccel.org/ccel/bunyan/holy_war/holy_war', host: 'ccel.org', kind: 'text' }] },
    { id: 'grace-abounding', title: 'Grace Abounding to the Chief of Sinners', author: 'John Bunyan (1628–1688)', authorKey: 'John Bunyan', period: 'Post-Reformation (17th century)', periodKey: '17th century', original: '1666', tradition: 'English Puritan / Nonconformist', categories: ['devotional'], tags: ['autobiography', 'conversion'], audience: 'Teenagers, adults',
      summary: 'Bunyan’s own account of his conversion and long struggle for assurance.', edition: 'CCEL electronic edition.', repository: 'Christian Classics Ethereal Library', sourcePage: 'https://ccel.org/ccel/bunyan/grace/grace', rights: 'pd-text', rightsNote: 'Public domain.',
      online: [{ url: 'https://ccel.org/ccel/bunyan/grace/grace', host: 'ccel.org', kind: 'text' }], modern: [{ url: 'https://updatedworks.com/books/grace-abounding-to-the-chief-of-sinners-modern-translation/' }] },

    // Household
    { id: 'gouge-domestical-duties', title: 'Of Domestical Duties', author: 'William Gouge (1575–1653)', authorKey: 'William Gouge', period: 'Post-Reformation (17th century)', periodKey: '17th century', original: '1622', tradition: 'English Puritan', categories: ['household', 'theology'], tags: ['marriage', 'parenting', 'Puritan', 'Ephesians 5–6'], audience: 'Husbands, wives, parents',
      summary: 'The great Puritan treatise on the household: husbands and wives, parents and children, masters and servants, worked out from Ephesians 5:21–6:9.',
      family: 'Husbands and wives can each read their own volume of the modern edition, then the volume on parents together.',
      edition: 'Internet Archive scan of the 1622 first edition (Early English Books). Pages 417–448 are missing and a few pages are blurred. Updated Works publishes a modern edition in three volumes.', repository: 'Internet Archive', sourcePage: 'https://archive.org/details/bim_early-english-books-1475-1640_of-domesticall-duties_gouge-william_1622', rights: 'pd-us', rightsNote: 'Public domain. The modern edition is Updated Works’ own.',
      online: [{ url: 'https://archive.org/details/bim_early-english-books-1475-1640_of-domesticall-duties_gouge-william_1622', host: 'archive.org', kind: 'scan', label: '1622 first edition' }],
      modern: [{ url: 'https://updatedworks.com/books/domestic-duties-for-husbands-modern-translation/', label: 'For Husbands' }, { url: 'https://updatedworks.com/books/domestic-duties-for-wives-modern-translation/', label: 'For Wives' }, { url: 'https://updatedworks.com/books/domestic-duties-for-parents-modern-translation/', label: 'For Parents' }] },
  ].map((w) => ({ subtitle: null, language: 'English', tags: [], type: w.online ? 'Read free online (external)' : 'Modern-English edition (external)', context: [], family: null, publisher: null, translator: null, editor: null, repository: null, sourcePage: null, pdf: null, transcription: null, modern: [], ...w })),

  // Puritan and Reformed divines, and reference works (added 2026-10-11)
  ...(() => {
    const A = {
      perkins: ['William Perkins (1558–1602)', 'William Perkins', 'Elizabethan Puritan'],
      sibbes: ['Richard Sibbes (1577–1635)', 'Richard Sibbes', 'English Puritan'],
      shepard: ['Thomas Shepard (1605–1649)', 'Thomas Shepard', 'New England Puritan'],
      burroughs: ['Jeremiah Burroughs (c. 1600–1646)', 'Jeremiah Burroughs', 'English Puritan / Congregational'],
      watson: ['Thomas Watson (c. 1620–1686)', 'Thomas Watson', 'English Puritan / Nonconformist'],
      baxter: ['Richard Baxter (1615–1691)', 'Richard Baxter', 'English Puritan / Nonconformist'],
      owen: ['John Owen (1616–1683)', 'John Owen', 'English Puritan / Congregational'],
      alleine: ['Joseph Alleine (1634–1668)', 'Joseph Alleine', 'English Puritan / Nonconformist'],
      flavel: ['John Flavel (c. 1627–1691)', 'John Flavel', 'English Puritan / Nonconformist'],
      brooks: ['Thomas Brooks (1608–1680)', 'Thomas Brooks', 'English Puritan / Nonconformist'],
      edwards: ['Jonathan Edwards (1703–1758)', 'Jonathan Edwards', 'New England Congregational'],
      luther: ['Martin Luther (1483–1546)', 'Martin Luther', 'Lutheran'],
      calvin: ['John Calvin (1509–1564)', 'John Calvin', 'Reformed'],
      henry: ['Matthew Henry (1662–1714)', 'Matthew Henry', 'English Presbyterian / Nonconformist'],
    };
    const per = (y) => { const n = parseInt(y, 10); return n < 1500 ? ['Late medieval', '15th century'] : n < 1600 ? ['Reformation (16th century)', '16th century'] : n < 1700 ? ['Post-Reformation (17th century)', '17th century'] : ['Eighteenth century', '18th century']; };
    const CCEL = (path) => ({ url: 'https://ccel.org/ccel/' + path, host: 'ccel.org', kind: 'text' });
    const UW = (slug, label) => ({ url: 'https://updatedworks.com/books/' + slug + '-modern-translation/', ...(label ? { label } : {}) });
    const OTW = (file) => ({ url: 'https://onthewing.org/user/' + file, host: 'onthewing.org', kind: 'text', label: 'Modern English (PDF)' });
    const d = (id, a, title, y, cats, tags, summary, { online = [], modern = [], family = null, audience = 'Adults', edition, translator = null } = {}) => {
      const [author, authorKey, tradition] = A[a];
      const [period, periodKey] = per(y);
      const src = online.find((o) => o.host === 'ccel.org');
      return { id, title, subtitle: null, author, authorKey, period, periodKey, original: y, tradition, language: 'English', categories: cats, tags, audience,
        type: online.length ? 'Read free online (external)' : 'Modern-English edition (external)', summary, context: [], family,
        edition: edition || (src ? 'CCEL electronic edition.' : online.length ? `Edition as presented by ${online[0].host}.` : 'Available here in a modern-English edition only.'),
        publisher: null, translator, editor: null, repository: src ? 'Christian Classics Ethereal Library' : null, sourcePage: src ? src.url : null,
        rights: 'pd-text', rightsNote: online.some((o) => o.host !== 'ccel.org') || modern.length ? 'The original text is public domain. Modern-English editions are the work of their editors; read them at the source.' : 'Public domain.',
        pdf: null, transcription: null, online, modern };
    };
    return [
      d('perkins-golden-chain', 'perkins', 'A Golden Chain', '1591', ['theology'], ['Puritan', 'salvation'], 'The father of English Puritanism maps the order of salvation from election to glory.', { modern: [UW('a-golden-chain')] }),
      d('sibbes-bruised-reed', 'sibbes', 'The Bruised Reed', '1630', ['devotional'], ['Puritan', 'comfort'], 'Christ’s tenderness toward weak and struggling believers, from Isaiah 42:3.', { modern: [UW('the-bruised-reed')] }),
      d('shepard-sincere-convert', 'shepard', 'The Sincere Convert', '1641', ['theology', 'devotional'], ['Puritan', 'conversion'], 'A New England pastor on the marks of true conversion.', { modern: [UW('the-sincere-convert')] }),
      d('burroughs-rare-jewel', 'burroughs', 'The Rare Jewel of Christian Contentment', '1648', ['devotional'], ['Puritan', 'contentment'], 'How to be content in every circumstance, and why discontent is a sin.', { modern: [UW('the-rare-jewel-of-christian-contentment')] }),
      d('watson-body-of-divinity', 'watson', 'A Body of Practical Divinity', '1692', ['theology', 'catechisms', 'household'], ['Puritan', 'Shorter Catechism', 'sermons'], 'Sermons on the Westminster Shorter Catechism, published after Watson’s death. The best companion to the catechism ever written.', { online: [CCEL('watson/divinity/divinity')], modern: [UW('a-body-of-divinity')], family: 'Read the chapter on the week’s catechism question before teaching it.' }),
      d('watson-ten-commandments', 'watson', 'The Ten Commandments', '1692', ['theology', 'catechisms'], ['Puritan', 'law', 'sermons'], 'The second part of Watson’s catechism sermons.', { online: [CCEL('watson/commandments/commandments')], modern: [UW('the-ten-commandments')] }),
      d('watson-lords-prayer', 'watson', 'The Lord’s Prayer', '1692', ['theology', 'prayer'], ['Puritan', 'prayer', 'sermons'], 'The third part of Watson’s catechism sermons.', { online: [CCEL('watson/prayer/prayer')], modern: [UW('the-lords-prayer')] }),
      d('watson-divine-contentment', 'watson', 'The Art of Divine Contentment', '1653', ['devotional'], ['Puritan', 'contentment'], 'An exposition of Philippians 4:11.', { online: [CCEL('watson/contentment/contentment')], modern: [UW('the-art-of-divine-contentment')] }),
      d('watson-beatitudes', 'watson', 'The Beatitudes', '1660', ['devotional', 'theology'], ['Puritan', 'Sermon on the Mount'], 'An exposition of Matthew 5:1–12.', { online: [CCEL('watson/beatitudes/beatitudes')], modern: [UW('the-beatitudes')] }),
      d('watson-divine-cordial', 'watson', 'A Divine Cordial', '1663', ['devotional'], ['Puritan', 'providence', 'Romans 8:28'], 'On Romans 8:28: all things working together for good. Updated Works publishes it as All Things for Good.', { online: [CCEL('watson/cordial/cordial')], modern: [UW('all-things-for-good', 'All Things for Good')] }),
      d('watson-lords-supper', 'watson', 'The Lord’s Supper', '1665', ['theology'], ['Puritan', 'sacraments'], 'Preparation for, and right use of, the sacrament.', { modern: [UW('the-lords-supper')] }),
      d('watson-godly-mans-picture', 'watson', 'The Godly Man’s Picture', '1666', ['devotional'], ['Puritan', 'assurance'], 'Twenty-four marks of a true believer.', { modern: [UW('the-godly-mans-picture')] }),
      d('watson-repentance', 'watson', 'The Doctrine of Repentance', '1668', ['devotional', 'theology'], ['Puritan', 'repentance'], 'What repentance is, and how to know it is real.', { modern: [UW('the-doctrine-of-repentance')] }),
      d('watson-heaven-taken-by-storm', 'watson', 'Heaven Taken by Storm', '1669', ['devotional'], ['Puritan', 'discipline'], 'On holy violence: the earnest effort the Christian life requires.', { modern: [UW('heaven-taken-by-storm')] }),
      d('baxter-saints-rest', 'baxter', 'The Saints’ Everlasting Rest', '1650', ['devotional'], ['Puritan', 'heaven'], 'Meditation on heaven, written during severe illness.', { online: [CCEL('baxter/saints_rest/saints_rest')], modern: [UW('the-saints-everlasting-rest')] }),
      d('baxter-reformed-pastor', 'baxter', 'The Reformed Pastor', '1656', ['theology', 'household'], ['Puritan', 'pastoral care', 'catechizing'], 'On a minister’s care for his flock, including catechizing family by family.', { online: [CCEL('baxter/pastor/pastor')], modern: [UW('the-reformed-pastor')] }),
      d('baxter-call-unconverted', 'baxter', 'A Call to the Unconverted', '1658', ['devotional'], ['Puritan', 'evangelism'], 'A plain evangelistic appeal, widely read for two centuries.', { online: [CCEL('baxter/unconverted/unconverted')], modern: [UW('a-call-to-the-unconverted')] }),
      d('owen-mortification', 'owen', 'Of the Mortification of Sin in Believers', '1656', ['devotional', 'theology'], ['Puritan', 'sanctification'], 'How a Christian puts sin to death by the Spirit.', { online: [CCEL('owen/mort/mort')], modern: [UW('the-mortification-of-sin')] }),
      d('owen-communion', 'owen', 'Of Communion with God', '1657', ['devotional', 'theology'], ['Puritan', 'Trinity'], 'Fellowship with the Father, the Son, and the Holy Spirit.', { online: [CCEL('owen/communion/communion')], modern: [UW('communion-with-god')] }),
      d('owen-indwelling-sin', 'owen', 'Indwelling Sin in Believers', '1667', ['theology'], ['Puritan', 'sin'], 'The nature, power, and deceit of remaining sin.', { online: [CCEL('owen/indwellingsin/indwellingsin')] }),
      d('owen-glory-of-christ', 'owen', 'Meditations on the Glory of Christ', '1684', ['devotional'], ['Puritan', 'Christ'], 'His last work, finished as he was dying.', { online: [CCEL('owen/glory/glory')], modern: [UW('the-glory-of-christ')] }),
      d('alleine-alarm', 'alleine', 'An Alarm to the Unconverted', '1671', ['devotional'], ['Puritan', 'evangelism'], 'An urgent call to conversion, published after the author’s early death.', { modern: [UW('an-alarm-to-the-unconverted')] }),
      d('flavel-keeping-the-heart', 'flavel', 'A Saint Indeed, or Keeping the Heart', '1668', ['devotional'], ['Puritan', 'the heart'], 'On guarding the heart in every condition of life.', { online: [CCEL('flavel/saintindeed/saintindeed')], modern: [UW('keeping-the-heart', 'Keeping the Heart')] }),
      d('flavel-mystery-of-providence', 'flavel', 'The Mystery of Providence', '1678', ['devotional'], ['Puritan', 'providence'], 'Tracing God’s hand through the events of one’s own life.', { modern: [UW('the-mystery-of-providence')], family: 'Good reading for a parent in a hard season.' }),
      d('flavel-method-of-grace', 'flavel', 'The Method of Grace', '1681', ['theology'], ['Puritan', 'salvation'], 'How the Spirit applies the work of Christ to the soul.', { online: [CCEL('flavel/grace/grace'), OTW('Flavel%20-%20Method%20of%20Grace%20in%20Gospel%20Redemption%202-%20Modern.pdf')] }),
      d('brooks-precious-remedies', 'brooks', 'Precious Remedies Against Satan’s Devices', '1652', ['devotional'], ['Puritan', 'temptation'], 'The devices Satan uses against the soul, with remedies for each.', { online: [{ url: 'https://www.monergism.com/thethreshold/sdg/brooks/Precious%20Remedies%20Against%20Satan%20-%20Thomas%20Brooks.pdf', host: 'monergism.com', kind: 'text', label: 'PDF' }], modern: [UW('precious-remedies-against-satans-devices')] }),
      d('edwards-resolutions', 'edwards', 'Resolutions', '1722', ['devotional', 'household'], ['discipline', 'youth'], 'Seventy resolutions written as a young man.', { online: [OTW('Edwards%20-%20Resolutions.pdf')], family: 'A good first reading for teenagers.', audience: 'Teenagers, adults' }),
      d('edwards-sinners', 'edwards', 'Sinners in the Hands of an Angry God', '1741', ['devotional'], ['sermon', 'Great Awakening'], 'The Enfield sermon, preached in the Great Awakening.', { modern: [UW('sinners-in-the-hands-of-an-angry-god')] }),
      d('edwards-religious-affections', 'edwards', 'A Treatise Concerning Religious Affections', '1746', ['theology', 'devotional'], ['revival', 'assurance'], 'How to tell true godliness from its counterfeits.', { online: [CCEL('edwards/affections/affections')], modern: [UW('religious-affections')] }),
      d('edwards-freedom-of-the-will', 'edwards', 'Freedom of the Will', '1754', ['theology'], ['philosophy', 'the will'], 'His major philosophical defense of Reformed teaching on the will.', { online: [CCEL('edwards/will/will')], modern: [UW('freedom-of-the-will')] }),
      d('edwards-end-of-creation', 'edwards', 'The End for Which God Created the World', '1765', ['theology'], ['glory of God', 'creation'], 'Why God made all things: for his own glory, which is also his people’s joy.', { online: [OTW('Edwards%20-%20End%20For%20Which%20God%20Created%20The%20World.pdf')] }),
      d('luther-freedom-of-a-christian', 'luther', 'The Freedom of a Christian', '1520', ['theology'], ['justification', 'Reformation'], 'A Christian is lord of all and servant of all. Luther’s short classic on faith and works.', { modern: [UW('the-freedom-of-a-christian')] }),
      d('luther-bondage-of-the-will', 'luther', 'The Bondage of the Will', '1525', ['theology'], ['the will', 'Reformation'], 'Luther’s answer to Erasmus, which he counted among his most important works.', { modern: [UW('the-bondage-of-the-will')] }),
      d('calvin-institutes', 'calvin', 'Institutes of the Christian Religion', '1559', ['theology'], ['Reformed', 'systematic theology'], 'The systematic summary of Reformed doctrine, in its final 1559 edition.', { online: [CCEL('calvin/institutes')], modern: [UW('institutes-book-one', 'Book 1 only')], translator: 'Henry Beveridge (1845)', edition: 'CCEL electronic edition of Henry Beveridge’s 1845 translation.' }),
      d('henry-commentary', 'henry', 'Commentary on the Whole Bible', '1706', ['scripture', 'household'], ['commentary'], 'Devotional commentary, verse by verse. A natural aid for family reading.', { online: [CCEL('henry/mhc/mhc')] }),
      d('henry-concise-commentary', 'henry', 'Concise Commentary on the Bible', '1706', ['scripture', 'household'], ['commentary'], 'The abridged edition, short enough to read one passage at the table.', { online: [CCEL('henry/mhcc/mhcc')], family: 'Read the note on the evening lesson after the reading.' }),
    ];
  })(),

  // ── Church Fathers, the desert, and Aquinas (added 2026-10-12) ──
  // Every link below was opened on 2026-10-12. New Advent pages: confirmed against New Advent's
  // own index, with source edition checked on Confessions and City of God. Scans: Internet Archive
  // item metadata checked for series, volume, publisher, and date. CCEL PDFs: file opened and title
  // page read; each PDF is the whole printed volume, not the single work.
  ...(() => {
    const A = {
      didache: ['Anonymous (c. 50–120)', 'Didache', 'Early Church (apostolic era)'],
      ignatius: ['Ignatius of Antioch (d. c. 110)', 'Ignatius of Antioch', 'Early Church (Syria)'],
      polycarp: ['Polycarp of Smyrna (c. 69–155)', 'Polycarp of Smyrna', 'Early Church (Asia Minor)'],
      mathetes: ['Unknown (“Mathetes”), 2nd century', 'Epistle to Diognetus', 'Early Church'],
      justin: ['Justin Martyr (c. 100–165)', 'Justin Martyr', 'Early Church (Greek apologist)'],
      irenaeus: ['Irenaeus of Lyons (c. 130–202)', 'Irenaeus of Lyons', 'Early Church (Gaul)'],
      clement: ['Clement of Alexandria (c. 150–215)', 'Clement of Alexandria', 'Early Church (Alexandria)'],
      tertullian: ['Tertullian of Carthage (c. 155–220)', 'Tertullian', 'Early Church (Latin North Africa)'],
      cyprian: ['Cyprian of Carthage (c. 210–258)', 'Cyprian of Carthage', 'Early Church (Latin North Africa)'],
      athanasius: ['Athanasius of Alexandria (c. 296–373)', 'Athanasius', 'Early Church (Alexandria)'],
      eusebius: ['Eusebius of Caesarea (c. 260–339)', 'Eusebius of Caesarea', 'Early Church (Palestine)'],
      cyril: ['Cyril of Jerusalem (c. 313–386)', 'Cyril of Jerusalem', 'Early Church (Jerusalem)'],
      basil: ['Basil the Great (c. 330–379)', 'Basil the Great', 'Early Church (Cappadocian)'],
      nazianzen: ['Gregory of Nazianzus (c. 329–390)', 'Gregory of Nazianzus', 'Early Church (Cappadocian)'],
      chrysostom: ['John Chrysostom (c. 347–407)', 'John Chrysostom', 'Early Church (Antioch and Constantinople)'],
      augustine: ['Augustine of Hippo (354–430)', 'Augustine of Hippo', 'Early Church (Latin North Africa)'],
      cassian: ['John Cassian (c. 360–435)', 'John Cassian', 'Early monasticism (the desert tradition in the West)'],
      vincent: ['Vincent of Lérins (d. c. 445)', 'Vincent of Lérins', 'Early Church (Gaul)'],
      gregory: ['Gregory the Great (c. 540–604)', 'Gregory the Great', 'Early medieval Latin Church'],
      aquinas: ['Thomas Aquinas (1225–1274)', 'Thomas Aquinas', 'Medieval Catholic (Dominican, scholastic)'],
    };
    const NA = (n, label) => ({ url: `https://www.newadvent.org/fathers/${n}.htm`, host: 'newadvent.org', kind: 'text', ...(label ? { label } : {}) });
    const IA = (id, label) => ({ url: `https://archive.org/details/${id}`, host: 'archive.org', kind: 'scan', label });
    const PDF = (vol) => ({ url: `https://ccel.org/ccel/schaff/${vol}/cache/${vol}.pdf`, host: 'ccel.org', status: 'link-checked', checked: '2026-10-12', size: null });
    // Printed volumes, with a page-scan item confirmed for each where we have one.
    const V = {
      anf01: { name: 'Ante-Nicene Fathers, vol. 1 (The Apostolic Fathers, Justin Martyr, Irenaeus)', ed: 'ed. Alexander Roberts and James Donaldson, revised by A. Cleveland Coxe', scan: IA('antenicenefather01robe', 'ANF vol. 1, Scribner reprint 1913'), pdf: PDF('anf01') },
      anf02: { name: 'Ante-Nicene Fathers, vol. 2 (Fathers of the Second Century)', ed: 'ed. Roberts, Donaldson, and Coxe', scan: IA('antenicenefather02robeuoft', 'ANF vol. 2, Buffalo printing'), pdf: PDF('anf02') },
      anf03: { name: 'Ante-Nicene Fathers, vol. 3 (Latin Christianity: Its Founder, Tertullian)', ed: 'ed. Roberts, Donaldson, and Coxe', scan: IA('antenicenefather03robeuoft', 'ANF vol. 3, Buffalo printing'), pdf: PDF('anf03') },
      anf04: { name: 'Ante-Nicene Fathers, vol. 4 (Tertullian Part Fourth; Minucius Felix; Commodian; Origen)', ed: 'ed. Roberts, Donaldson, and Coxe', scan: IA('antenicenefather04robeuoft', 'ANF vol. 4, Buffalo printing') },
      anf05: { name: 'Ante-Nicene Fathers, vol. 5 (Hippolytus, Cyprian, Caius, Novatian)', ed: 'ed. Roberts, Donaldson, and Coxe', scan: IA('antenicenefather05robeuoft', 'ANF vol. 5, Buffalo printing') },
      anf07: { name: 'Ante-Nicene Fathers, vol. 7 (Fathers of the Third and Fourth Centuries)', ed: 'ed. Roberts, Donaldson, and Coxe', scan: IA('antenicenefather07robeuoft', 'ANF vol. 7, Buffalo 1886') },
      n101: { name: 'Nicene and Post-Nicene Fathers, First Series, vol. 1 (Augustine: Confessions and Letters)', ed: 'ed. Philip Schaff', scan: IA('selectlibraryofn01auguuoft', 'NPNF 1st series vol. 1, New York printing') },
      n102: { name: 'Nicene and Post-Nicene Fathers, First Series, vol. 2 (Augustine: City of God, Christian Doctrine)', ed: 'ed. Philip Schaff', scan: IA('aselectlibrary02unknuoft', 'NPNF 1st series vol. 2, Buffalo printing'), pdf: PDF('npnf102') },
      n103: { name: 'Nicene and Post-Nicene Fathers, First Series, vol. 3 (Augustine: On the Holy Trinity; Doctrinal and Moral Treatises)', ed: 'ed. Philip Schaff', scan: IA('selectlibraryofn03auguuoft', 'NPNF 1st series vol. 3, New York printing') },
      n107: { name: 'Nicene and Post-Nicene Fathers, First Series, vol. 7 (Augustine: Homilies on John and First John; Soliloquies)', ed: 'ed. Philip Schaff', scan: IA('selectlibraryofn07auguuoft', 'NPNF 1st series vol. 7, New York printing') },
      n108: { name: 'Nicene and Post-Nicene Fathers, First Series, vol. 8 (Augustine: Expositions on the Psalms)', ed: 'ed. Philip Schaff', scan: IA('aselectlibrary08unknuoft', 'NPNF 1st series vol. 8, Buffalo printing') },
      n109: { name: 'Nicene and Post-Nicene Fathers, First Series, vol. 9 (Chrysostom: On the Priesthood; Ascetic Treatises; Homilies on the Statues)', ed: 'ed. Philip Schaff', scan: IA('selectlibraryofn09auguuoft', 'NPNF 1st series vol. 9, New York printing') },
      n110: { name: 'Nicene and Post-Nicene Fathers, First Series, vol. 10 (Chrysostom: Homilies on Matthew)', ed: 'ed. Philip Schaff', scan: IA('selectlibraryofn10auguuoft', 'NPNF 1st series vol. 10, New York printing') },
      n113: { name: 'Nicene and Post-Nicene Fathers, First Series, vol. 13 (Chrysostom: Homilies on Galatians through Philemon)', ed: 'ed. Philip Schaff', scan: IA('selectlibraryofn13auguuoft', 'NPNF 1st series vol. 13, New York printing') },
      n201: { name: 'Nicene and Post-Nicene Fathers, Second Series, vol. 1 (Eusebius)', ed: 'ed. Philip Schaff and Henry Wace', scan: IA('nicenepostnicene01unknuoft', 'NPNF 2nd series vol. 1, Oxford printing') },
      n204: { name: 'Nicene and Post-Nicene Fathers, Second Series, vol. 4 (Athanasius: Select Works and Letters)', ed: 'ed. Philip Schaff and Henry Wace; Athanasius volume ed. Archibald Robertson', scan: IA('selectlibraryofn04schauoft', 'NPNF 2nd series vol. 4, New York 1892'), pdf: PDF('npnf204') },
      n207: { name: 'Nicene and Post-Nicene Fathers, Second Series, vol. 7 (Cyril of Jerusalem; Gregory of Nazianzus)', ed: 'ed. Philip Schaff and Henry Wace', scan: IA('niceneandpostnic07unknuoft', 'NPNF 2nd series vol. 7, Oxford 1891') },
      n208: { name: 'Nicene and Post-Nicene Fathers, Second Series, vol. 8 (Basil: Letters and Select Works)', ed: 'ed. Philip Schaff and Henry Wace', scan: IA('niceneandpostnic08unknuoft', 'NPNF 2nd series vol. 8, Oxford 1891') },
      n211: { name: 'Nicene and Post-Nicene Fathers, Second Series, vol. 11 (Sulpitius Severus, Vincent of Lérins, John Cassian)', ed: 'ed. Philip Schaff and Henry Wace', scan: IA('nicenepostnicene11unknuoft', 'NPNF 2nd series vol. 11, Oxford printing') },
      n212: { name: 'Nicene and Post-Nicene Fathers, Second Series, vol. 12 (Leo the Great; Gregory the Great)', ed: 'ed. Philip Schaff and Henry Wace', scan: IA('nicenepostnicene12ambruoft', 'NPNF 2nd series vol. 12, Oxford printing') },
    };
    const PUB = { anf: 'Christian Literature Publishing Co., Buffalo, 1885–1886 (American edition); reprinted by Scribner, New York', n1: 'Christian Literature Co., New York and Buffalo, 1886–1890', n2: 'Christian Literature Co., New York, and Parker, Oxford, 1890–1900' };
    const F = (id, a, vk, title, y, cats, tags, summary, { na = [], extra = [], context = [], family = null, audience = 'Adults', translator = null, subtitle = null, period } = {}) => {
      const [author, authorKey, tradition] = A[a];
      const v = V[vk];
      const series = vk.startsWith('anf') ? 'anf' : vk.startsWith('n1') ? 'n1' : 'n2';
      const online = [...na, ...(v.scan ? [v.scan] : []), ...extra];
      return { id, title, subtitle, author, authorKey,
        period: period || 'Early Church', periodKey: 'Early Church', original: y, tradition, language: 'English (translation)',
        categories: cats, tags, audience,
        type: v.pdf ? 'Full-text PDF of the printed volume (external)' : 'Read free online (external)',
        summary, context, family,
        edition: `${v.name}, ${v.ed}. ${PUB[series]}.${translator ? ` Translated by ${translator}.` : ''} The New Advent text is this translation, revised and edited online by Kevin Knight.${v.pdf ? ' The PDF is CCEL’s electronic edition of the whole volume, not this work alone.' : ''}${v.scan ? ' Page scans are of a printed copy of the volume (University of Toronto or other library copy) at the Internet Archive.' : ' A page-scan copy of this volume has not yet been checked.'}`,
        publisher: PUB[series], translator, editor: null,
        repository: v.pdf ? 'Christian Classics Ethereal Library (Calvin University)' : null,
        sourcePage: v.pdf ? `https://ccel.org/ccel/schaff/${v.pdf.url.split('/')[5]}` : null,
        rights: 'pd-us',
        rightsNote: 'The translation was published before 1931 and is public domain in the United States. New Advent’s revised online text and CCEL’s electronic edition are those sites’ own presentations; Waterside links to them and does not re-host them.',
        pdf: v.pdf || null, transcription: null, online, modern: [], checked: '2026-10-12' };
    };
    return [
      // The apostolic fathers and the second century
      F('didache', 'didache', 'anf07', 'The Didache', 'c. 50–120', ['catechisms', 'history'], ['apostolic fathers', 'baptism', 'Lord’s Supper', 'prayer'],
        'The Teaching of the Twelve Apostles: a short church manual on the two ways of life and death, baptism, fasting, the Lord’s Prayer said three times a day, and the Lord’s Supper.',
        { na: [NA('0714')], subtitle: 'The Teaching of the Twelve Apostles',
          context: ['Lost for centuries and rediscovered in a Constantinople manuscript published in 1883, the Didache is one of the oldest Christian writings outside the New Testament. Its first six chapters, “the Way of Life and the Way of Death,” read like an early catechism.', 'It is a window on a very early church, not Scripture. Some practices it describes, such as its preference for baptism in running water, are instructions of a particular community rather than apostolic commands.'],
          family: 'Read the “Way of Life” (chapters 1–6) aloud over a week of evenings. Older children can match each line to the Sermon on the Mount or the Ten Commandments.', audience: 'All ages (chapters 1–6); adults' }),
      F('ignatius-epistles', 'ignatius', 'anf01', 'The Epistles of Ignatius', 'c. 107–110', ['devotional', 'history'], ['apostolic fathers', 'martyrdom', 'church unity'],
        'Seven letters written by the bishop of Antioch as he was taken under guard to Rome to be thrown to the beasts.',
        { na: [NA('0104', 'To the Ephesians'), NA('0107', 'To the Romans'), NA('0110', 'To Polycarp')], translator: 'Alexander Roberts and James Donaldson',
          context: ['Ignatius wrote to the churches that sent messengers to meet him on the road. The letters urge unity around the bishop and the Lord’s Supper, warn against teachers who denied that Christ truly came in the flesh, and, in the letter to the Romans, beg the church not to prevent his martyrdom.', 'Ignatius’s strong language about the bishop is one of the earliest witnesses to a single overseer in each church. Reformed readers have long weighed it against the New Testament’s use of “elder” and “bishop” for the same office.'] }),
      F('polycarp', 'polycarp', 'anf01', 'The Epistle to the Philippians and the Martyrdom of Polycarp', 'c. 110–155', ['history', 'devotional'], ['apostolic fathers', 'martyrdom'],
        'A pastoral letter by a disciple of the apostle John, and the eyewitness account of his death at eighty-six: “Eighty and six years have I served Him, and He never did me any injury.”',
        { na: [NA('0136', 'Epistle to the Philippians'), NA('0102', 'Martyrdom of Polycarp')], translator: 'Alexander Roberts and James Donaldson',
          family: 'The Martyrdom is short enough to read in one sitting and gripping for older children. Read it on 23 February, the day traditionally kept in his memory.', audience: 'Older children (Martyrdom), adults' }),
      F('epistle-to-diognetus', 'mathetes', 'anf01', 'The Epistle to Diognetus', '2nd century', ['theology', 'history'], ['apologetics', 'Christian life'],
        'An anonymous letter explaining Christians to an inquirer: they live in their own countries as sojourners, “what the soul is in the body, that are Christians in the world.” Chapter 9 is a remarkable early statement of the great exchange.',
        { na: [NA('0101')], translator: 'Alexander Roberts and James Donaldson',
          context: ['Nothing certain is known of the author or of Diognetus. The letter survived in a single manuscript, destroyed in 1870. Chapter 9, on God giving his own Son as a ransom, “the righteous for the unrighteous,” is often quoted by Protestant writers as an early witness to substitution.'],
          family: 'Read chapters 5 and 9 together: how Christians live in the world, and why.', audience: 'Teenagers, adults' }),
      F('justin-first-apology', 'justin', 'anf01', 'The First Apology', 'c. 155', ['theology', 'history'], ['apologetics', 'worship', 'Lord’s Day'],
        'A philosopher-turned-Christian defends the faith to the emperor, and in chapters 65–67 gives the earliest full description of Christian Sunday worship.',
        { na: [NA('0126')], translator: 'Marcus Dods and George Reith',
          family: 'Read chapter 67 aloud on a Lord’s Day: Christians gathering “on the day called Sunday” for the reading of the apostles and prophets, prayer, and the Supper.', audience: 'Teenagers (chs. 65–67), adults' }),
      F('irenaeus-against-heresies', 'irenaeus', 'anf01', 'Against Heresies', 'c. 180', ['theology', 'history'], ['Gnosticism', 'recapitulation', 'rule of faith'],
        'Five books against the Gnostic sects, in which the bishop of Lyons sets out the one story of creation and redemption: Christ “recapitulating” in himself all that Adam lost.',
        { na: [NA('0103')], translator: 'Alexander Roberts and W. H. Rambaut',
          context: ['Irenaeus heard Polycarp preach as a boy, and so stands two links from the apostle John. Book 1 describes the heresies in detail and is heavy going; Books 3–5 hold his positive teaching on Scripture, the apostolic tradition, and the incarnation.'] }),

      // Clement of Alexandria
      F('clement-exhortation', 'clement', 'anf02', 'Exhortation to the Heathen', 'c. 195', ['theology', 'history'], ['apologetics', 'Logos'],
        'Clement’s appeal to Greeks to leave the myths and mysteries and hear the “New Song,” the Word of God, Christ.',
        { na: [NA('0208')], translator: 'William Wilson' }),
      F('clement-instructor', 'clement', 'anf02', 'The Instructor', 'c. 198', ['household', 'devotional'], ['Christian conduct', 'children', 'Christ the teacher'],
        'Christ the Instructor (Paedagogus) of his children: on eating, drinking, dress, speech, laughter, and the ordering of a household. It closes with one of the oldest Christian hymns outside the New Testament.',
        { na: [NA('0209')], translator: 'William Wilson',
          context: ['Book 1 describes Christ as the tutor who trains believers as children. Books 2 and 3 apply this to daily life in prosperous Alexandria, sometimes wisely and sometimes with an asceticism and a debt to Stoic ethics that Reformed readers will want to test against Scripture.'],
          family: 'Read the closing “Hymn to Christ the Saviour” (end of Book 3) together. Parents will find Book 1 on Christ as teacher of his children a good meditation.' }),
      F('clement-rich-man', 'clement', 'anf02', 'Who Is the Rich Man That Shall Be Saved?', 'c. 200', ['devotional', 'theology'], ['wealth', 'Mark 10'],
        'A sermon on Mark 10:17–31: the rich are not saved by giving everything away, but by loving God more than their riches. It ends with the story of the apostle John and the young robber.',
        { na: [NA('0207')], translator: 'William Wilson', family: 'Tell the story of John and the robber (the last sections) to children; it is one of the best-loved stories of the early church.' }),
      F('clement-stromata', 'clement', 'anf02', 'The Stromata, or Miscellanies', 'c. 198–203', ['theology'], ['philosophy', 'faith and reason'],
        'Clement’s loosely arranged “patchwork” on faith, knowledge, philosophy, and the mature Christian.',
        { na: [NA('0210')], translator: 'William Wilson',
          context: ['The Stromata shows Clement at his most speculative. His regard for Greek philosophy as a preparation for the gospel and his picture of the Christian “gnostic” were influential and contested. It is a work for students of the early church rather than a devotional book.'] }),

      // Carthage: Tertullian and Cyprian
      F('tertullian-apology', 'tertullian', 'anf03', 'The Apology', '197', ['theology', 'history'], ['apologetics', 'persecution'],
        'Tertullian’s defence of the Christians to the governors of Rome, with its famous line, usually quoted as “the blood of the martyrs is the seed of the church.”',
        { na: [NA('0301')], translator: 'S. Thelwall',
          context: ['Tertullian, a lawyer’s mind and the first major Christian writer in Latin, gave the Western church much of its theological vocabulary, including “Trinity” and “one substance, three persons.” In later life he joined the rigorist Montanist movement, and his works are read with that in mind.'] }),
      F('tertullian-on-prayer', 'tertullian', 'anf03', 'On Prayer', 'c. 198–204', ['prayer', 'devotional'], ['Lord’s Prayer', 'prayer'],
        'The earliest surviving exposition of the Lord’s Prayer, clause by clause, with practical counsel on how and when to pray.',
        { na: [NA('0322')], translator: 'S. Thelwall', family: 'Read his short chapter on each petition alongside the Lord’s Prayer at evening prayer.', audience: 'Teenagers, adults' }),
      F('tertullian-on-baptism', 'tertullian', 'anf03', 'On Baptism', 'c. 198–203', ['theology'], ['baptism', 'sacraments'],
        'The oldest treatise on baptism.',
        { na: [NA('0321')], translator: 'S. Thelwall',
          context: ['Tertullian advises delaying the baptism of little children and of the unmarried. Paedobaptists and credobaptists both cite him: one side as evidence that infants were being baptized in his day, the other for his counsel to wait.'] }),
      F('tertullian-to-his-wife', 'tertullian', 'anf04', 'To His Wife', 'c. 200–206', ['household'], ['marriage', 'widowhood'],
        'Two books of counsel to his own wife in case he dies first, closing with a famous picture of a Christian husband and wife, “two in one flesh,” who pray, fast, and worship side by side.',
        { na: [NA('0404')], translator: 'S. Thelwall',
          context: ['Book 1 urges her not to remarry; Book 2 urges that, if she does, she marry only in the Lord. His preference for widowhood reflects his rigorism. The closing chapter of Book 2 is the part most worth reading.'],
          family: 'Husbands and wives: read Book 2, chapter 8, together.', audience: 'Husbands and wives' }),
      F('cyprian-treatises', 'cyprian', 'anf05', 'Treatises', '249–258', ['theology', 'prayer', 'devotional'], ['church unity', 'Lord’s Prayer', 'suffering'],
        'The bishop of Carthage’s short works, including On the Unity of the Church, On the Lord’s Prayer, and On Mortality, written as plague swept the city.',
        { na: [NA('0507', 'All treatises')], translator: 'Ernest Wallis',
          context: ['Cyprian led the church of Carthage through the Decian persecution and a great plague, and was beheaded in 258. On the Unity of the Church gave the West the line “he can no longer have God for his Father who has not the Church for his mother,” which Calvin echoes in the Institutes (4.1.1). Cyprian’s view of the bishop’s office goes further than Reformed churches follow.', 'On the Lord’s Prayer was a favourite of Augustine. On Mortality is pastoral comfort for Christians facing death in an epidemic.'],
          family: 'On the Lord’s Prayer can be read a few sections at a time alongside the catechism’s questions on prayer.' }),
      F('cyprian-epistles', 'cyprian', 'anf05', 'Epistles', '249–258', ['history'], ['letters', 'persecution', 'church discipline'],
        'Cyprian’s letters from hiding and from his see, on persecution, the restoration of the lapsed, and church order.',
        { na: [NA('0506')], translator: 'Ernest Wallis' }),

      // Athanasius and the desert
      F('athanasius-on-the-incarnation', 'athanasius', 'n204', 'On the Incarnation of the Word', 'c. 318–335', ['theology'], ['incarnation', 'atonement', 'Trinity'],
        'Why the Word of God became man: to restore the image of God in mankind and to undo death by his own death and resurrection.',
        { na: [NA('2802')], translator: 'Archibald Robertson',
          context: ['A short, clear book by the defender of Nicene orthodoxy, written before the Arian controversy broke out. It is one of the best introductions to the early church’s thought about Christ.', 'This record links the 1892 NPNF translation by Archibald Robertson. A widely read 1944 translation by “A Religious of C.S.M.V.” (with C. S. Lewis’s introduction) is in copyright and is not linked here.'],
          family: 'A good first book from the Fathers for a teenager: short chapters, one argument, and the gospel at its centre.', audience: 'Teenagers, adults' }),
      F('life-of-antony', 'athanasius', 'n204', 'The Life of Antony', 'c. 360', ['devotional', 'history'], ['desert fathers', 'monasticism', 'spiritual warfare'],
        'Athanasius’s life of Antony of Egypt, the first and most famous of the desert fathers, who sold everything on hearing Matthew 19:21 read in church and went into the desert to pray.',
        { na: [NA('2811')], translator: 'H. Ellershaw',
          context: ['This book spread the monastic ideal through the Roman world. Augustine tells in the Confessions (Book 8) how hearing of it brought him to the point of conversion.', 'The Reformers rejected monastic vows as a higher way of life, and Antony’s battles with demons are vividly told. Read it as a portrait of single-minded devotion and as a primary source for how monasticism began.'],
          family: 'Read the account of his call (sections 2–3) with older children, and talk about what it means to obey a word of Scripture at once.' }),
      F('cassian-institutes', 'cassian', 'n211', 'The Institutes', 'c. 420', ['devotional', 'history'], ['desert fathers', 'monasticism', 'vices and virtues'],
        'What Cassian learned among the monks of Egypt: their rule of prayer and psalmody, and the eight principal faults (gluttony, lust, covetousness, anger, dejection, accidie, vainglory, pride) with their remedies.',
        { na: [NA('3507')], translator: 'Edgar C. S. Gibson',
          context: ['Cassian lived for years among the desert fathers before founding monasteries near Marseilles. His Institutes and Conferences carried the wisdom of the Egyptian desert to the West and shaped the Rule of Benedict. His list of eight faults became the “seven deadly sins.”', 'On grace, Cassian took a middle position that later writers called semi-Pelagian and that the Council of Orange (529) corrected. His practical counsel on temptation is shrewd; his theology of grace is where Reformed readers part company.'] }),
      F('cassian-conferences', 'cassian', 'n211', 'The Conferences', 'c. 426–429', ['devotional', 'prayer', 'history'], ['desert fathers', 'prayer'],
        'Twenty-four conversations with the abbots of the Egyptian desert, on purity of heart, discernment, prayer, friendship, and perseverance. The nearest thing in this library to the voices of the desert fathers themselves.',
        { na: [NA('3508')], translator: 'Edgar C. S. Gibson',
          context: ['Conferences 9 and 10, with Abbot Isaac on prayer, are the most read. Conference 13, on grace and free will, is the one the Council of Orange later corrected.'] }),

      // The fourth century
      F('eusebius-church-history', 'eusebius', 'n201', 'Church History', 'c. 313–325', ['history'], ['church history', 'martyrs', 'canon'],
        'The first history of the church, from the apostles to the conversion of Constantine, quoting many earlier writers whose works are now lost.',
        { na: [NA('2501')], translator: 'Arthur Cushman McGiffert', family: 'Older children enjoy the martyr stories in Books 5 and 8; read them selectively, as some are graphic.' }),
      F('cyril-catechetical-lectures', 'cyril', 'n207', 'Catechetical Lectures', 'c. 350', ['catechisms', 'theology'], ['catechism', 'creed', 'baptism'],
        'Lectures given in Lent to those preparing for baptism in Jerusalem, walking clause by clause through the creed.',
        { na: [NA('3101')], translator: 'Edwin Hamilton Gifford',
          context: ['These are the oldest complete set of catechetical instruction to survive, and were delivered in the church built over the traditional site of the tomb of Christ. The closing Mystagogical Lectures on the sacraments are attributed to Cyril with less certainty and teach a view of the Supper that the Reformers did not hold.'],
          family: 'Parents leading catechesis can borrow Cyril’s order: one article of the creed at a time, each grounded in Scripture.' }),
      F('basil-on-the-holy-spirit', 'basil', 'n208', 'On the Holy Spirit', 'c. 375', ['theology'], ['Trinity', 'Holy Spirit'],
        'Basil’s defence of the full deity of the Holy Spirit, prepared before the Council of Constantinople (381) confessed the Spirit as “the Lord and Giver of life.”',
        { na: [NA('3203')], translator: 'Blomfield Jackson' }),
      F('nazianzen-orations', 'nazianzen', 'n207', 'Orations', '379–381', ['theology'], ['Trinity', 'Christology'],
        'Gregory’s sermons, including the five Theological Orations (Orations 27–31), preached in Constantinople, which earned him the title “the Theologian.”',
        { na: [NA('3102')], translator: 'Charles Gordon Browne and James Edward Swallow',
          context: ['Find the Theological Orations by number (27–31) on the contents page. They are the classic Greek statement of the doctrine of the Trinity.'] }),

      // John Chrysostom
      F('chrysostom-matthew', 'chrysostom', 'n110', 'Homilies on the Gospel of St. Matthew', 'c. 390', ['scripture', 'devotional'], ['homilies', 'preaching', 'commentary'],
        'Ninety sermons preached in Antioch, verse by verse through Matthew. Chrysostom (“golden-mouthed”) preached through whole books of Scripture, and more of his sermons survive than of any other Father’s.',
        { na: [NA('2001')], translator: 'George Prevost, revised by M. B. Riddle',
          context: ['Chrysostom’s preaching is plain, direct, and practical, following the grammatical sense of the text in the manner of the Antiochene school. Calvin admired him above the other Fathers as an interpreter, while disagreeing with his view of free will.'],
          family: 'Read the homily on the passage your household is reading. Each ends with a sharp moral application.' }),
      F('chrysostom-ephesians', 'chrysostom', 'n113', 'Homilies on Ephesians', 'c. 390s', ['scripture', 'household'], ['homilies', 'marriage', 'parenting', 'Ephesians 5–6'],
        'Twenty-four sermons on Ephesians. Homily 20 (on Ephesians 5:22–33) and Homily 21 (on 6:1–4) are among the finest early Christian writing on marriage and the bringing up of children.',
        { na: [NA('2301')], translator: 'Gross Alexander',
          family: 'Husbands and wives: read Homily 20 together. Parents: Homily 21 on “the nurture and admonition of the Lord.” Both pair well with Gouge’s Of Domestical Duties.', audience: 'Husbands, wives, parents' }),
      F('chrysostom-statues', 'chrysostom', 'n109', 'Homilies on the Statues', '387', ['devotional', 'history'], ['homilies', 'repentance', 'Lent'],
        'Twenty-one sermons preached in Lent 387, while Antioch awaited the emperor’s punishment for a riot in which his statues were pulled down.',
        { na: [NA('1901')], translator: 'W. R. W. Stephens' }),
      F('chrysostom-priesthood', 'chrysostom', 'n109', 'On the Priesthood', 'c. 386', ['theology'], ['ministry', 'preaching', 'pastoral care'],
        'A dialogue on the weight and dangers of the pastoral office, and why Chrysostom fled ordination. Its book on preaching is still read by ministers.',
        { na: [NA('1922')], translator: 'W. R. W. Stephens' }),

      // Augustine
      F('augustine-confessions', 'augustine', 'n101', 'Confessions', 'c. 397–400', ['devotional', 'theology'], ['conversion', 'prayer', 'autobiography'],
        'Augustine’s life told as a long prayer to God, from infancy through his conversion in a Milan garden, then turning to memory, time, and creation. “Thou hast formed us for Thyself, and our hearts are restless till they find rest in Thee.”',
        { na: [NA('1101')], translator: 'J. G. Pilkington',
          context: ['The Reformers read Augustine more than any other Father; Calvin called himself Augustine’s disciple. The Confessions is the place to begin with him. Books 1–9 are the story; Books 10–13 are philosophy and exegesis.', 'This record links the NPNF translation of J. G. Pilkington (1876). E. B. Pusey’s 1838 translation is also public domain.'],
          family: 'Read Book 8, the account of his conversion, aloud to older teenagers.', audience: 'Teenagers, adults' }),
      F('augustine-city-of-god', 'augustine', 'n102', 'The City of God', '413–426', ['theology', 'history'], ['two cities', 'providence', 'history'],
        'Written after the sack of Rome in 410: the history of the world as the story of two cities, formed by two loves, the love of self and the love of God.',
        { na: [NA('1201')], translator: 'Marcus Dods' }),
      F('augustine-christian-doctrine', 'augustine', 'n102', 'On Christian Doctrine', '397–426', ['theology', 'scripture'], ['hermeneutics', 'preaching'],
        'How to read and teach Scripture: signs and things, the rule of love, obscure passages interpreted by plain ones, and (Book 4) Christian preaching.',
        { na: [NA('1202')], translator: 'J. F. Shaw' }),
      F('augustine-enchiridion', 'augustine', 'n103', 'The Enchiridion', 'c. 421', ['theology', 'catechisms'], ['faith, hope, and love', 'creed', 'Lord’s Prayer'],
        'A “handbook” on faith, hope, and love, written at a friend’s request: the creed for faith, the Lord’s Prayer for hope, and love as the end of all the commandments.',
        { na: [NA('1302')], translator: 'J. F. Shaw',
          context: ['The shortest complete summary of Augustine’s theology, and the one place to see his teaching on grace, sin, and predestination laid out in order.'] }),
      F('augustine-tractates-john', 'augustine', 'n107', 'Tractates on the Gospel of John', 'c. 406–420', ['scripture'], ['homilies', 'commentary'],
        'One hundred and twenty-four sermons through the Gospel of John, preached to his congregation at Hippo.',
        { na: [NA('1701')], translator: 'John Gibb and James Innes' }),
      F('augustine-psalms', 'augustine', 'n108', 'Expositions on the Psalms', 'c. 392–420', ['scripture', 'psalters', 'devotional'], ['Psalms', 'homilies'],
        'Augustine’s sermons and notes on all 150 psalms, hearing in them the voice of Christ, head and body.',
        { na: [NA('1801')], family: 'Read his exposition of the psalm appointed in the Daily Office.' }),

      // Vincent and Gregory
      F('vincent-commonitory', 'vincent', 'n211', 'The Commonitory', '434', ['theology', 'history'], ['tradition', 'heresy', 'doctrine'],
        'How to tell true doctrine from novelty: what has been believed “everywhere, always, and by all.”',
        { na: [NA('3506')], translator: 'C. A. Heurtley',
          context: ['Protestants and Roman Catholics have both appealed to Vincent’s rule. The Reformers used it to argue that late medieval doctrines failed his test of antiquity.'] }),
      F('gregory-pastoral-rule', 'gregory', 'n212', 'The Book of Pastoral Rule', '590', ['theology'], ['pastoral care', 'ministry'],
        'Gregory’s handbook for bishops on how a pastor should live and how to counsel each kind of person differently. King Alfred translated it into English for the clergy of his kingdom.',
        { na: [NA('3601')], translator: 'James Barmby', period: 'Early medieval' }),
      // The desert fathers in their own words (added 2026-10-18)
      { id: 'budge-paradise-holy-fathers', title: 'The Paradise, or Garden of the Holy Fathers', subtitle: 'Histories of the anchorites, recluses, monks, coenobites, and ascetic fathers of the deserts of Egypt, c. A.D. 250–400',
        author: 'Compiled by ʿAnan-Ishoʿ (7th century) from Athanasius, Palladius, Jerome, and the Sayings of the Fathers; translated by E. A. Wallis Budge', authorKey: 'Desert Fathers', period: 'Early Church', periodKey: 'Early Church', original: '4th–5th centuries; Syriac compilation 7th century; English 1907', tradition: 'Early monasticism (Egyptian desert)', language: 'English (translation from Syriac)',
        categories: ['devotional', 'history'], tags: ['desert fathers', 'sayings', 'monasticism', 'humility', 'prayer'], audience: 'Adults',
        type: 'Page scans (external)',
        summary: 'The stories and sayings of the monks of the Egyptian desert, gathered in Syriac in the seventh century and translated by Budge in two volumes: “a brother asked Abba Poemen…”.',
        context: ['Volume 1 holds the Life of Antony and the histories of Palladius and Jerome. Volume 2 holds the sayings themselves: short questions put to the old men of the desert and their answers, on humility, anger, silence, prayer, and judging no one.', 'The desert fathers sought God by leaving the world, and some of their practices are extreme. The Reformers rejected the monastic life as a higher calling. Read the sayings for their hard-won wisdom about the heart, and as a primary source for early monasticism; this is one of the works our note on the Library page has in mind.'],
        family: 'Read one saying at the table and ask what it would look like to live it this week. Many are only a few lines long.',
        edition: 'E. A. Wallis Budge, The Paradise or Garden of the Holy Fathers, 2 vols. (London: Chatto & Windus, 1907), a revised translation of his privately printed Book of Paradise (1904). Page scans of the University of Toronto copy of volume 1 and another library copy of volume 2 at the Internet Archive.',
        publisher: 'Chatto & Windus, London, 1907', translator: 'E. A. Wallis Budge', editor: null,
        repository: 'Internet Archive', sourcePage: 'https://archive.org/details/theparadiseorgar01unkwuoft',
        rights: 'pd-us', rightsNote: 'Published in 1907; public domain in the United States. Scans are hosted by the Internet Archive; Waterside links to them.',
        pdf: null, transcription: null,
        online: [IA('theparadiseorgar01unkwuoft', 'Vol. 1: Antony, Palladius, Jerome'), IA('paradiseorgarden02ann', 'Vol. 2: the Sayings')], modern: [], checked: '2026-10-18' },
    ].concat([
      // Thomas Aquinas
      { id: 'aquinas-summa', title: 'Summa Theologica', subtitle: null, author: A.aquinas[0], authorKey: A.aquinas[1], period: 'Medieval (13th century)', periodKey: '13th century', original: '1265–1274', tradition: A.aquinas[2], language: 'English (translation)',
        categories: ['theology'], tags: ['scholasticism', 'systematic theology', 'natural law'], audience: 'Adults',
        type: 'Read free online (external)',
        summary: 'Aquinas’s unfinished summary of theology for beginners, set out as questions, objections, and replies: God, creation, the moral life, the virtues and law, and Christ and the sacraments.',
        context: ['Aquinas is the greatest theologian of the medieval Western church, and his synthesis of Scripture, the Fathers, and Aristotle became the standard for Roman Catholic theology. Waterside lists him as a work outside the Reformed frame (see the note on the Library page).', 'Reformed theologians from Zanchi and Vermigli to Turretin read and cited Thomas on the doctrine of God, natural law, and the virtues, while rejecting his teaching on justification, merit, the sacraments, and the papacy. Read the questions on God (Part I, questions 2–26) and on law (I–II, questions 90–108) to see why.'],
        family: null,
        edition: 'Literally translated by Fathers of the English Dominican Province, second and revised edition, 1920 (Burns Oates & Washbourne, London). New Advent presents the complete text, revised and edited online by Kevin Knight. Project Gutenberg presents Part I from the “Complete American Edition” of the same translation (Benziger Brothers, 1947), which Project Gutenberg treats as public domain in the United States.',
        publisher: 'Burns Oates & Washbourne, London, 1911–1925 (second revised edition from 1920)', translator: 'Fathers of the English Dominican Province', editor: null,
        repository: null, sourcePage: null, rights: 'pd-us',
        rightsNote: 'The English Dominican translation was published 1911–1925 and is public domain in the United States. New Advent’s online edition is its own presentation; Waterside links to it and does not re-host it.',
        pdf: null, transcription: null,
        online: [{ url: 'https://www.newadvent.org/summa/', host: 'newadvent.org', kind: 'text', label: 'Complete' }, { url: 'https://www.gutenberg.org/ebooks/17611', host: 'gutenberg.org', kind: 'text', label: 'Part I only' }],
        modern: [], checked: '2026-10-12' },
      // Schaff, Creeds of Christendom vol. 3 (added 2026-10-18)
      { id: 'schaff-creeds-3', title: 'The Creeds of Christendom, Volume III', subtitle: 'The Evangelical Protestant Creeds, with Translations',
        author: 'Philip Schaff (1819–1893), editor', authorKey: 'Philip Schaff', period: 'Nineteenth century', periodKey: '19th century', original: '1877', tradition: 'Protestant (reference collection)', language: 'English, with Latin, German, and other originals',
        categories: ['catechisms', 'history', 'theology'], tags: ['confessions', 'creeds', 'reference'], audience: 'Adults',
        type: 'Read free online (external)',
        summary: 'The Reformation confessions in one volume, in their original languages with English translations: Augsburg, Luther’s Small Catechism, the Formula of Concord, Heidelberg, the Belgic Confession, the Canons of Dort, the Thirty-Nine Articles, and the Westminster Standards.',
        context: ['Schaff, a church historian at Union Theological Seminary, gathered the creeds of the whole church into three volumes. Volume 3 is a working reference for comparing the Lutheran and Reformed confessions side by side, and it reproduces the title pages of the first Westminster printings.'],
        family: null,
        edition: 'CCEL electronic edition of Philip Schaff, The Creeds of Christendom, vol. 3 (New York: Harper, 1877). The contents page was checked on 2026-10-18. CCEL also offers a PDF of the volume, which could not be opened when checked.',
        publisher: null, translator: null, editor: 'Philip Schaff',
        repository: 'Christian Classics Ethereal Library (Calvin University)', sourcePage: 'https://ccel.org/ccel/schaff/creeds3',
        rights: 'pd-us', rightsNote: 'Published before 1931; public domain in the United States. Linked, not re-hosted.',
        pdf: null, transcription: null,
        online: [{ url: 'https://ccel.org/ccel/schaff/creeds3/creeds3.toc.html', host: 'ccel.org', kind: 'text', label: 'Contents' }],
        modern: [], checked: '2026-10-18' },
      // The Augsburg Confession (added 2026-10-18)
      { id: 'augsburg-confession', title: 'The Augsburg Confession', subtitle: 'The confession of faith presented to the Emperor Charles V at the Diet of Augsburg, 1530',
        author: 'Philip Melanchthon (1497–1560), for the Lutheran princes and cities', authorKey: 'Philip Melanchthon', period: 'Reformation (16th century)', periodKey: '16th century', original: '1530', tradition: 'Lutheran', language: 'English (translation from German and Latin)',
        categories: ['catechisms', 'theology', 'history'], tags: ['confession', 'Lutheran', 'Reformation', 'justification'], audience: 'Adults, older teenagers',
        type: 'Read free online (external)',
        summary: 'The first great Protestant confession: twenty-one articles of doctrine, beginning with God, original sin, and justification by faith, and seven on the abuses the Reformation corrected.',
        context: ['Melanchthon drafted the confession, with Luther’s approval from a distance, and it was read aloud to the Emperor on 25 June 1530. It remains the defining confession of the Lutheran churches.', 'Reformed churches agree with most of it. Article 4 on justification by faith is common Protestant ground, and Calvin signed Melanchthon’s revised version of 1540 (the “Variata”). The plainest difference is Article 10, on the Lord’s Supper, where Lutherans teach that Christ’s body and blood are truly present in the bread and wine and Reformed churches teach a spiritual feeding on Christ by faith. Article 28 on the Lord’s Day is quoted on our Lord’s Day page.'],
        family: 'Read Articles 1–4 alongside the Shorter Catechism’s questions on God, sin, and justification, and notice how much the two agree.',
        edition: 'Project Gutenberg e-text #275 (complete: preface, Articles 1–28, conclusion); Project Gutenberg does not name the translator. Page scans: Concordia Triglotta (St. Louis: Concordia Publishing House, 1921), German and Latin texts ed. F. Bente, English translation by W. H. T. Dau and F. Bente. Also linked: CCEL’s web text of Schaff, Creeds of Christendom vol. 3, with the Latin and Charles P. Krauth’s English translation (1868, revised 1874) in parallel; when checked on 2026-10-18 the page was confirmed from the preface through Part II, Article 3, and the remaining articles were not confirmed.',
        publisher: 'Concordia Publishing House, St. Louis, 1921 (Triglotta)', translator: 'W. H. T. Dau and F. Bente (Triglotta scan); not named for the Gutenberg text', editor: 'F. Bente (Triglotta)',
        repository: 'Project Gutenberg', sourcePage: 'https://www.gutenberg.org/ebooks/275',
        rights: 'pd-text', rightsNote: 'The confession is public domain, and the 1921 Triglotta is public domain in the United States. Project Gutenberg treats its e-text as public domain in the US; its translation has not been identified. Linked, not re-hosted.',
        pdf: null, transcription: null,
        online: [{ url: 'https://www.gutenberg.org/ebooks/275', host: 'gutenberg.org', kind: 'text' }, { url: 'https://ccel.org/ccel/schaff/creeds3/creeds3.iii.ii.html', host: 'ccel.org', kind: 'text', label: 'Latin and English (Schaff, Krauth translation)' }, { url: 'https://archive.org/details/concordiatriglot00unse', host: 'archive.org', kind: 'scan', label: 'Concordia Triglotta, 1921 (German, Latin, English)' }],
        modern: [], checked: '2026-10-18' },
    ]);
  })(),

  // Literature and the Christian imagination: Tolkien, Lewis, Chesterton (added 2026-10-22)
  // Works still in US copyright carry an introduction, no text link, and `pdDate`: the date they are
  // expected to enter the US public domain, when a free edition will be linked here.
  // `future`: Standard Ebooks catalogue pages that already announce a free edition on that date.
  // `find`: a WorldCat search to borrow the book from a local library.
  ...(() => {
    const A = {
      tolkien: ['J. R. R. Tolkien (1892–1973)', 'J. R. R. Tolkien', 'Roman Catholic'],
      lewis: ['C. S. Lewis (1898–1963)', 'C. S. Lewis', 'Church of England'],
      chesterton: ['G. K. Chesterton (1874–1936)', 'G. K. Chesterton', 'Church of England; Roman Catholic from 1922'],
    };
    const wc = (t, a) => 'https://search.worldcat.org/search?q=' + encodeURIComponent(`ti:${t} au:${a}`);
    const SE = (path, label) => ({ url: 'https://standardebooks.org/ebooks/' + path, ...(label ? { label } : {}) });
    const GUT = (n, label) => ({ url: 'https://www.gutenberg.org/ebooks/' + n, host: 'gutenberg.org', kind: 'text', ...(label ? { label } : {}) });
    const SEtext = (path, label) => ({ url: 'https://standardebooks.org/ebooks/' + path, host: 'standardebooks.org', kind: 'text', ...(label ? { label } : {}) });
    const rec = (id, a, title, original, fields) => {
      const [author, authorKey, tradition] = A[a];
      const year = parseInt(original, 10);
      const base = {
        id, title, subtitle: null, author, authorKey, period: 'Twentieth century', periodKey: year < 1901 ? '19th century' : '20th century', original, tradition,
        language: 'English', categories: ['literature'], tags: [], audience: 'All ages', context: [], family: null,
        publisher: null, translator: null, editor: null, repository: null, sourcePage: null, pdf: null, transcription: null,
        online: [], modern: [], future: [], find: null, pdDate: null, checked: '2026-10-22',
      };
      const w = { ...base, ...fields };
      if (w.pdDate) {
        w.rights = 'in-copyright-pd';
        w.type = 'Introduction only · in copyright';
        w.rightsNote = w.rightsNote || `In copyright in the United States. Expected to enter the US public domain on ${w.pdDate}, when Waterside will link a free edition here. Until then, borrow it from a library or buy a copy; copies posted free online are not authorized.`;
      } else {
        w.rights = w.rights || 'pd-us';
        w.type = 'Read free online (external)';
        w.rightsNote = w.rightsNote || 'Published before 1931; public domain in the United States. Linked, not re-hosted.';
      }
      return w;
    };
    const TOLKIEN_NOTE = 'Tolkien was a devout Roman Catholic and said so of his work. Of The Lord of the Rings he wrote to a Jesuit friend that it was “a fundamentally religious and Catholic work; unconsciously so at first, but consciously in the revision” (Letters, no. 142). The faith in his stories is almost never stated. It is built into the moral world: providence working through small choices, mercy shown to the undeserving, power refused rather than seized, and joy arriving as grace.';
    return [
      // ── Tolkien ──
      rec('tolkien-hobbit', 'tolkien', 'The Hobbit', '1937', {
        subtitle: 'or There and Back Again', categories: ['literature', 'household'], tags: ['fantasy', 'reading aloud', 'courage', 'Tolkien'],
        audience: 'Children from about 7 (read aloud), all ages',
        summary: 'A comfortable hobbit is swept into a dragon-hunt, and finds courage, honesty, and generosity he did not know he had.',
        context: [TOLKIEN_NOTE, 'The Hobbit is the gentlest door into that world. Bilbo’s growth is the old shape of moral formation: a small, ordinary person tested by hardship, tempted by treasure, and proved by a costly act of honesty that wins him nothing for himself. Tolkien first told it to his own sons, and it still reads best aloud.'],
        family: 'Read a chapter an evening. Stop at Bilbo’s choice in the dark with Gollum (chapter 5) and at the Arkenstone (chapter 16) and ask the children what they would have done, and why.',
        edition: 'First published by George Allen & Unwin, London, 1937. Tolkien revised chapter 5 in the second edition of 1951 to fit The Lord of the Rings; most printings follow the revised text.',
        pdDate: '1 January 2033',
        rightsNote: 'In copyright in the United States. The 1937 first-edition text is expected to enter the US public domain on 1 January 2033, when Waterside will link a free edition here. The revised 1951 text follows later (expected 2047). Until then, borrow it from a library or buy a copy; copies posted free online are not authorized.',
        future: [SE('j-r-r-tolkien/the-hobbit', 'Standard Ebooks, from 2033')], find: wc('The Hobbit', 'Tolkien') }),
      rec('tolkien-lord-of-the-rings', 'tolkien', 'The Lord of the Rings', '1954–1955', {
        subtitle: 'The Fellowship of the Ring · The Two Towers · The Return of the King', categories: ['literature', 'household'], tags: ['fantasy', 'providence', 'mercy', 'reading aloud', 'Tolkien'],
        audience: 'Older children (read aloud from about 10), teenagers, adults',
        summary: 'The Ring of Power must be destroyed, and the task falls to the smallest. A long story of friendship, temptation, sacrifice, and a victory that comes by grace, not strength.',
        context: [TOLKIEN_NOTE, 'Watch for pity. Gandalf tells Frodo that Bilbo’s pity for Gollum “may rule the fate of many,” and at the end the quest is saved not by Frodo’s strength, which fails, but by that mercy. Tolkien called the sudden turn to joy at the end of a story a “eucatastrophe” and saw in it a glimpse of the Gospel.', 'Reformed readers will notice Catholic colouring here and there, such as the devotion of the Elves to Elbereth, which some readers have linked to Marian devotion. The larger theology, of providence, a fallen world, and grace, is common Christian ground.'],
        family: 'Read it aloud over a winter, a chapter or half-chapter a night. Gandalf’s conversation with Frodo in “The Shadow of the Past” is worth reading twice.',
        edition: 'First published by George Allen & Unwin, London, in three volumes: The Fellowship of the Ring and The Two Towers (1954), The Return of the King (1955). Tolkien revised the text for the second edition of 1965–66.',
        pdDate: '1 January 2050',
        rightsNote: 'In copyright in the United States. The Fellowship of the Ring and The Two Towers are expected to enter the US public domain on 1 January 2050, and The Return of the King on 1 January 2051; the revised second-edition text follows later. Waterside will link free editions here as each volume becomes available. Until then, borrow from a library or buy a copy; copies posted free online are not authorized.',
        future: [SE('j-r-r-tolkien/the-fellowship-of-the-ring', 'Fellowship, from 2050'), SE('j-r-r-tolkien/the-two-towers', 'Two Towers, from 2050'), SE('j-r-r-tolkien/the-return-of-the-king', 'Return of the King, from 2051')],
        find: wc('The Lord of the Rings', 'Tolkien') }),
      rec('tolkien-silmarillion', 'tolkien', 'The Silmarillion', '1977', {
        categories: ['literature'], tags: ['creation', 'fall', 'myth', 'Tolkien'], audience: 'Teenagers, adults',
        summary: 'The deep history behind The Lord of the Rings, opening with the creation of the world in music and the first rebellion against its Maker.',
        context: [TOLKIEN_NOTE, 'The first chapter, the “Ainulindalë,” is Tolkien’s creation story: the One, Ilúvatar, makes the world through a great music, and the rebel Melkor’s discord is in the end woven into a greater harmony than he could imagine. It is a meditation on providence and evil that older children can follow.'],
        family: 'Read the Ainulindalë aloud alongside Genesis 1–3 and Job 38, and talk about how God rules even over rebellion.',
        edition: 'Edited from Tolkien’s papers by his son Christopher Tolkien and published by George Allen & Unwin, London, 1977.', editor: 'Christopher Tolkien',
        pdDate: '1 January 2073', find: wc('The Silmarillion', 'Tolkien') }),
      rec('tolkien-leaf-by-niggle', 'tolkien', 'Leaf by Niggle', '1945', {
        categories: ['literature', 'devotional'], tags: ['allegory', 'work', 'vocation', 'Tolkien'], audience: 'Teenagers, adults',
        summary: 'A short allegory about a painter who never finishes his great picture of a tree, and what becomes of his work, and his neighbour, after he is called away on a journey.',
        context: [TOLKIEN_NOTE, 'It is a parable of vocation: of unfinished work, of the interruptions of neighbourly duty, and of the hope that what is true in our labour is not lost. Tolkien wrote it while worrying that he would never finish The Lord of the Rings. Its middle section is a kind of purgatory, which Protestant readers will read as story rather than doctrine.'],
        family: 'Read it in one sitting with older children. It takes about forty minutes. Talk about Niggle’s neighbour Parish and whose work turned out to matter.',
        edition: 'First published in The Dublin Review, January 1945; later collected in Tree and Leaf (1964).',
        pdDate: '1 January 2041', find: wc('Leaf by Niggle', 'Tolkien') }),
      rec('tolkien-on-fairy-stories', 'tolkien', 'On Fairy-Stories', '1947', {
        categories: ['literature', 'household'], tags: ['imagination', 'eucatastrophe', 'essay', 'Tolkien'], audience: 'Parents, older teenagers',
        summary: 'Tolkien’s essay on what fairy-stories are for: recovery, escape, and consolation, and the “eucatastrophe,” the sudden joyous turn, which he saw fulfilled in the Gospel.',
        context: [TOLKIEN_NOTE, 'This is his defence of imaginative literature for Christians. He argues that making stories is a right use of the image of God (“we make still by the law in which we’re made”) and that the Resurrection is the eucatastrophe of the story of the Incarnation, the true story that all good fairy-stories echo.'],
        family: 'For parents deciding what stories belong in the house. Read the epilogue first; it is three pages long.',
        edition: 'Given as the Andrew Lang Lecture at St Andrews, 1939; first published in Essays Presented to Charles Williams (Oxford University Press, 1947); revised in Tree and Leaf (1964).',
        pdDate: '1 January 2043', find: wc('Tree and Leaf', 'Tolkien') }),

      // ── Lewis ──
      rec('lewis-narnia', 'lewis', 'The Chronicles of Narnia', '1950–1956', {
        subtitle: 'Seven books, beginning with The Lion, the Witch and the Wardrobe', categories: ['literature', 'household'], tags: ['fantasy', 'reading aloud', 'Aslan', 'Lewis'],
        audience: 'Children from about 6 (read aloud), all ages',
        summary: 'Children pass into a world where a great Lion, Aslan, is its true King. The first book retells the Passion in a child’s terms: a traitor, a sacrifice, and a resurrection that breaks the Witch’s power.',
        context: ['Lewis, a lay member of the Church of England, wrote the Chronicles not as allegory but as a “supposal”: suppose there were a world like Narnia, and Christ chose to become incarnate there. The books form a child’s whole theology in story: creation (The Magician’s Nephew), atonement (The Lion, the Witch and the Wardrobe), conversion (Eustace in The Voyage of the Dawn Treader), and the last judgment (The Last Battle).', 'Some readers question one scene in The Last Battle, in which a sincere worshipper of a false god is received by Aslan. Lewis meant it as a picture of God’s mercy; families who hold that salvation is by faith in Christ alone will want to talk it through.'],
        family: 'Read them in publication order, beginning with The Lion, the Witch and the Wardrobe. Edmund’s treachery and Aslan’s death in chapters 13–15 are the heart of the series.',
        edition: 'First published by Geoffrey Bles and The Bodley Head, London, 1950–1956.',
        pdDate: '1 January 2046',
        rightsNote: 'In copyright in the United States. The Lion, the Witch and the Wardrobe is expected to enter the US public domain on 1 January 2046, and the later books one year at a time through The Last Battle on 1 January 2052. Waterside will link free editions as each becomes available. Until then, borrow from a library or buy a copy; copies posted free online are not authorized.',
        future: [SE('c-s-lewis/the-lion-the-witch-and-the-wardrobe', 'The Lion, the Witch and the Wardrobe, from 2046')], find: wc('The Lion, the Witch and the Wardrobe', 'Lewis') }),
      rec('lewis-mere-christianity', 'lewis', 'Mere Christianity', '1952', {
        categories: ['literature', 'theology'], tags: ['apologetics', 'moral law', 'Lewis'], audience: 'Teenagers, adults',
        summary: 'Lewis’s wartime radio talks on the faith held in common by Christians: the moral law, what Christians believe, Christian behaviour, and the doctrine of the Trinity.',
        context: ['Given on BBC radio from 1941 to 1944 and gathered into one book in 1952. Lewis deliberately set aside the questions that divide denominations, describing “mere” Christianity as a hall from which the rooms of the churches open.', 'Reformed readers will find his account of justification and the atonement less precise than the confessions; its strength is the argument from the moral law and its plain, vivid prose.'],
        family: 'A good first theology book for a teenager. Read Book I together and argue about it.',
        edition: 'Geoffrey Bles, London, 1952, collecting Broadcast Talks (1942), Christian Behaviour (1943), and Beyond Personality (1944).',
        pdDate: '1 January 2048', find: wc('Mere Christianity', 'Lewis') }),
      rec('lewis-abolition-of-man', 'lewis', 'The Abolition of Man', '1943', {
        categories: ['literature', 'household'], tags: ['education', 'moral formation', 'natural law', 'Lewis'], audience: 'Parents, older teenagers',
        summary: 'Three lectures on education, arguing that children must be trained to love what is truly lovely and hate what is truly hateful, and warning against an education that produces “men without chests.”',
        context: ['Lewis defends objective value, which he calls the Tao, the moral law recognized across civilizations, against a fashionable schooling that treats all value as feeling. It is the clearest short case in English for why moral formation belongs at the centre of education.'],
        family: 'For parents first. Lecture 1, “Men without Chests,” is the part to read if you read nothing else.',
        edition: 'Riddell Memorial Lectures, University of Durham, 1943; published by Oxford University Press, 1943.',
        pdDate: '1 January 2039', find: wc('The Abolition of Man', 'Lewis') }),
      rec('lewis-screwtape', 'lewis', 'The Screwtape Letters', '1942', {
        categories: ['literature', 'devotional'], tags: ['temptation', 'satire', 'Lewis'], audience: 'Teenagers, adults',
        summary: 'Letters from a senior devil to his nephew on how to win a young man’s soul. A comic and searching study of everyday temptation.',
        context: ['Everything is upside down: “the Enemy” is God and “Our Father Below” is Satan. Lewis’s point is that the road to hell is usually gradual, “the gentle slope, soft underfoot,” made of small distractions, petty resentments, and comfortable half-belief. Compare Brooks’s Precious Remedies Against Satan’s Devices, which covers the same ground in Puritan prose.'],
        family: 'Read one letter at a time with older teenagers, and turn each piece of devilish advice the right way up together.',
        edition: 'Serialized in The Guardian (an Anglican weekly), 1941; published by Geoffrey Bles, London, 1942.',
        pdDate: '1 January 2038', find: wc('The Screwtape Letters', 'Lewis') }),
      rec('lewis-poetry', 'lewis', 'Spirits in Bondage and Dymer', '1919, 1926', {
        subtitle: 'Lewis’s early poetry', categories: ['literature'], tags: ['poetry', 'conversion', 'Lewis'], audience: 'Adults',
        summary: 'Lewis’s first two books, published under the name Clive Hamilton before his conversion: a cycle of lyrics written partly in the trenches of the First World War, and a long narrative poem.',
        context: ['These are the poems of a young atheist. Spirits in Bondage sees nature as cruel and God as absent or hostile. They belong here as the “before” of Lewis’s conversion, described in Surprised by Joy, and as a reminder that the apologist was once on the other side.'],
        edition: 'Spirits in Bondage: William Heinemann, London, 1919 (Project Gutenberg #2003). Dymer: J. M. Dent, London, 1926. Standard Ebooks publishes both together as “Poetry.”',
        rights: 'pd-us', rightsNote: 'Both were published before 1931 and are public domain in the United States. Lewis’s later works remain in copyright.',
        online: [GUT(2003, 'Spirits in Bondage'), SEtext('c-s-lewis/poetry', 'Spirits in Bondage and Dymer')] }),

      // ── Chesterton ──
      rec('chesterton-orthodoxy', 'chesterton', 'Orthodoxy', '1908', {
        categories: ['literature', 'theology'], tags: ['apologetics', 'joy', 'creed', 'Chesterton'], audience: 'Older teenagers, adults',
        summary: 'Chesterton’s account of how he came to believe the Apostles’ Creed: not by argument first, but by finding that it alone made sense of wonder, sanity, and the strange joy of the world.',
        context: ['Written while Chesterton was still an Anglican, fourteen years before he became a Roman Catholic. The chapter “The Ethics of Elfland” argues that fairy tales teach the truest philosophy: that the world is a gift, given on conditions, and that wonder is the right response to it. It is the closest thing in Chesterton to Tolkien’s On Fairy-Stories, and Lewis read Chesterton closely.'],
        family: 'Read “The Ethics of Elfland” (chapter 4) aloud to older teenagers. It is the best defence of reading fairy tales to children.',
        edition: 'John Lane, London and New York, 1908.',
        online: [GUT(130), SEtext('g-k-chesterton/orthodoxy')] }),
      rec('chesterton-everlasting-man', 'chesterton', 'The Everlasting Man', '1925', {
        categories: ['literature', 'theology', 'history'], tags: ['apologetics', 'history', 'Incarnation', 'Chesterton'], audience: 'Adults',
        summary: 'A history of mankind and of Christ, arguing that both are stranger and more unique than the modern view of history allows.',
        context: ['C. S. Lewis credited this book with showing him, while still an unbeliever, how the Christian view of history made sense. Its second half, on Christ and the Church, is Chesterton at his most moving. It was written after his reception into the Roman Catholic Church.'],
        edition: 'Hodder & Stoughton, London, 1925.',
        online: [GUT(65688), SEtext('g-k-chesterton/the-everlasting-man')] }),
      rec('chesterton-heretics', 'chesterton', 'Heretics', '1905', {
        categories: ['literature', 'theology'], tags: ['essays', 'culture', 'Chesterton'], audience: 'Adults',
        summary: 'Essays on the leading writers of his day, from Shaw to Kipling, arguing that a man’s view of the cosmos is the most practical thing about him.',
        context: ['The book that provoked Orthodoxy: a critic complained that Chesterton had attacked everyone else’s philosophy without stating his own, and Orthodoxy was the answer.'],
        edition: 'John Lane, London and New York, 1905.',
        online: [GUT(470), SEtext('g-k-chesterton/heretics')] }),
      rec('chesterton-whats-wrong', 'chesterton', 'What’s Wrong with the World', '1910', {
        categories: ['literature', 'household'], tags: ['family', 'home', 'society', 'Chesterton'], audience: 'Parents, adults',
        summary: 'Chesterton’s defence of the family and the home against both the businessman and the reformer, with the famous line that the Christian ideal “has not been tried and found wanting. It has been found difficult; and left untried.”',
        context: ['He argues that the household, not the state or the market, is the free and sovereign centre of human life, and that most modern reforms quietly weaken it. Some chapters reflect the politics of 1910, and his remarks on women and work will divide readers today.'],
        family: 'For parents. Part I and the section “The Home of Man” are the core of the argument.',
        edition: 'Cassell, London, 1910.',
        online: [GUT(1717), SEtext('g-k-chesterton/whats-wrong-with-the-world')] }),
      rec('chesterton-thursday', 'chesterton', 'The Man Who Was Thursday', '1908', {
        subtitle: 'A Nightmare', categories: ['literature'], tags: ['novel', 'providence', 'Chesterton'], audience: 'Teenagers, adults',
        summary: 'A poet-detective infiltrates a council of anarchists named for the days of the week, and the chase becomes a dream about suffering, providence, and the face of God.',
        context: ['A comic thriller that turns, in its last chapters, into something like the Book of Job. The question at its centre, “Can ye drink of the cup that I drink of?”, is put to men who suffered without knowing why.'],
        edition: 'J. W. Arrowsmith, Bristol, 1908.',
        online: [GUT(1695), SEtext('g-k-chesterton/the-man-who-was-thursday')] }),
      rec('chesterton-father-brown', 'chesterton', 'The Father Brown Stories', '1911–1927', {
        subtitle: 'The Innocence, Wisdom, Incredulity, and Secret of Father Brown', categories: ['literature', 'household'], tags: ['detective stories', 'reading aloud', 'Chesterton'], audience: 'Older children, teenagers, adults',
        summary: 'A small, unremarkable Catholic priest solves crimes by understanding sin from the inside: he knows what a murderer is like because he knows his own heart.',
        context: ['Each story is a short puzzle with a moral turn. Father Brown’s method is humility and an exact knowledge of human evil, which he learned from hearing confessions. The first story, “The Blue Cross,” is a good place to begin.'],
        family: 'One story an evening; each takes twenty to thirty minutes aloud.',
        edition: 'Cassell, London: The Innocence of Father Brown (1911), The Wisdom of Father Brown (1914), The Incredulity of Father Brown (1926), The Secret of Father Brown (1927).',
        online: [GUT(204, 'The Innocence'), GUT(223, 'The Wisdom'), SEtext('g-k-chesterton/the-incredulity-of-father-brown', 'The Incredulity'), GUT(70175, 'The Secret')] }),
      rec('chesterton-white-horse', 'chesterton', 'The Ballad of the White Horse', '1911', {
        categories: ['literature', 'household'], tags: ['poetry', 'King Alfred', 'reading aloud', 'Chesterton'], audience: 'Older children, all ages',
        summary: 'A long ballad of King Alfred’s stand against the Danes, and of a hope that holds when there is no reason left to hope.',
        context: ['In Alfred’s vision the Virgin promises him no victory, only that “the sky grows darker yet / And the sea rises higher,” and he fights on. It is the same courage without hope of reward that runs through The Lord of the Rings.'],
        family: 'Read it aloud; it was written to be heard. Book I is a good evening’s reading.',
        edition: 'Methuen, London, 1911.',
        online: [GUT(1719)] }),
    ];
  })(),
];

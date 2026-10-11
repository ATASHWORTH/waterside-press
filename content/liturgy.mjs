// Waterside Press — Daily Household Liturgy content.
// Each element carries a `source` and a `kind` so the page can label it honestly:
//   kind: "scripture" (ESV), "historic" (historic text), "original" (Waterside Press original),
//         "editorial" (modern explanatory note).
// Weekday index follows JavaScript Date.getDay(): 0 = Sunday … 6 = Saturday.

const L = '<span class="sc">Lord</span>'; // ESV small-caps divine name

export const ESV_NOTICE =
  'Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved.';

// Elements said every day
export const common = {
  versicles: {
    title: 'Opening sentences',
    source: 'Book of Common Prayer (1662), Morning Prayer; drawn from Psalm 51:15',
    kind: 'historic',
    lines: [
      ['Leader', 'O Lord, open thou our lips.'],
      ['All', 'And our mouth shall shew forth thy praise.'],
      ['Leader', 'O God, make speed to save us.'],
      ['All', 'O Lord, make haste to help us.'],
    ],
  },
  gloria: {
    title: 'Gloria Patri',
    source: 'Book of Common Prayer (1662)',
    kind: 'historic',
    text: 'Glory be to the Father, and to the Son, and to the Holy Ghost; as it was in the beginning, is now, and ever shall be, world without end. Amen.',
  },
  lordsPrayer: {
    title: "The Lord's Prayer",
    source: 'Book of Common Prayer (1662) form; Matthew 6:9–13',
    kind: 'historic',
    text: "Our Father, which art in heaven, Hallowed be thy Name. Thy kingdom come. Thy will be done, in earth as it is in heaven. Give us this day our daily bread. And forgive us our trespasses, as we forgive them that trespass against us. And lead us not into temptation; but deliver us from evil. For thine is the kingdom, the power, and the glory, for ever and ever. Amen.",
  },
};

export const apostlesCreed = {
  title: "The Apostles' Creed",
  source: 'Book of Common Prayer (1662), Morning Prayer; spelling of “Catholick” modernized',
  kind: 'historic',
  text: [
    'I believe in God the Father Almighty, Maker of heaven and earth:',
    'And in Jesus Christ his only Son our Lord, Who was conceived by the Holy Ghost, Born of the Virgin Mary, Suffered under Pontius Pilate, Was crucified, dead, and buried: He descended into hell; The third day he rose again from the dead, He ascended into heaven, And sitteth on the right hand of God the Father Almighty; From thence he shall come to judge the quick and the dead.',
    'I believe in the Holy Ghost; The holy Catholic Church; The Communion of Saints; The Forgiveness of sins; The Resurrection of the body, And the life everlasting. Amen.',
  ],
  note: '“Catholic” here means the universal Church of every time and place. “Quick” means the living. Reformed churches have understood “he descended into hell” in different ways — the Heidelberg Catechism (Q. 44) reads it as Christ’s bearing of hellish anguish on the cross; the Westminster Larger Catechism (Q. 50) as his continuing under the power of death until the third day.',
};

export const days = [
  // ───────── SUNDAY ─────────
  {
    slug: 'sunday', name: 'Sunday', theme: "The Resurrection and the Lord's Day",
    intro: 'The first day of the week is the day of the resurrection. Christians have gathered on it from the apostolic age, and household prayer on this day looks toward the worship of the gathered church.',
    reading: {
      ref: 'Luke 24:1–6a',
      text: '<sup>1</sup> But on the first day of the week, at early dawn, they went to the tomb, taking the spices they had prepared. <sup>2</sup> And they found the stone rolled away from the tomb, <sup>3</sup> but when they went in they did not find the body of the Lord Jesus. <sup>4</sup> While they were perplexed about this, behold, two men stood by them in dazzling apparel. <sup>5</sup> And as they were frightened and bowed their faces to the ground, the men said to them, “Why do you seek the living among the dead? <sup>6</sup> He is not here, but has risen.”',
      note: 'Luke places the resurrection “on the first day of the week.” This is why the Church has kept Sunday as the Lord’s Day (compare Acts 20:7 and Revelation 1:10).',
    },
    song: {
      title: 'Psalm 100',
      source: 'Scottish Metrical Psalter (1650); text by William Kethe, first printed 1561',
      tune: 'OLD HUNDREDTH (Genevan Psalter, 1551) — Long Metre',
      stanzas: [
        'All people that on earth do dwell,\nSing to the Lord with cheerful voice.\nHim serve with mirth, his praise forth tell,\nCome ye before him and rejoice.',
        'Know that the Lord is God indeed;\nWithout our aid he did us make:\nWe are his flock, he doth us feed,\nAnd for his sheep he doth us take.',
        'O enter then his gates with praise,\nApproach with joy his courts unto:\nPraise, laud, and bless his name always,\nFor it is seemly so to do.',
        'For why? the Lord our God is good,\nHis mercy is for ever sure;\nHis truth at all times firmly stood,\nAnd shall from age to age endure.',
      ],
      note: 'Kethe’s 1561 text read “Him serve with fear”; the Scottish Psalter of 1650 has “with mirth.” Both readings are historic. “For why?” means “Because.”',
    },
    catechism: {
      n: 28,
      q: "Wherein consisteth Christ's exaltation?",
      a: 'Christ’s exaltation consisteth in his rising again from the dead on the third day, in ascending up into heaven, in sitting at the right hand of God the Father, and in coming to judge the world at the last day.',
      adult: 'The catechism moves from Christ’s humiliation (Q. 27) to his exaltation in four steps. Sunday is the weekly remembrance of the first of them.',
      child: 'Jesus died, but he did not stay dead. What are the four things this answer says Jesus has done or will do?',
    },
    collect: {
      title: 'The Collect for Easter Day',
      source: 'Book of Common Prayer (1662)',
      text: 'Almighty God, who through thine only-begotten Son Jesus Christ hast overcome death, and opened unto us the gate of everlasting life: We humbly beseech thee, that, as by thy special grace preventing us thou dost put into our minds good desires, so by thy continual help we may bring the same to good effect; through Jesus Christ our Lord, who liveth and reigneth with thee and the Holy Ghost, ever one God, world without end. Amen.',
      note: '“Preventing” is used in its older sense: going before. God’s grace goes ahead of us and gives us the desire to do good.',
    },
    childPrayer: 'Lord Jesus, you are risen from the dead. Thank you for this day of rest and worship. Help us to hear your word gladly with your people. Amen.',
    blessing: {
      ref: 'Numbers 6:24–26',
      text: 'The ' + L + ' bless you and keep you; the ' + L + ' make his face to shine upon you and be gracious to you; the ' + L + ' lift up his countenance upon you and give you peace.',
    },
  },
  // ───────── MONDAY ─────────
  {
    slug: 'monday', name: 'Monday', theme: 'Creation, vocation, and gratitude',
    intro: 'As the working week begins, the household remembers that the world is God’s good creation and that ordinary work is done before him.',
    reading: {
      ref: 'Genesis 1:1–5',
      text: '<sup>1</sup> In the beginning, God created the heavens and the earth. <sup>2</sup> The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters. <sup>3</sup> And God said, “Let there be light,” and there was light. <sup>4</sup> And God saw that the light was good. And God separated the light from the darkness. <sup>5</sup> God called the light Day, and the darkness he called Night. And there was evening and there was morning, the first day.',
      note: 'God makes the world by his word, and he calls it good. The first thing named is light, and the rhythm of evening and morning begins.',
    },
    song: {
      title: 'Praise for Creation and Providence',
      source: 'Isaac Watts, Divine Songs Attempted in Easy Language for the Use of Children (1715); spelling modernized',
      tune: 'Any Common Metre tune, e.g. ST. ANNE or DUNDEE',
      stanzas: [
        'I sing th’ almighty power of God,\nThat made the mountains rise,\nThat spread the flowing seas abroad,\nAnd built the lofty skies.',
        'I sing the wisdom that ordained\nThe sun to rule the day;\nThe moon shines full at his command,\nAnd all the stars obey.',
        'I sing the goodness of the Lord,\nThat filled the earth with food;\nHe formed the creatures with his word,\nAnd then pronounced them good.',
      ],
      note: 'Watts wrote this collection for children. Later hymnals often begin “I sing the mighty power of God.”',
    },
    catechism: {
      n: 9,
      q: 'What is the work of creation?',
      a: 'The work of creation is God’s making all things of nothing, by the word of his power, in the space of six days, and all very good.',
      adult: '“Of nothing” is the historic doctrine of creation ex nihilo: God did not shape pre-existing matter but brought all things into being.',
      child: 'What did God use to make the world? (Nothing but his word!) Name one good thing God made that you used today.',
    },
    collect: {
      title: 'A Collect for Grace',
      source: 'Book of Common Prayer (1662), Morning Prayer (the third collect)',
      text: 'O Lord, our heavenly Father, Almighty and everlasting God, who hast safely brought us to the beginning of this day: Defend us in the same with thy mighty power; and grant that this day we fall into no sin, neither run into any kind of danger; but that all our doings may be ordered by thy governance, to do always that is righteous in thy sight; through Jesus Christ our Lord. Amen.',
      note: 'A prayer for the beginning of the day. In the evening, the Saturday collect (“Lighten our darkness”) may be used instead.',
    },
    childPrayer: 'Heavenly Father, you made the light and called it good. Thank you for our home, our food, and our work. Help us to do our work well today, for you. Amen.',
    blessing: {
      ref: 'Romans 15:13',
      text: 'May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.',
    },
  },
  // ───────── TUESDAY ─────────
  {
    slug: 'tuesday', name: 'Tuesday', theme: 'The commandments and Christian obedience',
    intro: 'God’s law shows us how to love him and our neighbour. In the Reformed tradition it is received not as a ladder to earn favour but as a rule of thankful life for the redeemed.',
    reading: {
      ref: 'Deuteronomy 6:4–7',
      text: '<sup>4</sup> “Hear, O Israel: The ' + L + ' our God, the ' + L + ' is one. <sup>5</sup> You shall love the ' + L + ' your God with all your heart and with all your soul and with all your might. <sup>6</sup> And these words that I command you today shall be on your heart. <sup>7</sup> You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise.”',
      note: 'Jesus named verse 5 as the great and first commandment (Matthew 22:37–38). Verse 7 places the teaching of God’s word in the ordinary life of the household. For the full Ten Commandments, read Exodus 20:1–17.',
    },
    song: {
      title: 'Psalm 1',
      source: 'Scottish Metrical Psalter (1650)',
      tune: 'Any Common Metre tune, e.g. DUNDEE or FRENCH',
      stanzas: [
        'That man hath perfect blessedness\nwho walketh not astray\nIn counsel of ungodly men,\nnor stands in sinners’ way,',
        'Nor sitteth in the scorner’s chair:\nbut placeth his delight\nUpon God’s law, and meditates\non his law day and night.',
        'He shall be like a tree that grows\nnear planted by a river,\nWhich in his season yields his fruit,\nand his leaf fadeth never:',
        'And all he doth shall prosper well.\nThe wicked are not so;\nBut like they are unto the chaff,\nwhich wind drives to and fro.',
      ],
      note: 'This is the psalm from which Waterside Press takes its name: the tree planted by the water, nourished by delight in God’s word.',
    },
    catechism: {
      n: 42,
      q: 'What is the sum of the ten commandments?',
      a: 'The sum of the ten commandments is, to love the Lord our God with all our heart, with all our soul, with all our strength, and with all our mind; and our neighbour as ourselves.',
      adult: 'The answer follows Jesus’ own summary of the law (Luke 10:27). The first table of the commandments concerns love to God; the second, love to neighbour.',
      child: 'Who are the two people God tells us to love? Can you think of one way to love your neighbour today?',
    },
    collect: {
      title: 'The Collect for Purity',
      source: 'Book of Common Prayer (1662), opening of the Communion service; English form from a medieval Latin prayer',
      text: 'Almighty God, unto whom all hearts be open, all desires known, and from whom no secrets are hid: Cleanse the thoughts of our hearts by the inspiration of thy Holy Spirit, that we may perfectly love thee, and worthily magnify thy holy Name; through Christ our Lord. Amen.',
      note: 'In the 1662 service this prayer is followed immediately by the reading of the Ten Commandments.',
    },
    childPrayer: 'Lord God, you have told us how to live. Give us hearts that love you and love other people. When we disobey, forgive us for Jesus’ sake. Amen.',
    blessing: {
      ref: '2 Thessalonians 3:16',
      text: 'Now may the Lord of peace himself give you peace at all times in every way. The Lord be with you all.',
    },
  },
  // ───────── WEDNESDAY ─────────
  {
    slug: 'wednesday', name: 'Wednesday', theme: 'The Creed and the central truths of the faith',
    intro: 'Midweek, the household confesses the faith of the Church in the words of the Apostles’ Creed, the oldest baptismal summary of Christian belief in the West.',
    reading: {
      ref: 'John 1:1–5, 14',
      text: '<sup>1</sup> In the beginning was the Word, and the Word was with God, and the Word was God. <sup>2</sup> He was in the beginning with God. <sup>3</sup> All things were made through him, and without him was not any thing made that was made. <sup>4</sup> In him was life, and the life was the light of men. <sup>5</sup> The light shines in the darkness, and the darkness has not overcome it. … <sup>14</sup> And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.',
      note: 'The ellipsis marks verses 6–13, which are omitted here. John teaches that the Word is eternal God and truly became man — the faith the Creed confesses.',
    },
    creed: true,
    song: {
      title: 'Psalm 90 (“O God, our help in ages past”)',
      source: 'Isaac Watts, The Psalms of David Imitated (1719); first line as altered by John Wesley (1738)',
      tune: 'ST. ANNE (attributed to William Croft, 1708) — Common Metre',
      stanzas: [
        'O God, our help in ages past,\nOur hope for years to come,\nOur shelter from the stormy blast,\nAnd our eternal home.',
        'Under the shadow of thy throne\nThy saints have dwelt secure;\nSufficient is thine arm alone,\nAnd our defence is sure.',
        'Before the hills in order stood,\nOr earth received her frame,\nFrom everlasting thou art God,\nTo endless years the same.',
        'O God, our help in ages past,\nOur hope for years to come,\nBe thou our guard while troubles last,\nAnd our eternal home.',
      ],
      note: 'Watts wrote “Our God, our help”; Wesley’s alteration to “O God” is now the familiar form. Four of Watts’s nine stanzas are given.',
    },
    catechism: {
      n: 4,
      q: 'What is God?',
      a: 'God is a Spirit, infinite, eternal, and unchangeable, in his being, wisdom, power, holiness, justice, goodness, and truth.',
      adult: 'Three words describe how God is (infinite, eternal, unchangeable) and seven describe what he is. Each of the three applies to each of the seven.',
      child: '“Eternal” means God never began and will never end. Psalm 90 says the same thing — can you find the line?',
    },
    collect: {
      title: 'The Collect for Trinity Sunday',
      source: 'Book of Common Prayer (1662)',
      text: 'Almighty and everlasting God, who hast given unto us thy servants grace by the confession of a true faith to acknowledge the glory of the eternal Trinity, and in the power of the Divine Majesty to worship the Unity: We beseech thee, that thou wouldest keep us stedfast in this faith, and evermore defend us from all adversities, who livest and reignest, one God, world without end. Amen.',
    },
    childPrayer: 'Father, Son, and Holy Spirit, one God: we believe in you. Keep us in the true faith all our lives, and help us to know you better. Amen.',
    blessing: {
      ref: '2 Corinthians 13:14',
      text: 'The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all.',
    },
  },
  // ───────── THURSDAY ─────────
  {
    slug: 'thursday', name: 'Thursday', theme: 'Prayer, mercy, and love of neighbour',
    intro: 'The disciples asked Jesus to teach them to pray. Today the household learns from his answer and remembers others in prayer.',
    reading: {
      ref: 'Luke 11:1–4',
      text: '<sup>1</sup> Now Jesus was praying in a certain place, and when he finished, one of his disciples said to him, “Lord, teach us to pray, as John taught his disciples.” <sup>2</sup> And he said to them, “When you pray, say: “Father, hallowed be your name. Your kingdom come. <sup>3</sup> Give us each day our daily bread, <sup>4</sup> and forgive us our sins, for we ourselves forgive everyone who is indebted to us. And lead us not into temptation.”',
      note: 'Luke gives a shorter form of the Lord’s Prayer than Matthew 6:9–13. The longer form, with its closing doxology, is the one most churches pray together.',
    },
    song: {
      title: 'Psalm 23',
      source: 'Scottish Metrical Psalter (1650)',
      tune: 'CRIMOND (Jessie Seymour Irvine, 1872) or any Common Metre tune',
      stanzas: [
        'The Lord’s my shepherd, I’ll not want.\nHe makes me down to lie\nIn pastures green: he leadeth me\nthe quiet waters by.',
        'My soul he doth restore again;\nand me to walk doth make\nWithin the paths of righteousness,\nev’n for his own name’s sake.',
        'Yea, though I walk in death’s dark vale,\nyet will I fear none ill:\nFor thou art with me; and thy rod\nand staff me comfort still.',
        'My table thou hast furnishèd\nin presence of my foes;\nMy head thou dost with oil anoint,\nand my cup overflows.',
        'Goodness and mercy all my life\nshall surely follow me:\nAnd in God’s house for evermore\nmy dwelling-place shall be.',
      ],
      note: 'The grave accent in “furnishèd” shows that the final syllable is sung.',
    },
    catechism: {
      n: 98,
      q: 'What is prayer?',
      a: 'Prayer is an offering up of our desires unto God, for things agreeable to his will, in the name of Christ, with confession of our sins, and thankful acknowledgment of his mercies.',
      adult: 'The answer names five parts of prayer: desire, submission to God’s will, Christ’s mediation, confession, and thanksgiving.',
      child: 'Whose name do we pray in? Name one person outside our family we can pray for tonight.',
    },
    collect: {
      title: 'A Prayer of St. Chrysostom',
      source: 'Book of Common Prayer (1662), Morning Prayer; from the Greek liturgical tradition, traditionally attributed to John Chrysostom',
      text: 'Almighty God, who hast given us grace at this time with one accord to make our common supplications unto thee; and dost promise, that when two or three are gathered together in thy Name thou wilt grant their requests: Fulfil now, O Lord, the desires and petitions of thy servants, as may be most expedient for them; granting us in this world knowledge of thy truth, and in the world to come life everlasting. Amen.',
      note: 'The title is traditional. The prayer comes from Byzantine liturgies associated with Chrysostom’s name; his personal authorship cannot be established. It echoes Matthew 18:20.',
    },
    childPrayer: 'Dear Father, thank you that we can talk to you. We pray for those who are sick, sad, or lonely. Show us how to help them. In Jesus’ name, Amen.',
    blessing: {
      ref: 'Philippians 4:7',
      text: 'And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.',
    },
  },
  // ───────── FRIDAY ─────────
  {
    slug: 'friday', name: 'Friday', theme: 'The Passion of Christ, repentance, and hope',
    intro: 'Christians have long kept Friday in remembrance of the crucifixion. The household considers what Christ suffered for sinners and receives his pardon with hope.',
    reading: {
      ref: 'Isaiah 53:4–6',
      text: '<sup>4</sup> Surely he has borne our griefs and carried our sorrows; yet we esteemed him stricken, smitten by God, and afflicted. <sup>5</sup> But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed. <sup>6</sup> All we like sheep have gone astray; we have turned—every one—to his own way; and the ' + L + ' has laid on him the iniquity of us all.',
      note: 'The New Testament reads this Servant Song as fulfilled in Christ (Acts 8:32–35; 1 Peter 2:24–25).',
    },
    song: {
      title: 'When I Survey the Wondrous Cross',
      source: 'Isaac Watts, Hymns and Spiritual Songs (1707; revised 1709)',
      tune: 'ROCKINGHAM (adapted by Edward Miller, 1790) — Long Metre',
      stanzas: [
        'When I survey the wondrous cross\nOn which the Prince of glory died,\nMy richest gain I count but loss,\nAnd pour contempt on all my pride.',
        'Forbid it, Lord, that I should boast,\nSave in the death of Christ my God:\nAll the vain things that charm me most,\nI sacrifice them to his blood.',
        'See from his head, his hands, his feet,\nSorrow and love flow mingled down:\nDid e’er such love and sorrow meet,\nOr thorns compose so rich a crown?',
        'Were the whole realm of nature mine,\nThat were a present far too small;\nLove so amazing, so divine,\nDemands my soul, my life, my all.',
      ],
      note: 'The 1707 first edition read “On which the young Prince of Glory died”; Watts revised the line in 1709. A further stanza Watts himself marked as optional is omitted.',
    },
    catechism: {
      n: 33,
      q: 'What is justification?',
      a: 'Justification is an act of God’s free grace, wherein he pardoneth all our sins, and accepteth us as righteous in his sight, only for the righteousness of Christ imputed to us, and received by faith alone.',
      adult: 'This is the central Reformation teaching. Roman Catholic and Eastern Orthodox churches describe justification differently; the Waterside “Learning” pages aim to explain those differences fairly.',
      child: 'God forgives us and counts us as righteous. Whose goodness does God count as ours?',
    },
    collect: {
      title: 'The First Collect for Good Friday',
      source: 'Book of Common Prayer (1662)',
      text: 'Almighty God, we beseech thee graciously to behold this thy family, for which our Lord Jesus Christ was contented to be betrayed, and given up into the hands of wicked men, and to suffer death upon the cross; who now liveth and reigneth with thee and the Holy Ghost, ever one God, world without end. Amen.',
      note: '“This thy family” refers to the whole Church, but it is fitting on the lips of a household.',
    },
    childPrayer: 'Lord Jesus, you died on the cross for our sins. We are sorry for the wrong things we have done this week. Thank you for forgiving us. Amen.',
    blessing: {
      ref: 'Hebrews 13:20–21',
      text: 'Now may the God of peace who brought again from the dead our Lord Jesus, the great shepherd of the sheep, by the blood of the eternal covenant, equip you with everything good that you may do his will, working in us that which is pleasing in his sight, through Jesus Christ, to whom be glory forever and ever. Amen.',
    },
  },
  // ───────── SATURDAY ─────────
  {
    slug: 'saturday', name: 'Saturday', theme: "Rest, remembrance, and preparation for the Lord's Day",
    intro: 'At the close of the week the household gives thanks, rests in Christ, and prepares to worship with the church tomorrow.',
    reading: {
      ref: 'Matthew 11:28–30',
      text: '<sup>28</sup> Come to me, all who labor and are heavy laden, and I will give you rest. <sup>29</sup> Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. <sup>30</sup> For my yoke is easy, and my burden is light.',
      note: 'The rest Christ gives is not idleness but relief from the burden of sin and anxious striving.',
    },
    song: {
      title: 'An Evening Hymn',
      source: 'Thomas Ken, Manual of Prayers for the Use of the Scholars of Winchester College (1695; revised text 1709)',
      tune: 'TALLIS’ CANON (Thomas Tallis, c. 1561) — Long Metre',
      stanzas: [
        'Glory to thee, my God, this night,\nFor all the blessings of the light;\nKeep me, O keep me, King of kings,\nBeneath thine own almighty wings.',
        'Forgive me, Lord, for thy dear Son,\nThe ill that I this day have done,\nThat with the world, myself, and thee,\nI, ere I sleep, at peace may be.',
        'Praise God, from whom all blessings flow;\nPraise him, all creatures here below;\nPraise him above, ye heavenly host;\nPraise Father, Son, and Holy Ghost.',
      ],
      note: 'The final stanza is Ken’s doxology, sung today on its own as “the Doxology.” Two of Ken’s stanzas are given before it; the full hymn is longer.',
    },
    catechism: {
      n: 58,
      q: 'What is required in the fourth commandment?',
      a: 'The fourth commandment requireth the keeping holy to God such set times as he hath appointed in his word; expressly one whole day in seven, to be a holy sabbath to himself.',
      adult: 'Reformed churches have differed on how strictly the Lord’s Day should be kept; the Westminster Standards hold a stricter view than the Heidelberg Catechism (Q. 103).',
      child: 'How many days out of seven belong to God in a special way? What can we do tonight to get ready for church tomorrow?',
    },
    collect: {
      title: 'A Collect for Aid against All Perils',
      source: 'Book of Common Prayer (1662), Evening Prayer (the third collect)',
      text: 'Lighten our darkness, we beseech thee, O Lord; and by thy great mercy defend us from all perils and dangers of this night; for the love of thy only Son, our Saviour, Jesus Christ. Amen.',
    },
    childPrayer: 'Thank you, Lord, for this week. Thank you for every good gift. Give us good rest tonight, and glad hearts for worship tomorrow. Amen.',
    blessing: {
      ref: 'Jude 24–25',
      text: 'Now to him who is able to keep you from stumbling and to present you blameless before the presence of his glory with great joy, to the only God, our Savior, through Jesus Christ our Lord, be glory, majesty, dominion, and authority, before all time and now and forever. Amen.',
    },
  },
];

export const catechismSource =
  'Westminster Shorter Catechism (Westminster Assembly, 1647; approved by the Church of Scotland, 1648). Older spelling retained.';

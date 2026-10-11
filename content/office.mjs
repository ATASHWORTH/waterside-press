// Waterside Press — the Daily Office (Morning and Evening Prayer for the household).
//
// The order is a household adaptation of Morning and Evening Prayer in the Book of
// Common Prayer (1662). Every element names its source. Text marked kind:"original"
// was written for Waterside Press; "arrangement" marks Waterside choices about order
// or selection. Nothing newly written is attributed to a historic source.
//
// Variable elements come from two defined plans:
//   1. Psalms: the 1662 Prayer Book psalter, read through each month by the day of
//      the month (morning and evening portions). Historic.
//   2. Lessons: a Waterside plan of continuous reading (lectio continua) — one
//      Old Testament chapter at Morning Prayer, one New Testament chapter at Evening
//      Prayer, in canonical order, counted from 1 January 2026. Psalms are omitted
//      from the Old Testament course because the psalter supplies them.

const L = '<span class="sc">Lord</span>';

export const ESV_NOTICE =
  'Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved.';

export const PLAN_EPOCH = '2026-01-01';

// 1662 BCP: "The Psalter … appointed to be read … Morning and Evening" by day of month.
// Rubric: in months of 31 days the psalms of the 30th day are read again on the 31st.
export const psalter = [
  /* 1 */ [['1', '2', '3', '4', '5'], ['6', '7', '8']],
  /* 2 */ [['9', '10', '11'], ['12', '13', '14']],
  /* 3 */ [['15', '16', '17'], ['18']],
  /* 4 */ [['19', '20', '21'], ['22', '23']],
  /* 5 */ [['24', '25', '26'], ['27', '28', '29']],
  /* 6 */ [['30', '31'], ['32', '33', '34']],
  /* 7 */ [['35', '36'], ['37']],
  /* 8 */ [['38', '39', '40'], ['41', '42', '43']],
  /* 9 */ [['44', '45', '46'], ['47', '48', '49']],
  /* 10 */ [['50', '51', '52'], ['53', '54', '55']],
  /* 11 */ [['56', '57', '58'], ['59', '60', '61']],
  /* 12 */ [['62', '63', '64'], ['65', '66', '67']],
  /* 13 */ [['68'], ['69', '70']],
  /* 14 */ [['71', '72'], ['73', '74']],
  /* 15 */ [['75', '76', '77'], ['78']],
  /* 16 */ [['79', '80', '81'], ['82', '83', '84', '85']],
  /* 17 */ [['86', '87', '88'], ['89']],
  /* 18 */ [['90', '91', '92'], ['93', '94']],
  /* 19 */ [['95', '96', '97'], ['98', '99', '100', '101']],
  /* 20 */ [['102', '103'], ['104']],
  /* 21 */ [['105'], ['106']],
  /* 22 */ [['107'], ['108', '109']],
  /* 23 */ [['110', '111', '112', '113'], ['114', '115']],
  /* 24 */ [['116', '117', '118'], ['119:1-32']],
  /* 25 */ [['119:33-72'], ['119:73-104']],
  /* 26 */ [['119:105-144'], ['119:145-176']],
  /* 27 */ [['120', '121', '122', '123', '124', '125'], ['126', '127', '128', '129', '130', '131']],
  /* 28 */ [['132', '133', '134', '135'], ['136', '137', '138']],
  /* 29 */ [['139', '140', '141'], ['142', '143']],
  /* 30 */ [['144', '145', '146'], ['147', '148', '149', '150']],
];

export const otBooks = [
  ['Genesis', 50], ['Exodus', 40], ['Leviticus', 27], ['Numbers', 36], ['Deuteronomy', 34], ['Joshua', 24],
  ['Judges', 21], ['Ruth', 4], ['1 Samuel', 31], ['2 Samuel', 24], ['1 Kings', 22], ['2 Kings', 25],
  ['1 Chronicles', 29], ['2 Chronicles', 36], ['Ezra', 10], ['Nehemiah', 13], ['Esther', 10], ['Job', 42],
  ['Proverbs', 31], ['Ecclesiastes', 12], ['Song of Solomon', 8], ['Isaiah', 66], ['Jeremiah', 52],
  ['Lamentations', 5], ['Ezekiel', 48], ['Daniel', 12], ['Hosea', 14], ['Joel', 3], ['Amos', 9], ['Obadiah', 1],
  ['Jonah', 4], ['Micah', 7], ['Nahum', 3], ['Habakkuk', 3], ['Zephaniah', 3], ['Haggai', 2], ['Zechariah', 14],
  ['Malachi', 4],
];
export const ntBooks = [
  ['Matthew', 28], ['Mark', 16], ['Luke', 24], ['John', 21], ['Acts', 28], ['Romans', 16], ['1 Corinthians', 16],
  ['2 Corinthians', 13], ['Galatians', 6], ['Ephesians', 6], ['Philippians', 4], ['Colossians', 4],
  ['1 Thessalonians', 5], ['2 Thessalonians', 3], ['1 Timothy', 6], ['2 Timothy', 4], ['Titus', 3], ['Philemon', 1],
  ['Hebrews', 13], ['James', 5], ['1 Peter', 5], ['2 Peter', 3], ['1 John', 5], ['2 John', 1], ['3 John', 1],
  ['Jude', 1], ['Revelation', 22],
];

const BCP = 'Book of Common Prayer (1662)';

// Shared texts
export const texts = {
  versicles: {
    source: `${BCP}, Morning and Evening Prayer (from Psalm 51:15 and Psalm 70:1)`,
    lines: [
      ['Leader', 'O Lord, open thou our lips.'],
      ['All', 'And our mouth shall shew forth thy praise.'],
      ['Leader', 'O God, make speed to save us.'],
      ['All', 'O Lord, make haste to help us.'],
      ['Leader', 'Glory be to the Father, and to the Son, and to the Holy Ghost;'],
      ['All', 'As it was in the beginning, is now, and ever shall be, world without end. Amen.'],
      ['Leader', 'Praise ye the Lord.'],
      ['All', 'The Lord’s Name be praised.'],
    ],
  },
  confession: {
    source: `${BCP}, the General Confession at Morning and Evening Prayer`,
    text: 'Almighty and most merciful Father; We have erred, and strayed from thy ways like lost sheep. We have followed too much the devices and desires of our own hearts. We have offended against thy holy laws. We have left undone those things which we ought to have done; And we have done those things which we ought not to have done; And there is no health in us. But thou, O Lord, have mercy upon us, miserable offenders. Spare thou them, O God, which confess their faults. Restore thou them that are penitent; According to thy promises declared unto mankind in Christ Jesu our Lord. And grant, O most merciful Father, for his sake; That we may hereafter live a godly, righteous, and sober life, To the glory of thy holy Name. Amen.',
    note: '“Miserable” here means “in need of mercy.” In 1662 the confession is followed by an absolution pronounced by a priest. In household prayer Waterside follows the common Reformed practice of a declaration of pardon from Scripture instead, which any member of the household may read.',
  },
  assurance: { ref: '1 John 1:9', text: 'If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.' },
  creed: {
    source: `${BCP}, Morning and Evening Prayer; spelling “Catholick” modernized`,
    text: [
      'I believe in God the Father Almighty, Maker of heaven and earth:',
      'And in Jesus Christ his only Son our Lord, Who was conceived by the Holy Ghost, Born of the Virgin Mary, Suffered under Pontius Pilate, Was crucified, dead, and buried: He descended into hell; The third day he rose again from the dead, He ascended into heaven, And sitteth on the right hand of God the Father Almighty; From thence he shall come to judge the quick and the dead.',
      'I believe in the Holy Ghost; The holy Catholic Church; The Communion of Saints; The Forgiveness of sins; The Resurrection of the body, And the life everlasting. Amen.',
    ],
    note: '“Catholic” here means the universal Church of every time and place; “quick” means the living. Reformed churches have read “he descended into hell” in different ways: the Heidelberg Catechism (Q. 44) as Christ’s bearing of hellish anguish on the cross, the Westminster Larger Catechism (Q. 50) as his continuing under the power of death until the third day.',
  },
  lordsPrayer: {
    source: `${BCP} form; Matthew 6:9–13`,
    text: 'Our Father, which art in heaven, Hallowed be thy Name. Thy kingdom come. Thy will be done, in earth as it is in heaven. Give us this day our daily bread. And forgive us our trespasses, as we forgive them that trespass against us. And lead us not into temptation; but deliver us from evil. For thine is the kingdom, the power, and the glory, for ever and ever. Amen.',
  },
  suffrages: {
    source: `${BCP}, the suffrages after the Creed; the petition for the sovereign is omitted`,
    lines: [
      ['Leader', 'O Lord, shew thy mercy upon us.'],
      ['All', 'And grant us thy salvation.'],
      ['Leader', 'Endue thy Ministers with righteousness.'],
      ['All', 'And make thy chosen people joyful.'],
      ['Leader', 'O Lord, save thy people.'],
      ['All', 'And bless thine inheritance.'],
      ['Leader', 'Give peace in our time, O Lord.'],
      ['All', 'Because there is none other that fighteth for us, but only thou, O God.'],
      ['Leader', 'O God, make clean our hearts within us.'],
      ['All', 'And take not thy Holy Spirit from us.'],
    ],
  },
  intercessions: {
    source: 'Waterside Press. The headings follow 1 Timothy 2:1–2; pause after each for silent or spoken prayer',
    items: [
      'For the Church: our own congregation and its ministers, and Christians who suffer for their faith.',
      'For those in authority: that we may lead a peaceful and quiet life, godly and dignified in every way.',
      'For this household: each member by name, our work and studies, and the day ahead or the day now past.',
      'For our neighbours: the sick, the grieving, the lonely, and any who have asked for our prayers.',
      'In thanksgiving: for mercies received, named aloud.',
    ],
  },
  forChildren: {
    source: 'Waterside Press. For a parent praying for children, whether present or not',
    text: 'Heavenly Father, you have given us these children and you love them more than we do. Keep them in your care. Teach them your word, and bring them to trust in Jesus Christ all their days. Forgive us where we have failed them, and give us patience, wisdom, and joy in raising them. Through Jesus Christ our Lord. Amen.',
  },
};

// Canticles: Prayer Book translations (Coverdale tradition), public domain.
export const canticles = {
  benedictus: {
    title: 'Benedictus', subtitle: 'The Song of Zechariah, Luke 1:68–79', source: `${BCP}, Morning Prayer`,
    lines: [
      'Blessed be the Lord God of Israel : for he hath visited, and redeemed his people;',
      'And hath raised up a mighty salvation for us : in the house of his servant David;',
      'As he spake by the mouth of his holy Prophets : which have been since the world began;',
      'That we should be saved from our enemies : and from the hands of all that hate us;',
      'To perform the mercy promised to our forefathers : and to remember his holy Covenant;',
      'To perform the oath which he sware to our forefather Abraham : that he would give us;',
      'That we being delivered out of the hands of our enemies : might serve him without fear;',
      'In holiness and righteousness before him : all the days of our life.',
      'And thou, Child, shalt be called the Prophet of the Highest : for thou shalt go before the face of the Lord to prepare his ways;',
      'To give knowledge of salvation unto his people : for the remission of their sins,',
      'Through the tender mercy of our God : whereby the day-spring from on high hath visited us;',
      'To give light to them that sit in darkness, and in the shadow of death : and to guide our feet into the way of peace.',
    ],
  },
  teDeum: {
    title: 'Te Deum Laudamus', subtitle: 'A hymn of the Western Church, sung at Morning Prayer since at least the sixth century', source: `${BCP}, Morning Prayer`,
    lines: [
      'We praise thee, O God : we acknowledge thee to be the Lord.',
      'All the earth doth worship thee : the Father everlasting.',
      'To thee all Angels cry aloud : the Heavens, and all the Powers therein.',
      'To thee Cherubin and Seraphin : continually do cry,',
      'Holy, Holy, Holy : Lord God of Sabaoth;',
      'Heaven and earth are full of the Majesty : of thy glory.',
      'The glorious company of the Apostles : praise thee.',
      'The goodly fellowship of the Prophets : praise thee.',
      'The noble army of Martyrs : praise thee.',
      'The holy Church throughout all the world : doth acknowledge thee;',
      'The Father : of an infinite Majesty;',
      'Thine honourable, true : and only Son;',
      'Also the Holy Ghost : the Comforter.',
      'Thou art the King of Glory : O Christ.',
      'Thou art the everlasting Son : of the Father.',
      'When thou tookest upon thee to deliver man : thou didst not abhor the Virgin’s womb.',
      'When thou hadst overcome the sharpness of death : thou didst open the Kingdom of Heaven to all believers.',
      'Thou sittest at the right hand of God : in the glory of the Father.',
      'We believe that thou shalt come : to be our Judge.',
      'We therefore pray thee, help thy servants : whom thou hast redeemed with thy precious blood.',
      'Make them to be numbered with thy Saints : in glory everlasting.',
      'O Lord, save thy people : and bless thine heritage.',
      'Govern them : and lift them up for ever.',
      'Day by day : we magnify thee;',
      'And we worship thy Name : ever world without end.',
      'Vouchsafe, O Lord : to keep us this day without sin.',
      'O Lord, have mercy upon us : have mercy upon us.',
      'O Lord, let thy mercy lighten upon us : as our trust is in thee.',
      'O Lord, in thee have I trusted : let me never be confounded.',
    ],
    note: 'Medieval tradition credited the Te Deum to Ambrose and Augustine at Augustine’s baptism; that story is legendary. Many scholars associate it with Niceta of Remesiana (c. 400), but its authorship is uncertain. In 1662 it is appointed at every Morning Prayer; Waterside appoints it on Sundays and uses the Benedictus on other days.',
  },
  magnificat: {
    title: 'Magnificat', subtitle: 'The Song of Mary, Luke 1:46–55', source: `${BCP}, Evening Prayer`,
    lines: [
      'My soul doth magnify the Lord : and my spirit hath rejoiced in God my Saviour.',
      'For he hath regarded : the lowliness of his hand-maiden.',
      'For behold, from henceforth : all generations shall call me blessed.',
      'For he that is mighty hath magnified me : and holy is his Name.',
      'And his mercy is on them that fear him : throughout all generations.',
      'He hath shewed strength with his arm : he hath scattered the proud in the imagination of their hearts.',
      'He hath put down the mighty from their seat : and hath exalted the humble and meek.',
      'He hath filled the hungry with good things : and the rich he hath sent empty away.',
      'He remembering his mercy hath holpen his servant Israel : as he promised to our forefathers, Abraham and his seed, for ever.',
    ],
  },
  nuncDimittis: {
    title: 'Nunc Dimittis', subtitle: 'The Song of Simeon, Luke 2:29–32', source: `${BCP}, Evening Prayer`,
    lines: [
      'Lord, now lettest thou thy servant depart in peace : according to thy word.',
      'For mine eyes have seen : thy salvation,',
      'Which thou hast prepared : before the face of all people;',
      'To be a light to lighten the Gentiles : and to be the glory of thy people Israel.',
    ],
  },
  gloria: 'Glory be to the Father, and to the Son : and to the Holy Ghost; As it was in the beginning, is now, and ever shall be : world without end. Amen.',
};

export const offices = {
  morning: {
    name: 'Morning Prayer',
    sentence: {
      weekday: { ref: 'Lamentations 3:22–23', text: 'The steadfast love of the ' + L + ' never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.' },
      sunday: { ref: 'Psalm 118:24', text: 'This is the day that the ' + L + ' has made; let us rejoice and be glad in it.' },
    },
    lessonLabel: 'The Old Testament lesson',
    canticle: { weekday: 'benedictus', sunday: 'teDeum' },
    hymn: 'ken-morning',
    collects: {
      weekday: [
        { title: 'The Collect for Peace', source: `${BCP}, Morning Prayer (the second collect)`, text: 'O God, who art the author of peace and lover of concord, in knowledge of whom standeth our eternal life, whose service is perfect freedom: Defend us thy humble servants in all assaults of our enemies; that we, surely trusting in thy defence, may not fear the power of any adversaries; through the might of Jesus Christ our Lord. Amen.' },
        { title: 'The Collect for Grace', source: `${BCP}, Morning Prayer (the third collect)`, text: 'O Lord, our heavenly Father, Almighty and everlasting God, who hast safely brought us to the beginning of this day: Defend us in the same with thy mighty power; and grant that this day we fall into no sin, neither run into any kind of danger; but that all our doings may be ordered by thy governance, to do always that is righteous in thy sight; through Jesus Christ our Lord. Amen.' },
      ],
      sunday: [
        { title: 'A Collect for the Lord’s Day', source: `${BCP}, the Collect for Easter Day; used here on every Sunday as a Waterside arrangement`, text: 'Almighty God, who through thine only-begotten Son Jesus Christ hast overcome death, and opened unto us the gate of everlasting life: We humbly beseech thee, that, as by thy special grace preventing us thou dost put into our minds good desires, so by thy continual help we may bring the same to good effect; through Jesus Christ our Lord, who liveth and reigneth with thee and the Holy Ghost, ever one God, world without end. Amen.', note: '“Preventing” is used in its older sense: going before. God’s grace goes ahead of us.' },
        { title: 'The Collect for Grace', source: `${BCP}, Morning Prayer (the third collect)`, text: 'O Lord, our heavenly Father, Almighty and everlasting God, who hast safely brought us to the beginning of this day: Defend us in the same with thy mighty power; and grant that this day we fall into no sin, neither run into any kind of danger; but that all our doings may be ordered by thy governance, to do always that is righteous in thy sight; through Jesus Christ our Lord. Amen.' },
      ],
    },
    blessing: { ref: '2 Corinthians 13:14', text: 'The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all.' },
  },
  evening: {
    name: 'Evening Prayer',
    sentence: {
      weekday: { ref: 'Psalm 141:2', text: 'Let my prayer be counted as incense before you, and the lifting up of my hands as the evening sacrifice!' },
      sunday: { ref: 'Luke 24:29', text: 'Stay with us, for it is toward evening and the day is now far spent.' },
    },
    lessonLabel: 'The New Testament lesson',
    canticle: { weekday: 'magnificat', sunday: 'magnificat' },
    canticle2: 'nuncDimittis',
    hymn: 'ken-evening',
    collects: {
      weekday: [
        { title: 'The Collect for Peace', source: `${BCP}, Evening Prayer (the second collect)`, text: 'O God, from whom all holy desires, all good counsels, and all just works do proceed: Give unto thy servants that peace which the world cannot give; that both our hearts may be set to obey thy commandments, and also that by thee we being defended from the fear of our enemies may pass our time in rest and quietness; through the merits of Jesus Christ our Saviour. Amen.' },
        { title: 'A Collect for Aid against All Perils', source: `${BCP}, Evening Prayer (the third collect)`, text: 'Lighten our darkness, we beseech thee, O Lord; and by thy great mercy defend us from all perils and dangers of this night; for the love of thy only Son, our Saviour, Jesus Christ. Amen.' },
      ],
    },
    blessing: { ref: 'Numbers 6:24–26', text: 'The ' + L + ' bless you and keep you; the ' + L + ' make his face to shine upon you and be gracious to you; the ' + L + ' lift up his countenance upon you and give you peace.' },
  },
};
offices.evening.collects.sunday = offices.evening.collects.weekday;

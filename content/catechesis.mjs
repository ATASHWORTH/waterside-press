// Waterside Press — Family Catechesis.
// Participatory sessions: Gather, Recite, Read, Explain, Discuss, Remember, Practice, Pray.
// Catechism wording: Westminster Shorter Catechism (1647), older spelling retained.
// Scripture: ESV. Explanations, questions, practices, and closing prayers: Waterside Press.

const L = '<span class="sc">Lord</span>';

export const WSC_SOURCE = 'Westminster Shorter Catechism (Westminster Assembly, 1647; approved by the Church of Scotland, 1648)';

export const gatherPrayer = {
  title: 'For the right hearing of God’s Word',
  source: 'Book of Common Prayer (1662), the Collect for the Second Sunday in Advent',
  text: 'Blessed Lord, who hast caused all holy Scriptures to be written for our learning: Grant that we may in such wise hear them, read, mark, learn, and inwardly digest them, that by patience, and comfort of thy holy Word, we may embrace, and ever hold fast the blessed hope of everlasting life, which thou hast given us in our Saviour Jesus Christ. Amen.',
};

export const wsc = {
  1: ['What is the chief end of man?', 'Man’s chief end is to glorify God, and to enjoy him for ever.'],
  2: ['What rule hath God given to direct us how we may glorify and enjoy him?', 'The word of God, which is contained in the scriptures of the Old and New Testaments, is the only rule to direct us how we may glorify and enjoy him.'],
  3: ['What do the scriptures principally teach?', 'The scriptures principally teach what man is to believe concerning God, and what duty God requires of man.'],
  4: ['What is God?', 'God is a Spirit, infinite, eternal, and unchangeable, in his being, wisdom, power, holiness, justice, goodness, and truth.'],
  5: ['Are there more Gods than one?', 'There is but one only, the living and true God.'],
  6: ['How many persons are there in the godhead?', 'There are three persons in the Godhead; the Father, the Son, and the Holy Ghost; and these three are one God, the same in substance, equal in power and glory.'],
  9: ['What is the work of creation?', 'The work of creation is God’s making all things of nothing, by the word of his power, in the space of six days, and all very good.'],
  10: ['How did God create man?', 'God created man male and female, after his own image, in knowledge, righteousness, and holiness, with dominion over the creatures.'],
  59: ['Which day of the seven hath God appointed to be the weekly sabbath?', 'From the beginning of the world to the resurrection of Christ, God appointed the seventh day of the week to be the weekly sabbath; and the first day of the week ever since, to continue to the end of the world, which is the Christian sabbath.'],
};

export const units = [
  {
    id: 'first-questions',
    title: 'First Questions',
    summary: 'What we were made for, how God speaks to us, and who God is. Six sessions from the opening questions of the Westminster Shorter Catechism.',
    sessions: [
      {
        slug: 'chief-end', title: 'What we were made for', questions: [1],
        recite: 'This is the first session. Read the question and answer together three times, the leader asking and everyone answering.',
        reading: [
          { ref: '1 Corinthians 10:31', text: 'So, whether you eat or drink, or whatever you do, do all to the glory of God.' },
          { ref: 'Psalm 73:25–26', text: 'Whom have I in heaven but you? And there is nothing on earth that I desire besides you. My flesh and my heart may fail, but God is the strength of my heart and my portion forever.' },
        ],
        explain: 'The catechism begins with purpose, not with rules. To “glorify” God is to show and honour how great and good he is; to “enjoy” him is to find in him our deepest happiness. The two belong together: Psalm 73 shows a believer whose greatest delight is God himself. Notice that Paul applies this to eating and drinking, so it reaches the most ordinary parts of life.',
        discuss: {
          young: 'What were we made for? (Let them answer with the catechism.) What is one thing you enjoy that God made?',
          older: 'How could you glorify God while doing chores or schoolwork?',
          teens: 'Many people say the purpose of life is to be happy. How is the catechism’s answer like that, and how is it different?',
          adults: 'Where in your week do glorifying God and enjoying him feel separated? What would join them?',
        },
        remember: 'Man’s chief end is to glorify God, and to enjoy him for ever.',
        practice: 'At one meal this week, have each person name one thing they enjoyed that day and give thanks to God for it.',
        prayer: 'Our Father, you made us for yourself. Teach us to honour you in everything we do, and to find our joy in you above all things; through Jesus Christ our Lord. Amen.',
      },
      {
        slug: 'word-of-god', title: 'How God speaks to us', questions: [2],
        recite: 'Recite Question 1 from memory before you begin.',
        reading: [
          { ref: '2 Timothy 3:16–17', text: 'All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work.' },
        ],
        explain: 'If we were made to glorify and enjoy God, we need him to tell us how. The answer is his word in the Old and New Testaments. “Breathed out by God” means Scripture comes from God himself, through human writers. The word “only” is a Reformation emphasis: the Bible is the one rule that governs all others. Other Christian traditions also give great weight to the Bible, but they relate Scripture, church tradition, and church teaching authority differently; that is one of the real differences between Protestant, Roman Catholic, and Eastern Orthodox churches.',
        discuss: {
          young: 'Who gave us the Bible? Can you name one story from the Old Testament and one from the New?',
          older: 'The verse lists four things Scripture is useful for. Which one have you needed most this month?',
          teens: 'If the Bible is the “only rule,” what place is left for creeds, catechisms, and teachers? (Hint: rules can be taught by others without becoming new rules.)',
          adults: 'What competes with Scripture for authority in our household decisions?',
        },
        remember: 'All Scripture is breathed out by God. (2 Timothy 3:16)',
        practice: 'Choose a regular time this week when the household will read the Bible together, and keep it.',
        prayer: 'Lord God, thank you for speaking to us in your word. Give us ears to hear it and hearts to obey it; through Jesus Christ our Lord. Amen.',
      },
      {
        slug: 'what-scripture-teaches', title: 'What the Bible teaches', questions: [3],
        recite: 'Recite Questions 1 and 2.',
        reading: [
          { ref: 'John 20:31', text: 'but these are written so that you may believe that Jesus is the Christ, the Son of God, and that by believing you may have life in his name.' },
        ],
        explain: 'The Bible contains history, poetry, law, and letters, but the catechism names its two great subjects: what to believe about God, and what God asks of us. The rest of the Shorter Catechism follows exactly this plan: Questions 4–38 cover belief, and Questions 39–107 cover duty. John tells us the centre of it all: believing in Jesus, the Christ.',
        discuss: {
          young: 'Why did John write his book? (So that we would believe in Jesus.)',
          older: 'Name something the Bible tells us to believe, and something it tells us to do.',
          teens: 'Why do you think the catechism puts belief before duty? What happens if we reverse the order?',
          adults: 'Which half do we tend to neglect in our household: belief or obedience?',
        },
        remember: 'The scriptures principally teach what man is to believe concerning God, and what duty God requires of man.',
        practice: 'When you read the Bible together this week, ask after each passage: what does this teach us to believe, and what does it ask us to do?',
        prayer: 'Lord Jesus Christ, you are the centre of the Scriptures. Help us to believe in you and to follow you; for your name’s sake. Amen.',
      },
      {
        slug: 'what-is-god', title: 'Who God is', questions: [4],
        recite: 'Recite Question 3.',
        reading: [
          { ref: 'John 4:24', text: 'God is spirit, and those who worship him must worship in spirit and truth.' },
        ],
        explain: 'This answer is famous for its compactness. Three words describe the way God is (infinite, eternal, unchangeable) and seven describe what he is (being, wisdom, power, holiness, justice, goodness, truth). Each of the three applies to each of the seven: God’s goodness is infinite, eternal, and unchangeable, and so is his justice. “Spirit” means God has no body and cannot be limited to a place, which is why Jesus says worship is not tied to one mountain or temple.',
        discuss: {
          young: 'Can we see God? Where is God? (Everywhere!)',
          older: 'Pick one of the seven words. What would the world be like if God were not that?',
          teens: 'What does “unchangeable” mean for someone whose life feels unstable?',
          adults: 'Which attribute of God do you find hardest to trust, and why?',
        },
        remember: 'God is a Spirit, infinite, eternal, and unchangeable.',
        practice: 'Each evening this week, name one way you saw God’s goodness or wisdom that day.',
        prayer: 'Eternal God, you never change. In a changing world, keep us trusting in your goodness and truth; through Jesus Christ our Lord. Amen.',
      },
      {
        slug: 'one-god-three-persons', title: 'One God in three persons', questions: [5, 6],
        recite: 'Recite Question 4.',
        reading: [
          { ref: 'Deuteronomy 6:4', text: '“Hear, O Israel: The ' + L + ' our God, the ' + L + ' is one.”' },
          { ref: 'Matthew 28:19', text: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,' },
        ],
        explain: 'Israel confessed that there is one God (Deuteronomy 6:4), and Jesus sends his disciples to baptize in one name, the name of the Father, the Son, and the Holy Spirit. The Church’s doctrine of the Trinity holds both together: one God, three persons, “the same in substance, equal in power and glory.” This is the shared faith of the Nicene Creed (381), confessed by Eastern Orthodox, Roman Catholic, and Protestant churches alike. Analogies (water, ice, steam; an egg) usually mislead; it is better to say less and keep to Scripture’s words.',
        discuss: {
          young: 'How many Gods are there? What are the names of the three persons?',
          older: 'Where in your baptism, or at church, do you hear the names Father, Son, and Holy Spirit?',
          teens: 'Why might a simple analogy for the Trinity end up teaching something false?',
          adults: 'How does praying to the Father, through the Son, by the Spirit change the way you pray?',
        },
        remember: 'There is but one only, the living and true God.',
        practice: 'Close your prayers this week with the Gloria Patri: “Glory be to the Father, and to the Son, and to the Holy Ghost.”',
        prayer: 'Glory be to the Father, and to the Son, and to the Holy Ghost; as it was in the beginning, is now, and ever shall be, world without end. Amen.',
        prayerSource: 'Gloria Patri, as printed in the Book of Common Prayer (1662)',
      },
      {
        slug: 'creation', title: 'God the Creator, and us', questions: [9, 10],
        recite: 'Recite Questions 5 and 6.',
        reading: [
          { ref: 'Genesis 1:27', text: 'So God created man in his own image, in the image of God he created him; male and female he created them.' },
          { ref: 'Hebrews 11:3', text: 'By faith we understand that the universe was created by the word of God, so that what is seen was not made out of things that are visible.' },
        ],
        explain: 'God made all things “of nothing”: not from material that already existed, but by his word (Hebrews 11:3). Human beings are made in his image, which the catechism describes as knowledge, righteousness, and holiness, along with responsibility to care for the rest of creation. Christians who agree on all of this still differ over how to read the “six days” of Genesis 1; the Westminster divines held to six days, and believers today hold several views. The image of God, not the length of the days, is the point to press with children.',
        discuss: {
          young: 'Who made you? Who made the animals? What did God make you like?',
          older: 'What does it mean to look after (have “dominion” over) the creatures God made?',
          teens: 'If every person bears God’s image, how should that change the way we speak about people we disagree with?',
          adults: 'Where is our household careless with what God has made, whether things, time, or people?',
        },
        remember: 'God created man male and female, after his own image.',
        practice: 'Take one task this week that cares for creation (the garden, an animal, a mess left by someone else) and do it as work for God.',
        prayer: 'Almighty God, you made the world and called it good, and you made us in your image. Help us to care for what you have made, and to honour your image in every person; through Jesus Christ our Lord. Amen.',
      },
    ],
  },
  {
    id: 'lords-day',
    title: 'The Lord’s Day',
    summary: 'A session for Saturday evening or Sunday afternoon: why Christians gather on the first day of the week.',
    sunday: true,
    sessions: [
      {
        slug: 'first-day', title: 'The first day of the week', questions: [59],
        recite: 'Recite any question you have learned recently.',
        reading: [
          { ref: 'Acts 20:7a', text: 'On the first day of the week, when we were gathered together to break bread, Paul talked with them,' },
          { ref: 'Revelation 1:10a', text: 'I was in the Spirit on the Lord’s day,' },
        ],
        explain: 'Jesus rose on the first day of the week, and the New Testament shows Christians gathering on that day (Acts 20:7; 1 Corinthians 16:2) and calling it “the Lord’s day.” The Westminster Standards teach that the Sabbath command now applies to the first day, “the Christian sabbath.” Other Reformed and Lutheran confessions agree that Sunday is the day of worship but explain the link to the fourth commandment differently, and Christians observe the day’s rest with varying strictness. See the Lord’s Day page for a fuller account. Whatever the household’s view, the day belongs to worship with God’s people and to rest in Christ’s finished work.',
        discuss: {
          young: 'What happened on the first Easter morning? Why do we go to church on Sunday?',
          older: 'What makes Sunday different from Saturday in our house? What could make it more different?',
          teens: 'Is Sunday rest a rule, a gift, or both? Look at Mark 2:27 together.',
          adults: 'What would we need to stop doing on Saturday evening to come to worship ready?',
        },
        remember: 'The first day of the week … is the Christian sabbath.',
        practice: 'Prepare for the Lord’s Day tonight: lay out clothes, settle what you can of tomorrow’s work, and read the sermon passage if it is known.',
        prayer: 'Lord Jesus, you rose from the dead on the first day of the week. Make us glad to worship you with your people, and give us rest in you; for your name’s sake. Amen.',
      },
    ],
  },
];

export const allSessions = units.flatMap((u) => u.sessions.map((s, i) => ({ ...s, unit: u, n: i + 1 })));

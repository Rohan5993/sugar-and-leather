export const MARQUEE_ITEMS = ['Earned', 'Strong', 'Reflective', 'Human at the core', 'Unbreakable under pressure'];

export const ECOSYSTEM_CARDS = [
  {
    id: 'capital-access',
    href: '/products/capital-access',
    className: 'c-a',
    photo: '/assets/photo-coaching-sage.png',
    index: '01',
    name: 'Capital Access & Grant Services',
    description:
      'Funding strategy, grant writing, non-dilutive capital, operational readiness.',
  },
  {
    id: 'strategic-partnerships',
    href: '/products/strategic-partnerships',
    className: 'c-b',
    photo: '/assets/photo-coaching-library.png',
    index: '02',
    name: 'Strategic Partnerships',
    description:
      'Executive guidance + specialized service pods: Marketing, Sales, Dev, Recruitment.',
  },
  {
    id: 'aries-platform',
    href: '/products/aries-platform',
    className: 'c-c',
    photo: '/assets/photo-night-work.png',
    index: '03',
    name: 'ARIES Platform & Products',
    description:
      'AI-native business operating system. Sequence CRM. Built for mid-market scale.',
  },
  {
    id: 'advanced-tech',
    href: '/products/advanced-tech',
    className: 'c-d',
    photo: '/assets/photo-study-light.png',
    index: '04',
    name: 'Advanced Tech & Innovation',
    description:
      'AI governance, drone systems, distributed networks, patented IP.',
  },
];

export const FOUNDERS = [
  {
    id: 'audrey',
    image: '/assets/audrey.webp',
    tag: 'Founder & Purpose-Driven Coach',
    eyebrow: 'A note from our founder',
    quote: 'The leaders I admire most were never the loudest. They stayed',
    quoteHighlight: 'human',
    quoteEnd: 'when the pressure said otherwise',
    body:
      'I built Sugar & Leather for leaders who refuse to choose between ambition and humanity. We coach the human and advise the strategy, because at this altitude the two cannot be separated.',
    name: 'Audrey Cunningham-Jackson',
    role: 'Founder & Purpose-Driven Coach',
  },
  {
    id: 'troy',
    image: '/assets/Troy.webp',
    tag: 'Founder & Visionary Leadership Head',
    eyebrow: 'A note from our founder',
    quote: 'Strategy without judgment is just motion. The best operators know when to',
    quoteHighlight: 'pause',
    quoteEnd: 'before they scale',
    body:
      'I joined to build the systems that let leaders move faster without losing the plot — capital, partnerships, and technology wired to the same standard of care.',
    name: 'Troy Cunningham-Jackson',
    role: 'Founder & Visionary Leadership Head',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Who do you work with',
    answer:
      'Senior leaders and the organizations they steward — typically executives, founders, and boards navigating AI transformation. We are selective by design, and we say no far more often than we say yes.',
  },
  {
    question: 'Is this coaching, or consulting',
    answer:
      'Both, and neither in the usual sense. We coach the human and advise the strategy, because at the level we work, the two cannot be pulled apart. You are not buying a deliverable — you are entering a relationship.',
  },
  {
    question: 'How long does an engagement last',
    answer:
      'Most begin with a single quarter and deepen from there. Transformation is not a sprint; we stay as long as the work honestly requires, and not a session longer.',
  },
  {
    question: 'What makes Sugar & Leather different',
    answer:
      'Restraint. We take few clients, say little publicly, and let the work speak. The darkness is deliberate — it signals that we do not need to shout.',
  },
  {
    question: 'How do we begin',
    answer:
      'With a conversation. Request an introduction below and we will explore whether the fit is right. It usually becomes clear, to both of us, quite quickly.',
  },
];

export const PRACTICES = [
  {
    id: 'atelier',
    num: '01',
    eyebrow: 'Bespoke executive coaching',
    name: 'AriesAI',
    tagline: 'One leader. One coach. A year that changes the trajectory.',
    body: 'A single, uninterrupted relationship with a master coach. We work in quarterly arcs — uncovering the patterns beneath the performance, then rebuilding them deliberately. Confidential by design, intense by intention.',
    features: [
      {
        icon: 'Infinity',
        title: 'Quarterly transformation arcs',
        description: 'Structured cycles of insight, practice, and integration.',
      },
      {
        icon: 'UserRound',
        title: 'One-to-one with a master coach',
        description: 'No pods, no juniors. The same trusted voice throughout.',
      },
      {
        icon: 'Lock',
        title: 'Confidential by design',
        description: 'A room where the most senior leader can be unguarded.',
      },
    ],
    cta: { label: 'View more', href: '/practices/atelier' },
    reverse: false,
    slides: [
      { type: 'photo', image: '/assets/photo-coaching-sage.png', caption: 'The room' },
      {
        type: 'ui',
        caption: 'The arc',
        tag: 'AriesAI · Arc 01',
        title: 'Quarter one',
        subtitle: 'Patterns mapped · trust established',
        meter: '34%',
        lines: ['72%', '54%', '64%'],
      },
      { type: 'photo', image: '/assets/photo-study-light.png', caption: 'The work' },
    ],
  },
  {
    id: 'forge',
    num: '02',
    eyebrow: 'Leadership team intensives',
    name: 'SequenceAI',
    tagline: 'Heat, then shape. Teams that hold when it matters.',
    body: 'Immersive intensives where an entire leadership team is pressure-tested together. We rehearse the hardest decisions before they arrive — so that under real pressure, the team bends without breaking.',
    features: [
      {
        icon: 'Flame',
        title: 'Cohort immersions',
        description: 'Multi-day intensives, off the grid, fully present.',
      },
      {
        icon: 'GitBranch',
        title: 'Decision rehearsals',
        description: 'The high-stakes calls, practiced before they are real.',
      },
      {
        icon: 'UsersRound',
        title: 'Pressure-tested alignment',
        description: 'Friction surfaced and resolved, not buried.',
      },
    ],
    cta: { label: 'View more', href: '/practices/forge' },
    reverse: true,
    slides: [
      { type: 'photo', image: '/assets/photo-coaching-library.png', caption: 'The table' },
      {
        type: 'ui',
        caption: 'The rehearsal',
        tag: 'SequenceAI · Cohort',
        title: 'Alignment',
        subtitle: 'Eight leaders · one decision',
        meter: '82%',
        lines: ['60%', '78%', '48%'],
      },
      { type: 'photo', image: '/assets/photo-night-work.png', caption: 'The pressure' },
    ],
  },
  {
    id: 'compass',
    num: '03',
    eyebrow: 'Fractional AI leadership',
    name: 'Compass',
    tagline: 'Strategy is a direction, not a deck. We hold the line with you.',
    body: 'An embedded, senior hand on your AI strategy — part fractional Chief AI Officer, part trusted counsel. We translate ambition into roadmaps that survive contact with reality, and sit with you in the room when the decisions are hard.',
    features: [
      {
        icon: 'Compass',
        title: 'Embedded advisory',
        description: 'In your cadence, in your context — not from the outside.',
      },
      {
        icon: 'Presentation',
        title: 'Board-level fluency',
        description: 'The narrative your board needs, without the hand-waving.',
      },
      {
        icon: 'Route',
        title: 'Roadmaps that survive contact',
        description: 'Sequenced, fundable, and honest about the trade-offs.',
      },
    ],
    cta: { label: 'View more', href: '/practices/compass' },
    reverse: false,
    slides: [
      {
        type: 'ui',
        caption: 'The roadmap',
        tag: 'Compass · Roadmap',
        title: 'Horizon 2',
        subtitle: 'Capability before scale',
        meter: '58%',
        lines: ['84%', '56%', '70%'],
      },
      { type: 'photo', image: '/assets/photo-night-work.png', caption: 'The build' },
      { type: 'photo', image: '/assets/photo-coaching-library.png', caption: 'The counsel' },
    ],
  },
  {
    id: 'lexicon',
    num: '04',
    eyebrow: 'The AI-fluency platform',
    name: 'Lexicon',
    tagline: 'Understanding, not jargon. Fluency that compounds.',
    body: 'A living curriculum that makes executives genuinely fluent in AI — not performatively, but practically. Adaptive paths meet leaders where they are and stay current as the field moves, so the language never goes stale.',
    features: [
      {
        icon: 'Waypoints',
        title: 'Adaptive learning paths',
        description: 'Tailored to role, sector, and starting point.',
      },
      {
        icon: 'BookOpen',
        title: 'Plain-language frameworks',
        description: 'Mental models that hold up in a real boardroom.',
      },
      {
        icon: 'RefreshCw',
        title: 'Always current',
        description: 'Updated continuously as the frontier shifts.',
      },
    ],
    cta: { label: 'View more', href: '/practices/lexicon' },
    reverse: true,
    slides: [
      { type: 'photo', image: '/assets/photo-study-light.png', caption: 'The study' },
      {
        type: 'ui',
        caption: 'The path',
        tag: 'Lexicon · Path',
        title: 'Fluency',
        subtitle: 'Module 7 of 12 · adaptive',
        meter: '62%',
        lines: ['66%', '80%', '50%'],
      },
      { type: 'photo', image: '/assets/photo-night-work.png', caption: 'The practice' },
    ],
  },
];

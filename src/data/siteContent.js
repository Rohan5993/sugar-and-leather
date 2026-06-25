import { asset as a } from '../lib/asset';

export const MARQUEE_ITEMS = [
  'Capital',
  'Leadership',
  'Execution',
  'Funding readiness',
  'Business growth',
  'Operational support',
];

export const ECOSYSTEM_CARDS = [
  {
    id: 'capital-access',
    href: '/products/capital-access',
    className: 'c-a',
    photo: a('/assets/photo-coaching-sage.png'),
    index: '01',
    name: 'Capital Access & Grant Services',
    description:
      'Identify, apply for, and secure grants, incentives, and non-dilutive funding opportunities while building the operational readiness required for long-term growth.',
  },
  {
    id: 'strategic-partnerships',
    href: '/products/strategic-partnerships',
    className: 'c-b',
    photo: a('/assets/photo-coaching-library.png'),
    index: '02',
    name: 'Strategic Partnerships',
    description:
      'Gain access to executive leadership and specialized teams that help execute growth initiatives across your organization.',
  },
  {
    id: 'aries-platform',
    href: '/products/aries-platform',
    className: 'c-c',
    photo: a('/assets/photo-night-work.png'),
    index: '03',
    name: 'Product Platforms',
    description:
      'Leverage AI-native technology platforms, including Aries AI and Sequence, to streamline operations, revenue generation, and decision-making.',
  },
  {
    id: 'advanced-tech',
    href: '/products/advanced-tech',
    className: 'c-d',
    photo: a('/assets/photo-study-light.png'),
    index: '04',
    name: 'Innovation & Community',
    description:
      'Access research initiatives, innovation programs, and business communities designed to support founders and organizations at every stage.',
  },
];

export const HOMEPAGE_ECOSYSTEM = {
  eyebrow: 'The Sugar & Leather Ecosystem',
  title: 'One Ecosystem. Multiple Growth Engines.',
  intro:
    'Growing businesses rarely fail because of ideas. They struggle because they lack access to capital, strategic leadership, or execution capacity. Sugar & Leather brings all three together through a connected ecosystem designed to help organizations grow sustainably.',
};

export const HOMEPAGE_SHOWCASES = [
  {
    id: 'capital-access',
    num: '01',
    eyebrow: 'Capital Access & Grant Services',
    name: 'Funding Growth Without Giving Away Equity',
    tagline: '',
    body:
      'We help businesses identify funding opportunities, prepare grant applications, improve operational readiness, and secure non-dilutive capital that accelerates growth.',
    features: [
      {
        icon: 'Landmark',
        title: 'Funding Strategy',
        description: 'Identify the right capital pathways aligned to your growth stage and goals.',
      },
      {
        icon: 'FileText',
        title: 'Grant Writing & Submission',
        description: 'Prepare compelling applications and manage submissions end to end.',
      },
      {
        icon: 'Building2',
        title: 'Government Incentives',
        description: 'Navigate incentive programs designed to support business expansion.',
      },
      {
        icon: 'Coins',
        title: 'Non-Dilutive Capital Programs',
        description: 'Secure funding that fuels growth without giving away equity.',
      },
      {
        icon: 'TrendingUp',
        title: 'Investment Readiness',
        description: 'Build the operational and financial foundation funders expect.',
      },
      {
        icon: 'Map',
        title: 'Funding Roadmaps',
        description: 'Sequence capital milestones across grants, incentives, and programs.',
      },
    ],
    cta: { label: 'Explore Capital Services', href: '/products/capital-access' },
    reverse: false,
    slides: [
      { type: 'photo', image: a('/assets/photo-coaching-sage.png'), caption: 'Capital strategy' },
      {
        type: 'ui',
        caption: 'Funding roadmap',
        tag: 'Capital Access · Roadmap',
        title: 'Non-dilutive capital',
        subtitle: 'Grants · incentives · readiness',
        meter: '68%',
        lines: ['72%', '58%', '64%'],
      },
      { type: 'photo', image: a('/assets/photo-study-light.png'), caption: 'Operational readiness' },
    ],
  },
  {
    id: 'strategic-partnerships',
    num: '02',
    eyebrow: 'Strategic Partnerships',
    name: 'Executive Leadership Without Full-Time Overhead',
    tagline:
      'For organizations that are ready to scale, Sugar & Leather provides strategic partnership engagements that combine executive leadership with specialized execution teams.',
    body:
      'Each partnership is guided by experienced leaders and supported by dedicated operational pods that execute critical business functions.',
    features: [
      {
        icon: 'Megaphone',
        title: 'Marketing Pod',
        description:
          'Campaign execution, content systems, demand generation, brand growth, and marketing operations.',
      },
      {
        icon: 'Target',
        title: 'Sales Pod',
        description:
          'Pipeline development, outbound systems, sales operations, CRM processes, and revenue acceleration.',
      },
      {
        icon: 'Code',
        title: 'Development Pod',
        description:
          'Product development, software engineering, AI implementation, automation, and technical execution.',
      },
      {
        icon: 'UserPlus',
        title: 'Recruitment Pod',
        description: 'Talent acquisition, hiring systems, workforce planning, and recruitment operations.',
      },
    ],
    cta: { label: 'Explore Strategic Partnerships', href: '/products/strategic-partnerships' },
    reverse: true,
    slides: [
      { type: 'photo', image: a('/assets/photo-coaching-library.png'), caption: 'Executive leadership' },
      {
        type: 'ui',
        caption: 'Execution pods',
        tag: 'Strategic Partnerships · Pods',
        title: 'Growth execution',
        subtitle: 'Marketing · sales · dev · recruitment',
        meter: '82%',
        lines: ['60%', '78%', '48%'],
      },
      { type: 'photo', image: a('/assets/photo-night-work.png'), caption: 'Operational delivery' },
    ],
  },
  {
    id: 'products-platforms',
    num: '03',
    eyebrow: 'Products & Platforms',
    name: 'Technology Built for Modern Businesses',
    tagline: '',
    body:
      'Our platforms help organizations operate more efficiently, make better decisions, and accelerate growth through AI-powered systems.',
    features: [
      {
        icon: 'Cpu',
        title: 'Aries AI',
        description:
          'An AI-native operating system designed to centralize workflows, automate execution, and improve organizational productivity.',
      },
      {
        icon: 'Workflow',
        title: 'Sequence',
        description:
          'An intelligent revenue platform combining CRM intelligence, buyer intent signals, and sales execution tools to help teams close more business.',
      },
    ],
    cta: { label: 'Explore Products', href: '/products/aries-platform' },
    reverse: false,
    slides: [
      { type: 'photo', image: a('/assets/photo-night-work.png'), caption: 'Aries AI' },
      {
        type: 'ui',
        caption: 'Revenue intelligence',
        tag: 'Sequence · Platform',
        title: 'Pipeline velocity',
        subtitle: 'CRM · intent · execution',
        meter: '74%',
        lines: ['66%', '80%', '58%'],
      },
      { type: 'photo', image: a('/assets/photo-coaching-library.png'), caption: 'Sequence' },
    ],
  },
];

export const HOMEPAGE_WHY = {
  eyebrow: 'Why Companies Work With Sugar & Leather',
  title: 'More than advice.',
  titleHighlight: 'Real execution.',
  items: [
    {
      question: 'Strategic Leadership',
      answer:
        'Access experienced operators and executives without the cost of building a full executive team.',
    },
    {
      question: 'Execution Pods',
      answer:
        'Deploy specialized teams focused on outcomes rather than isolated consulting recommendations.',
    },
    {
      question: 'Funding Expertise',
      answer: 'Navigate grants and funding opportunities with experienced support.',
    },
    {
      question: 'Integrated Ecosystem',
      answer: 'Capital, leadership, technology, and execution delivered through a single partner.',
    },
  ],
};

export const HOMEPAGE_COMMUNITY = {
  eyebrow: 'Community & Innovation',
  title: 'Building the Future Through Innovation and Collaboration',
  body:
    'Beyond business services, Sugar & Leather invests in innovation initiatives, founder communities, educational programs, and strategic collaborations that strengthen the broader entrepreneurial ecosystem.',
  cta: { label: 'Explore Community & Innovation', href: '/products/advanced-tech' },
};

export const HOMEPAGE_CTA = {
  title: 'Ready to Accelerate Growth?',
  highlight: null,
  sub:
    "Whether you're looking for funding, leadership support, execution capacity, or AI-powered technology, Sugar & Leather provides the infrastructure to help organizations grow with confidence.",
  primaryLabel: 'Book a Strategy Call',
  primaryHref: 'mailto:hello@sugarandleather.com',
  secondaryLabel: 'Talk to Our Team',
  secondaryHref: 'mailto:hello@sugarandleather.com',
};

export const HOMEPAGE_HERO = {
  eyebrow: 'Capital · Leadership · Execution',
  title: 'Building Companies Through Capital, Leadership, and Execution.',
  sub:
    'Sugar & Leather helps founders and growing businesses access grants and non-dilutive funding, deploy executive leadership through Strategic Partnerships, and scale operations through specialized execution pods across Marketing, Sales, Development, and Recruitment.',
  trust:
    'From funding readiness to business execution, we help organizations move from opportunity to growth with the right capital, leadership, and operational support.',
  primaryCta: { label: 'Book a Strategy Call', href: '#cta' },
  secondaryCta: { label: 'Explore Our Ecosystem', href: '#ecosystem' },
};

export const FOUNDERS = [
  {
    id: 'audrey',
    image: a('/assets/audrey.webp'),
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
    image: a('/assets/Troy.webp'),
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
      { type: 'photo', image: a('/assets/photo-coaching-sage.png'), caption: 'The room' },
      {
        type: 'ui',
        caption: 'The arc',
        tag: 'AriesAI · Arc 01',
        title: 'Quarter one',
        subtitle: 'Patterns mapped · trust established',
        meter: '34%',
        lines: ['72%', '54%', '64%'],
      },
      { type: 'photo', image: a('/assets/photo-study-light.png'), caption: 'The work' },
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
      { type: 'photo', image: a('/assets/photo-coaching-library.png'), caption: 'The table' },
      {
        type: 'ui',
        caption: 'The rehearsal',
        tag: 'SequenceAI · Cohort',
        title: 'Alignment',
        subtitle: 'Eight leaders · one decision',
        meter: '82%',
        lines: ['60%', '78%', '48%'],
      },
      { type: 'photo', image: a('/assets/photo-night-work.png'), caption: 'The pressure' },
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
      { type: 'photo', image: a('/assets/photo-night-work.png'), caption: 'The build' },
      { type: 'photo', image: a('/assets/photo-coaching-library.png'), caption: 'The counsel' },
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
      { type: 'photo', image: a('/assets/photo-study-light.png'), caption: 'The study' },
      {
        type: 'ui',
        caption: 'The path',
        tag: 'Lexicon · Path',
        title: 'Fluency',
        subtitle: 'Module 7 of 12 · adaptive',
        meter: '62%',
        lines: ['66%', '80%', '50%'],
      },
      { type: 'photo', image: a('/assets/photo-night-work.png'), caption: 'The practice' },
    ],
  },
];

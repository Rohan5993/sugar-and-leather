export const PRODUCT_SLUGS = ['atelier', 'forge', 'compass', 'lexicon'];

export const PRODUCT_PAGES = {
  atelier: {
    slug: 'atelier',
    num: '01',
    eyebrow: 'Bespoke executive coaching',
    name: 'AriesAI',
    heroTitle: 'One leader. One coach.',
    heroHighlight: 'A year that changes the trajectory.',
    heroSub:
      'Private, intensive coaching for the singular leader navigating change at the highest altitude — confidential by design, intense by intention.',
    heroImage: '/assets/photo-coaching-sage.png',
    sections: [
      {
        id: 'practice',
        eyebrow: 'The practice',
        title: 'Craft measured in quarters, not sessions',
        body: 'AriesAI is not executive coaching as a calendar block. It is a sustained relationship with a master coach who stays with you through the full arc of transformation — mapping the patterns beneath your performance, then rebuilding them deliberately across quarterly cycles of insight, practice, and integration.',
        bullets: [
          'Dedicated master coach — no pods, no handoffs',
          'Quarterly arcs with clear transformation milestones',
          'Confidential space for the most unguarded conversations',
        ],
        image: '/assets/photo-study-light.png',
        reverse: false,
      },
      {
        id: 'experience',
        eyebrow: 'The experience',
        title: 'What changes when the room is truly yours',
        body: 'Leaders come to AriesAI at inflection points — succession, turnaround, public scrutiny, or the quiet crisis of outgrowing who they have been. The work is precise, private, and proportionate to the stakes.',
        bullets: [
          'Pattern recognition beneath executive performance',
          'Decision clarity under sustained pressure',
          'Leadership identity that holds when the context shifts',
        ],
        image: '/assets/photo-coaching-library.png',
        reverse: true,
      },
    ],
    stories: [
      {
        quote:
          'I had advisors everywhere. AriesAI was the first place I could say what I actually thought — and leave with a plan I trusted.',
        role: 'Chief Executive Officer',
        sector: 'Global financial services',
      },
      {
        quote:
          'The quarterly arcs gave structure to work that could have drifted for years. By the second quarter, the organization felt the difference.',
        role: 'President',
        sector: 'Healthcare technology',
      },
      {
        quote:
          'Confidentiality was not a feature — it was the condition that made everything else possible.',
        role: 'Founder & Chair',
        sector: 'Private equity-backed platform',
      },
    ],
    faq: [
      {
        question: 'Who is AriesAI for',
        answer:
          'CEOs, founders, and senior executives carrying decisions that cannot be rehearsed in public. We work with one leader at a time, typically for a minimum of four quarters.',
      },
      {
        question: 'How is AriesAI different from other coaching',
        answer:
          'Depth over volume. One master coach, no junior bench, no content library substitute for relationship. The work is bespoke because the leader is.',
      },
      {
        question: 'What does a quarter look like',
        answer:
          'Each arc opens with diagnostic depth, moves through structured practice in real decisions, and closes with integration — so change shows up in behavior, not only insight.',
      },
      {
        question: 'How do we begin',
        answer:
          'Request an introduction. We will explore fit in a single conversation — direct, confidential, and without obligation.',
      },
    ],
    cta: {
      title: 'Ready for the room',
      highlight: 'that is truly yours',
      sub: 'AriesAI engagements are limited. If the fit is right, we will know quickly — and so will you.',
      primaryLabel: 'Book a call',
      primaryHref: 'mailto:hello@sugarandleather.com',
      secondaryLabel: 'Explore the ecosystem',
      secondaryHref: '/#ecosystem',
    },
  },
  forge: {
    slug: 'forge',
    num: '02',
    eyebrow: 'Leadership team intensives',
    name: 'SequenceAI',
    heroTitle: 'Heat, then shape.',
    heroHighlight: 'Teams that hold when it matters.',
    heroSub:
      'Immersive intensives where an entire leadership team is pressure-tested together — rehearsing the hardest decisions before they arrive.',
    heroImage: '/assets/photo-coaching-library.png',
    sections: [
      {
        id: 'practice',
        eyebrow: 'The practice',
        title: 'Alignment forged under pressure',
        body: 'SequenceAI brings the full leadership team into the same room — off the grid, fully present — to surface friction, rehearse high-stakes decisions, and leave with alignment that survives contact with reality.',
        bullets: [
          'Multi-day cohort immersions designed for your team',
          'Decision rehearsals for the calls you cannot get wrong',
          'Facilitation that surfaces friction instead of burying it',
        ],
        image: '/assets/photo-night-work.png',
        reverse: false,
      },
      {
        id: 'experience',
        eyebrow: 'The experience',
        title: 'When the team bends without breaking',
        body: 'Most team offsites optimize for harmony. SequenceAI optimizes for truth — the kind that makes a leadership group faster, sharper, and more honest when the pressure is real.',
        bullets: [
          'Shared language for disagreement and commitment',
          'Rehearsed responses to board-level and market shocks',
          'Trust that compounds after the intensive ends',
        ],
        image: '/assets/photo-coaching-sage.png',
        reverse: true,
      },
    ],
    stories: [
      {
        quote:
          'We had done offsites for a decade. SequenceAI was the first time we practiced the decisions we were actually afraid of.',
        role: 'Chief Operating Officer',
        sector: 'Industrial technology',
      },
      {
        quote:
          'The team left aligned in a way that held through our hardest quarter — not because we agreed on everything, but because we knew how to decide together.',
        role: 'Executive Team',
        sector: 'Consumer retail',
      },
    ],
    faq: [
      {
        question: 'What size team works best for SequenceAI',
        answer:
          'Typically six to twelve senior leaders — the group that must move together when stakes are highest. We design the intensive around your actual decision architecture.',
      },
      {
        question: 'Where do intensives take place',
        answer:
          'Off-site and distraction-free — often outside the city where your team operates daily. Location is chosen for focus, not spectacle.',
      },
      {
        question: 'How is SequenceAI different from a retreat',
        answer:
          'Retreats restore. SequenceAI reshapes — through structured pressure, honest friction, and rehearsed decisions your team will face within months.',
      },
      {
        question: 'Can SequenceAI follow AriesAI',
        answer:
          'Often. Individual coaching and team intensives complement each other when a CEO and their leadership group are transforming together.',
      },
    ],
    cta: {
      title: 'Bring the heat.',
      highlight: 'Leave with a team that holds.',
      sub: 'Tell us about your leadership group and the pressure you are preparing for. We will design the intensive from there.',
      primaryLabel: 'Book a call',
      primaryHref: 'mailto:hello@sugarandleather.com',
      secondaryLabel: 'View AriesAI',
      secondaryHref: '/practices/atelier',
    },
  },
  compass: {
    slug: 'compass',
    num: '03',
    eyebrow: 'Fractional AI leadership',
    name: 'Compass',
    heroTitle: 'Strategy is a direction,',
    heroHighlight: 'not a deck.',
    heroSub:
      'Embedded, senior counsel on your AI strategy — translating ambition into roadmaps that survive contact with reality and boardrooms that demand clarity.',
    heroImage: '/assets/photo-night-work.png',
    sections: [
      {
        id: 'practice',
        eyebrow: 'The practice',
        title: 'A steady hand on a moving frontier',
        body: 'Compass is fractional AI leadership for organizations that need senior judgment in the room — not another strategy document. We embed in your cadence, your context, and your hardest conversations.',
        bullets: [
          'Embedded advisory at executive and board level',
          'Roadmaps sequenced for capability before scale',
          'Narratives that hold up under scrutiny',
        ],
        image: '/assets/photo-coaching-library.png',
        reverse: false,
      },
      {
        id: 'experience',
        eyebrow: 'The experience',
        title: 'Direction you can defend',
        body: 'AI strategy fails when it is performative — impressive in presentation, fragile in execution. Compass keeps the work honest about trade-offs, timing, and the human cost of transformation.',
        bullets: [
          'Horizon planning tied to fundable milestones',
          'Governance and risk framed in plain language',
          'Counsel present when the decision is live, not after',
        ],
        image: '/assets/photo-study-light.png',
        reverse: true,
      },
    ],
    stories: [
      {
        quote:
          'We stopped presenting AI strategy and started making it. Compass gave us a roadmap the board could follow and the team could execute.',
        role: 'Chief Technology Officer',
        sector: 'Professional services',
      },
      {
        quote:
          'The value was not the deck — it was having someone in the room who had seen this movie before and would tell us the truth.',
        role: 'Chief Executive Officer',
        sector: 'Media & entertainment',
      },
    ],
    faq: [
      {
        question: 'Is Compass consulting or coaching',
        answer:
          'Both in practice, neither in the usual packaging. We advise strategy and coach the leaders carrying it — because at this altitude, the two cannot be separated.',
      },
      {
        question: 'How embedded is the engagement',
        answer:
          'Enough to be in your rhythm — leadership meetings, board prep, vendor decisions — without becoming another layer of bureaucracy.',
      },
      {
        question: 'Do you build the technology',
        answer:
          'No. We help you decide what to build, buy, or defer — and how to lead the organization through the consequences.',
      },
      {
        question: 'How long does Compass typically run',
        answer:
          'Most engagements begin with a quarter of diagnostic depth and extend as long as the strategic work requires — often twelve to eighteen months.',
      },
    ],
    cta: {
      title: 'Hold the line.',
      highlight: 'Steer with clarity.',
      sub: 'If your AI strategy needs a senior hand — not another slide — we should talk.',
      primaryLabel: 'Book a call',
      primaryHref: 'mailto:hello@sugarandleather.com',
      secondaryLabel: 'View Lexicon',
      secondaryHref: '/practices/lexicon',
    },
  },
  lexicon: {
    slug: 'lexicon',
    num: '04',
    eyebrow: 'The AI-fluency platform',
    name: 'Lexicon',
    heroTitle: 'Understanding, not jargon.',
    heroHighlight: 'Fluency that compounds.',
    heroSub:
      'A living curriculum that makes executives genuinely fluent in AI — adaptive, current, and built for leaders who need to decide, not perform.',
    heroImage: '/assets/photo-study-light.png',
    sections: [
      {
        id: 'practice',
        eyebrow: 'The platform',
        title: 'Fluency measured in decisions, not modules',
        body: 'Lexicon is not an LMS with a luxury skin. It is a curated path through the mental models, trade-offs, and language leaders need to steward AI responsibly — updated continuously as the frontier moves.',
        bullets: [
          'Adaptive paths by role, sector, and starting point',
          'Plain-language frameworks that survive a boardroom',
          'Content refreshed as the field shifts',
        ],
        image: '/assets/photo-night-work.png',
        reverse: false,
      },
      {
        id: 'experience',
        eyebrow: 'The experience',
        title: 'Language that keeps pace with the work',
        body: 'Executives do not need to become engineers. They need to ask better questions, spot weak reasoning, and hold vendors and teams to a standard of clarity. Lexicon builds that capacity deliberately.',
        bullets: [
          'Executive-paced learning — respect for time and context',
          'Scenario-based practice tied to real decisions',
          'Shared vocabulary across the leadership team',
        ],
        image: '/assets/photo-coaching-sage.png',
        reverse: true,
      },
    ],
    stories: [
      {
        quote:
          'Our board stopped nodding along and started asking sharp questions. Lexicon gave us a shared language we did not have before.',
        role: 'Board member',
        sector: 'Family-owned enterprise',
      },
      {
        quote:
          'Finally — AI education that treated us like executives, not students. The frameworks still show up in every strategy conversation.',
        role: 'Chief Strategy Officer',
        sector: 'Insurance',
      },
      {
        quote:
          'The curriculum updated faster than our internal committees could schedule meetings. That alone was worth it.',
        role: 'Head of Learning',
        sector: 'Global logistics',
      },
    ],
    faq: [
      {
        question: 'Who uses Lexicon',
        answer:
          'Executive teams, boards, and senior functional leaders who need fluency — not certification — to steward AI well.',
      },
      {
        question: 'How is content kept current',
        answer:
          'Lexicon is maintained as a living curriculum. When the frontier shifts, the path updates — so leaders are never learning from a stale playbook.',
      },
      {
        question: 'Can Lexicon complement Compass or SequenceAI',
        answer:
          'Yes. Lexicon builds shared fluency; Compass and SequenceAI apply it under pressure. Many clients use all three in sequence.',
      },
      {
        question: 'Is there a preview available',
        answer:
          'Request an introduction and we will walk you through a tailored path for your organization.',
      },
    ],
    cta: {
      title: 'Build the vocabulary',
      highlight: 'before the decision arrives',
      sub: 'Fluency is not optional at this altitude. Lexicon makes it achievable — and current.',
      primaryLabel: 'Book a call',
      primaryHref: 'mailto:hello@sugarandleather.com',
      secondaryLabel: 'View Compass',
      secondaryHref: '/practices/compass',
    },
  },
};

export const ABOUT_PAGE = {
  hero: {
    eyebrow: 'About the firm',
    title: 'Built. Not given.',
    highlight: 'Human at the core.',
    sub: 'Sugar & Leather exists for leaders who refuse to choose between ambition and humanity — especially as artificial intelligence reshapes what leadership demands.',
    image: '/assets/photo-coaching-library.png',
    primaryAction: {
      label: 'Book a call',
      href: 'mailto:hello@sugarandleather.com',
    },
    secondaryAction: {
      label: 'Explore practices',
      href: '/#ecosystem',
    },
  },
  name: {
    eyebrow: 'Who we are',
    title: 'Not a contradiction.',
    titleLine2: 'A philosophy.',
    sugar: {
      title: 'Sugar',
      body: 'Creativity, innovation, warmth, and joy.',
      body2:
        'The part that builds trust, connection, and human resonance, in every room, every pitch, every product we touch.',
    },
    leather: {
      title: 'Leather',
      body: 'Strength, not rigid like steel, but flexible, durable, and earned.',
      body2:
        'The part that shows up under pressure, navigates complexity, and builds what lasts.',
    },
  },
  mission: {
    eyebrow: 'Mission',
    title: 'To humanize artificial intelligence by staying deeply human ourselves',
    body: 'We believe the organizations that will matter in the next decade will be led by people who can hold complexity without losing themselves. Our mission is to build that capacity — one leader, one team, one decision at a time.',
  },
  vision: {
    eyebrow: 'Vision',
    title: 'A world where power and humanity are not traded against each other',
    body: 'We see a future where AI amplifies judgment rather than replacing it — where boards demand clarity, teams move with integrity, and the most senior leaders remain the most human in the room.',
  },
  leadership: {
    eyebrow: 'Leadership',
    title: 'Vivienne Marchetti',
    role: 'Founder & Principal Coach',
    quote:
      'The leaders I admire most were never the loudest. They stayed human when the pressure said otherwise.',
    body: 'Vivienne founded Sugar & Leather after two decades advising and coaching at the intersection of technology, governance, and executive transformation. She works directly with a small number of clients each year — by design.',
    image: '/assets/photo-coaching-sage.png',
  },
  philosophy: {
    eyebrow: 'Ecosystem philosophy',
    title: 'Four practices, one fire',
    body: 'AriesAI, SequenceAI, Compass, and Lexicon are not product lines. They are intensities of the same work — coaching the human, advising the strategy, building fluency, and forging teams that hold under pressure.',
    body2:
      'Most firms sell packages. We enter relationships. The ecosystem exists so that as your context shifts, the form of our work can shift with you — without starting over with strangers.',
    cards: [
      { name: 'AriesAI', href: '/practices/atelier', desc: 'One leader, one coach' },
      { name: 'SequenceAI', href: '/practices/forge', desc: 'Teams under pressure' },
      { name: 'Compass', href: '/practices/compass', desc: 'AI strategy embedded' },
      { name: 'Lexicon', href: '/practices/lexicon', desc: 'Executive fluency' },
    ],
  },
  cta: {
    title: 'Some companies are given.',
    highlight: 'You will be built.',
    sub: 'If our philosophy resonates, begin with a conversation. Introductions are limited, and considered.',
    primaryLabel: 'Book a call',
    primaryHref: 'mailto:hello@sugarandleather.com',
    secondaryLabel: 'Explore practices',
    secondaryHref: '/#ecosystem',
  },
};

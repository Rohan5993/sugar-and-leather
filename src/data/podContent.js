import { asset as a } from '../lib/asset';

export const POD_SLUGS = ['marketing-pod'];

export const POD_PAGES = {
  'marketing-pod': {
    slug: 'marketing-pod',
    parentSlug: 'strategic-partnerships',
    parentLabel: 'Strategic Partnerships',
    eyebrow: 'Strategic Partnership · Marketing Pod',
    name: 'Marketing Pod',
    heroTitle: 'Build a marketing engine',
    heroHighlight: 'that grows with your business.',
    heroSub:
      "Marketing isn't about volume. It's a system that attracts and converts.\nOur Pod pairs executive leadership with specialists built to scale.\nGrow a marketing function, not just a list of campaigns.",
    heroImage: a('/assets/photo-coaching-library.png'),
    sections: [
      {
        id: 'challenge',
        eyebrow: 'The challenge',
        title: 'Disconnected marketing rarely drives outcomes',
        body: 'Many businesses invest heavily in marketing but struggle to see consistent results because every function operates independently. Marketing works when every activity supports the same business objective. Our Marketing Pod brings those moving pieces together into one cohesive growth engine.',
        bullets: [
          "Content isn't aligned with sales",
          "SEO isn't connected to customer intent",
          'Paid advertising drives traffic but not qualified opportunities',
          'Social media creates awareness without engagement',
          'Email marketing lacks a nurturing strategy',
        ],
        image: a('/assets/photo-night-work.png'),
        reverse: false,
      },
      {
        id: 'partnership',
        eyebrow: 'Why a strategic partnership',
        title: 'More than an agency. A partner at the table.',
        body: "Unlike a traditional agency, we don't simply execute marketing tasks. We become a strategic partner that works alongside your leadership team, helping define priorities, establish systems, provide specialist expertise, and continuously improve performance as your business grows.",
        image: a('/assets/photo-study-light.png'),
        reverse: true,
      },
      {
        id: 'model',
        eyebrow: 'Why this model works',
        title: 'One team. One outcome.',
        body: "Businesses don't need more disconnected vendors. They need one team working toward a shared outcome. Our Marketing Pod combines leadership, strategy, execution, and technology into one integrated capability, reducing complexity while improving consistency and performance.",
        image: a('/assets/photo-coaching-sage.png'),
        reverse: false,
      },
    ],
    expertise: {
      eyebrow: 'Capabilities',
      title: 'Marketing leadership, backed by specialists',
      intro:
        'Every engagement is led by experienced marketing leadership and supported by specialists across multiple disciplines. Depending on your goals, your Marketing Pod may include expertise in:',
      items: [
        'Marketing Strategy & Positioning',
        'Brand Strategy & Messaging',
        'Website & Landing Page Content',
        'SEO & Organic Growth',
        'Paid Search & Paid Social Advertising',
        'Performance Marketing',
        'Email Marketing & Marketing Automation',
        'CRM & Lifecycle Marketing',
        'Sales Funnel Strategy & Conversion Optimisation',
        'Social Media Strategy & Management',
        'Content Marketing',
        'Video Production',
        'Podcast & Audio Production',
        'Graphic Design & Creative Assets',
        'Motion Graphics & Short-form Video',
        'Thought Leadership Content',
        'Community Building & Engagement',
        'Analytics & Reporting',
        'Marketing Operations & AI-enabled Workflows',
        'Additional expertise aligned to your objectives',
      ],
    },
    process: {
      eyebrow: 'How we work',
      title: 'From discovery to scalable growth',
      steps: [
        {
          num: '01',
          title: 'Discover',
          description: 'Understand your business, market, and growth objectives.',
        },
        {
          num: '02',
          title: 'Strategize',
          description: 'Develop a marketing roadmap aligned with business goals.',
        },
        {
          num: '03',
          title: 'Build',
          description: 'Assemble the right specialists for your engagement.',
        },
        {
          num: '04',
          title: 'Execute',
          description: 'Deliver campaigns, content, and systems alongside your team.',
        },
        {
          num: '05',
          title: 'Optimise',
          description: 'Measure performance, refine strategy, and improve continuously.',
        },
        {
          num: '06',
          title: 'Scale',
          description: 'Build repeatable marketing capabilities that grow with your business.',
        },
      ],
    },
    faq: [
      {
        question: 'Do I get access to the full Marketing Pod?',
        answer:
          'Every engagement is tailored. You gain access to the expertise required for your business objectives, not a one-size-fits-all roster.',
      },
      {
        question: 'Can you work alongside our existing team?',
        answer:
          'Yes. We frequently support internal marketing teams with strategic leadership and specialist execution.',
      },
      {
        question: 'Do you only work on digital marketing?',
        answer:
          'No. We support the broader marketing function, from strategy and brand to campaigns, operations, and community growth.',
      },
      {
        question: 'How do you use AI?',
        answer:
          'We use AI to improve speed, insights, and efficiency while ensuring every decision remains guided by human expertise.',
      },
    ],
    cta: {
      title: 'Build marketing that creates',
      highlight: 'sustainable growth',
      sub: 'Not just activity. Book a strategy call and discover how the Marketing Pod can support your next stage of growth.',
      primaryLabel: 'Book a Strategy Call',
      primaryHref: 'mailto:hello@sugarandleather.com',
      secondaryLabel: 'Strategic Partnerships',
      secondaryHref: '/strategic-partnerships',
    },
  },
};

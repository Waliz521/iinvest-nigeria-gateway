/** Copy from Data/iInvest-pages.xlsx (Invest sheet) + Home CTA alignment */

export const INVEST_HERO = {
  title: 'Invest with confidence...',
  paragraph:
    'iInvest connects retail and diaspora investors to vetted Nigerian investment opportunities including real estate, SME debt, and equities.',
  primaryCta: 'Start Now',
  secondaryCta: 'Learn More',
  secondaryCtaHref: '#intro',
} as const

/** Trust badges in hero (Figma) */
export const INVEST_HERO_TRUST = [
  { label: 'Secure Investments', icon: 'secure' as const, color: 'sky' as const },
  { label: 'Verified Opportunities', icon: 'verified' as const, color: 'orange' as const },
  { label: 'Regulated Platform', icon: 'regulated' as const, color: 'sky' as const },
] as const

export const INVEST_VALUE_PROPOSITIONS = [
  {
    title: 'Peace of Mind',
    description:
      'Invest with confidence knowing all opportunities are thoroughly vetted and verified.',
    icon: 'peace' as const,
    accent: 'sky' as const,
  },
  {
    title: 'Easy',
    description: 'Simple onboarding and intuitive platform designed for all investors.',
    icon: 'easy' as const,
    accent: 'orange' as const,
  },
  {
    title: 'Quick',
    description: 'Fast registration and approval process to get you investing sooner.',
    icon: 'quick' as const,
    accent: 'sky' as const,
  },
  {
    title: 'Secure',
    description: 'Bank-level security and compliance to protect your investments.',
    icon: 'secure' as const,
    accent: 'orange' as const,
  },
] as const

export const INVEST_INTRO = {
  title: 'Investing made easier.',
  paragraphs: [
    'iInvest is an investment platform connecting retail and diaspora investors to vetted Nigerian assets: real estate, SME debt, and equities.',
    'It simplifies access with low entry minimums, automated portfolios, and transparent reporting. Targeting Nigeria’s 220M+ population and growing middle class, the platform captures demand for wealth-building products in a high-growth under-served market.',
  ],
  closing: 'Built for scale, compliance, and returns.',
} as const

export const INVEST_MARKET_CARD = {
  title: 'Nigerian Market Growth',
  badge: '+220M Population',
  bars: [
    { label: 'Real Estate', heightClass: 'h-28', gradient: 'from-[#00487b] to-[#00487b]/70' },
    { label: 'SME Debt', heightClass: 'h-36', gradient: 'from-[#ff6d00] to-[#ff6d00]/70' },
    { label: 'Equities', heightClass: 'h-32', gradient: 'from-[#00487b] to-[#00487b]/70' },
  ],
  features: [
    { label: 'Growth', accent: 'sky' as const },
    { label: 'Diversified', accent: 'orange' as const },
    { label: 'Analytics', accent: 'sky' as const },
  ],
} as const

export const INVEST_WHY = {
  title: 'Why Invest?',
  subtitle: 'Access vetted Nigerian opportunities with confidence and transparency',
  items: [
    {
      title: 'Low Entry Minimums',
      description: 'Start investing with as little as $50 and build your portfolio gradually.',
      icon: 'minimums' as const,
      accent: 'sky' as const,
    },
    {
      title: 'Mobile-first Portfolios',
      description: 'Manage your investments anytime, anywhere with our mobile-optimized platform.',
      icon: 'mobile' as const,
      accent: 'orange' as const,
    },
    {
      title: 'Transparent Reporting',
      description: 'Access real-time analytics and detailed performance reports on all investments.',
      icon: 'reporting' as const,
      accent: 'sky' as const,
    },
    {
      title: 'Nigeria Market Exposure',
      description: "Tap into Africa's largest economy with verified high-growth opportunities.",
      icon: 'market' as const,
      accent: 'orange' as const,
    },
    {
      title: 'Diaspora-Friendly',
      description: 'Designed for international investors with multi-currency support and compliance.',
      icon: 'diaspora' as const,
      accent: 'sky' as const,
    },
    {
      title: 'Compliance & Security',
      description: 'Full regulatory compliance with SEC Nigeria and bank-level security protocols.',
      icon: 'compliance' as const,
      accent: 'orange' as const,
    },
  ],
} as const

export const INVEST_HOW_IT_WORKS = {
  title: 'How it works in 4 simple steps',
  subtitle: 'Get started with iInvest and begin investing today',
  steps: [
    {
      number: 1,
      title: 'Register',
      description: 'Fill a short form and pay $50.',
      icon: 'register' as const,
      accent: 'sky' as const,
    },
    {
      number: 2,
      title: 'Verify',
      description: 'Verify your identity for KYC and compliance purpose.',
      icon: 'verify' as const,
      accent: 'orange' as const,
    },
    {
      number: 3,
      title: 'Review',
      description: 'Our team reviews your registration for approval.',
      icon: 'review' as const,
      accent: 'sky' as const,
    },
    {
      number: 4,
      title: 'Access',
      description:
        'Upon approval, access is granted to the iInvest platform to allow investing in vetted and verified opportunities.',
      icon: 'access' as const,
      accent: 'orange' as const,
    },
  ],
} as const

export const INVEST_FEATURED = {
  title: 'Featured Investment Opportunities',
  subtitle: 'Explore vetted Nigerian assets across multiple sectors',
  items: [
    {
      title: 'Real Estate',
      sector: 'Property Development',
      roi: '15% ROI',
      investmentSize: '₦50M',
      fundedPercent: 68,
      accent: 'sky' as const,
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'SME Debt',
      sector: 'Manufacturing',
      roi: '12% ROI',
      investmentSize: '₦25M',
      fundedPercent: 82,
      accent: 'orange' as const,
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Agriculture',
      sector: 'Agribusiness',
      roi: '18% ROI',
      investmentSize: '₦15M',
      fundedPercent: 45,
      accent: 'sky' as const,
      image:
        'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Technology',
      sector: 'Fintech Startup',
      roi: '22% ROI',
      investmentSize: '₦35M',
      fundedPercent: 56,
      accent: 'orange' as const,
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    },
  ],
} as const

export const INVEST_READY = {
  title: 'Ready to invest?',
  paragraph:
    'Join thousands of investors accessing vetted Nigerian opportunities. Start building your diversified portfolio with real estate, SME debt, and equities today.',
  ctaLabel: 'Start now',
  stats: [
    { value: 'SEC', label: 'Regulated' },
    { value: '220M+', label: 'Market Size' },
    { value: '$50', label: 'Min. Investment' },
  ],
} as const

export const INVEST_FAQS = {
  title: 'Frequently Asked Questions (FAQs)',
  subtitle: 'Everything you need to know about investing with iInvest',
  items: [
    {
      question: 'How does iInvest work?',
      answer:
        'iInvest connects retail and diaspora investors to vetted Nigerian assets including real estate, SME debt, and equities. We simplify access with low entry minimums, automated portfolios, and transparent reporting.',
    },
    {
      question: 'Is my investment secure?',
      answer:
        'Yes. iInvest uses bank-level security protocols and compliance-aligned workflows, including identity verification and regulatory alignment with SEC Nigeria requirements.',
    },
    {
      question: 'What is the minimum investment?',
      answer:
        'You can start investing with as little as $50 during registration, with low entry minimums across vetted opportunities on the platform.',
    },
    {
      question: 'How long does verification take?',
      answer:
        'After you register and complete KYC, our team reviews your application for approval. Timing varies by submission volume; you will be notified once access is granted.',
    },
    {
      question: 'Can diaspora investors join?',
      answer:
        'Yes. iInvest is designed for international and diaspora investors with multi-currency support and compliance-friendly onboarding for investing in Nigerian assets.',
    },
  ],
} as const

export const INVEST_CONTACT = {
  title: 'Get in touch',
  paragraph:
    'Contact us by filling this form and our team will get back to you within 5 working days.',
  channels: [
    {
      label: 'Email',
      value: 'hello@iinvest.ng',
      href: 'mailto:hello@iinvest.ng',
      accent: 'sky' as const,
    },
    {
      label: 'Phone',
      value: '+234 (0) 800 000 0000',
      href: 'tel:+2348000000000',
      accent: 'orange' as const,
    },
    {
      label: 'Office Address',
      value: 'Lagos, Nigeria',
      accent: 'sky' as const,
    },
  ],
  form: {
    fullName: { label: 'Full Name', placeholder: 'Enter your full name' },
    mobile: { label: 'Mobile Number', placeholder: 'Enter your mobile number' },
    email: { label: 'Email Address', placeholder: 'Enter your email address' },
    message: { label: 'Message', placeholder: 'Write your message here...' },
    captcha: "I'm not a robot",
    submit: 'Submit',
  },
} as const

export const INVEST_PARTNERS = {
  title: 'In Partnership With',
  subtitle: 'Trusted by leading financial and regulatory institutions',
  partners: [
    {
      name: 'Branch360',
      shortLabel: 'Branch360',
      href: 'https://www.branch360.co',
      logoSrc: '/img/partners/branch360.png',
    },
    {
      name: 'Galaxy Backbone',
      shortLabel: 'GBB',
      href: 'https://galaxybackbone.com.ng/',
      logoSrc: '/img/partners/gbb.png',
    },
    {
      name: 'SEC Nigeria',
      shortLabel: 'SEC Nigeria',
      href: '#',
      logoSrc: '/img/partners/sec-nigeria.png',
    },
    {
      name: 'Central Bank of Nigeria',
      shortLabel: 'Central Bank of Nigeria',
      href: '#',
      logoSrc: '/img/partners/central-bank-nigeria.png',
    },
    {
      name: 'Investment and Securities Tribunal',
      shortLabel: 'IST',
      href: '#',
      logoSrc: '/img/partners/ist.png',
    },
    {
      name: 'Nigeria Investment Promotion Commission',
      shortLabel: 'NIPC',
      href: '#',
      logoSrc: '/img/partners/nipc.png',
    },
  ],
  badges: ['SEC Regulated', 'Fully Compliant', 'Secure Platform'],
} as const

export const SITE_FOOTER = {
  tagline:
    'Connecting retail and diaspora investors to vetted Nigerian assets including real estate, SME debt, and equities.',
  quickLinksTitle: 'Quick Links',
  connectTitle: 'Connect With Us',
  navLine: 'iInvest 2026 | Legal | Invest | Raise Capital',
  disclaimer:
    'Disclaimer: Investments carry risk. Past performance is not indicative of future results. iInvest is regulated by SEC Nigeria. Please read all investment documentation carefully before making investment decisions.',
} as const

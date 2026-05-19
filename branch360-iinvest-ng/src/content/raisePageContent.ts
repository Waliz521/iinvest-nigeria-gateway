/** Copy from Figma Raise Fund frame + Raise funds sheet alignment */

export const RAISE_HERO = {
  badge: 'Empowering Nigerian Entrepreneurs',
  titleLine1: 'Raise Capital',
  titleLine2: 'For Your Business',
  paragraph:
    'Connect with trusted local and diaspora investors to secure funding and accelerate your business growth.',
  primaryCta: 'Get Funded',
  secondaryCta: 'Learn More',
  secondaryCtaHref: '#intro',
} as const

export const RAISE_HERO_TRUST = [
  { value: '500+', label: 'Investors', icon: 'users' as const },
  { value: 'SEC', label: 'Regulated', icon: 'regulated' as const },
  { value: 'Fast', label: 'Approval', icon: 'fast' as const },
] as const

export const RAISE_HERO_FLOATING = {
  capitalRaised: { value: '₦2B+', label: 'Capital Raised' },
  successStories: { value: '100+', label: 'Success Stories' },
} as const

export const RAISE_VALUE_PROPOSITIONS = [
  {
    title: 'Access Investors',
    description: 'Connect with verified local and diaspora investors actively seeking opportunities.',
    icon: 'users' as const,
    accent: 'sky' as const,
  },
  {
    title: 'Fast Approval',
    description: 'Streamlined verification process gets your business listed quickly.',
    icon: 'fast' as const,
    accent: 'orange' as const,
  },
  {
    title: 'Secure Platform',
    description: 'Bank-level security and regulatory compliance protect your business data.',
    icon: 'secure' as const,
    accent: 'sky' as const,
  },
  {
    title: 'Business Growth',
    description: 'Access capital and resources to scale your business faster.',
    icon: 'growth' as const,
    accent: 'orange' as const,
  },
] as const

export const RAISE_INTRO = {
  title: 'Funding made easier.',
  paragraphs: [
    'iInvest helps Nigerian businesses and SMEs connect with trusted local and diaspora investors through a secure digital platform.',
    'The platform simplifies business funding with transparent processes, investor access, digital onboarding, and scalable opportunities designed for growth-focused companies.',
  ],
  closing: 'Built for expansion, compliance, and long-term business success.',
} as const

export const RAISE_GROWTH_CARD = {
  title: 'Business Growth',
  badge: 'Funding Ready',
  bars: [
    { label: 'Q1', heightClass: 'h-24', gradient: 'from-[#00487b] to-[#00487b]/70' },
    { label: 'Q2', heightClass: 'h-32', gradient: 'from-[#ff6d00] to-[#ff6d00]/70' },
    { label: 'Q3', heightClass: 'h-36', gradient: 'from-[#00487b] to-[#00487b]/70' },
    { label: 'Q4', heightClass: 'h-44', gradient: 'from-[#ff6d00] to-[#ff6d00]/70' },
  ],
  segments: [
    { label: 'Startups', accent: 'sky' as const },
    { label: 'SMEs', accent: 'orange' as const },
    { label: 'Scale-ups', accent: 'sky' as const },
  ],
} as const

export const RAISE_WHY = {
  title: 'Why Raise Funds With iInvest?',
  subtitle: 'The smart way to connect with investors and grow your business',
  items: [
    {
      title: 'Access Global Investors',
      description: 'Connect with verified local and international investors seeking Nigerian opportunities.',
      icon: 'global' as const,
      accent: 'sky' as const,
    },
    {
      title: 'Digital Funding Process',
      description: 'Streamlined online application and funding process saves time and resources.',
      icon: 'digital' as const,
      accent: 'orange' as const,
    },
    {
      title: 'Fast Verification',
      description: 'Quick business verification gets you listed and accessible to investors faster.',
      icon: 'verification' as const,
      accent: 'sky' as const,
    },
    {
      title: 'Secure Transactions',
      description: 'Bank-level security and SEC compliance protect all funding transactions.',
      icon: 'secure' as const,
      accent: 'orange' as const,
    },
    {
      title: 'Business Exposure',
      description: 'Showcase your business to a curated network of growth-focused investors.',
      icon: 'exposure' as const,
      accent: 'sky' as const,
    },
    {
      title: 'Growth Support',
      description: 'Access resources, mentorship, and networks to scale your business effectively.',
      icon: 'growth' as const,
      accent: 'orange' as const,
    },
  ],
} as const

export const RAISE_HOW_IT_WORKS = {
  title: 'How it works in 4 simple steps',
  subtitle: 'Start raising capital for your business today',
  steps: [
    {
      number: 1,
      title: 'Register',
      description: 'Create your business account.',
      icon: 'register' as const,
      accent: 'sky' as const,
    },
    {
      number: 2,
      title: 'Submit Business',
      description: 'Upload your company details and required documents.',
      icon: 'submit' as const,
      accent: 'orange' as const,
    },
    {
      number: 3,
      title: 'Verification',
      description: 'Our team reviews and verifies your business.',
      icon: 'verification' as const,
      accent: 'sky' as const,
    },
    {
      number: 4,
      title: 'Raise Capital',
      description: 'Get access to investors and funding opportunities.',
      icon: 'raise' as const,
      accent: 'orange' as const,
    },
  ],
} as const

export const RAISE_FUNDING_CATEGORIES = {
  title: 'Funding Categories',
  subtitle: 'We support businesses across multiple sectors and industries',
  items: [
    {
      title: 'Oil & Gas',
      description: 'Petroleum exploration, refining, distribution, and energy services.',
      icon: 'oil' as const,
      accent: 'sky' as const,
    },
    {
      title: 'Agriculture',
      description: 'Farming, agribusiness, food processing, and agricultural technology.',
      icon: 'agriculture' as const,
      accent: 'orange' as const,
    },
    {
      title: 'Logistics',
      description: 'Transportation, warehousing, supply chain, and delivery services.',
      icon: 'logistics' as const,
      accent: 'sky' as const,
    },
    {
      title: 'Manufacturing',
      description: 'Industrial production, processing plants, and supply chains.',
      icon: 'manufacturing' as const,
      accent: 'orange' as const,
    },
    {
      title: 'Real Estate',
      description: 'Property development, commercial real estate, and housing projects.',
      icon: 'realestate' as const,
      accent: 'sky' as const,
    },
    {
      title: 'Healthcare',
      description: 'Medical services, pharmaceuticals, health tech, and wellness.',
      icon: 'healthcare' as const,
      accent: 'orange' as const,
    },
    {
      title: 'Technology',
      description: 'Fintech, SaaS, mobile apps, and digital innovation startups.',
      icon: 'technology' as const,
      accent: 'sky' as const,
    },
    {
      title: 'Education',
      description: 'EdTech, schools, training centers, and learning platforms.',
      icon: 'education' as const,
      accent: 'orange' as const,
    },
    {
      title: 'Energy',
      description: 'Renewable energy, solar power, electrical infrastructure.',
      icon: 'energy' as const,
      accent: 'sky' as const,
    },
    {
      title: 'Others',
      description: 'Diverse business opportunities across emerging and niche markets.',
      icon: 'others' as const,
      accent: 'orange' as const,
    },
  ],
} as const

export const RAISE_SUCCESS_STORIES = {
  title: 'Business Success Stories',
  subtitle: 'Real Nigerian businesses that raised capital and scaled through iInvest',
  items: [
    {
      name: 'TechFlow Solutions',
      sector: 'Technology',
      growth: '+250%',
      amountRaised: '₦15M',
      summary: 'Secured seed funding to scale our fintech platform across West Africa.',
      quote:
        'With iInvest, we connected with investors who believed in our vision and helped us grow exponentially.',
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'GreenHarvest Agro',
      sector: 'Agriculture',
      growth: '+180%',
      amountRaised: '₦8M',
      summary: 'Raised capital to expand our agricultural operations and distribution network.',
      quote:
        'The platform made it easy to showcase our business to serious investors looking for agribusiness opportunities.',
      image:
        'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Urban Retail Hub',
      sector: 'Retail',
      growth: '+200%',
      amountRaised: '₦12M',
      summary: 'Funded our expansion to three new locations within 12 months.',
      quote:
        'iInvest connected us with diaspora investors who understood the Nigerian retail market potential.',
      image:
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    },
  ],
} as const

export const RAISE_READY = {
  title: 'Ready to Grow Your Business?',
  paragraph:
    'Join successful Nigerian businesses that have raised capital through iInvest. Connect with trusted investors and secure the funding you need to scale today.',
  ctaLabel: 'Apply Now',
  stats: [
    { value: '100+', label: 'Businesses Funded' },
    { value: '₦2B+', label: 'Capital Raised' },
    { value: 'SEC', label: 'Regulated' },
  ],
} as const

export const RAISE_FAQS = {
  title: 'Frequently Asked Questions (FAQs)',
  subtitle: 'Everything you need to know about raising funds with iInvest',
  items: [
    {
      question: 'How do I apply for funding?',
      answer:
        'Simply create a business account, upload your required documents (business registration, financial statements, business plan), and submit your application. Our team will review and verify your business within 3-5 business days.',
    },
    {
      question: 'What businesses qualify?',
      answer:
        'Registered Nigerian businesses and SMEs across supported sectors—including technology, agriculture, retail, manufacturing, and more—can apply if they meet our verification and compliance requirements.',
    },
    {
      question: 'How long does approval take?',
      answer:
        'Business verification typically takes 3-5 business days after you submit complete documentation. You will be notified once your listing is approved and visible to investors.',
    },
    {
      question: 'What documents are required?',
      answer:
        'You will need business registration documents, recent financial statements, and a business plan outlining your funding needs and growth strategy. Additional documents may be requested during review.',
    },
    {
      question: 'Is the platform secure?',
      answer:
        'Yes. iInvest uses bank-level security and SEC-aligned compliance workflows to protect your business data and funding transactions.',
    },
  ],
} as const

export const RAISE_CONTACT = {
  title: 'Get in touch',
  paragraph: 'Contact us by filling this form and our team will get back to you within 5 working days.',
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
    businessName: { label: 'Business Name', placeholder: 'Enter your business name' },
    contactPerson: { label: 'Contact Person', placeholder: 'Enter contact person name' },
    mobile: { label: 'Mobile Number', placeholder: 'Enter your mobile number' },
    email: { label: 'Email Address', placeholder: 'Enter your email address' },
    message: {
      label: 'Message',
      placeholder: 'Tell us about your business and funding needs...',
    },
    captcha: "I'm not a robot",
    submit: 'Submit',
  },
} as const

export const RAISE_PARTNERS = {
  title: 'In Partnership With',
  subtitle: 'Trusted by leading financial and regulatory institutions',
  partners: [
    {
      name: 'Branch360',
      href: 'https://www.branch360.co',
      logoSrc: '/img/partners/branch360.png',
    },
    {
      name: 'Galaxy Backbone',
      href: 'https://galaxybackbone.com.ng/',
      logoSrc: '/img/partners/gbb.png',
    },
    {
      name: 'SEC Nigeria',
      href: '#',
      logoSrc: '/img/partners/sec-nigeria.png',
    },
    {
      name: 'Central Bank of Nigeria',
      href: '#',
      logoSrc: '/img/partners/central-bank-nigeria.png',
    },
    {
      name: 'Investment and Securities Tribunal',
      href: '#',
      logoSrc: '/img/partners/ist.png',
    },
    {
      name: 'Nigeria Investment Promotion Commission',
      href: '#',
      logoSrc: '/img/partners/nipc.png',
    },
  ],
  badges: ['SEC Regulated', 'Fully Compliant', 'Secure Platform'],
} as const

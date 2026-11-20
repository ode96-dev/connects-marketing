export interface PillarData {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  iconType: "brand" | "content" | "digital" | "campaigns" | "offline";
  color: string;
  deliverables: string[];
  disconnectSymptom: string;
  connectedAdvantage: string;
  keyMetric: string;
  keyMetricLabel: string;
  deepDive: {
    overview: string;
    whyItMatters: string;
    ourMethod: string[];
  };
}

export interface CaseStudyData {
  id: string;
  title: string;
  category: string;
  timeframe: string;
  connectedPillars: string[];
  imageAlt: string;
  challenge: string;
  solution: string;
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
  results: {
    label: string;
    value: string;
    context: string;
  }[];
}

export const PILLARS: PillarData[] = [
  {
    id: "brand",
    number: "01",
    name: "Brand",
    tagline: "Make the business recognisable.",
    description:
      "We define an unmistakable market position, visual language, and verbal identity that commands immediate buyer trust before a single ad dollar is spent.",
    iconType: "brand",
    color: "#ff7a00",
    deliverables: [
      "Visual Identity System & Design Language",
      "Market Positioning & Category Narrative",
      "Distinctive Brand Codes & Typography",
      "Verbal Identity & Messaging Playbook",
    ],
    disconnectSymptom:
      "Your ads look interchangeable with competitors; buyers default to comparing you purely on price.",
    connectedAdvantage:
      "Distinctive memory structures lower paid acquisition costs by up to 45% and protect margin.",
    keyMetric: "+88%",
    keyMetricLabel: "Unaided Brand Recall in Target Accounts",
    deepDive: {
      overview:
        "Brand is not a logo file—it is the memory structure stored in your buyer’s mind. When Brand connects directly with Content and Digital, every impression compounds future conversion.",
      whyItMatters:
        "Without distinctive brand codes, up to 70% of performance ad spend inadvertently builds category awareness for the market leader instead of your business.",
      ourMethod: [
        "Cognitive distinctive-asset audit",
        "Competitive positioning whitespace mapping",
        "Multi-surface design system architecture",
        "Cross-channel brand governance playbook",
      ],
    },
  },
  {
    id: "content",
    number: "02",
    name: "Content",
    tagline: "Give people a reason to pay attention.",
    description:
      "We build editorial engines, original video, and buyer-centric storytelling that earn attention and answer purchasing friction long before a sales call.",
    iconType: "content",
    color: "#8b5cf6",
    deliverables: [
      "Original Documentary Video & Multimedia",
      "Executive Thought Leadership & Editorial",
      "Commercial-Intent Search & Guides",
      "Case Evidence & Product Narratives",
    ],
    disconnectSymptom:
      "Publishing weekly social updates that generate polite likes internally but zero qualified pipeline.",
    connectedAdvantage:
      "High-conviction editorial educates buyers ahead of outreach, cutting enterprise deal cycles by 60%.",
    keyMetric: "4.2x",
    keyMetricLabel: "Average Dwell Time & Organic Inbound",
    deepDive: {
      overview:
        "Effective content does not chase fleeting algorithm trends. It systematically resolves the exact technical and strategic objections buyers weigh before signing.",
      whyItMatters:
        "B2B and high-consideration buyers review 7 to 11 pieces of material before speaking with sales. Disjointed content stalls momentum; connected content accelerates trust.",
      ourMethod: [
        "Buyer-objection narrative architecture",
        "Studio video and multi-format editorial distribution",
        "Interactive industry benchmarks and field studies",
        "Commercial-intent organic search clusters",
      ],
    },
  },
  {
    id: "digital",
    number: "03",
    name: "Digital",
    tagline: "Turn attention into action.",
    description:
      "We engineer fast, conversion-focused web flagships and tailored landing environments that match campaign intent and turn qualified attention into pipeline.",
    iconType: "digital",
    color: "#0ea5e9",
    deliverables: [
      "High-Speed Next.js Web Flagships",
      "Campaign-Matched Landing Architecture",
      "Conversion Rate Optimization & Testing",
      "Interactive ROI & Scoping Tools",
    ],
    disconnectSymptom:
      "Sending expensive paid search and social traffic to slow, generic homepages with sub-1% conversion.",
    connectedAdvantage:
      "Sub-second render speeds and strict ad-to-page message continuity turn existing traffic into revenue.",
    keyMetric: "+142%",
    keyMetricLabel: "Landing Page Conversion Lift",
    deepDive: {
      overview:
        "Digital is where brand promise meets commercial transaction. We build web platforms engineered for speed, clarity, and zero-friction buyer progression.",
      whyItMatters:
        "Every 100ms of page delay erodes conversion rates, and any disconnect between an ad promise and landing headline triggers immediate bounce.",
      ourMethod: [
        "Sub-second frontend & motion engineering",
        "Ad-to-page message-match experimentation",
        "Behavioral scroll and funnel telemetry",
        "Streamlined lead capture and qualification flows",
      ],
    },
  },
  {
    id: "campaigns",
    number: "04",
    name: "Campaigns",
    tagline: "Create demand when it matters.",
    description:
      "We orchestrate multi-channel paid acquisition, account-based outreach, and lifecycle retention loops that capture active demand with disciplined attribution.",
    iconType: "campaigns",
    color: "#84cc16",
    deliverables: [
      "Paid Search & Paid Social Acquisition",
      "Lifecycle Email & Retention Architecture",
      "Enterprise Account-Based Marketing",
      "Incrementality & Multi-Touch Attribution",
    ],
    disconnectSymptom:
      "Running isolated discount ads to cold audiences while leads fall into un-nurtured CRM spreadsheets.",
    connectedAdvantage:
      "Layered audience targeting paired with bespoke landing paths yields predictable, scalable acquisition cost.",
    keyMetric: "3.8x",
    keyMetricLabel: "Blended Return on Ad Spend",
    deepDive: {
      overview:
        "Campaigns act as the distribution accelerator. Fed by clear Brand positioning and purpose-built Digital pages, media spend scales cleanly without rapid fatigue.",
      whyItMatters:
        "Treating paid media as a standalone silo inflates CAC every quarter. Connecting media to lifecycle retention compounds customer lifetime value.",
      ourMethod: [
        "Creative fatigue testing and hook iteration",
        "Cohort-level payback and LTV modeling",
        "Cross-channel retargeting orchestration",
        "Automated onboarding and expansion sequences",
      ],
    },
  },
  {
    id: "offline",
    number: "05",
    name: "Offline",
    tagline: "Connect marketing with the real experience.",
    description:
      "We translate your brand into physical environments—from executive salons and tactile print monographs to physical-digital bridges that cement loyalty.",
    iconType: "offline",
    color: "#ec4899",
    deliverables: [
      "Executive Salons & Trade Activations",
      "Tactile Print Monographs & Packaging",
      "Spatial & Retail Brand Environments",
      "NFC & QR Physical-to-Digital Bridges",
    ],
    disconnectSymptom:
      "Spending five figures on conference booths that collect badge scans nobody follows up on meaningfully.",
    connectedAdvantage:
      "Tactile physical encounters establish lasting credibility and feed directly into personalized digital follow-up.",
    keyMetric: "92%",
    keyMetricLabel: "Event Contact-to-Meeting Conversion",
    deepDive: {
      overview:
        "In an increasingly automated digital feed, physical craft stands apart with immediate credibility. Offline closes the loop between screen impression and real-world trust.",
      whyItMatters:
        "In-person and tactile brand interactions generate far higher recall than digital impressions alone—especially when bridged cleanly back into digital CRM workflows.",
      ourMethod: [
        "Architectural event and booth spatial design",
        "Bespoke executive direct-mail briefings",
        "NFC/QR enabled print-to-web journeys",
        "Post-event personalized concierge follow-up",
      ],
    },
  },
];

export const COMPARISON_ROWS = [
  {
    pillarNumber: "01",
    pillarName: "Brand",
    color: "#ff7a00",
    siloedTitle: "Brand guidelines trapped in a slide deck",
    siloedDesc:
      "A branding studio delivers a PDF, then performance freelancers ignore it and run generic templates.",
    connectedTitle: "Distinctive brand codes in every touchpoint",
    connectedDesc:
      "Typography, color, and positioning flow from deck to ad creative to checkout, cutting acquisition costs.",
  },
  {
    pillarNumber: "02",
    pillarName: "Content",
    color: "#8b5cf6",
    siloedTitle: "Volume publishing without buyer intent",
    siloedDesc:
      "Generic blog posts and filler social threads written for algorithms rather than actual revenue objections.",
    connectedTitle: "Editorial built to move pipeline forward",
    connectedDesc:
      "Documentary proof and commercial guides directly prime high-value accounts before sales conversations.",
  },
  {
    pillarNumber: "03",
    pillarName: "Digital",
    color: "#0ea5e9",
    siloedTitle: "Slow homepages breaking ad promises",
    siloedDesc:
      "Paid traffic lands on cluttered generic pages that fail to continue the exact headline or offer clicked.",
    connectedTitle: "Purpose-built conversion environments",
    connectedDesc:
      "Sub-second web architecture with strict message match between ad hook, proof, and conversion action.",
  },
  {
    pillarNumber: "04",
    pillarName: "Campaigns",
    color: "#84cc16",
    siloedTitle: "Cold media fighting rising auction costs",
    siloedDesc:
      "Ad buyers burn budget testing cold audiences with no organic authority or lifecycle retention behind them.",
    connectedTitle: "Full-funnel demand & lifecycle compounding",
    connectedDesc:
      "Paid acquisition captures primed demand while automated nurture loops increase LTV and payback speed.",
  },
  {
    pillarNumber: "05",
    pillarName: "Offline",
    color: "#ec4899",
    siloedTitle: "Disconnected trade shows & forgotten print",
    siloedDesc:
      "Physical events and print collateral operate in a vacuum with generic newsletter dumps weeks later.",
    connectedTitle: "Tactile experiences bridged to digital",
    connectedDesc:
      "Private salons, tactile mailers, and NFC bridges route real-world relationships straight into tailored follow-up.",
  },
];

export const CASE_STUDIES: CaseStudyData[] = [
  {
    id: "vanguard",
    title: "Vanguard Health Systems",
    category: "Healthcare & Clinical Software",
    timeframe: "6-Month Engagement",
    connectedPillars: ["01 Brand", "02 Content", "03 Digital", "04 Campaigns"],
    imageAlt:
      "Modern healthcare clinic reception space with warm limestone desk, oak paneling, and digital check-in tablet",
    challenge:
      "High paid-search spend was driving clicks, but clinical jargon and a fragmented booking portal caused 85% of prospective patients to abandon before scheduling.",
    solution:
      "Rebuilt the brand positioning around plain-spoken patient clarity, engineered dedicated condition-specific digital intake portals, and aligned search creative directly to each portal.",
    quote:
      "For the first time, our brand team, web engineers, and media buyers were working from one shared blueprint. Our cost per booked patient fell by nearly half.",
    quoteAuthor: "Elena Vance",
    quoteRole: "VP of Growth, Vanguard Health Systems",
    results: [
      {
        label: "Qualified Consultations",
        value: "+265%",
        context: "Within 6 months",
      },
      {
        label: "Patient Acquisition Cost",
        value: "-48%",
        context: "Across paid search",
      },
      {
        label: "Intake Completion Rate",
        value: "64%",
        context: "Up from 15% baseline",
      },
    ],
  },
  {
    id: "aethel",
    title: "Aethel Architectural Living",
    category: "Luxury Residential Development",
    timeframe: "8-Month Engagement",
    connectedPillars: ["01 Brand", "02 Content", "03 Digital", "05 Offline"],
    imageAlt:
      "Sunlit luxury architectural showroom featuring oak table with tactile linen-bound lookbooks and limestone walls",
    challenge:
      "Their physical private galleries exuded quiet craft, yet their dated website and generic broker brochures undercut buyer confidence before private viewings.",
    solution:
      "Crafted a tactile digital flagship with architectural monographs, paired with linen-bound invitation folios containing embedded NFC links to personalized viewing itineraries.",
    quote:
      "Buyers arrive at our private showroom already feeling like they know the residence intimately. The digital and physical experience finally speak the same language.",
    quoteAuthor: "Marcus Lindqvist",
    quoteRole: "Managing Partner, Aethel Living",
    results: [
      {
        label: "Average Residence Sale",
        value: "$2.8M",
        context: "+18% above forecast",
      },
      {
        label: "Private Salon Attendance",
        value: "98%",
        context: "Invited principals",
      },
      {
        label: "Qualified Pipeline",
        value: "3.4x",
        context: "Year-over-year lift",
      },
    ],
  },
  {
    id: "kestrel",
    title: "Kestrel Logistics Cloud",
    category: "Enterprise Supply Chain B2B",
    timeframe: "5-Month Engagement",
    connectedPillars: [
      "02 Content",
      "03 Digital",
      "04 Campaigns",
      "05 Offline",
    ],
    imageAlt:
      "Executive supply chain briefing room with maritime port view, container ship scale model, and printed strategy dossiers",
    challenge:
      "Over-reliance on cold outbound SDR sequences and isolated LinkedIn lead forms resulted in a sluggish 9-month enterprise procurement cycle.",
    solution:
      "Published an interactive port-resilience benchmark and live freight margin calculator, promoted via account-based media and followed up with printed executive briefing dossiers.",
    quote:
      "Prospects brought our printed briefing dossier into board meetings. When offline craft and digital tools align, enterprise deals stop stalling.",
    quoteAuthor: "David Okafor",
    quoteRole: "Chief Revenue Officer, Kestrel Cloud",
    results: [
      {
        label: "Enterprise Sales Cycle",
        value: "-52%",
        context: "Days to closed-won",
      },
      {
        label: "Attributed Pipeline",
        value: "$14.2M",
        context: "Net-new enterprise",
      },
      {
        label: "Demo-to-Close Rate",
        value: "41%",
        context: "Up from 19% prior",
      },
    ],
  },
];

export const DIAGNOSTIC_QUESTIONS = [
  {
    id: "q1",
    pillarId: "digital",
    pillarLabel: "03 Digital · Message Match",
    question: "How closely do your paid ads match the landing page experience?",
    options: [
      {
        text: "Disconnected — traffic lands on a generic homepage with different messaging",
        score: 0,
      },
      {
        text: "Partially aligned — similar visual style, but generic headlines and offers",
        score: 1,
      },
      {
        text: "Tightly connected — dedicated pages mirror the exact ad promise and proof",
        score: 2,
      },
    ],
  },
  {
    id: "q2",
    pillarId: "offline",
    pillarLabel: "05 Offline · Physical-Digital Bridge",
    question:
      "What happens after a prospect meets your team at an event or receives print material?",
    options: [
      {
        text: "A business card exchange with sporadic manual follow-up",
        score: 0,
      },
      {
        text: "Contacts are uploaded to a monthly generic newsletter blast",
        score: 1,
      },
      {
        text: "An immediate physical-to-digital bridge routes them to a tailored sequence",
        score: 2,
      },
    ],
  },
  {
    id: "q3",
    pillarId: "content",
    pillarLabel: "02 Content · Commercial Authority",
    question: "How does your content support active sales conversations?",
    options: [
      {
        text: "We post general social updates primarily to look active",
        score: 0,
      },
      {
        text: "We publish top-of-funnel blog articles disconnected from buyer objections",
        score: 1,
      },
      {
        text: "Every piece resolves real buyer friction and directly accelerates deal velocity",
        score: 2,
      },
    ],
  },
  {
    id: "q4",
    pillarId: "campaigns",
    pillarLabel: "04 Campaigns · Scaling Elasticity",
    question:
      "If you increased marketing investment by 50% next month, what would happen?",
    options: [
      {
        text: "Acquisition cost would spike due to weak brand recall and landing page leaks",
        score: 0,
      },
      {
        text: "Volume would rise slightly at noticeably diminishing efficiency",
        score: 1,
      },
      {
        text: "All five channels would absorb and compound the spend predictably",
        score: 2,
      },
    ],
  },
];

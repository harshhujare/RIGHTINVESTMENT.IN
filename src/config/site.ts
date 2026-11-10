// ─── Right Investment — Single Source of Truth ─────────────────────────────
// All brand, contact, content, and SEO data for the Right Investment site.

export const siteConfig = {
  // Brand
  brand: {
    name: "Right Investment",
    tagline: "Plan | Invest | Grow",
    monogram: "RI",
    advisorMonogram: "SJ",
  },

  // Advisor
  advisor: {
    name: "Sachin Jagtap",
    nameMarathi: "सचिन जगताप",
    title: "आपला आर्थिक सल्लागार",
    fullTitleMarathi: "सचिन जगताप — आपला आर्थिक सल्लागार",
    experience: "10+",
    experienceLabel: "Years of Trusted Advisory in Pune",
  },

  // Location
  location: {
    full: "Bibwewadi, Pune, Maharashtra 411037",
    area: "Bibwewadi",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411037",
    country: "India",
  },

  // Nearby Pune SEO Areas
  seoAreas: [
    "Bibwewadi",
    "Satara Road",
    "Sahakarnagar",
    "Katraj",
    "Kondhwa",
    "Market Yard",
    "Swargate",
    "Kothrud",
  ] as const,

  // Contact
  contact: {
    phone: {
      display: "+91 95610 01821",
      raw: "09561001821",
      href: "tel:+919561001821",
    },
    whatsapp: {
      number: "919561001821",
      display: "95610 01821",
    },
    email: "sachinjagtap5178@gmail.com",
    instagram: {
      handle: "@sachin_d_jagtap",
      url: "https://www.instagram.com/sachin_d_jagtap/",
    },
    facebook: {
      name: "Right Investment",
      url: "https://www.facebook.com/profile.php?id=100077826023058",
    },
  },

  // Signature Marathi Hooks
  marathi: {
    heroHook:
      "पैशासाठी काम करण्यापेक्षा पैसा तुमच्यासाठी काम करेल... पण कसं? ते आम्हाला विचारा...",
    heroHookShort:
      "पैशासाठी काम करण्यापेक्षा पैसा तुमच्यासाठी काम करेल... पण कसं?",
    authorityPromise: "आर्थिक निर्णयांसाठी योग्य दिशा !",
    secondaryTagline: "आर्थिक नियोजन... उज्ज्वल भविष्याची सुरुवात !",
    signOff: "योग्य गुंतवणूक, योग्य मार्गदर्शन",
    mythBusting:
      "म्युच्युअल फंड म्हणजे फक्त शेअर मार्केट नाही! सरकारी बॉण्ड्स (Debt), सोने (Gold) आणि कमी जोखमीच्या फंड्सचाही समावेश होतो.",
    retirementBenchmark:
      "Invest ₹10,000/month in SIP for 20 years → Get ₹49,463/month for your lifetime (SWP).",
  },

  // 8 Core Services
  services: [
    {
      id: "mutual-funds",
      title: "Mutual Funds",
      titleMarathi: "म्युच्युअल फंड — SIP / SWP / STP",
      subtitle: "& Tax Saving (ELSS)",
      category: "Core Wealth",
      description:
        "Goal-based wealth creation, tax saving under 80C, and disciplined compounding through systematic investment plans.",
      icon: "TrendingUp" as const,
      featured: true,
      span: 2,
    },
    {
      id: "pension-plans",
      title: "Pension Plans",
      titleMarathi: "पेन्शन प्लॅन",
      subtitle: "SIP-to-SWP Retirement",
      category: "Retirement",
      description:
        "Lifetime monthly cash-flow architectures using SIP-to-SWP transitions. Plan your retirement income today.",
      icon: "Landmark" as const,
      featured: true,
      span: 1,
    },
    {
      id: "health-insurance",
      title: "Health Insurance / Mediclaim",
      titleMarathi: "आरोग्य विमा / मेडिक्लेम",
      subtitle: "Family Floater Protection",
      category: "Family Protection",
      description:
        "Cashless hospitalization and family floater protection plans from top insurers.",
      icon: "HeartPulse" as const,
      featured: false,
      span: 1,
    },
    {
      id: "term-insurance",
      title: "Term Life Insurance",
      titleMarathi: "टर्म इन्शुरन्स",
      subtitle: "Pure Risk Cover",
      category: "Family Protection",
      description:
        "High-cover pure risk protection to safeguard family liabilities and secure your loved ones' future.",
      icon: "Shield" as const,
      featured: false,
      span: 1,
    },
    {
      id: "fixed-deposits",
      title: "Fixed Deposit / Bonds / NCD",
      titleMarathi: "फिक्स डिपॉझिट / BOND / NCD",
      subtitle: "Safe & Predictable Returns",
      category: "Fixed Income & Safe Yield",
      description:
        "Predictable, low-volatility fixed returns and Government Bond access for conservative investors.",
      icon: "Lock" as const,
      featured: false,
      span: 1,
    },
    {
      id: "pms-aif",
      title: "PMS / AIF",
      titleMarathi: "पोर्टफोलिओ मॅनेजमेंट सर्विसेस",
      subtitle: "Portfolio Management & Alt Investments",
      category: "HNI Wealth",
      description:
        "Institutional-grade concentrated portfolios for high-net-worth investors. Alternative Investment Funds access.",
      icon: "Crown" as const,
      featured: true,
      span: 2,
    },
    {
      id: "unlisted-shares",
      title: "Unlisted Shares",
      titleMarathi: "अनलिस्टेड शेअर्स",
      subtitle: "Pre-IPO Opportunities",
      category: "Specialized Growth",
      description:
        "Curated pre-IPO and private market equity opportunities for informed investors.",
      icon: "Gem" as const,
      featured: false,
      span: 1,
    },
    {
      id: "loans",
      title: "Loans",
      titleMarathi: "कर्ज सल्ला",
      subtitle: "Optimal Loan Structuring",
      category: "Financing & Credit",
      description:
        "Optimal loan structuring and EMI-to-SIP interest recovery planning for smart borrowers.",
      icon: "Wallet" as const,
      featured: false,
      span: 1,
    },
  ] as const,

  // AMFI / SEBI Disclaimer
  disclaimer:
    "Mutual Fund investments are subject to market risks, read all scheme related documents carefully. Past performance is not indicative of future returns.",
} as const;

export type ServiceId = (typeof siteConfig.services)[number]["id"];
export type Service = (typeof siteConfig.services)[number];


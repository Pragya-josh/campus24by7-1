/**
 * SEO Configuration and Utilities
 * Centralized SEO metadata, keywords, and structured data
 */

export const SEO_CONFIG = {
  site: {
    name: "Campus24by7",
    url: "https://campus24by7.com",
    logo: "https://campus24by7.com/logo.svg",
    author: "Campus24by7",
    description:
      "Campus24by7 is a complete end-to-end ERP solution for schools, colleges, institutes, coaching centers, and universities. Manage admissions, attendance, fees, academics, transport, HR, payroll, communication, and more—all in one powerful platform.",
  },

  keywords: {
    primary: [
      "school management system",
      "college management system",
      "school ERP",
      "college ERP",
      "institute management system",
      "coaching management system",
      "coaching center management software",
      "campus management system",
      "educational ERP",
      "academic management software",
    ],

    secondary: [
      "student management system",
      "fee management system",
      "attendance management software",
      "school admin software",
      "college admin software",
      "institute admin software",
      "coaching center software",
      "student information system",
      "institutional management system",
      "academic institution software",
      "school CRM",
      "college CRM",
      "coaching CRM",
    ],

    specific: [
      "school fees management",
      "coaching fees management",
      "student attendance tracking",
      "coaching attendance system",
      "academic performance tracking",
      "transport management system",
      "hostel management system",
      "library management system",
      "exam management system",
      "test series management",
      "batch management system",
      "class management system",
      "communication system for schools",
      "parent teacher communication",
      "student portal",
      "teacher portal",
      "admin dashboard",
      "payroll management system",
      "HR management system",
      "admission management system",
      "course management system",
      "timetable management system",
      "examination management system",
      "online test management",
      "institute batch management",
      "coaching session scheduling",
      "student progress tracking",
    ],

    locations: [
      "school management system India",
      "college management software India",
      "coaching management system India",
      "institute management software India",
      "ERP for educational institutions",
      "school automation software",
      "college automation software",
      "coaching center automation",
      "institute automation software",
      "digital classroom management",
      "online learning management system",
    ],

    sales: [
      "best school ERP system",
      "best college management software",
      "best coaching management software",
      "best institute management system",
      "top school management system",
      "top coaching center software",
      "top institute management platform",
      "affordable school ERP",
      "affordable coaching management",
      "affordable institute management system",
      "cloud-based school management",
      "cloud-based coaching software",
      "cloud-based institute management",
      "school management software price",
      "coaching software pricing",
      "institute management software cost",
      "college ERP features",
      "coaching ERP features",
      "institute ERP features",
      "school system features comparison",
      "coaching system comparison",
      "school software solution provider",
      "college management system provider",
      "coaching management provider",
      "institute management provider",
      "reliable school management platform",
      "reliable coaching management platform",
      "reliable institute management system",
      "trusted educational management system",
      "trusted coaching center software",
    ],
  },

  pages: {
    home: {
      title: "Campus24by7 – Best School, College & Institute Management ERP System",
      description:
        "Complete school, college, and institute management system and ERP software for coaching centers. Manage admissions, fees, attendance, academics, HR, transport, and more. Book a free demo today!",
      keywords: [
        "school management system",
        "college management software",
        "institute management system",
        "coaching management software",
        "school ERP",
        "college ERP",
        "institute ERP",
        "best school management system",
        "college ERP software",
        "institute management solution",
        "campus automation platform",
      ],
    },

    features: {
      title: "Campus24by7 Features – School, College & Institute Management System",
      description:
        "Explore Campus24by7 features: student management, fee collection, attendance tracking, academic management, HR payroll, transport management, coaching batch management, and more.",
      keywords: [
        "school management features",
        "college system features",
        "institute management features",
        "coaching software features",
        "ERP features for education",
        "student information system",
        "fee management system",
        "attendance tracking software",
        "batch management system",
      ],
    },

    pricing: {
      title: "Campus24by7 Pricing – Affordable School, College & Institute ERP",
      description:
        "Flexible pricing plans for schools, colleges, institutes, and coaching centers of all sizes. Choose from Basic, Professional, or Enterprise plans. Get the best value for your institution.",
      keywords: [
        "school management system cost",
        "college ERP pricing",
        "institute management pricing",
        "coaching software cost",
        "school software price comparison",
        "affordable school management",
        "best value school ERP",
        "coaching center software price",
      ],
    },

    contact: {
      title: "Contact Campus24by7 – School, College & Institute Management Support",
      description:
        "Get in touch with Campus24by7 team. Book a free demo, ask questions, or discuss your institution's or coaching center's requirements with our experts.",
      keywords: [
        "school management support",
        "institute management support",
        "coaching software support",
        "ERP customer service",
        "book school management demo",
        "contact school software provider",
      ],
    },
  },

  structuredData: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Campus24by7",
      url: "https://campus24by7.com",
      logo: "https://campus24by7.com/logo.svg",
      description:
        "End-to-end ERP solution for schools, colleges, institutes, and coaching centers.",
      sameAs: [
        "https://www.facebook.com/campus24by7",
        "https://www.twitter.com/campus24by7",
        "https://www.linkedin.com/company/campus24by7",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Sales",
        telephone: "+919557172321",
        url: "https://wa.me/919557172321",
      },
    },

    product: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Campus24by7",
      description:
        "Complete school, college, institute, and coaching center management ERP system",
      url: "https://campus24by7.com",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web-based",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        priceRange: "4999 - Custom",
      },
    },

    localBusiness: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Campus24by7",
      image: "https://campus24by7.com/logo.svg",
      description:
        "School, College, Institute, and Coaching Center Management System Provider",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Dehradun",
        addressLocality: "Dehradun",
        addressRegion: "Uttarakhand",
        postalCode: "",
        addressCountry: "IN",
      },
      telephone: "+919557172321",
      url: "https://campus24by7.com",
      sameAs: [
        "https://www.facebook.com/campus24by7",
        "https://www.twitter.com/campus24by7",
      ],
    },
  },

  /**
   * Generate comma-separated keywords string
   */
  getAllKeywords: (): string => {
    return [
      ...SEO_CONFIG.keywords.primary,
      ...SEO_CONFIG.keywords.secondary,
      ...SEO_CONFIG.keywords.specific,
      ...SEO_CONFIG.keywords.sales,
    ].join(", ");
  },

  /**
   * Get page-specific SEO config
   */
  getPageConfig: (
    page: "home" | "features" | "pricing" | "contact"
  ) => {
    return SEO_CONFIG.pages[page];
  },

  /**
   * Generate JSON-LD script tag content
   */
  getStructuredData: (type: "organization" | "product" | "localBusiness") => {
    return JSON.stringify(SEO_CONFIG.structuredData[type]);
  },
};

/**
 * Update page title and meta tags dynamically
 */
export const updatePageSEO = (
  title: string,
  description: string,
  keywords?: string[]
) => {
  document.title = title;

  // Update description meta tag
  const descriptionMeta = document.querySelector("meta[name='description']");
  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", description);
  }

  // Update keywords meta tag
  if (keywords && keywords.length > 0) {
    const keywordsMeta = document.querySelector("meta[name='keywords']");
    if (keywordsMeta) {
      keywordsMeta.setAttribute("content", keywords.join(", "));
    }
  }

  // Update Open Graph tags
  const ogTitle = document.querySelector("meta[property='og:title']");
  if (ogTitle) {
    ogTitle.setAttribute("content", title);
  }

  const ogDescription = document.querySelector(
    "meta[property='og:description']"
  );
  if (ogDescription) {
    ogDescription.setAttribute("content", description);
  }
};

/**
 * Add JSON-LD structured data to page
 */
export const addStructuredData = (jsonld: object) => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.innerHTML = JSON.stringify(jsonld);
  document.head.appendChild(script);
};

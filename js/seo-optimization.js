// Advanced SEO Optimization System for Plusqulebi
// Professional-grade SEO implementation for first-page Google rankings

const seoContent = {
  ka: {
    // Primary SEO Content
    title: "PLUS ქულების გაცვლა ლარში | იყიდე და გაყიდე PLUS ქულები - Plusqulebi.ge",
    description: "გადაცვალე საქართველოს ბანკის PLUS ქულები მომენტალურად ლარში. 24/7 მხარდაჭერა, საუკეთესო კურსი, უსაფრთხო ტრანზაქციები. Plusqulebi.ge - შენი სანდო პარტნიორი.",
    keywords: "PLUS ქულები, პლიუს ქულები, Bank of Georgia, ქულების გაყიდვა, ქულების ყიდვა, ლოიალობის პროგრამა, ბონუს ქულები, ლარი, გაცვლა, საქართველო, ბანკი, ფინანსები, ფული, გადახდა, ტრანზაქცია",
    
    // Author and Copyright
    author: "კარლო თევზაძე",
    copyright: "© 2025 Plusqulebi. ყველა უფლება დაცულია.",
    
    // Open Graph Content
    ogTitle: "PLUS ქულების გაცვლა ლარში | Plusqulebi.ge",
    ogDescription: "გადაცვალე საქართველოს ბანკის PLUS ქულები მომენტალურად ლარში. 24/7 მხარდაჭერა, საუკეთესო კურსი, უსაფრთხო ტრანზაქციები.",
    ogSiteName: "Plusqulebi",
    ogType: "website",
    ogLocale: "ka_GE",
    
    // Twitter Cards
    twitterTitle: "PLUS ქულების გაცვლა ლარში | Plusqulebi.ge",
    twitterDescription: "გადაცვალე საქართველოს ბანკის PLUS ქულები მომენტალურად ლარში. საუკეთესო კურსი, 24/7 მხარდაჭერა.",
    twitterCard: "summary_large_image",
    twitterSite: "@plusqulebi",
    twitterCreator: "@karlotevzadze",
    
    // Additional SEO Meta Tags
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    googlebot: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    bingbot: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    
    // Language and Region
    language: "ka",
    region: "GE",
    geoRegion: "GE",
    geoCountry: "Georgia",
    
    // Business Information
    businessName: "Plusqulebi",
    businessType: "Financial Services",
    serviceArea: "Georgia",
    contactPhone: "+995597118175",
    
    // Content Categories
    category: "Financial Services",
    subcategory: "Banking and Finance",
    industry: "Fintech"
  },
  
  en: {
    // Primary SEO Content
    title: "Exchange PLUS Points for Lari | Buy and Sell PLUS Points - Plusqulebi.ge",
    description: "Exchange Bank of Georgia PLUS points instantly for Lari. 24/7 support, best rates, secure transactions. Plusqulebi.ge - your trusted partner for point exchange.",
    keywords: "PLUS points, Bank of Georgia, points exchange, loyalty program, bonus points, Lari, Georgia, exchange points, sell points, buy points, banking, finance, fintech, money, payment, transaction, Tbilisi",
    
    // Author and Copyright
    author: "Karlo Tevzadze",
    copyright: "© 2025 Plusqulebi. All rights reserved.",
    
    // Open Graph Content
    ogTitle: "Exchange PLUS Points for Lari | Plusqulebi.ge",
    ogDescription: "Exchange Bank of Georgia PLUS points instantly for Lari. 24/7 support, best rates, secure transactions.",
    ogSiteName: "Plusqulebi",
    ogType: "website",
    ogLocale: "en_US",
    
    // Twitter Cards
    twitterTitle: "Exchange PLUS Points for Lari | Plusqulebi.ge",
    twitterDescription: "Exchange Bank of Georgia PLUS points instantly for Lari. Best rates, 24/7 support, secure transactions.",
    twitterCard: "summary_large_image",
    twitterSite: "@plusqulebi",
    twitterCreator: "@karlotevzadze",
    
    // Additional SEO Meta Tags
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    googlebot: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    bingbot: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    
    // Language and Region
    language: "en",
    region: "US",
    geoRegion: "GE",
    geoCountry: "Georgia",
    
    // Business Information
    businessName: "Plusqulebi",
    businessType: "Financial Services",
    serviceArea: "Georgia",
    contactPhone: "+995597118175",
    
    // Content Categories
    category: "Financial Services",
    subcategory: "Banking and Finance",
    industry: "Fintech"
  }
};

// Advanced SEO Meta Tags Generator
function generateAdvancedMetaTags(language = "ka") {
  const content = seoContent[language] || seoContent["ka"];
  
  return {
    // Basic Meta Tags
    title: content.title,
    description: content.description,
    keywords: content.keywords,
    author: content.author,
    copyright: content.copyright,
    robots: content.robots,
    googlebot: content.googlebot,
    bingbot: content.bingbot,
    
    // Language and Region
    language: content.language,
    region: content.region,
    'geo.region': content.geoRegion,
    'geo.country': content.geoCountry,
    
    // Open Graph
    'og:title': content.ogTitle,
    'og:description': content.ogDescription,
    'og:site_name': content.ogSiteName,
    'og:type': content.ogType,
    'og:locale': content.ogLocale,
    'og:url': 'https://plusqulebi.ge/',
    'og:image': 'https://plusqulebi.ge/img/banner.webp',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': content.ogTitle,
    
    // Twitter Cards
    'twitter:card': content.twitterCard,
    'twitter:site': content.twitterSite,
    'twitter:creator': content.twitterCreator,
    'twitter:title': content.twitterTitle,
    'twitter:description': content.twitterDescription,
    'twitter:image': 'https://plusqulebi.ge/img/banner.webp',
    'twitter:image:alt': content.twitterTitle,
    
    // Additional SEO
    'theme-color': '#1C2331',
    'msapplication-TileColor': '#1C2331',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    
    // Business Information
    'business:contact_data:locality': 'Tbilisi',
    'business:contact_data:region': 'Georgia',
    'business:contact_data:country_name': 'Georgia',
    'business:contact_data:phone_number': content.contactPhone,
    
    // Content Classification
    'article:author': content.author,
    'article:section': content.category,
    'article:tag': content.keywords.split(', ').slice(0, 5).join(', '),
    
    // Mobile Optimization
    'mobile-web-app-capable': 'yes',
    'apple-touch-fullscreen': 'yes',
    'apple-mobile-web-app-title': 'Plusqulebi',
    
    // Security
    'referrer': 'no-referrer-when-downgrade',
    'x-ua-compatible': 'IE=edge',
    
    // Performance
    'dns-prefetch': '//fonts.googleapis.com',
    'preconnect': 'https://plusqulebi.ge',
    'preload': 'img/banner.webp'
  };
}

// Update Head Content with Advanced SEO
function updateAdvancedHeadContent(language = "ka") {
  const metaTags = generateAdvancedMetaTags(language);
  
  // Update title
  document.title = metaTags.title;
  
  // Update or create meta tags
  Object.keys(metaTags).forEach(key => {
    if (key === 'title') return; // Already handled above
    
    let selector, attribute, value;
    
    if (key.startsWith('og:')) {
      selector = `meta[property="${key}"]`;
      attribute = 'content';
    } else if (key.startsWith('twitter:')) {
      selector = `meta[name="${key}"]`;
      attribute = 'content';
    } else if (key.startsWith('business:')) {
      selector = `meta[name="${key}"]`;
      attribute = 'content';
    } else if (key.startsWith('article:')) {
      selector = `meta[property="${key}"]`;
      attribute = 'content';
    } else {
      selector = `meta[name="${key}"]`;
      attribute = 'content';
    }
    
    let element = document.querySelector(selector);
    if (!element) {
      element = document.createElement('meta');
      if (key.startsWith('og:') || key.startsWith('article:')) {
        element.setAttribute('property', key);
      } else {
        element.setAttribute('name', key);
      }
      document.head.appendChild(element);
    }
    
    element.setAttribute(attribute, metaTags[key]);
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = language;
  
  // Update canonical URL
  const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = `https://plusqulebi.ge/${language === 'en' ? '?lang=en' : ''}`;
  if (!document.querySelector('link[rel="canonical"]')) {
    document.head.appendChild(canonical);
  }
}

// Add Hreflang Tags for International SEO
function addHreflangTags() {
  // Remove existing hreflang tags
  const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]');
  existingHreflang.forEach(tag => tag.remove());
  
  const hreflangTags = [
    { hreflang: 'ka', href: 'https://plusqulebi.ge/' },
    { hreflang: 'en', href: 'https://plusqulebi.ge/?lang=en' },
    { hreflang: 'x-default', href: 'https://plusqulebi.ge/' }
  ];
  
  hreflangTags.forEach(tag => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = tag.hreflang;
    link.href = tag.href;
    document.head.appendChild(link);
  });
}

// Generate Advanced Structured Data
function generateStructuredData(language = "ka") {
  const content = seoContent[language] || seoContent["ka"];
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://plusqulebi.ge/#website",
        "url": "https://plusqulebi.ge/",
        "name": "Plusqulebi",
        "description": content.description,
        "inLanguage": language,
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://plusqulebi.ge/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://plusqulebi.ge/#organization",
        "name": content.businessName,
        "url": "https://plusqulebi.ge/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://plusqulebi.ge/img/plusqulebi2.webp",
          "width": 200,
          "height": 200
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": content.contactPhone,
          "contactType": "customer service",
          "availableLanguage": [language === "ka" ? "Georgian" : "English"]
        },
        "sameAs": [
          "https://www.facebook.com/karlo.tevzadze/",
          "https://www.linkedin.com/in/karlo-tevzadze-b301b0175/",
          "https://t.me/bitcoin_dca_with_karl",
          "https://www.instagram.com/bitcoindcawithkarl",
          "https://www.youtube.com/@BitcoinDCAwithKarl"
        ]
      },
      {
        "@type": "FinancialService",
        "@id": "https://plusqulebi.ge/#service",
        "name": "PLUS Points Exchange Service",
        "description": content.description,
        "provider": {
          "@id": "https://plusqulebi.ge/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Georgia"
        },
        "serviceType": "Point Exchange",
        "category": "Financial Services"
      },
      {
        "@type": "WebPage",
        "@id": "https://plusqulebi.ge/#webpage",
        "url": "https://plusqulebi.ge/",
        "name": content.title,
        "isPartOf": {
          "@id": "https://plusqulebi.ge/#website"
        },
        "about": {
          "@id": "https://plusqulebi.ge/#service"
        },
        "description": content.description,
        "inLanguage": language,
        "datePublished": "2025-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString()
      }
    ]
  };
  
  return structuredData;
}

// Add Structured Data to Head
function addStructuredData(language = "ka") {
  // Remove existing structured data
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
  existingScripts.forEach(script => script.remove());
  
  const structuredData = generateStructuredData(language);
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData, null, 2);
  document.head.appendChild(script);
}

// Add Performance and Security Headers
function addPerformanceHeaders() {
  // Preload critical resources
  const preloads = [
    { href: 'css/style.css', as: 'style' },
    { href: 'css/fonts.css', as: 'style' },
    { href: 'img/banner.webp', as: 'image' },
    { href: 'img/plusqulebi2.webp', as: 'image' }
  ];
  
  preloads.forEach(preload => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = preload.href;
    link.as = preload.as;
    if (preload.as === 'style') {
      link.onload = function() { this.rel = 'stylesheet'; };
    }
    document.head.appendChild(link);
  });
  
  // DNS prefetch for external resources
  const dnsPrefetch = [
    '//fonts.googleapis.com',
    '//www.google-analytics.com',
    '//www.googletagmanager.com'
  ];
  
  dnsPrefetch.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
}

// Initialize Advanced SEO
function initializeAdvancedSEO() {
  // Get language from URL parameter or default to Georgian
  const urlParams = new URLSearchParams(window.location.search);
  const langFromUrl = urlParams.get('lang');
  const initialLanguage = (langFromUrl === 'en') ? 'en' : 'ka';
  
  // Update head content
  updateAdvancedHeadContent(initialLanguage);
  
  // Add hreflang tags
  addHreflangTags();
  
  // Add structured data
  addStructuredData(initialLanguage);
  
  // Add performance headers
  addPerformanceHeaders();
  
  return initialLanguage;
}

// Export functions
if (typeof module !== "undefined" && module.exports) {
  module.exports = { 
    seoContent, 
    updateAdvancedHeadContent, 
    addHreflangTags, 
    addStructuredData, 
    addPerformanceHeaders,
    initializeAdvancedSEO 
  };
}

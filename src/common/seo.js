// SEO optimization utilities for the navbar
export const SEO_CONFIG = {
  // Organization structured data
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Infovent",
    "url": "https://infovent.com",
    "logo": "https://infovent.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/infovent",
      "https://twitter.com/infovent",
      "https://facebook.com/infovent"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "availableLanguage": ["English", "Gujarati", "Hindi"]
    }
  },

  // Website structured data
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Infovent",
    "url": "https://infovent.com",
    "description": "Professional IT services and solutions for modern businesses",
    "publisher": {
      "@type": "Organization",
      "name": "Infovent"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://infovent.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },

  // Breadcrumb structured data
  breadcrumb: (breadcrumbs) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://infovent.com${item.url}`
    }))
  }),

  // Local business structured data
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Infovent",
    "image": "https://infovent.com/logo.png",
    "telephone": "+1-555-123-4567",
    "email": "info@infovent.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.0225,
      "longitude": 72.5714
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$$"
  }
};

// SEO meta tags configuration
export const SEO_META = {
  default: {
    title: "Infovent - Professional IT Services & Solutions",
    description: "Leading IT company providing software development, web design, digital marketing, and technology solutions for businesses worldwide.",
    keywords: "IT services, software development, web design, digital marketing, technology solutions, Ahmedabad, Gujarat",
    author: "Infovent",
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1.0",
    charset: "utf-8"
  },
  
  services: {
    title: "IT Services - Infovent",
    description: "Comprehensive IT services including software development, cloud solutions, cybersecurity, and IT consulting for businesses of all sizes."
  },
  
  solutions: {
    title: "Technology Solutions - Infovent",
    description: "Innovative technology solutions for digital transformation, business automation, and enterprise software development."
  },
  
  about: {
    title: "About Us - Infovent",
    description: "Learn about Infovent, a leading IT company dedicated to delivering cutting-edge technology solutions and exceptional client service."
  },
  
  portfolio: {
    title: "Our Portfolio - Infovent",
    description: "Explore our portfolio of successful projects and case studies showcasing our expertise in software development and digital solutions."
  },
  
  blog: {
    title: "Tech Blog - Infovent",
    description: "Stay updated with the latest technology trends, industry insights, and expert articles from our team of IT professionals."
  },
  
  contact: {
    title: "Contact Us - Infovent",
    description: "Get in touch with Infovent for your IT project requirements. We're here to help transform your business with technology."
  }
};

// Generate canonical URL
export function generateCanonicalUrl(path = '') {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://infovent.com';
  return `${baseUrl}${path}`;
}

// Generate Open Graph tags
export function generateOpenGraph(path, title, description) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://infovent.com';
  const url = `${baseUrl}${path}`;
  
  return {
    title: title || SEO_META.default.title,
    description: description || SEO_META.default.description,
    url: url,
    type: 'website',
    image: `${baseUrl}/og-image.jpg`,
    site_name: 'Infovent'
  };
}

// Generate Twitter card tags
export function generateTwitterCard(title, description) {
  return {
    card: 'summary_large_image',
    site: '@infovent',
    title: title || SEO_META.default.title,
    description: description || SEO_META.default.description,
    image: 'https://infovent.com/twitter-image.jpg'
  };
}

// Breadcrumb data for different pages
export const BREADCRUMBS = {
  home: [{ name: "Home", url: "/" }],
  services: [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" }
  ],
  solutions: [
    { name: "Home", url: "/" },
    { name: "Solutions", url: "/solutions" }
  ],
  about: [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" }
  ],
  portfolio: [
    { name: "Home", url: "/" },
    { name: "Portfolio", url: "/portfolio" }
  ],
  blog: [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" }
  ],
  contact: [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" }
  ]
};
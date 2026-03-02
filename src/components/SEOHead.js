import Head from 'next/head';
import { SEO_META, SEO_CONFIG, generateCanonicalUrl, generateOpenGraph, generateTwitterCard } from '../common/seo';

export default function SEOHead({ 
  title, 
  description, 
  path = '',
  keywords,
  ogImage,
  structuredData 
}) {
  const canonicalUrl = generateCanonicalUrl(path);
  const ogTags = generateOpenGraph(path, title, description);
  const twitterTags = generateTwitterCard(title, description);
  
  // Use default values if not provided
  const pageTitle = title || SEO_META.default.title;
  const pageDescription = description || SEO_META.default.description;
  const pageKeywords = keywords || SEO_META.default.keywords;

  return (
    <Head>
      {/* Basic meta tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content={SEO_META.default.author} />
      <meta name="robots" content={SEO_META.default.robots} />
      <meta name="viewport" content={SEO_META.default.viewport} />
      <meta charSet={SEO_META.default.charset} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={ogTags.title} />
      <meta property="og:description" content={ogTags.description} />
      <meta property="og:url" content={ogTags.url} />
      <meta property="og:type" content={ogTags.type} />
      <meta property="og:image" content={ogImage || ogTags.image} />
      <meta property="og:site_name" content={ogTags.site_name} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content={twitterTags.card} />
      <meta name="twitter:site" content={twitterTags.site} />
      <meta name="twitter:title" content={twitterTags.title} />
      <meta name="twitter:description" content={twitterTags.description} />
      <meta name="twitter:image" content={ogImage || twitterTags.image} />
      
      {/* Structured data */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(SEO_CONFIG.website) 
        }} 
      />
      
      {structuredData && (
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(structuredData) 
          }} 
        />
      )}
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Theme color */}
      <meta name="theme-color" content="#2563eb" />
      
      {/* Mobile app support */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Infovent" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    </Head>
  );
}

// Pre-configured SEO components for different page types
export function HomeSEO() {
  return (
    <SEOHead
      title={SEO_META.default.title}
      description={SEO_META.default.description}
      path="/"
      structuredData={SEO_CONFIG.organization}
    />
  );
}

export function ServicesSEO() {
  return (
    <SEOHead
      title={SEO_META.services.title}
      description={SEO_META.services.description}
      path="/services"
    />
  );
}

export function SolutionsSEO() {
  return (
    <SEOHead
      title={SEO_META.solutions.title}
      description={SEO_META.solutions.description}
      path="/solutions"
    />
  );
}

export function AboutSEO() {
  return (
    <SEOHead
      title={SEO_META.about.title}
      description={SEO_META.about.description}
      path="/about"
      structuredData={SEO_CONFIG.localBusiness}
    />
  );
}

export function PortfolioSEO() {
  return (
    <SEOHead
      title={SEO_META.portfolio.title}
      description={SEO_META.portfolio.description}
      path="/portfolio"
    />
  );
}

export function BlogSEO() {
  return (
    <SEOHead
      title={SEO_META.blog.title}
      description={SEO_META.blog.description}
      path="/blog"
    />
  );
}

export function ContactSEO() {
  return (
    <SEOHead
      title={SEO_META.contact.title}
      description={SEO_META.contact.description}
      path="/contact"
    />
  );
}
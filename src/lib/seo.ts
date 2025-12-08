// ========================================
// SEO UTILITIES - COSTA G
// Schema.org JSON-LD y Meta Tags
// ========================================

import { SITE_CONFIG } from './constants'

// ========================================
// TIPOS
// ========================================

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product' | 'organization' | 'local_business'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export interface ProjectSEO {
  name: string
  description: string
  image?: string
  location: string
  year: number
  client: string
}

// ========================================
// SCHEMA.ORG - ORGANIZACIÓN
// ========================================

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/logo.png`,
      width: 200,
      height: 60,
    },
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    description: SITE_CONFIG.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: 'MX',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.contact.phoneRaw,
      contactType: 'customer service',
      availableLanguage: ['Spanish'],
      areaServed: ['MX'],
    },
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.youtube,
    ],
    foundingDate: '2018',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
      maxValue: 50,
    },
    slogan: 'Constructora Bio-Sustentable',
  }
}

// ========================================
// SCHEMA.ORG - NEGOCIO LOCAL
// ========================================

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.phoneRaw,
    email: SITE_CONFIG.contact.email,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    logo: `${SITE_CONFIG.url}/logo.png`,
    priceRange: '$$',
    currenciesAccepted: 'MXN',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.address.coordinates.lat,
      longitude: SITE_CONFIG.address.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '14:00',
      },
    ],
    areaServed: [
      {
        '@type': 'State',
        name: 'Guerrero',
        containedInPlace: {
          '@type': 'Country',
          name: 'México',
        },
      },
      {
        '@type': 'State',
        name: 'Estado de México',
        containedInPlace: {
          '@type': 'Country',
          name: 'México',
        },
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

// ========================================
// SCHEMA.ORG - SERVICIO
// ========================================

export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_CONFIG.url}${service.url}/#service`,
    name: service.name,
    description: service.description,
    url: `${SITE_CONFIG.url}${service.url}`,
    provider: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
    },
    areaServed: {
      '@type': 'State',
      name: 'Guerrero',
    },
    serviceType: 'Construction',
  }
}

// ========================================
// SCHEMA.ORG - PROYECTO (CREATIVE WORK)
// ========================================

export function generateProjectSchema(project: ProjectSEO) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    image: project.image || `${SITE_CONFIG.url}/og-image.jpg`,
    dateCreated: `${project.year}-01-01`,
    creator: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
    },
    locationCreated: {
      '@type': 'Place',
      name: project.location,
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Guerrero',
        addressCountry: 'MX',
      },
    },
    funder: {
      '@type': 'Organization',
      name: project.client,
    },
  }
}

// ========================================
// SCHEMA.ORG - BREADCRUMB
// ========================================

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  }
}

// ========================================
// SCHEMA.ORG - FAQ
// ========================================

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// ========================================
// SCHEMA.ORG - WEBPAGE
// ========================================

export function generateWebPageSchema(page: {
  title: string
  description: string
  url: string
  type?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': page.type || 'WebPage',
    '@id': `${SITE_CONFIG.url}${page.url}/#webpage`,
    url: `${SITE_CONFIG.url}${page.url}`,
    name: page.title,
    description: page.description,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_CONFIG.url}/#website`,
      url: SITE_CONFIG.url,
      name: SITE_CONFIG.name,
      publisher: {
        '@type': 'Organization',
        '@id': `${SITE_CONFIG.url}/#organization`,
      },
    },
    inLanguage: 'es-MX',
  }
}

// ========================================
// META TAGS GENERATOR
// ========================================

export function generateMetaTags(props: SEOProps) {
  const title = props.title
    ? `${props.title} | ${SITE_CONFIG.name}`
    : SITE_CONFIG.seo.defaultTitle
  const description = props.description || SITE_CONFIG.seo.defaultDescription
  const image = props.image || `${SITE_CONFIG.url}/og-image.jpg`
  const url = props.url ? `${SITE_CONFIG.url}${props.url}` : SITE_CONFIG.url
  const keywords = props.keywords?.join(', ') || SITE_CONFIG.seo.keywords.join(', ')

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'es_MX',
      type: props.type || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// ========================================
// EXPORTACIONES
// ========================================

export const SEO = {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateProjectSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
  generateMetaTags,
}

export default SEO

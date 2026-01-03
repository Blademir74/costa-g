import type { Metadata, Viewport } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

/**
 * SEO INTERNACIONAL - COSTA G
 * 
 * - Meta tags para México + Internacional
 * - Keywords español + inglés
 * - JSON-LD para Rich Snippets
 * - Permitir bots de IA
 */

export const metadata: Metadata = {
  title: {
    default: 'Costa G | Constructora de Infraestructura en México - 243+ Puentes',
    template: '%s | Costa G Infraestructura',
  },
  description: 
    'Constructora bio-sustentable líder en México. 243+ puentes rehabilitados, ' +
    '17 proyectos completados, 7+ años de experiencia. Certificados CICAEG. ' +
    'Guerrero y Estado de México. Tel: 747 273 5934',
  
  keywords: [
    'constructora infraestructura México',
    'rehabilitación de puentes',
    'construcción carreteras Guerrero',
    'pavimentación concreto hidráulico',
    'obra pública México',
    'CICAEG certificado',
    'infrastructure construction Mexico',
    'bridge rehabilitation Latin America',
    'government contractor Mexico',
  ],

  authors: [{ name: 'Comercializadora e Inmobiliaria Costa G S.A. de C.V.' }],
  creator: 'Costa G',
  publisher: 'Costa G',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },

  openGraph: {
    type: 'website',
    locale: 'es_MX',
    alternateLocale: ['en_US'],
    url: 'https://costag.com.mx',
    siteName: 'Costa G Infraestructura',
    title: 'Costa G | 243+ Puentes Rehabilitados en México',
    description: 'Constructora líder en infraestructura bio-sustentable. 7+ años transformando comunidades.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Costa G Infraestructura' }],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Costa G | Infraestructura que Transforma Comunidades',
    description: '243+ puentes rehabilitados. 7+ años de experiencia. Constructora bio-sustentable en México.',
    images: ['/images/og-image.png'],
  },

  other: {
    'geo.region': 'MX-GRO',
    'geo.placename': 'Chilpancingo, Guerrero',
    'geo.position': '17.5506;-99.5024',
  },

  alternates: {
    canonical: 'https://costag.com.mx',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1A3A52',
}

// JSON-LD Structured Data
const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Comercializadora e Inmobiliaria Costa G S.A. de C.V.',
  alternateName: 'Costa G',
  url: 'https://costag.com.mx',
  logo: 'https://costag.com.mx/images/logo.png',
  description: 'Constructora bio-sustentable especializada en rehabilitación de puentes y obra pública.',
  foundingDate: '2018',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chilpancingo',
    addressRegion: 'Guerrero',
    postalCode: '39000',
    addressCountry: 'MX',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+52-747-273-5934',
    contactType: 'customer service',
    email: 'Inmob.costag@Hotmail.com',
    availableLanguage: ['Spanish', 'English'],
  },
  areaServed: ['Guerrero', 'Estado de México'],
}

const jsonLdLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Costa G',
  image: 'https://costag.com.mx/images/projects/puente-vehicular-hero.png',
  url: 'https://costag.com.mx',
  telephone: '+52-747-273-5934',
  email: 'Inmob.costag@Hotmail.com',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chilpancingo',
    addressRegion: 'GRO',
    postalCode: '39000',
    addressCountry: 'MX',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.5506,
    longitude: -99.5024,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '17',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-MX" className="scroll-smooth">
      <head>
        {/* Preconnect para Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload Hero Image */}
        <link 
          rel="preload" 
          href="/images/projects/puente-vehicular-hero.png" 
          as="image"
          type="image/png"
        />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
      </head>
      <body className="font-body antialiased bg-skyLight-100 text-charcoal-500">
        {/* Skip Link - Accesibilidad */}
        <a 
          href="#main-content" 
          className="skip-link sr-only focus:not-sr-only"
        >
          Ir al contenido principal
        </a>
        
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

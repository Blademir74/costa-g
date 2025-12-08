import React from 'react';
import type { Metadata } from 'next';
import HomeView from '../components/views/HomeView';
import JsonLd from '../components/JsonLd';

export const metadata: Metadata = {
  title: 'COSTA G | Constructora e Inmobiliaria | Proyectos Nacionales e Internacionales',
  description: 'Constructora e inmobiliaria con 30+ años. Proyectos residenciales, comerciales e industriales. Consultoría en construcción a nivel nacional e internacional.',
  alternates: {
    canonical: 'https://www.costag.com',
  }
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "COSTA G",
    "url": "https://www.costag.com",
    "logo": "https://www.costag.com/logo.png",
    "description": "Constructora e inmobiliaria líder en proyectos Bio-Sustentables.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Galo Soberon y Parra, Edif. C, Depto. #302, Col. Las Torres",
      "addressLocality": "Chilpancingo",
      "addressRegion": "Guerrero",
      "postalCode": "39076",
      "addressCountry": "MX"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+52-747-273-5934",
      "contactType": "sales",
      "areaServed": ["MX"],
      "availableLanguage": ["Es"]
    },
    "sameAs": [
      "https://www.facebook.com/costag",
      "https://www.instagram.com/costag",
      "https://www.linkedin.com/company/costag"
    ]
  };

  return (
    <>
      <JsonLd data={schemaData} />
      <HomeView />
    </>
  );
}
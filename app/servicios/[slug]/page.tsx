import React from 'react';
import { notFound } from 'next/navigation';
import Hero from '../../../components/Hero';
import Button from '../../../components/Button';
import JsonLd from '../../../components/JsonLd';
import Link from 'next/link';

// Mock Data Lookup (In production, fetch from DB)
const getServiceBySlug = (slug: string) => {
  const services = [
    {
      slug: 'construccion',
      title: 'Construcción y Obra Civil',
      description: 'Ejecución de proyectos residenciales, comerciales e industriales con enfoque Bio-Sustentable.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000',
      details: 'Ofrecemos soluciones integrales en construcción, desde cimentaciones profundas hasta acabados de lujo. Nuestro equipo cumple con normativas ISO 9001 y estándares de seguridad internacional.'
    },
    {
      slug: 'remodelacion',
      title: 'Remodelación Integral',
      description: 'Transformamos espacios existentes para maximizar su funcionalidad y valor comercial.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000',
      details: 'Renovación completa de interiores y exteriores. Especialistas en restauración de edificios históricos y modernización de oficinas corporativas.'
    },
    {
      slug: 'proyecto-ejecutivo',
      title: 'Proyecto Ejecutivo BIM',
      description: 'Diseño arquitectónico y planificación digital avanzada.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000',
      details: 'Desarrollo de planos, cálculo estructural e ingeniería de instalaciones usando metodología BIM para reducir costos y tiempos de ejecución.'
    }
  ];
  return services.find(s => s.slug === slug);
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: 'Servicio no encontrado' };
  
  return {
    title: `${service.title} | Servicios COSTA G`,
    description: service.description,
  };
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "provider": {
      "@type": "Organization",
      "name": "COSTA G"
    },
    "description": service.description,
    "areaServed": "México",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Construcción",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.title
          }
        }
      ]
    }
  };

  return (
    <div className="pt-20">
      <JsonLd data={schemaData} />
      <Hero 
        title={service.title}
        description={service.description}
        image={service.image}
      />
      
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-display font-bold text-costa-navy mb-6">Descripción del Servicio</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {service.details}
            </p>
            <h3 className="text-xl font-bold text-costa-navy mb-4">¿Por qué elegirnos?</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-gray-600"><span className="w-2 h-2 bg-costa-lime rounded-full"></span>Personal Certificado</li>
              <li className="flex items-center gap-2 text-gray-600"><span className="w-2 h-2 bg-costa-lime rounded-full"></span>Materiales Bio-Sustentables</li>
              <li className="flex items-center gap-2 text-gray-600"><span className="w-2 h-2 bg-costa-lime rounded-full"></span>Garantía por Contrato</li>
            </ul>
            <Link href="/contacto">
              <Button variant="primary" withIcon>Solicitar Cotización</Button>
            </Link>
          </div>
          <div className="lg:w-1/3 bg-gray-50 p-8 rounded-xl border border-gray-100">
             <h4 className="font-bold text-costa-navy mb-4">Otros Servicios</h4>
             <ul className="space-y-4">
               <li><Link href="/servicios/remodelacion" className="text-gray-500 hover:text-costa-sky transition-colors block border-b border-gray-200 pb-2">Remodelación</Link></li>
               <li><Link href="/servicios/proyecto-ejecutivo" className="text-gray-500 hover:text-costa-sky transition-colors block border-b border-gray-200 pb-2">Proyecto Ejecutivo</Link></li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
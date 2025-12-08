import React from 'react';
import { notFound } from 'next/navigation';
import Hero from '../../../components/Hero';
import JsonLd from '../../../components/JsonLd';
import { MapPin, Calendar, User, DollarSign } from 'lucide-react';

const getProjectBySlug = (slug: string) => {
  // Simulate DB lookup
  const projects = [
    {
      slug: 'residencial-polanco-cdmx',
      title: 'Residencial Polanco',
      category: 'Residencial',
      location: 'Polanco, CDMX',
      year: '2024',
      description: 'Complejo residencial de lujo con certificación LEED Gold. Integra jardines verticales y sistemas de captación pluvial.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000'
    },
    {
      slug: 'puente-union',
      title: 'Puente Unión',
      category: 'Infraestructura',
      location: 'Guerrero, MX',
      year: '2023',
      description: 'Conexión vial de 4 carriles construida con concreto de alta resistencia para soportar tráfico pesado.',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=800'
    }
  ];
  
  // Fallback for demo purposes if slug doesn't match specific mocked items
  const found = projects.find(p => p.slug === slug);
  if (found) return found;

  return {
    slug,
    title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    category: 'General',
    location: 'México',
    year: '2024',
    description: 'Descripción detallada del proyecto...',
    image: 'https://picsum.photos/seed/project/1200/600'
  };
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  return {
    title: `${project.title} | Proyectos COSTA G`,
    description: project.description,
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Project",
    "name": project.title,
    "description": project.description,
    "location": {
      "@type": "Place",
      "address": project.location
    },
    "organizer": {
      "@type": "Organization",
      "name": "COSTA G"
    },
    "datePublished": project.year
  };

  return (
    <div className="pt-20">
      <JsonLd data={schemaData} />
      <Hero 
        title={project.title} 
        description={`${project.category} | ${project.location}`}
        image={project.image}
      />

      <div className="container mx-auto px-6 py-20">
         <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
               <h2 className="text-3xl font-display font-bold text-costa-navy mb-6">Detalles del Proyecto</h2>
               <p className="text-gray-600 text-lg leading-relaxed mb-6">{project.description}</p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <img src="https://picsum.photos/seed/detail1/600/400" className="rounded-xl shadow-soft" alt="Detalle 1" />
                  <img src="https://picsum.photos/seed/detail2/600/400" className="rounded-xl shadow-soft" alt="Detalle 2" />
               </div>
            </div>
            
            <div className="lg:w-1/3">
               <div className="bg-white p-8 rounded-xl shadow-floating border border-gray-100 sticky top-24">
                  <h3 className="text-xl font-bold text-costa-navy mb-6 border-b border-gray-100 pb-4">Ficha Técnica</h3>
                  
                  <div className="space-y-4">
                     <div className="flex justify-between items-center">
                        <span className="text-gray-500 flex items-center gap-2 text-sm"><MapPin size={16}/> Ubicación</span>
                        <span className="font-bold text-costa-navy text-right">{project.location}</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-gray-500 flex items-center gap-2 text-sm"><Calendar size={16}/> Año</span>
                        <span className="font-bold text-costa-navy text-right">{project.year}</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-gray-500 flex items-center gap-2 text-sm"><User size={16}/> Cliente</span>
                        <span className="font-bold text-costa-navy text-right">Privado</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
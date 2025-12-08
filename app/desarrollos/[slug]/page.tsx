import React from 'react';
import Hero from '../../../components/Hero';
import JsonLd from '../../../components/JsonLd';
import Button from '../../../components/Button';
import { Home, Car, Maximize, MapPin, Check } from 'lucide-react';

const getDevelopmentBySlug = (slug: string) => {
  const dev = {
    slug,
    title: 'Torres Azules Torre 1',
    price: '$3,500,000 MXN',
    location: 'Chilpancingo, Guerrero',
    description: 'Exclusivo desarrollo vertical con amenidades de lujo. Departamentos inteligentes con acabados premium y vistas panorámicas.',
    features: ['3 Recámaras', '2 Baños', '2 Estacionamientos', 'Seguridad 24/7', 'Roof Garden'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000'
  };
  
  if (slug === 'torres-azules-torre-1') return dev;
  
  return { ...dev, title: slug.replace(/-/g, ' ').toUpperCase() };
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const dev = getDevelopmentBySlug(params.slug);
  return {
    title: `${dev.title} | Desarrollos COSTA G`,
    description: dev.description,
  };
}

export default function DevelopmentDetail({ params }: { params: { slug: string } }) {
  const dev = getDevelopmentBySlug(params.slug);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": dev.title,
    "description": dev.description,
    "price": "3500000",
    "priceCurrency": "MXN",
    "image": dev.image,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chilpancingo",
      "addressRegion": "Gro",
      "addressCountry": "MX"
    }
  };

  return (
    <div className="pt-20">
      <JsonLd data={schemaData} />
      <Hero 
        title={dev.title} 
        description={dev.location}
        image={dev.image}
      />
      
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
           <div className="lg:w-2/3">
              <div className="flex items-center justify-between mb-6">
                 <h1 className="text-3xl font-display font-bold text-costa-navy">{dev.title}</h1>
                 <span className="text-2xl font-bold text-costa-gold">{dev.price}</span>
              </div>
              
              <div className="flex gap-6 border-y border-gray-100 py-6 mb-8">
                 <div className="flex items-center gap-2 text-gray-600"><Home size={20} className="text-costa-sky"/> <b>3</b> Rec</div>
                 <div className="flex items-center gap-2 text-gray-600"><Car size={20} className="text-costa-sky"/> <b>2</b> Autos</div>
                 <div className="flex items-center gap-2 text-gray-600"><Maximize size={20} className="text-costa-sky"/> <b>180</b> m²</div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">{dev.description}</p>

              <h3 className="text-xl font-bold text-costa-navy mb-4">Amenidades</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                 {dev.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600">
                       <Check size={16} className="text-costa-lime" /> {feat}
                    </div>
                 ))}
              </div>
           </div>

           <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-xl shadow-floating border border-gray-100">
                 <h3 className="font-bold text-costa-navy mb-4">Agenda una visita</h3>
                 <p className="text-sm text-gray-500 mb-6">Nuestros asesores te mostrarán el departamento muestra.</p>
                 <Button fullWidth>Contactar por WhatsApp</Button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
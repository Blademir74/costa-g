'use client';
import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp, Hammer, HardHat, Ruler, Truck, Building2, Paintbrush } from 'lucide-react';
import Link from 'next/link';
import Button from '../Button';
import ServiceCard from '../ServiceCard';

const servicesList = [
  {
    id: 1,
    slug: 'proyecto-ejecutivo',
    title: 'Proyecto Ejecutivo',
    icon: <Ruler size={32} />,
    shortDesc: 'Diseño arquitectónico y planificación integral.',
    fullDesc: 'Desarrollamos planos arquitectónicos, estructurales y de instalaciones (MEP) utilizando tecnología BIM para minimizar errores en obra. Incluye renders fotorrealistas y recorridos virtuales.'
  },
  {
    id: 2,
    slug: 'construccion',
    title: 'Obra Civil & Edificación',
    icon: <Building2 size={32} />,
    shortDesc: 'Construcción residencial, comercial e industrial.',
    fullDesc: 'Ejecución de obra gris y acabados con personal certificado. Especialistas en cimentaciones profundas, estructuras de acero y concreto armado, cumpliendo normativas de seguridad estructural.'
  },
  {
    id: 3,
    slug: 'infraestructura-urbana',
    title: 'Infraestructura Urbana',
    icon: <Truck size={32} />,
    shortDesc: 'Pavimentación, drenaje y redes de agua.',
    fullDesc: 'Construcción de calles con concreto hidráulico, caminos artesanales, redes de agua potable, alcantarillado sanitario y pluvial. Maquinaria pesada propia para movimientos de tierra.'
  },
  {
    id: 4,
    slug: 'rehabilitacion',
    title: 'Rehabilitación Estructural',
    icon: <Hammer size={32} />,
    shortDesc: 'Reforzamiento y mantenimiento de inmuebles.',
    fullDesc: 'Dictámenes estructurales y reforzamiento de edificaciones dañadas o antiguas. Mantenimiento preventivo y correctivo para escuelas, hospitales y edificios públicos.'
  },
  {
    id: 5,
    slug: 'supervision',
    title: 'Supervisión de Obra',
    icon: <HardHat size={32} />,
    shortDesc: 'Auditoría técnica y control de calidad.',
    fullDesc: 'Supervisión externa para garantizar que su proyecto se construya según especificaciones, tiempo y costo. Control de estimaciones y pruebas de laboratorio de materiales.'
  },
  {
    id: 6,
    slug: 'remodelacion',
    title: 'Acabados & Interiorismo',
    icon: <Paintbrush size={32} />,
    shortDesc: 'Diseño de interiores y detalles finales.',
    fullDesc: 'Instalación de pisos, plafones, carpintería y cancelería de alta gama. Diseño de interiores corporativo y residencial enfocado en la funcionalidad y estética "Clean Luxury".'
  }
];

export default function ServicesView() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <div className="bg-costa-navy py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-costa-sky/10 transform skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-costa-sky font-bold uppercase tracking-widest text-xs mb-2 block">Soluciones Técnicas</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-lg text-gray-300 max-w-2xl font-light">
            Desde la conceptualización hasta la entrega llave en mano. Ingeniería de valor y construcción Bio-Sustentable.
          </p>
        </div>
      </div>

      {/* 2. Timeline Process */}
      <section className="py-24 bg-costa-sky/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-costa-navy text-center mb-16">Metodología de Ejecución</h2>
          <div className="relative max-w-5xl mx-auto">
             <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
             {[
               { step: "01", title: "Análisis y Presupuesto", desc: "Levantamiento topográfico, estudio de mecánica de suelos y presupuesto paramétrico detallado." },
               { step: "02", title: "Ingeniería y Planeación", desc: "Desarrollo de proyecto ejecutivo, trámites de licencias y programación de obra (Ruta Crítica)." },
               { step: "03", title: "Ejecución Bio-Sustentable", desc: "Construcción bajo normas ambientales, gestión de residuos y uso de materiales certificados." },
               { step: "04", title: "Control de Calidad", desc: "Supervisión técnica constante, pruebas de laboratorio y reportes semanales de avance." },
               { step: "05", title: "Entrega y Garantía", desc: "Entrega formal, carpeta técnica (As-Built) y póliza de vicios ocultos." },
             ].map((item, index) => (
               <div key={index} className="mb-8 md:mb-12">
                 <div className={`hidden md:flex flex-row items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                   <div className="w-5/12 p-6 bg-white rounded-xl shadow-soft border border-gray-100 hover:border-costa-sky transition-colors relative group">
                      <span className="text-gray-100 font-bold text-6xl absolute top-2 right-4 -z-0 group-hover:text-costa-sky/10 transition-colors">{item.step}</span>
                      <h3 className="text-xl font-bold text-costa-navy mb-2 relative z-10">{item.title}</h3>
                      <p className="text-gray-500 relative z-10 text-sm">{item.desc}</p>
                   </div>
                   <div className="w-2/12 flex justify-center relative z-10">
                      <div className="w-12 h-12 bg-costa-navy text-white rounded-full flex items-center justify-center font-bold border-4 border-white shadow-lg">
                        {index + 1}
                      </div>
                   </div>
                   <div className="w-5/12"></div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. Grid Services (Updated to use ServiceCard with Links) */}
      <section className="py-24 container mx-auto px-6">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-costa-navy">Catálogo de Servicios</h2>
            <p className="text-gray-500 mt-2">Especialización técnica en cada área de la construcción.</p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
               <ServiceCard
                  key={service.id}
                  icon={service.icon}
                  title={service.title}
                  description={service.shortDesc}
                  linkTo={`/servicios/${service.slug}`}
               />
            ))}
         </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 text-center relative">
        <div className="container mx-auto px-6 relative z-10">
           <h2 className="text-3xl font-display font-bold text-costa-navy mb-6">¿Listo para construir?</h2>
           <Link href="/contacto">
             <Button variant="primary" className="!px-10 !py-4" withIcon>
               Solicitar Cotización
             </Button>
           </Link>
        </div>
      </section>
    </div>
  );
}
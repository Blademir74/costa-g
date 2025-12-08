'use client';
import React, { useState } from 'react';
import HomeHero from '../HomeHero';
import { Hammer, PencilRuler, PaintBucket, Briefcase } from 'lucide-react';
import ServiceCard from '../ServiceCard';
import ProjectCard from '../ProjectCard';
import Link from 'next/link';
import Button from '../Button';

export default function HomeView() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const featuredProjects = [
    { id: 1, title: 'Residencial Lomas', category: 'Residencial', image: 'https://images.unsplash.com/photo-1600596542815-2495db98dada?q=80&w=800' },
    { id: 2, title: 'Torre Corporativa', category: 'Comercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800' },
    { id: 3, title: 'Puente Unión', category: 'Infraestructura', image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=800' },
    { id: 4, title: 'Casa Veranda', category: 'Residencial', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800' },
    { id: 5, title: 'Plaza Central', category: 'Comercial', image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=800' },
    { id: 6, title: 'Carretera Federal', category: 'Infraestructura', image: 'https://images.unsplash.com/photo-1465326685640-c7a3c306d87e?q=80&w=800' },
  ];

  const filteredProjects = activeCategory === 'Todos' 
    ? featuredProjects 
    : featuredProjects.filter(p => p.category === activeCategory);

  return (
    <>
      <HomeHero />
      
      {/* SECCIÓN 2: SERVICIOS */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
             <span className="text-costa-gold font-bold uppercase tracking-widest text-xs mb-2 block">Nuestra Experiencia</span>
             <h2 className="text-4xl font-display font-bold text-costa-navy">Soluciones Integrales</h2>
             <p className="text-gray-500 mt-4">Abordamos cada etapa de su proyecto con excelencia técnica y compromiso.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Hammer size={32} />}
              title="Construcción"
              description="Ejecución de obra pública y privada con estándares internacionales de calidad y seguridad."
            />
            <ServiceCard 
              icon={<PaintBucket size={32} />}
              title="Remodelación"
              description="Transformación de espacios residenciales y comerciales para aumentar su valor y funcionalidad."
            />
            <ServiceCard 
              icon={<PencilRuler size={32} />}
              title="Diseño"
              description="Arquitectura de vanguardia y planificación bio-sustentable adaptada al entorno."
            />
            <ServiceCard 
              icon={<Briefcase size={32} />}
              title="Consultoría"
              description="Asesoría técnica, gestión de licitaciones y supervisión especializada de proyectos."
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: PROYECTOS DESTACADOS */}
      <section className="py-24 bg-costa-slate relative z-10">
        <div className="container mx-auto px-6">
          
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-8">
             <div className="text-center lg:text-left">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-costa-navy">Proyectos Destacados</h2>
               <p className="text-gray-500 mt-2">Últimas obras entregadas con el sello de calidad COSTA G.</p>
             </div>
             
             <div className="flex flex-wrap justify-center gap-2">
                {['Todos', 'Residencial', 'Comercial', 'Infraestructura'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300
                      ${activeCategory === cat 
                        ? 'bg-costa-navy text-white shadow-lg transform scale-105' 
                        : 'bg-white text-gray-500 hover:text-costa-navy hover:bg-costa-sky/20'}`}
                  >
                    {cat}
                  </button>
                ))}
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard 
                 key={project.id}
                 title={project.title} 
                 category={project.category}
                 image={project.image}
                 year="2024"
              />
            ))}
          </div>

          <div className="mt-16 text-center">
             <Link href="/proyectos">
                <Button variant="secondary" className="!border-costa-navy !text-costa-navy hover:!bg-costa-navy hover:!text-white" withIcon>
                  Ver Todos los Proyectos
                </Button>
             </Link>
          </div>

        </div>
      </section>

      {/* SECTION 4: CTA FINAL */}
      <section className="py-24 bg-costa-navy relative overflow-hidden z-10">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
           <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
             ¿Listo para iniciar tu obra?
           </h2>
           <p className="text-xl text-costa-sky mb-10 max-w-2xl mx-auto font-light">
             Contamos con la maquinaria, el equipo humano y la experiencia para hacer realidad tu visión.
           </p>
           <Link href="/contacto">
              <Button variant="accent" className="!px-12 !py-4 text-lg" withIcon>
                Contactar Ahora
              </Button>
           </Link>
        </div>
      </section>
    </>
  );
}
'use client';
import React, { useState } from 'react';
import { Filter, X, Rotate3D, Image as ImageIcon, MapPin, Calendar, User, DollarSign, Search, ChevronDown } from 'lucide-react';
import ProjectCard from '../ProjectCard';
import Link from 'next/link';

export default function ProjectsView() {
  const [sector, setSector] = useState('Todos');
  const [location, setLocation] = useState('Todas');
  const [year, setYear] = useState('Todos');
  const [budget, setBudget] = useState('Todos');

  // Helper to create SEO friendly slugs from titles
  const createSlug = (title: string) => title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

  const projects = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title: i === 0 ? 'Residencial Polanco CDMX' : `Proyecto ${i + 1}`,
    category: i % 3 === 0 ? 'Infraestructura' : i % 3 === 1 ? 'Residencial' : 'Comercial',
    location: i % 2 === 0 ? 'Chilpancingo' : 'Acapulco',
    year: i < 4 ? '2024' : '2023',
    image: `https://picsum.photos/seed/${i + 100}/800/600`,
    has360: i % 2 === 0
  }));

  const filteredProjects = projects.filter(p => {
    return (sector === 'Todos' || p.category === sector) &&
           (location === 'Todas' || p.location === location) &&
           (year === 'Todos' || p.year === year);
  });

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <div className="bg-costa-sky/10 py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
           <span className="text-costa-navy font-bold uppercase tracking-widest text-xs mb-2 block">Nuestro Trabajo</span>
           <h1 className="text-4xl md:text-5xl font-display font-bold text-costa-navy mb-4">Portafolio de Obras</h1>
           <p className="text-gray-500 max-w-xl mx-auto">Explora nuestra trayectoria en infraestructura educativa, caminos y obra civil.</p>
        </div>
      </div>

      {/* 2. Sticky Filters */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur shadow-sm border-b border-gray-200 transition-all">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-2 text-costa-navy font-bold text-sm whitespace-nowrap">
               <Filter size={16} /> <span className="hidden md:inline">Filtrar por:</span>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
               {/* Filters (Reduced for brevity, logic remains same) */}
               <div className="relative min-w-[140px]">
                  <select value={sector} onChange={(e) => setSector(e.target.value)} className="w-full pl-3 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-costa-charcoal focus:border-costa-sky focus:outline-none appearance-none cursor-pointer">
                    <option>Todos</option>
                    <option>Infraestructura</option>
                    <option>Residencial</option>
                    <option>Comercial</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
               </div>
               {/* ... other filters can remain ... */}
            </div>

            {(sector !== 'Todos' || location !== 'Todas' || year !== 'Todos') && (
              <button 
                onClick={() => { setSector('Todos'); setLocation('Todas'); setYear('Todos'); }}
                className="text-xs text-red-500 font-bold hover:underline whitespace-nowrap"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 3. Grid with SEO Links */}
      <section className="py-12 container mx-auto px-6 bg-white min-h-screen">
         {filteredProjects.length > 0 ? (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProjects.map((project) => (
                <Link key={project.id} href={`/proyectos/${createSlug(project.title)}`}>
                  <ProjectCard 
                    title={project.title}
                    category={project.category}
                    image={project.image}
                    year={project.year}
                    has360={project.has360}
                    // Removed onClick handler to allow Link navigation
                  />
                </Link>
              ))}
           </div>
         ) : (
           <div className="flex flex-col items-center justify-center py-20 opacity-50">
              <Search size={48} className="mb-4 text-gray-300"/>
              <p className="text-xl font-bold text-gray-400">No se encontraron proyectos</p>
           </div>
         )}
      </section>
    </div>
  );
}
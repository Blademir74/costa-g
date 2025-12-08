import React from 'react';
import { Target, Eye, Award, Users, FileCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      
      {/* Intro */}
      <section className="bg-white py-20">
         <div className="container mx-auto px-6 text-center max-w-4xl">
            <span className="text-costa-lime font-bold uppercase tracking-widest text-xs">Nuestra Esencia</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-costa-navy mt-4 mb-8">Pasión por construir un futuro sustentable</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
               Somos una empresa joven conformada por un equipo de profesionales enfocados en las necesidades de nuestros clientes y en la calidad de nuestros servicios.
            </p>
         </div>
      </section>

      {/* Mission / Vision Cards */}
      <section className="py-16 bg-costa-slate">
         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-xl shadow-soft border-t-4 border-costa-lime">
               <div className="w-16 h-16 bg-costa-lime/10 rounded-full flex items-center justify-center text-costa-lime mb-6">
                  <Target size={32} />
               </div>
               <h2 className="text-2xl font-bold text-costa-navy mb-4">Misión</h2>
               <p className="text-gray-600 leading-relaxed">
                  Construir con los menores procesos contaminantes y dejar en cada obra una huella de carbono menor para preservar nuestro mundo. Buscamos ser una empresa certificada en edificaciones Bio-Sustentables.
               </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-soft border-t-4 border-costa-sky">
               <div className="w-16 h-16 bg-costa-sky/10 rounded-full flex items-center justify-center text-costa-sky mb-6">
                  <Eye size={32} />
               </div>
               <h2 className="text-2xl font-bold text-costa-navy mb-4">Visión</h2>
               <p className="text-gray-600 leading-relaxed">
                  Consolidarnos como la constructora líder en el sureste mexicano, reconocida por nuestra innovación técnica y nuestro compromiso inquebrantable con el medio ambiente.
               </p>
            </div>
         </div>
      </section>

      {/* Stats / Numbers */}
      <section className="py-20 bg-costa-navy text-white">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               {[
                  { num: "2025", label: "Curriculum Empresarial" },
                  { num: "+50", label: "Obras Ejecutadas" },
                  { num: "100%", label: "Bio-Sustentable" },
                  { num: "2", label: "Estados de Presencia" }
               ].map((stat, idx) => (
                  <div key={idx}>
                     <div className="text-4xl md:text-5xl font-bold text-costa-lime mb-2">{stat.num}</div>
                     <div className="text-sm uppercase tracking-widest opacity-80">{stat.label}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Team Wireframe */}
      <section className="py-20 container mx-auto px-6">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-costa-navy">Nuestro Equipo</h2>
            <p className="text-gray-500 mt-2">Personal técnico profesional para cumplir cualquier desafío.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
               <div key={member} className="text-center">
                  <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center text-gray-400">
                     [Foto]
                  </div>
                  <h3 className="text-xl font-bold text-costa-navy">Ing. Nombre Apellido</h3>
                  <p className="text-costa-sky font-medium">Director de Proyectos</p>
               </div>
            ))}
         </div>
      </section>

      {/* Certifications Strip */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
         <div className="container mx-auto px-6 flex flex-wrap justify-center gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
             <div className="flex items-center gap-2 font-bold text-xl"><FileCheck /> ISO 9001</div>
             <div className="flex items-center gap-2 font-bold text-xl"><Award /> ESR</div>
             <div className="flex items-center gap-2 font-bold text-xl"><Users /> CMIC</div>
         </div>
      </section>
    </div>
  );
}
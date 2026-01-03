import React, { useState, useEffect } from 'react';

/**
 * PROJECT CARD: Diseño de alta jerarquía con micro-interacciones.
 */
const ProjectCard = ({ project, onOpen }) => {
  return (
    <div 
      onClick={() => onOpen(project)}
      className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full"
    >
      {/* Contenedor de Imagen con Overlay */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.main_image_url || "/api/placeholder/800/600"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Badges Flotantes */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-sky-600 text-white text-[10px] font-black uppercase rounded-full tracking-widest shadow-lg">
            {project.category?.name || 'Obra Pública'}
          </span>
          <span className="px-3 py-1 bg-white/90 text-slate-900 text-[10px] font-bold rounded-full shadow-sm">
            {project.year || '2024'}
          </span>
        </div>
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-sky-600 text-[10px] font-bold mb-3 uppercase tracking-[0.2em]">
          <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse" />
          {project.location || 'Guerrero, México'}
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-tight mb-3">
          {project.title}
        </h3>
        
        <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed mb-6">
          {project.description}
        </p>
        
        {/* Footer Técnico */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase font-bold text-slate-400 tracking-tighter">Contrato</span>
            <span className="text-[11px] font-mono text-slate-600 truncate max-w-[120px]">
              {project.contract_number || 'PENDIENTE'}
            </span>
          </div>
          <button className="flex items-center gap-1 text-sm font-bold text-slate-900 group-hover:gap-2 transition-all">
            Detalles 
            <svg className="w-4 h-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * PROJECT MODAL: Ficha técnica "Nivel El Naranjo"
 */
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const whatsappLink = `https://wa.me/527472735934?text=Hola,%20me%20interesa%20un%20proyecto%20similar%20a:%20${encodeURIComponent(project.title)}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-6xl max-h-[95vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 bg-white/20 hover:bg-white/40 text-white lg:text-slate-800 lg:bg-slate-100 lg:hover:bg-slate-200 rounded-full backdrop-blur-md transition-all"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Media Side */}
        <div className="w-full lg:w-1/2 h-72 lg:h-auto relative bg-slate-200">
          <img
            src={project.main_image_url}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent lg:hidden" />
          <div className="absolute bottom-8 left-8">
            <span className="px-4 py-2 bg-sky-600 text-white text-[10px] font-black uppercase rounded-lg shadow-2xl tracking-[0.2em]">
              {project.category?.name || 'INFRAESTRUCTURA'}
            </span>
          </div>
        </div>

        {/* Info Side */}
        <div className="w-full lg:w-1/2 p-8 lg:p-14 overflow-y-auto bg-white">
          <header className="mb-10">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-[1.1] mb-6 font-display">
              {project.title}
            </h2>
            <div className="flex items-center gap-3 text-slate-500 font-medium bg-slate-50 p-3 rounded-2xl border border-slate-100 w-fit">
              <svg className="w-5 h-5 text-sky-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
              </svg>
              <span className="text-sm">{project.location}</span>
            </div>
          </header>

          <section className="space-y-8">
            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Narrativa de Obra</h4>
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                {project.content || project.description}
              </p>
            </div>

            {/* Technical Grid - Estilo Auditoría */}
            <div className="grid grid-cols-2 gap-y-8 gap-x-12 py-10 border-y border-slate-100">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Cliente Final</p>
                <p className="text-sm font-bold text-slate-800 leading-tight">{project.client_name || 'H. Ayuntamiento'}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Dependencia Ejecutora</p>
                <p className="text-sm font-bold text-slate-800 leading-tight">{project.agency_name || 'N/A'}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Año Fiscal</p>
                <p className="text-sm font-bold text-slate-800">{project.year}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Contrato Oficial</p>
                <p className="text-sm font-mono font-bold text-sky-600 tracking-tight">{project.contract_number || 'VER EN EXPEDIENTE'}</p>
              </div>
            </div>

            {/* Secondary Media */}
            {project.gallery_urls && project.gallery_urls.length > 0 && (
              <div>
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Evidencia Técnica</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner border border-slate-100 bg-slate-50">
                    <img src={project.gallery_urls[0]} alt="Avance de obra" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Action Footer */}
          <footer className="mt-12 pt-8">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-4 w-full py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-sky-600 transition-all shadow-2xl hover:-translate-y-1"
            >
              <span className="text-lg">Solicitar Proyecto Similar</span>
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.019-.372-.099-.67-.223-.297-.149-1.63-.767-2.03-.967-.4-.2-.693-.297-.99.15-.297.446-1.164 1.46-1.411 1.758-.247.297-.496.322-.793.174-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.019-.372-.099-.67-.223-.297-.149-1.63-.767-2.03-.967-.4-.2-.693-.297-.99.15z" />
              </svg>
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};

/**
 * COMPONENTE PRINCIPAL (PREVIEW)
 */
export default function App() {
  const [selected, setSelected] = useState(null);
  
  // Datos mock para la previsualización basados en El Naranjo
  const mockProjects = [
    {
      id: 1,
      title: "Rehabilitación Puente Vehicular El Naranjo",
      slug: "puente-el-naranjo",
      location: "Coahuayutla, Guerrero. Calle Nacional, Loc. El Naranjo",
      description: "Proyecto de rehabilitación integral para garantizar la seguridad vial de más de 2,000 habitantes.",
      content: "Proyecto de rehabilitación integral del puente vehicular El Naranjo, incluyendo reforzamiento de columnas, reparación de la superficie de rodamiento, instalación de barandales de seguridad y señalización vial. La obra beneficia a la zona eliminando riesgos críticos en temporada de lluvias.",
      client_name: "H. Ayuntamiento de Coahuayutla de José Ma. Izazaga",
      agency_name: "H. Ayuntamiento Municipal",
      year: 2024,
      contract_number: "MCJMI/2021-2024/OP/AD/035/2024",
      main_image_url: "https://neynkhynexamcodmtrxl.supabase.co/storage/v1/object/public/project-images/puente-el-naranjo.png",
      gallery_urls: ["https://neynkhynexamcodmtrxl.supabase.co/storage/v1/object/public/project-images/puente-el-naranjo2.png"],
      category: { name: "Rehabilitación de Puentes", slug: "puentes" }
    },
    {
      id: 2,
      title: "Camino Artesanal San Marcos Xocotepec",
      slug: "camino-artesanal",
      location: "Tlapa de Comonfort, Guerrero",
      description: "Construcción de 2.5 km de camino con técnica artesanal y mano de obra local.",
      content: "Ejecución de camino tipo artesanal con huellas de rodamiento de concreto y empedrado. Obra de alto impacto social que conecta comunidades rurales de la Montaña de Guerrero.",
      client_name: "Comité Pro-Proyecto",
      agency_name: "H. Ayuntamiento de Tlapa",
      year: 2023,
      contract_number: "C-ART-2023-TLAPA",
      main_image_url: "https://neynkhynexamcodmtrxl.supabase.co/storage/v1/object/public/project-images/camino-artesanal-tlapa.png",
      gallery_urls: ["https://neynkhynexamcodmtrxl.supabase.co/storage/v1/object/public/project-images/camino-artesanal-tlapa2.png"],
      category: { name: "Caminos Artesanales", slug: "caminos" }
    },
    {
      id: 3,
      title: "Aulas Escuela Lorenzo Curiel Bazán",
      slug: "aulas-lorenzo-curiel",
      location: "Tlapa de Comonfort, Guerrero",
      description: "Construcción de 2 aulas didácticas y obra exterior para infraestructura educativa.",
      content: "Mejoramiento de espacios educativos mediante la construcción de aulas tipo regional y servicios exteriores, beneficiando a la población estudiantil indígena de Tlapa.",
      client_name: "Secretaría de Desarrollo Urbano (SDUOPOT)",
      agency_name: "Gobierno del Estado de Guerrero",
      year: 2019,
      contract_number: "SDUOPOT-FISE-AD-110-2019",
      main_image_url: "https://neynkhynexamcodmtrxl.supabase.co/storage/v1/object/public/project-images/aula-tlapa.png",
      gallery_urls: ["https://neynkhynexamcodmtrxl.supabase.co/storage/v1/object/public/project-images/aula-tlapa2.png"],
      category: { name: "Infraestructura Educativa", slug: "edificacion" }
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Refinado */}
      <header className="bg-slate-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold font-display leading-tight mb-8">
              Portafolio de <br/>
              <span className="text-sky-400">Infraestructura</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed font-light">
              Explora nuestra trayectoria de 17+ proyectos estratégicos que conectan comunidades y fortalecen el tejido social de México.
            </p>
          </div>
        </div>
      </header>

      {/* Grid de Proyectos */}
      <main className="container mx-auto px-6 -mt-12 pb-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map(p => (
            <ProjectCard key={p.id} project={p} onOpen={setSelected} />
          ))}
        </div>
      </main>

      {/* Modal dinámico */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
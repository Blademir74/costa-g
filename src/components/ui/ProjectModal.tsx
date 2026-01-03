'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Project } from '@/types/database'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Estado para manejar qué imagen se muestra en grande (Principal vs Secundaria)
  const [activeImage, setActiveImage] = useState(project.main_image_url)

  useEffect(() => {
    // Bloquear scroll
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [])

  if (!project) return null

  // Link WhatsApp pre-llenado
  const whatsappMsg = `Hola, me interesa un proyecto similar a: ${project.title} (${project.contract_number})`
  const whatsappLink = `https://wa.me/527472735934?text=${encodeURIComponent(whatsappMsg)}`

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} /> {/* Backdrop Close */}

      <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative z-10">
        
        {/* Botón Cerrar */}
        <button onClick={onClose} className="absolute top-4 right-4 z-50 p-2 bg-white/80 hover:bg-white rounded-full text-slate-800 transition-colors shadow-md">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* COLUMNA IZQUIERDA: VISUALES */}
        <div className="w-full md:w-1/2 bg-slate-100 flex flex-col">
          {/* Imagen Activa (Grande) */}
          <div className="relative flex-grow h-64 md:h-auto min-h-[300px]">
            <Image
              src={activeImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <span className="text-white text-xs font-bold uppercase tracking-widest bg-sky-600 px-2 py-1 rounded">
                {project.category?.name}
              </span>
            </div>
          </div>

          {/* Mini Galería (Thumbnails) */}
          <div className="flex gap-2 p-4 bg-slate-50 border-t border-slate-200 overflow-x-auto">
             {/* Thumb 1: Principal */}
             <button 
               onClick={() => setActiveImage(project.main_image_url)}
               className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${activeImage === project.main_image_url ? 'border-sky-500 ring-2 ring-sky-200' : 'border-slate-200 grayscale hover:grayscale-0'}`}
             >
               <Image src={project.main_image_url} alt="Principal" fill className="object-cover" />
             </button>
             
             {/* Thumb 2: Secundaria (Si existe) */}
             {project.gallery_urls?.[0] && (
               <button 
                 onClick={() => setActiveImage(project.gallery_urls![0])}
                 className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${activeImage === project.gallery_urls[0] ? 'border-sky-500 ring-2 ring-sky-200' : 'border-slate-200 grayscale hover:grayscale-0'}`}
               >
                 <Image src={project.gallery_urls[0]} alt="Detalle" fill className="object-cover" />
               </button>
             )}
          </div>
        </div>

        {/* COLUMNA DERECHA: DATOS TÉCNICOS */}
        <div className="w-full md:w-1/2 p-8 overflow-y-auto bg-white">
          <div className="mb-6">
             <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-2">
                <svg className="w-4 h-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {project.location}
             </div>
             <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 leading-tight">
               {project.title}
             </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
               <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Alcance del Proyecto</h3>
               <p className="text-slate-700 text-sm leading-relaxed">
                 {project.content || project.description || "Descripción técnica detallada en proceso de carga por el departamento de ingeniería."}
               </p>
            </div>

            {/* Tabla Técnica */}
            <div className="grid grid-cols-2 gap-4 text-sm">
               <div>
                 <p className="text-[10px] text-slate-400 font-bold uppercase">Cliente</p>
                 <p className="font-semibold text-slate-800">{project.client_name || 'H. Ayuntamiento'}</p>
               </div>
               <div>
                 <p className="text-[10px] text-slate-400 font-bold uppercase">Dependencia</p>
                 <p className="font-semibold text-slate-800">{project.agency_name || 'N/A'}</p>
               </div>
               <div>
                 <p className="text-[10px] text-slate-400 font-bold uppercase">Año</p>
                 <p className="font-semibold text-slate-800">{project.year}</p>
               </div>
               <div>
                 <p className="text-[10px] text-slate-400 font-bold uppercase">Contrato</p>
                 <p className="font-mono text-xs font-medium text-slate-600 break-all">{project.contract_number}</p>
               </div>
            </div>
            
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-sky-600 transition-colors shadow-lg gap-2"
              >
                <span>Solicitar Proyecto Similar</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.019-.372-.099-.67-.223-.297-.149-1.63-.767-2.03-.967-.4-.2-.693-.297-.99.15z" /></svg>
              </a>
              <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest">
                Categoría: {project.category?.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
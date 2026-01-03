'use client'

import Image from 'next/image'
import { Project } from '@/types/database'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

export const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
  return (
    <article 
      onClick={() => onOpen(project)}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 cursor-pointer flex flex-col h-full"
    >
      {/* Imagen Principal (Cover) */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={project.main_image_url}
          alt={`Obra: ${project.title}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Badge Categoría */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-sky-600/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
            {project.category?.name || 'Obra Civil'}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3">
          <p className="text-[10px] font-bold text-sky-600 uppercase tracking-widest mb-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"/>
            {project.location || 'Ubicación no especificada'}
          </p>
          <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-sky-700 transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-slate-500 text-sm line-clamp-3 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Footer Card */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
          <span className="font-mono text-slate-400 font-medium">
            {project.year || '2024'}
          </span>
          <span className="font-bold text-slate-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Ver Ficha Técnica
            <svg className="w-3 h-3 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  )
}
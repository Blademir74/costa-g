'use client'

import { useState } from 'react'
import { Project } from '@/types/database'
import { ProjectCard } from './ProjectCard'
import ProjectModal from './ProjectModal'

interface ProjectGalleryProps {
  initialProjects: Project[]
}

export default function ProjectGallery({ initialProjects }: ProjectGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      {/* Grid Layout - Responsive: 1col mobile, 2col tablet, 3col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initialProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onOpen={setSelectedProject} 
          />
        ))}
      </div>

      {/* Modal Interactivo */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  )
}
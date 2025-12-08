'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ProjectCard } from '@/components/shared'
import { Button } from '@/components/ui'
import { getFeaturedProjects, getProjectsBySector, PROJECTS } from '@/data/projects'
import { PROJECT_CATEGORIES } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

// ========================================
// TIPOS
// ========================================

interface ProjectsSectionProps {
  className?: string
  limit?: number
  showFilters?: boolean
}

// ========================================
// COMPONENTE
// ========================================

function ProjectsSection({
  className,
  limit = 6,
  showFilters = true,
}: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS.slice(0, limit)
      : getProjectsBySector(activeFilter).slice(0, limit)

  return (
    <section className={cn('section bg-white', className)}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 text-sm font-medium rounded-full mb-4">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-700 mb-4">
            Proyectos{' '}
            <span className="text-gradient-accent">Destacados</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Más de 15 proyectos completados exitosamente en Guerrero y Estado de
            México, incluyendo conservación de 243 puentes vehiculares.
          </p>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium',
                  'transition-all duration-300',
                  activeFilter === category.id
                    ? 'bg-secondary-700 text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              slug={project.slug}
              image={project.mainImage}
              location={`${project.location.municipality}, ${project.location.state}`}
              municipality={project.location.municipality}
              year={project.year}
              sector={project.sector}
              client={project.client}
              hasTour360={project.hasTour360}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-500">
              No hay proyectos en esta categoría.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
            onClick={() => (window.location.href = '/proyectos')}
          >
            Ver Todos los Proyectos
          </Button>
        </div>
      </div>
    </section>
  )
}

export { ProjectsSection, type ProjectsSectionProps }

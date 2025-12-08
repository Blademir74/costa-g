'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { HeroPage } from '@/components/shared/hero-modern'
import { Button, Badge } from '@/components/ui'
import { CTASection } from '@/components/sections'
import { PROJECTS, getProjectYears, getProjectSectors } from '@/data/projects'
import { PROJECT_CATEGORIES } from '@/lib/constants'
import {
  MapPin,
  Calendar,
  Building2,
  Eye,
  Play,
  Filter,
  X,
  ChevronRight,
} from 'lucide-react'

// ========================================
// COLORES POR SECTOR
// ========================================

const sectorColors: Record<string, string> = {
  Puentes: 'bg-primary-500 text-white',
  Escuelas: 'bg-accent-500 text-secondary-900',
  Canchas: 'bg-eco-500 text-white',
  Pavimentación: 'bg-amber-500 text-white',
  Caminos: 'bg-secondary-600 text-white',
  Muros: 'bg-neutral-600 text-white',
}

// ========================================
// PÁGINA PROYECTOS
// ========================================

export default function ProyectosPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeYear, setActiveYear] = useState<number | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const years = getProjectYears()
  const sectors = getProjectSectors()

  // Filtrar proyectos
  const filteredProjects = PROJECTS.filter((project) => {
    const matchesSector =
      activeFilter === 'all' ||
      project.sector.toLowerCase() === activeFilter.toLowerCase()
    const matchesYear = !activeYear || project.year === activeYear
    return matchesSector && matchesYear
  })

  const clearFilters = () => {
    setActiveFilter('all')
    setActiveYear(null)
  }

  const hasActiveFilters = activeFilter !== 'all' || activeYear !== null

  return (
    <>
      {/* Hero */}
      <HeroPage
        title="Nuestros Proyectos"
        description="Más de 17 proyectos completados exitosamente, incluyendo la conservación de 243 puentes vehiculares en el Estado de México."
        breadcrumbs={[{ label: 'Proyectos', href: '/proyectos' }]}
        badge="Portafolio Completo"
      />

      {/* Filters Section */}
      <section className="py-8 bg-white border-b sticky top-[72px] z-30">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category Filters - Desktop */}
            <div className="hidden md:flex flex-wrap gap-2">
              {PROJECT_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium',
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

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full text-sm font-medium"
            >
              <Filter className="w-4 h-4" />
              Filtros
              {hasActiveFilters && (
                <span className="w-5 h-5 bg-accent-400 text-secondary-900 text-xs rounded-full flex items-center justify-center">
                  {(activeFilter !== 'all' ? 1 : 0) + (activeYear ? 1 : 0)}
                </span>
              )}
            </button>

            {/* Year Filter */}
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm text-neutral-500">Año:</span>
              <select
                value={activeYear || ''}
                onChange={(e) =>
                  setActiveYear(e.target.value ? parseInt(e.target.value) : null)
                }
                className="px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
              >
                <option value="">Todos</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-sm text-neutral-500 hover:text-secondary-700"
              >
                <X className="w-4 h-4" />
                Limpiar filtros
              </button>
            )}
          </div>

          {/* Mobile Filters Panel */}
          {showFilters && (
            <div className="md:hidden mt-4 p-4 bg-neutral-50 rounded-xl animate-fade-in">
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-secondary-700 mb-2">
                  Categoría
                </h4>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_CATEGORIES.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveFilter(category.id)}
                      className={cn(
                        'px-3 py-1.5 rounded-full text-xs font-medium',
                        'transition-all duration-300',
                        activeFilter === category.id
                          ? 'bg-secondary-700 text-white'
                          : 'bg-white text-neutral-600 border'
                      )}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-secondary-700 mb-2">
                  Año
                </h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveYear(null)}
                    className={cn(
                      'px-3 py-1.5 rounded-full text-xs font-medium',
                      !activeYear
                        ? 'bg-secondary-700 text-white'
                        : 'bg-white text-neutral-600 border'
                    )}
                  >
                    Todos
                  </button>
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setActiveYear(year)}
                      className={cn(
                        'px-3 py-1.5 rounded-full text-xs font-medium',
                        activeYear === year
                          ? 'bg-secondary-700 text-white'
                          : 'bg-white text-neutral-600 border'
                      )}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-4 text-sm text-neutral-500">
            Mostrando {filteredProjects.length} de {PROJECTS.length} proyectos
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/proyectos/${project.slug}`}
                className={cn(
                  'group relative rounded-2xl overflow-hidden',
                  'bg-white border border-neutral-200',
                  'hover:border-primary-300 hover:shadow-xl',
                  'transition-all duration-500',
                  'animate-fade-in-up'
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 via-transparent to-transparent z-10" />
                  
                  {/* Placeholder - Replace with real images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary-600 to-secondary-800 flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-white/30" />
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                    <span
                      className={cn(
                        'px-3 py-1 rounded-full text-xs font-medium',
                        sectorColors[project.sector] || 'bg-neutral-600 text-white'
                      )}
                    >
                      {project.sector}
                    </span>
                    {project.hasTour360 && (
                      <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                        <Eye className="w-4 h-4 text-secondary-700" />
                      </span>
                    )}
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                      {project.year}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-secondary-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <span className="px-6 py-3 bg-accent-400 text-secondary-900 font-semibold rounded-full flex items-center gap-2">
                      Ver Proyecto
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-secondary-700 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-neutral-500 mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location.municipality}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.year}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Building2 className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-700 mb-2">
                No hay proyectos
              </h3>
              <p className="text-neutral-500 mb-4">
                No se encontraron proyectos con los filtros seleccionados.
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Highlight */}
      <section className="py-16 bg-secondary-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">
                243+
              </div>
              <div className="text-primary-200 text-sm">Puentes Conservados</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">
                17+
              </div>
              <div className="text-primary-200 text-sm">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">
                7+
              </div>
              <div className="text-primary-200 text-sm">Municipios Atendidos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">
                100%
              </div>
              <div className="text-primary-200 text-sm">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="quote"
        title="¿Tienes un proyecto similar?"
        description="Contáctanos para discutir cómo podemos ayudarte con tu próximo proyecto de construcción."
        primaryButtonText="Solicitar Cotización"
        primaryButtonHref="/contacto"
      />
    </>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Plus,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  ExternalLink,
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  Clock,
  Image as ImageIcon,
} from 'lucide-react'

// ========================================
// DATOS DE PROYECTOS (En producción vienen de la BD)
// ========================================

const projectsData = [
  {
    id: '1',
    title: 'Puente Vehicular El Naranjo',
    slug: 'puente-vehicular-naranjo',
    category: 'Puentes',
    year: 2024,
    location: 'Coahuayutla, Guerrero',
    client: 'H. Ayuntamiento de Coahuayutla',
    status: 'published',
    featured: true,
    images: 2,
    views: 245,
  },
  {
    id: '2',
    title: 'Camino Crucero Vista Hermosa',
    slug: 'camino-crucero-vista-hermosa',
    category: 'Caminos',
    year: 2024,
    location: 'Coahuayutla, Guerrero',
    client: 'H. Ayuntamiento de Coahuayutla',
    status: 'published',
    featured: false,
    images: 3,
    views: 189,
  },
  {
    id: '3',
    title: 'Rehabilitación Carretera Coahuayutla-Tonalá',
    slug: 'carretera-coahuayutla-tonala',
    category: 'Carreteras',
    year: 2024,
    location: 'Coahuayutla, Guerrero',
    client: 'H. Ayuntamiento de Coahuayutla',
    status: 'draft',
    featured: false,
    images: 0,
    views: 0,
  },
  {
    id: '4',
    title: 'Camino Tlapa-San Marcos',
    slug: 'camino-tlapa-san-marcos',
    category: 'Caminos',
    year: 2023,
    location: 'Tlapa de Comonfort, Guerrero',
    client: 'SDUOPOT',
    status: 'published',
    featured: false,
    images: 4,
    views: 156,
  },
  {
    id: '5',
    title: 'Pavimentación Calle Porfirio Díaz',
    slug: 'pavimentacion-porfirio-diaz',
    category: 'Pavimentación',
    year: 2022,
    location: 'Ometepec, Guerrero',
    client: 'SDUOPOT',
    status: 'published',
    featured: false,
    images: 2,
    views: 98,
  },
]

const categories = ['Todos', 'Puentes', 'Caminos', 'Carreteras', 'Pavimentación', 'Escuelas', 'Canchas']

// ========================================
// COMPONENTES
// ========================================

function ProjectStatusBadge({ status }: { status: string }) {
  if (status === 'published') {
    return (
      <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-600">
        <CheckCircle2 className="w-3 h-3" />
        Publicado
      </span>
    )
  }
  return (
    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-600">
      <Clock className="w-3 h-3" />
      Borrador
    </span>
  )
}

// ========================================
// PÁGINA DE PROYECTOS
// ========================================

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [projects, setProjects] = useState(projectsData)

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Todos' || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleDelete = (id: string) => {
    if (confirm('¿Estás seguro de eliminar este proyecto?')) {
      setProjects(projects.filter(p => p.id !== id))
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black" style={{ color: '#1A3A52' }}>
            Proyectos
          </h1>
          <p className="text-sm" style={{ color: '#64748b' }}>
            Gestiona los proyectos de Costa G
          </p>
        </div>
        <Link href="/admin/proyectos/nuevo">
          <button 
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
            }}
          >
            <Plus className="w-5 h-5" />
            Nuevo Proyecto
          </button>
        </Link>
      </div>

      {/* Filtros */}
      <div 
        className="p-4 rounded-2xl flex flex-col lg:flex-row gap-4"
        style={{ background: 'white', border: '1px solid #e2e8f0' }}
      >
        {/* Búsqueda */}
        <div className="flex-1 relative">
          <Search 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" 
            style={{ color: '#94a3b8' }} 
          />
          <input
            type="text"
            placeholder="Buscar proyectos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl"
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              color: '#1A3A52',
              outline: 'none',
            }}
          />
        </div>

        {/* Filtro por categoría */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
              style={{
                background: selectedCategory === category ? '#1A3A52' : '#f8fafc',
                color: selectedCategory === category ? 'white' : '#64748b',
                border: `1px solid ${selectedCategory === category ? '#1A3A52' : '#e2e8f0'}`,
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tabla de Proyectos */}
      <div 
        className="rounded-2xl overflow-hidden"
        style={{ background: 'white', border: '1px solid #e2e8f0' }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                <th className="text-left px-6 py-4 text-sm font-semibold" style={{ color: '#64748b' }}>
                  Proyecto
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold" style={{ color: '#64748b' }}>
                  Categoría
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold" style={{ color: '#64748b' }}>
                  Año
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold" style={{ color: '#64748b' }}>
                  Estado
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold" style={{ color: '#64748b' }}>
                  Imágenes
                </th>
                <th className="text-right px-6 py-4 text-sm font-semibold" style={{ color: '#64748b' }}>
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project, index) => (
                <tr 
                  key={project.id}
                  style={{ borderBottom: index < filteredProjects.length - 1 ? '1px solid #e2e8f0' : 'none' }}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(212,175,55,0.1)' }}
                      >
                        <Building2 className="w-6 h-6" style={{ color: '#D4AF37' }} />
                      </div>
                      <div>
                        <p className="font-semibold" style={{ color: '#1A3A52' }}>
                          {project.title}
                        </p>
                        <p className="text-xs flex items-center gap-1" style={{ color: '#94a3b8' }}>
                          <MapPin className="w-3 h-3" />
                          {project.location}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ background: 'rgba(135,206,235,0.2)', color: '#1A3A52' }}
                    >
                      {project.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm" style={{ color: '#64748b' }}>{project.year}</span>
                  </td>
                  <td className="px-6 py-4">
                    <ProjectStatusBadge status={project.status} />
                  </td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1 text-sm" style={{ color: '#64748b' }}>
                      <ImageIcon className="w-4 h-4" />
                      {project.images}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link 
                        href={`/proyectos/${project.slug}`}
                        target="_blank"
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        title="Ver en sitio"
                      >
                        <ExternalLink className="w-4 h-4" style={{ color: '#64748b' }} />
                      </Link>
                      <Link 
                        href={`/admin/proyectos/${project.id}`}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        title="Editar"
                      >
                        <Edit className="w-4 h-4" style={{ color: '#64748b' }} />
                      </Link>
                      <button 
                        onClick={() => handleDelete(project.id)}
                        className="p-2 rounded-lg hover:bg-red-50 transition-colors"
                        title="Eliminar"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="w-12 h-12 mx-auto mb-4" style={{ color: '#94a3b8' }} />
            <p className="font-semibold" style={{ color: '#64748b' }}>No se encontraron proyectos</p>
            <p className="text-sm" style={{ color: '#94a3b8' }}>
              Intenta con otros filtros o crea un nuevo proyecto
            </p>
          </div>
        )}
      </div>

      {/* Paginación */}
      <div className="flex items-center justify-between">
        <p className="text-sm" style={{ color: '#64748b' }}>
          Mostrando {filteredProjects.length} de {projects.length} proyectos
        </p>
        <div className="flex gap-2">
          <button 
            className="px-4 py-2 rounded-lg text-sm font-medium"
            style={{ background: '#f8fafc', border: '1px solid #e2e8f0', color: '#64748b' }}
          >
            Anterior
          </button>
          <button 
            className="px-4 py-2 rounded-lg text-sm font-medium"
            style={{ background: '#1A3A52', color: 'white' }}
          >
            1
          </button>
          <button 
            className="px-4 py-2 rounded-lg text-sm font-medium"
            style={{ background: '#f8fafc', border: '1px solid #e2e8f0', color: '#64748b' }}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  )
}

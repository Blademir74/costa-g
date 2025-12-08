'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Search, Edit, Trash2, ExternalLink, Building2, MapPin, CheckCircle2, Clock, Image as ImageIcon } from 'lucide-react'

const projectsData = [
  { id: '1', title: 'Puente Vehicular El Naranjo', slug: 'puente-vehicular-naranjo', category: 'Puentes', year: 2024, location: 'Coahuayutla, Guerrero', status: 'published', images: 2 },
  { id: '2', title: 'Camino Crucero Vista Hermosa', slug: 'camino-crucero-vista-hermosa', category: 'Caminos', year: 2024, location: 'Coahuayutla, Guerrero', status: 'published', images: 3 },
  { id: '3', title: 'Rehabilitación Carretera Coahuayutla-Tonalá', slug: 'carretera-coahuayutla-tonala', category: 'Carreteras', year: 2024, location: 'Coahuayutla, Guerrero', status: 'draft', images: 0 },
  { id: '4', title: 'Camino Tlapa-San Marcos', slug: 'camino-tlapa-san-marcos', category: 'Caminos', year: 2023, location: 'Tlapa de Comonfort, Guerrero', status: 'published', images: 4 },
  { id: '5', title: 'Pavimentación Calle Porfirio Díaz', slug: 'pavimentacion-porfirio-diaz', category: 'Pavimentación', year: 2022, location: 'Ometepec, Guerrero', status: 'published', images: 2 },
]

const categories = ['Todos', 'Puentes', 'Caminos', 'Carreteras', 'Pavimentación', 'Escuelas', 'Canchas']

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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#1A3A52]">Proyectos</h1>
          <p className="text-sm text-gray-500">Gestiona los proyectos de Costa G</p>
        </div>
        <Link href="/admin/proyectos/nuevo">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4AF37] to-[#B8860B]">
            <Plus className="w-5 h-5" />
            Nuevo Proyecto
          </button>
        </Link>
      </div>

      <div className="p-4 rounded-2xl flex flex-col lg:flex-row gap-4 bg-white border border-gray-200">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar proyectos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#1A3A52] outline-none focus:border-sky-300"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === category ? 'bg-[#1A3A52] text-white' : 'bg-gray-50 text-gray-500 border border-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden bg-white border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Proyecto</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Categoría</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Año</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Estado</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Imágenes</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-gray-500">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project, index) => (
                <tr key={project.id} className={`hover:bg-gray-50 transition-colors ${index < filteredProjects.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-amber-50">
                        <Building2 className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1A3A52]">{project.title}</p>
                        <p className="text-xs flex items-center gap-1 text-gray-400">
                          <MapPin className="w-3 h-3" />
                          {project.location}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-[#1A3A52]">{project.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </td>
                  <td className="px-6 py-4">
                    {project.status === 'published' ? (
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-600">
                        <CheckCircle2 className="w-3 h-3" />
                        Publicado
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-600">
                        <Clock className="w-3 h-3" />
                        Borrador
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <ImageIcon className="w-4 h-4" />
                      {project.images}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/proyectos/${project.slug}`} target="_blank" className="p-2 rounded-lg hover:bg-gray-100 transition-colors" title="Ver en sitio">
                        <ExternalLink className="w-4 h-4 text-gray-500" />
                      </Link>
                      <Link href={`/admin/proyectos/${project.id}`} className="p-2 rounded-lg hover:bg-gray-100 transition-colors" title="Editar">
                        <Edit className="w-4 h-4 text-gray-500" />
                      </Link>
                      <button onClick={() => handleDelete(project.id)} className="p-2 rounded-lg hover:bg-red-50 transition-colors" title="Eliminar">
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
            <Building2 className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="font-semibold text-gray-500">No se encontraron proyectos</p>
            <p className="text-sm text-gray-400">Intenta con otros filtros o crea un nuevo proyecto</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Mostrando {filteredProjects.length} de {projects.length} proyectos</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-50 border border-gray-200 text-gray-500">Anterior</button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[#1A3A52] text-white">1</button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-50 border border-gray-200 text-gray-500">Siguiente</button>
        </div>
      </div>
    </div>
  )
}

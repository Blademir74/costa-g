'use client'

import { useState } from 'react'

const projectsData = [
  { id: 1, title: 'Puente Vehicular El Naranjo', category: 'Puentes', year: 2024, status: 'published' },
  { id: 2, title: 'Camino Crucero Vista Hermosa', category: 'Caminos', year: 2024, status: 'published' },
  { id: 3, title: 'Rehabilitación Carretera Coahuayutla', category: 'Carreteras', year: 2024, status: 'draft' },
  { id: 4, title: 'Camino Tlapa-San Marcos', category: 'Caminos', year: 2023, status: 'published' },
  { id: 5, title: 'Pavimentación Calle Porfirio Díaz', category: 'Pavimentación', year: 2022, status: 'published' },
]

export default function ProjectsPage() {
  const [projects, setProjects] = useState(projectsData)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Proyectos</h1>
          <p className="text-sm text-gray-500">Gestiona los proyectos</p>
        </div>
        <button className="px-4 py-2.5 rounded-xl font-semibold text-white bg-amber-500 hover:bg-amber-600">
          + Nuevo Proyecto
        </button>
      </div>

      <div className="rounded-2xl overflow-hidden bg-white border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Proyecto</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Categoría</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Año</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Estado</th>
              <th className="text-right px-6 py-4 text-sm font-semibold text-gray-500">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, i) => (
              <tr key={project.id} className={`hover:bg-gray-50 ${i < projects.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <td className="px-6 py-4 font-semibold text-slate-800">{project.title}</td>
                <td className="px-6 py-4"><span className="px-3 py-1 bg-sky-100 text-slate-700 text-xs rounded-full">{project.category}</span></td>
                <td className="px-6 py-4 text-gray-500">{project.year}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-xs rounded-full ${project.status === 'published' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                    {project.status === 'published' ? 'Publicado' : 'Borrador'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg mr-2">Editar</button>
                  <button className="px-3 py-1 text-sm bg-red-100 hover:bg-red-200 text-red-600 rounded-lg">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

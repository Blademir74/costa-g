'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/client'
import { Project } from '@/types/database'

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const fetchProjects = async () => {
      // Traemos los proyectos ordenados por ID para mantener consistencia
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          category:categories (name)
        `)
        .order('id', { ascending: true })
      
      if (data) setProjects(data as Project[])
      setLoading(false)
    }
    fetchProjects()
  }, [supabase])

  if (loading) return <div>Cargando proyectos...</div>

  return (
    <div className="max-w-6xl mx-auto">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900">Gestión de Proyectos</h1>
          <p className="text-slate-500">Administra el catálogo de obras públicas ({projects.length} registros)</p>
        </div>
        {/* Futuro: Botón para crear nuevo proyecto */}
      </header>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase">ID</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase">Imagen</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase">Título / Ubicación</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase">Categoría</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-slate-50 transition-colors">
                <td className="p-4 text-sm font-mono text-slate-400">#{project.id}</td>
                <td className="p-4">
                  <div className="w-16 h-12 bg-slate-100 rounded-lg overflow-hidden relative border border-slate-200">
                    {project.main_image_url && (
                      <img src={project.main_image_url} alt="" className="w-full h-full object-cover" />
                    )}
                  </div>
                </td>
                <td className="p-4">
                  <div className="font-bold text-slate-900">{project.title}</div>
                  <div className="text-xs text-slate-500">{project.location}</div>
                </td>
                <td className="p-4">
                  <span className="inline-block px-2 py-1 bg-sky-100 text-sky-700 text-xs font-bold rounded-md">
                    {project.category?.name || 'General'}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <Link 
                    href={`/admin/proyectos/editar/${project.id}`}
                    className="inline-flex items-center px-3 py-1.5 bg-white border border-slate-200 hover:border-sky-500 hover:text-sky-600 text-slate-600 text-sm font-medium rounded-lg transition-all shadow-sm"
                  >
                    ✏️ Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
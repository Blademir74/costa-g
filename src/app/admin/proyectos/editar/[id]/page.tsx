'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/client'
import { Project } from '@/types/database'

export default function EditProjectPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<Partial<Project>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })
  
  const router = useRouter()
  const supabase = createClient()

  // Cargar datos del proyecto
  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', params.id)
        .single()
      
      if (error) {
        alert('Error cargando proyecto')
        router.push('/admin/proyectos')
        return
      }
      setProject(data)
      setLoading(false)
    }
    fetchProject()
  }, [params.id, router, supabase])

  // Guardar cambios
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMessage({ type: '', text: '' })

    try {
      const { error } = await supabase
        .from('projects')
        .update({
          title: project.title,
          description: project.description, // Descripción corta
          content: project.content,         // Descripción larga
          location: project.location,
          year: project.year,
          client_name: project.client_name,
          agency_name: project.agency_name,
          contract_number: project.contract_number,
          main_image_url: project.main_image_url,
          // Nota: gallery_urls es un array, nos aseguramos que se guarde bien
          gallery_urls: project.gallery_urls
        })
        .eq('id', params.id)

      if (error) throw error
      setMessage({ type: 'success', text: '✅ Proyecto actualizado correctamente' })
      
      // Opcional: Redirigir después de guardar
      // setTimeout(() => router.push('/admin/proyectos'), 1500)
    } catch (error: any) {
      console.error(error)
      setMessage({ type: 'error', text: 'Error al guardar: ' + error.message })
    } finally {
      setSaving(false)
    }
  }

  // Manejador para el input de galería (separado por comas para simplificar edición manual)
  const handleGalleryChange = (str: string) => {
    const urls = str.split(',').map(s => s.trim()).filter(s => s !== '')
    setProject({ ...project, gallery_urls: urls })
  }

  if (loading) return <div className="p-8">Cargando editor...</div>

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/proyectos" className="text-slate-500 hover:text-slate-800">
          ← Volver
        </Link>
        <h1 className="text-2xl font-display font-bold text-slate-900">
          Editando: <span className="text-sky-600">{project.title}</span>
        </h1>
      </div>

      <form onSubmit={handleSave} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-8">
        
        {message.text && (
          <div className={`p-4 rounded-xl text-sm font-bold ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {message.text}
          </div>
        )}

        {/* 1. Información Principal */}
        <section className="space-y-6">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Información General</h2>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Título de la Obra</label>
            <input 
              type="text" 
              value={project.title || ''}
              onChange={e => setProject({...project, title: e.target.value})}
              className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none font-bold"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Ubicación</label>
              <input 
                type="text" 
                value={project.location || ''}
                onChange={e => setProject({...project, location: e.target.value})}
                className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Año</label>
              <input 
                type="number" 
                value={project.year || 2024}
                onChange={e => setProject({...project, year: parseInt(e.target.value)})}
                className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Descripción Corta (Tarjeta)</label>
            <textarea 
              rows={2}
              value={project.description || ''}
              onChange={e => setProject({...project, description: e.target.value})}
              className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Descripción Técnica Completa (Modal)</label>
            <textarea 
              rows={5}
              value={project.content || ''}
              onChange={e => setProject({...project, content: e.target.value})}
              className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
            />
          </div>
        </section>

        {/* 2. Datos de Auditoría */}
        <section className="space-y-6">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Datos de Contrato (Auditoría)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Cliente</label>
              <input 
                type="text" 
                value={project.client_name || ''}
                onChange={e => setProject({...project, client_name: e.target.value})}
                className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Dependencia</label>
              <input 
                type="text" 
                value={project.agency_name || ''}
                onChange={e => setProject({...project, agency_name: e.target.value})}
                className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Número de Contrato</label>
            <input 
              type="text" 
              value={project.contract_number || ''}
              onChange={e => setProject({...project, contract_number: e.target.value})}
              className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none font-mono text-sm"
            />
          </div>
        </section>

        {/* 3. Imágenes */}
        <section className="space-y-6">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Imágenes</h2>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">URL Imagen Principal</label>
            <input 
              type="text" 
              value={project.main_image_url || ''}
              onChange={e => setProject({...project, main_image_url: e.target.value})}
              className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none font-mono text-sm text-slate-500"
            />
            {project.main_image_url && (
              <div className="mt-2 w-32 h-20 relative rounded-lg overflow-hidden border border-slate-200">
                <img src={project.main_image_url} className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">URL Imagen Secundaria (Galería)</label>
            <input 
              type="text" 
              value={project.gallery_urls?.[0] || ''}
              // Manejamos esto como un array de 1 elemento por simplicidad en la UI
              onChange={e => setProject({...project, gallery_urls: [e.target.value]})}
              className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none font-mono text-sm text-slate-500"
            />
             {project.gallery_urls?.[0] && (
              <div className="mt-2 w-32 h-20 relative rounded-lg overflow-hidden border border-slate-200">
                <img src={project.gallery_urls[0]} className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        </section>

        <div className="pt-6 border-t border-slate-100 flex justify-end gap-4">
          <Link href="/admin/proyectos" className="px-6 py-4 text-slate-500 font-bold hover:bg-slate-50 rounded-xl transition-colors">
            Cancelar
          </Link>
          <button 
            type="submit" 
            disabled={saving}
            className={`px-8 py-4 bg-slate-900 text-white font-bold rounded-xl transition-all ${saving ? 'opacity-50' : 'hover:bg-sky-600 shadow-xl hover:-translate-y-1'}`}
          >
            {saving ? 'Guardando...' : 'Guardar Cambios'}
          </button>
        </div>
      </form>
    </div>
  )
}
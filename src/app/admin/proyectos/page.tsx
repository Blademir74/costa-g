'use client'

/**
 * DASHBOARD ADMIN - LISTA DE PROYECTOS
 * 
 * CRUD completo de los 17 proyectos
 * Permite editar descripciones y subir fotos
 */

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getProyectos, getSession, signOut, deleteProyecto, type Proyecto } from '@/lib/supabase'

const categorias = ['Todos', 'Puentes', 'Carreteras', 'Caminos', 'Pavimentación', 'Educativa', 'Muros']

export default function AdminProyectosPage() {
  const router = useRouter()
  const [proyectos, setProyectos] = useState<Proyecto[]>([])
  const [filteredProyectos, setFilteredProyectos] = useState<Proyecto[]>([])
  const [loading, setLoading] = useState(true)
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')
  const [deleteId, setDeleteId] = useState<string | null>(null)

  useEffect(() => {
    checkAuthAndLoadData()
  }, [])

  useEffect(() => {
    if (categoriaActiva === 'Todos') {
      setFilteredProyectos(proyectos)
    } else {
      setFilteredProyectos(proyectos.filter(p => p.categoria === categoriaActiva))
    }
  }, [categoriaActiva, proyectos])

  const checkAuthAndLoadData = async () => {
    const { session } = await getSession()
    
    if (!session) {
      router.push('/admin')
      return
    }

    const { data } = await getProyectos()
    if (data) {
      setProyectos(data)
      setFilteredProyectos(data)
    }
    setLoading(false)
  }

  const handleSignOut = async () => {
    await signOut()
    router.push('/admin')
  }

  const handleDelete = async (id: string) => {
    if (!confirm('¿Está seguro de eliminar este proyecto?')) return
    
    setDeleteId(id)
    const { error } = await deleteProyecto(id)
    
    if (!error) {
      setProyectos(proyectos.filter(p => p.id !== id))
    }
    setDeleteId(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <svg className="animate-spin w-12 h-12 text-navy-500 mx-auto" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <p className="mt-4 text-charcoal-500">Cargando proyectos...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-navy-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="font-display font-bold text-lg">CG</span>
              </div>
              <span className="font-semibold">Admin</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="text-white/70 hover:text-white text-sm transition-colors"
            >
              Ver sitio →
            </Link>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display text-2xl font-bold text-navy-500">
              Gestión de Proyectos
            </h1>
            <p className="text-charcoal-400 mt-1">
              {proyectos.length} proyectos · {proyectos.filter(p => p.destacado).length} destacados
            </p>
          </div>
          
          <Link
            href="/admin/proyectos/nuevo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-navy-500 
                     font-semibold rounded-xl hover:bg-gold-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Nuevo Proyecto
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                categoriaActiva === cat
                  ? 'bg-navy-500 text-white'
                  : 'bg-white text-charcoal-500 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProyectos.map((proyecto) => (
            <div
              key={proyecto.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative aspect-video bg-slate-100">
                {proyecto.imagen_principal ? (
                  <Image
                    src={proyecto.imagen_principal}
                    alt={proyecto.titulo}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-charcoal-300">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2 py-1 bg-navy-500/90 text-white text-xs font-medium rounded-lg">
                    {proyecto.categoria}
                  </span>
                  {proyecto.destacado && (
                    <span className="px-2 py-1 bg-gold-500 text-navy-500 text-xs font-medium rounded-lg">
                      ⭐ Destacado
                    </span>
                  )}
                </div>
                
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-white/90 text-navy-500 text-xs font-bold rounded-lg">
                    {proyecto.año}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-bold text-navy-500 mb-1 line-clamp-1">
                  {proyecto.titulo_corto || proyecto.titulo}
                </h3>
                <p className="text-charcoal-400 text-sm mb-3 line-clamp-2">
                  {proyecto.descripcion}
                </p>
                <div className="flex items-center gap-2 text-charcoal-400 text-xs mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {proyecto.municipio}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Link
                    href={`/admin/proyectos/${proyecto.id}`}
                    className="flex-1 px-4 py-2 bg-navy-500 text-white text-sm font-medium 
                             rounded-lg text-center hover:bg-navy-600 transition-colors"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => handleDelete(proyecto.id)}
                    disabled={deleteId === proyecto.id}
                    className="px-4 py-2 bg-red-50 text-red-600 text-sm font-medium 
                             rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50"
                  >
                    {deleteId === proyecto.id ? '...' : 'Eliminar'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProyectos.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-charcoal-200 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <h3 className="font-semibold text-navy-500 mb-2">No hay proyectos</h3>
            <p className="text-charcoal-400 mb-6">
              {categoriaActiva === 'Todos' 
                ? 'Comienza agregando tu primer proyecto'
                : `No hay proyectos en la categoría "${categoriaActiva}"`
              }
            </p>
            <Link
              href="/admin/proyectos/nuevo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-navy-500 
                       font-semibold rounded-xl hover:bg-gold-400 transition-colors"
            >
              Crear proyecto
            </Link>
          </div>
        )}

        {/* Stats Footer */}
        <div className="mt-12 p-6 bg-white rounded-2xl">
          <h3 className="font-display font-bold text-navy-500 mb-4">
            Estadísticas del Portafolio
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-navy-500">243+</div>
              <div className="text-charcoal-400 text-sm">Puentes rehabilitados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy-500">{proyectos.length}</div>
              <div className="text-charcoal-400 text-sm">Proyectos documentados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy-500">7+</div>
              <div className="text-charcoal-400 text-sm">Años de experiencia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-500">100%</div>
              <div className="text-charcoal-400 text-sm">Cumplimiento</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

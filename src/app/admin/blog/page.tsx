'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Search, Edit, Trash2, Eye, FileText, Calendar, User, CheckCircle2, Clock } from 'lucide-react'

const postsData = [
  { id: '1', title: 'Importancia de la Construcción Sustentable en México', slug: 'construccion-sustentable-mexico', category: 'Sustentabilidad', author: 'Vladimir', status: 'published', date: '2024-12-01', views: 342 },
  { id: '2', title: 'Rehabilitación de Puentes Vehiculares: Nuestra Experiencia', slug: 'rehabilitacion-puentes-vehiculares', category: 'Proyectos', author: 'Vladimir', status: 'published', date: '2024-11-28', views: 256 },
  { id: '3', title: 'Caminos Artesanales: Conectando Comunidades en Guerrero', slug: 'caminos-artesanales-guerrero', category: 'Comunidad', author: 'Vladimir', status: 'published', date: '2024-11-25', views: 198 },
  { id: '4', title: 'Materiales de Construcción Ecológicos: Guía Completa', slug: 'materiales-construccion-ecologicos', category: 'Guías', author: 'Vladimir', status: 'draft', date: '2024-11-20', views: 0 },
]

export default function BlogAdminPage() {
  const [posts, setPosts] = useState(postsData)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const deletePost = (id: string) => {
    if (confirm('¿Eliminar este artículo?')) {
      setPosts(posts.filter(p => p.id !== id))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black" style={{ color: '#1A3A52' }}>Blog</h1>
          <p className="text-sm" style={{ color: '#64748b' }}>Gestiona los artículos del blog</p>
        </div>
        <Link href="/admin/blog/nuevo">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)' }}>
            <Plus className="w-5 h-5" />
            Nuevo Artículo
          </button>
        </Link>
      </div>

      <div className="p-4 rounded-2xl" style={{ background: 'white', border: '1px solid #e2e8f0' }}>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#94a3b8' }} />
          <input
            type="text"
            placeholder="Buscar artículos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl"
            style={{ background: '#f8fafc', border: '1px solid #e2e8f0', color: '#1A3A52', outline: 'none' }}
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredPosts.map(post => (
          <div key={post.id} className="p-5 rounded-xl flex items-center justify-between" style={{ background: 'white', border: '1px solid #e2e8f0' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(34,197,94,0.1)' }}>
                <FileText className="w-6 h-6" style={{ color: '#22c55e' }} />
              </div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: '#1A3A52' }}>{post.title}</h3>
                <div className="flex items-center gap-4 text-xs" style={{ color: '#94a3b8' }}>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                  <span className="px-2 py-0.5 rounded-full" style={{ background: 'rgba(135,206,235,0.2)', color: '#1A3A52' }}>{post.category}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`flex items-center gap-1 text-xs font-medium ${post.status === 'published' ? 'text-green-500' : 'text-amber-500'}`}>
                {post.status === 'published' ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                {post.status === 'published' ? 'Publicado' : 'Borrador'}
              </span>
              <div className="flex gap-1">
                <Link href={`/blog/${post.slug}`} target="_blank" className="p-2 rounded-lg hover:bg-gray-100"><Eye className="w-4 h-4" style={{ color: '#64748b' }} /></Link>
                <Link href={`/admin/blog/${post.id}`} className="p-2 rounded-lg hover:bg-gray-100"><Edit className="w-4 h-4" style={{ color: '#64748b' }} /></Link>
                <button onClick={() => deletePost(post.id)} className="p-2 rounded-lg hover:bg-red-50"><Trash2 className="w-4 h-4 text-red-500" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

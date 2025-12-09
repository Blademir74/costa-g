'use client'

import { useState } from 'react'

const postsData = [
  { id: 1, title: 'Importancia de la Construcción Sustentable', category: 'Sustentabilidad', status: 'published', date: '2024-12-01' },
  { id: 2, title: 'Rehabilitación de Puentes Vehiculares', category: 'Proyectos', status: 'published', date: '2024-11-28' },
  { id: 3, title: 'Caminos Artesanales en Guerrero', category: 'Comunidad', status: 'published', date: '2024-11-25' },
  { id: 4, title: 'Materiales de Construcción Ecológicos', category: 'Guías', status: 'draft', date: '2024-11-20' },
]

export default function BlogAdminPage() {
  const [posts, setPosts] = useState(postsData)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Blog</h1>
          <p className="text-sm text-gray-500">Gestiona los artículos</p>
        </div>
        <button className="px-4 py-2.5 rounded-xl font-semibold text-white bg-amber-500 hover:bg-amber-600">
          + Nuevo Artículo
        </button>
      </div>

      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="p-5 rounded-xl flex items-center justify-between bg-white border border-gray-200">
            <div>
              <h3 className="font-semibold text-slate-800">{post.title}</h3>
              <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                <span>{post.date}</span>
                <span className="px-2 py-0.5 bg-sky-100 text-slate-700 rounded-full">{post.category}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 text-xs rounded-full ${post.status === 'published' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                {post.status === 'published' ? 'Publicado' : 'Borrador'}
              </span>
              <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg">Editar</button>
              <button className="px-3 py-1 text-sm bg-red-100 hover:bg-red-200 text-red-600 rounded-lg">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

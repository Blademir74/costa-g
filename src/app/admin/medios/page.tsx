'use client'

import { useState } from 'react'
import { Upload, Search, Grid, List, Trash2, Download, Image, FileText, Film, X, Check, FolderOpen } from 'lucide-react'

const mediaData = [
  { id: '1', name: 'puente-naranjo-1.jpg', type: 'image', size: '2.4 MB', folder: 'proyectos', date: '2024-12-01' },
  { id: '2', name: 'puente-naranjo-2.jpg', type: 'image', size: '1.8 MB', folder: 'proyectos', date: '2024-12-01' },
  { id: '3', name: 'camino-vista-hermosa.jpg', type: 'image', size: '3.1 MB', folder: 'proyectos', date: '2024-11-28' },
  { id: '4', name: 'construccion-sustentable.jpg', type: 'image', size: '1.2 MB', folder: 'blog', date: '2024-11-25' },
  { id: '5', name: 'logo-costa-g.png', type: 'image', size: '156 KB', folder: 'general', date: '2024-11-20' },
  { id: '6', name: 'hero-background.jpg', type: 'image', size: '4.5 MB', folder: 'general', date: '2024-11-15' },
]

const folders = ['Todos', 'proyectos', 'blog', 'servicios', 'general']

export default function MediaPage() {
  const [media, setMedia] = useState(mediaData)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedFolder, setSelectedFolder] = useState('Todos')
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [uploading, setUploading] = useState(false)

  const filteredMedia = media.filter(m => 
    selectedFolder === 'Todos' || m.folder === selectedFolder
  )

  const toggleSelect = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const deleteSelected = () => {
    if (confirm(`¿Eliminar ${selectedItems.length} archivo(s)?`)) {
      setMedia(media.filter(m => !selectedItems.includes(m.id)))
      setSelectedItems([])
    }
  }

  const handleUpload = () => {
    setUploading(true)
    setTimeout(() => {
      alert('En producción, aquí se subirían los archivos a Cloudinary')
      setUploading(false)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black" style={{ color: '#1A3A52' }}>Medios</h1>
          <p className="text-sm" style={{ color: '#64748b' }}>Gestiona las imágenes y archivos</p>
        </div>
        <button 
          onClick={handleUpload}
          disabled={uploading}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white disabled:opacity-50" 
          style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)' }}
        >
          <Upload className="w-5 h-5" />
          {uploading ? 'Subiendo...' : 'Subir Archivos'}
        </button>
      </div>

      {/* Barra de herramientas */}
      <div className="p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center justify-between" style={{ background: 'white', border: '1px solid #e2e8f0' }}>
        <div className="flex gap-2 flex-wrap">
          {folders.map(folder => (
            <button
              key={folder}
              onClick={() => setSelectedFolder(folder)}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
              style={{
                background: selectedFolder === folder ? '#1A3A52' : '#f8fafc',
                color: selectedFolder === folder ? 'white' : '#64748b',
              }}
            >
              {folder === 'Todos' ? folder : <><FolderOpen className="w-4 h-4 inline mr-1" />{folder}</>}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {selectedItems.length > 0 && (
            <button onClick={deleteSelected} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium bg-red-50 text-red-500">
              <Trash2 className="w-4 h-4" />
              Eliminar ({selectedItems.length})
            </button>
          )}
          <div className="flex rounded-lg overflow-hidden" style={{ border: '1px solid #e2e8f0' }}>
            <button onClick={() => setViewMode('grid')} className="p-2" style={{ background: viewMode === 'grid' ? '#1A3A52' : 'white' }}>
              <Grid className="w-4 h-4" style={{ color: viewMode === 'grid' ? 'white' : '#64748b' }} />
            </button>
            <button onClick={() => setViewMode('list')} className="p-2" style={{ background: viewMode === 'list' ? '#1A3A52' : 'white' }}>
              <List className="w-4 h-4" style={{ color: viewMode === 'list' ? 'white' : '#64748b' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Zona de drop */}
      <div 
        className="border-2 border-dashed rounded-xl p-8 text-center"
        style={{ borderColor: '#e2e8f0', background: '#fafafa' }}
      >
        <Upload className="w-10 h-10 mx-auto mb-3" style={{ color: '#94a3b8' }} />
        <p className="font-semibold mb-1" style={{ color: '#1A3A52' }}>Arrastra archivos aquí</p>
        <p className="text-sm" style={{ color: '#94a3b8' }}>o haz clic en "Subir Archivos"</p>
      </div>

      {/* Grid/List de archivos */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredMedia.map(item => (
            <div 
              key={item.id}
              onClick={() => toggleSelect(item.id)}
              className={`relative rounded-xl overflow-hidden cursor-pointer group ${selectedItems.includes(item.id) ? 'ring-2 ring-[#D4AF37]' : ''}`}
              style={{ background: 'white', border: '1px solid #e2e8f0' }}
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <Image className="w-12 h-12" style={{ color: '#94a3b8' }} />
              </div>
              <div className="p-3">
                <p className="text-sm font-medium truncate" style={{ color: '#1A3A52' }}>{item.name}</p>
                <p className="text-xs" style={{ color: '#94a3b8' }}>{item.size}</p>
              </div>
              {selectedItems.includes(item.id) && (
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#D4AF37' }}>
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl overflow-hidden" style={{ background: 'white', border: '1px solid #e2e8f0' }}>
          <table className="w-full">
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                <th className="w-12 px-4 py-3"></th>
                <th className="text-left px-4 py-3 text-sm font-semibold" style={{ color: '#64748b' }}>Nombre</th>
                <th className="text-left px-4 py-3 text-sm font-semibold" style={{ color: '#64748b' }}>Carpeta</th>
                <th className="text-left px-4 py-3 text-sm font-semibold" style={{ color: '#64748b' }}>Tamaño</th>
                <th className="text-left px-4 py-3 text-sm font-semibold" style={{ color: '#64748b' }}>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {filteredMedia.map((item, i) => (
                <tr key={item.id} onClick={() => toggleSelect(item.id)} className="cursor-pointer hover:bg-gray-50" style={{ borderBottom: i < filteredMedia.length - 1 ? '1px solid #e2e8f0' : 'none' }}>
                  <td className="px-4 py-3">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${selectedItems.includes(item.id) ? 'bg-[#D4AF37] border-[#D4AF37]' : 'border-gray-300'}`}>
                      {selectedItems.includes(item.id) && <Check className="w-3 h-3 text-white" />}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Image className="w-5 h-5" style={{ color: '#94a3b8' }} />
                      <span className="font-medium" style={{ color: '#1A3A52' }}>{item.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm" style={{ color: '#64748b' }}>{item.folder}</td>
                  <td className="px-4 py-3 text-sm" style={{ color: '#64748b' }}>{item.size}</td>
                  <td className="px-4 py-3 text-sm" style={{ color: '#64748b' }}>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

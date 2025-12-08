'use client'

import { useState } from 'react'
import { Upload, Grid, List, Trash2, Image, Check, FolderOpen } from 'lucide-react'

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

  const filteredMedia = media.filter(m => selectedFolder === 'Todos' || m.folder === selectedFolder)

  const toggleSelect = (id: string) => {
    setSelectedItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
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
          <h1 className="text-2xl font-black text-[#1A3A52]">Medios</h1>
          <p className="text-sm text-gray-500">Gestiona las imágenes y archivos</p>
        </div>
        <button onClick={handleUpload} disabled={uploading} className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white disabled:opacity-50 bg-gradient-to-r from-[#D4AF37] to-[#B8860B]">
          <Upload className="w-5 h-5" />
          {uploading ? 'Subiendo...' : 'Subir Archivos'}
        </button>
      </div>

      <div className="p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center justify-between bg-white border border-gray-200">
        <div className="flex gap-2 flex-wrap">
          {folders.map(folder => (
            <button key={folder} onClick={() => setSelectedFolder(folder)} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${selectedFolder === folder ? 'bg-[#1A3A52] text-white' : 'bg-gray-50 text-gray-500'}`}>
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
          <div className="flex rounded-lg overflow-hidden border border-gray-200">
            <button onClick={() => setViewMode('grid')} className={`p-2 ${viewMode === 'grid' ? 'bg-[#1A3A52]' : 'bg-white'}`}>
              <Grid className={`w-4 h-4 ${viewMode === 'grid' ? 'text-white' : 'text-gray-500'}`} />
            </button>
            <button onClick={() => setViewMode('list')} className={`p-2 ${viewMode === 'list' ? 'bg-[#1A3A52]' : 'bg-white'}`}>
              <List className={`w-4 h-4 ${viewMode === 'list' ? 'text-white' : 'text-gray-500'}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="border-2 border-dashed rounded-xl p-8 text-center border-gray-200 bg-gray-50">
        <Upload className="w-10 h-10 mx-auto mb-3 text-gray-400" />
        <p className="font-semibold mb-1 text-[#1A3A52]">Arrastra archivos aquí</p>
        <p className="text-sm text-gray-400">o haz clic en "Subir Archivos"</p>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredMedia.map(item => (
            <div key={item.id} onClick={() => toggleSelect(item.id)} className={`relative rounded-xl overflow-hidden cursor-pointer group bg-white border border-gray-200 ${selectedItems.includes(item.id) ? 'ring-2 ring-amber-400' : ''}`}>
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <Image className="w-12 h-12 text-gray-400" />
              </div>
              <div className="p-3">
                <p className="text-sm font-medium truncate text-[#1A3A52]">{item.name}</p>
                <p className="text-xs text-gray-400">{item.size}</p>
              </div>
              {selectedItems.includes(item.id) && (
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center bg-amber-500">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl overflow-hidden bg-white border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="w-12 px-4 py-3"></th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-500">Nombre</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-500">Carpeta</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-500">Tamaño</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-500">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {filteredMedia.map((item, i) => (
                <tr key={item.id} onClick={() => toggleSelect(item.id)} className={`cursor-pointer hover:bg-gray-50 ${i < filteredMedia.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <td className="px-4 py-3">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${selectedItems.includes(item.id) ? 'bg-amber-500 border-amber-500' : 'border-gray-300'}`}>
                      {selectedItems.includes(item.id) && <Check className="w-3 h-3 text-white" />}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Image className="w-5 h-5 text-gray-400" />
                      <span className="font-medium text-[#1A3A52]">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">{item.folder}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{item.size}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

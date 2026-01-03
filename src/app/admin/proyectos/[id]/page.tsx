'use client'

/**
 * DASHBOARD ADMIN - EDITAR PROYECTO
 * 
 * Formulario completo con:
 * - Campos del currículum
 * - Subida de imágenes a Supabase Storage
 * - Edición en tiempo real
 */

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getProyecto, updateProyecto, uploadImage, getSession, type Proyecto } from '@/lib/supabase'

const categorias = ['Puentes', 'Carreteras', 'Caminos', 'Pavimentación', 'Educativa', 'Muros']

export default function EditProyectoPage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  const [proyecto, setProyecto] = useState<Proyecto | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  // Form state
  const [formData, setFormData] = useState({
    titulo: '',
    titulo_corto: '',
    descripcion: '',
    descripcion_larga: '',
    ubicacion: '',
    municipio: '',
    año: new Date().getFullYear(),
    categoria: 'Puentes',
    cliente: '',
    dependencia: '',
    contrato: '',
    imagen_principal: '',
    destacado: false,
  })

  useEffect(() => {
    checkAuthAndLoadData()
  }, [id])

  const checkAuthAndLoadData = async () => {
    const { session } = await getSession()
    
    if (!session) {
      router.push('/admin')
      return
    }

    if (id !== 'nuevo') {
      const { data } = await getProyecto(id)
      if (data) {
        setProyecto(data)
        setFormData({
          titulo: data.titulo || '',
          titulo_corto: data.titulo_corto || '',
          descripcion: data.descripcion || '',
          descripcion_larga: data.descripcion_larga || '',
          ubicacion: data.ubicacion || '',
          municipio: data.municipio || '',
          año: data.año || new Date().getFullYear(),
          categoria: data.categoria || 'Puentes',
          cliente: data.cliente || '',
          dependencia: data.dependencia || '',
          contrato: data.contrato || '',
          imagen_principal: data.imagen_principal || '',
          destacado: data.destacado || false,
        })
      }
    }
    setLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setMessage({ type: '', text: '' })

    const { url, error } = await uploadImage(file)

    if (error) {
      setMessage({ type: 'error', text: 'Error al subir la imagen' })
    } else if (url) {
      setFormData(prev => ({ ...prev, imagen_principal: url }))
      setMessage({ type: 'success', text: 'Imagen subida correctamente' })
    }

    setUploading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMessage({ type: '', text: '' })

    const { data, error } = await updateProyecto(id, {
      ...formData,
      año: Number(formData.año)
    })

    if (error) {
      setMessage({ type: 'error', text: 'Error al guardar los cambios' })
    } else {
      setMessage({ type: 'success', text: 'Cambios guardados correctamente' })
      setProyecto(data)
    }

    setSaving(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <svg className="animate-spin w-12 h-12 text-navy-500" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-navy-500 text-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin/proyectos" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <span className="font-semibold">
              {id === 'nuevo' ? 'Nuevo Proyecto' : 'Editar Proyecto'}
            </span>
          </div>
        </div>
      </header>

      {/* Form */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* Message */}
        {message.text && (
          <div className={`mb-6 p-4 rounded-xl ${
            message.type === 'error' ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-green-50 text-green-600 border border-green-200'
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Image Section */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="font-display font-bold text-navy-500 mb-4">Imagen Principal</h2>
            
            <div className="flex flex-col md:flex-row gap-6">
              {/* Preview */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video bg-slate-100 rounded-xl overflow-hidden">
                  {formData.imagen_principal ? (
                    <Image
                      src={formData.imagen_principal}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-charcoal-300">
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Upload */}
              <div className="w-full md:w-1/2 space-y-4">
                <label className="block">
                  <span className="text-sm font-medium text-charcoal-600 mb-2 block">
                    Subir nueva imagen
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploading}
                    className="block w-full text-sm text-charcoal-500
                             file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0
                             file:text-sm file:font-semibold file:bg-gold-500 file:text-navy-500
                             hover:file:bg-gold-400 file:cursor-pointer"
                  />
                </label>
                
                {uploading && (
                  <div className="flex items-center gap-2 text-charcoal-500 text-sm">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Subiendo imagen...
                  </div>
                )}

                <div>
                  <span className="text-sm font-medium text-charcoal-600 mb-2 block">
                    O pegar URL
                  </span>
                  <input
                    type="url"
                    name="imagen_principal"
                    value={formData.imagen_principal}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="admin-input"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Basic Info */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="font-display font-bold text-navy-500 mb-4">Información Básica</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-charcoal-600 mb-2">
                  Título completo *
                </label>
                <input
                  type="text"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleChange}
                  required
                  placeholder="Rehabilitación de Puente Vehicular El Naranjo"
                  className="admin-input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal-600 mb-2">
                  Título corto
                </label>
                <input
                  type="text"
                  name="titulo_corto"
                  value={formData.titulo_corto}
                  onChange={handleChange}
                  placeholder="Puente El Naranjo"
                  className="admin-input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal-600 mb-2">
                  Categoría *
                </label>
                <select
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  required
                  className="admin-input"
                >
                  {categorias.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal-600 mb-2">
                  Año *
                </label>
                <input
                  type="number"
                  name="año"
                  value={formData.año}
                  onChange={handleChange}
                  required
                  min="2018"
                  max="2030"
                  className="admin-input"
                />
              </div>

              <div>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="destacado"
                    checked={formData.destacado}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-charcoal-300 text-gold-500 focus:ring-gold-500"
                  />
                  <span className="text-sm font-medium text-charcoal-600">
                    Proyecto destacado (aparece en Home)
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="font-display font-bold text-navy-500 mb-4">Ubicación</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-charcoal-600 mb-2">
                  Ubicación específica *
                </label>
                <input
                  type="text"
                  name="ubicacion"
                  value={formData.ubicacion}
                  onChange={handleChange}
                  required
                  placeholder="Km 45 Carretera Nacional"
                  className="admin-input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal-600 mb-2">
                  Municipio *
                </label>
                <input
                  type="text"
                  name="municipio"
                  value={formData.municipio}
                  onChange={handleChange}
                  required
                  placeholder="Coahuayutla, Guerrero"
                  className="admin-input"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="font-display font-bold text-navy-500 mb-4">Descripción Técnica</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-charcoal-600 mb-2">
                  Descripción breve *
                </label>
                <textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Descripción técnica del proyecto..."
                  className="admin-input resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal-600 mb-2">
                  Descripción larga (opcional)
                </label>
                <textarea
                  name="descripcion_larga"
                  value={formData.descripcion_larga}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Detalles adicionales, especificaciones técnicas, etc."
                  className="admin-input resize-none"
                />
              </div>
            </div>
          </div>

          {/* Client Info */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="font-display font-bold text-navy-500 mb-4">Información del Cliente</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-charcoal-600 mb-2">
                  Cliente
                </label>
                <input
                  type="text"
                  name="cliente"
                  value={formData.cliente}
                  onChange={handleChange}
                  placeholder="H. Ayuntamiento de..."
                  className="admin-input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal-600 mb-2">
                  Dependencia
                </label>
                <input
                  type="text"
                  name="dependencia"
                  value={formData.dependencia}
                  onChange={handleChange}
                  placeholder="SDUOPOT"
                  className="admin-input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal-600 mb-2">
                  No. de Contrato
                </label>
                <input
                  type="text"
                  name="contrato"
                  value={formData.contrato}
                  onChange={handleChange}
                  placeholder="CONT-2024-001"
                  className="admin-input"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Link
              href="/admin/proyectos"
              className="px-6 py-3 border border-charcoal-200 text-charcoal-600 font-semibold 
                       rounded-xl text-center hover:bg-slate-50 transition-colors"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="px-8 py-3 bg-gold-500 text-navy-500 font-semibold rounded-xl
                       hover:bg-gold-400 transition-colors disabled:opacity-50"
            >
              {saving ? 'Guardando...' : 'Guardar Cambios'}
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { useState } from 'react'

const materiales = [
  {
    id: 1,
    nombre: 'Cemento Portland CPO 40',
    categoria: 'Cementos',
    descripcion: 'Cemento de alta resistencia, ideal para concreto estructural y obras que requieren alta durabilidad.',
    presentacion: 'Bulto de 50 kg',
    precio: 'Cotizar',
    disponible: true,
  },
  {
    id: 2,
    nombre: 'Cemento Blanco',
    categoria: 'Cementos',
    descripcion: 'Cemento blanco para acabados finos, pisos y elementos decorativos.',
    presentacion: 'Bulto de 40 kg',
    precio: 'Cotizar',
    disponible: true,
  },
  {
    id: 3,
    nombre: 'Varilla Corrugada #3 (3/8")',
    categoria: 'Aceros',
    descripcion: 'Acero de refuerzo grado 42, para armado de estructuras de concreto.',
    presentacion: 'Pieza de 12 m',
    precio: 'Cotizar',
    disponible: true,
  },
  {
    id: 4,
    nombre: 'Varilla Corrugada #4 (1/2")',
    categoria: 'Aceros',
    descripcion: 'Acero de refuerzo grado 42, para columnas, trabes y cimentaciones.',
    presentacion: 'Pieza de 12 m',
    precio: 'Cotizar',
    disponible: true,
  },
  {
    id: 5,
    nombre: 'Varilla Corrugada #5 (5/8")',
    categoria: 'Aceros',
    descripcion: 'Acero de refuerzo grado 60, para estructuras de alta resistencia.',
    presentacion: 'Pieza de 12 m',
    precio: 'Cotizar',
    disponible: true,
  },
  {
    id: 6,
    nombre: 'Block de Concreto 15x20x40',
    categoria: 'Blocks',
    descripcion: 'Block hueco de concreto para muros estructurales y divisorios.',
    presentacion: 'Pieza',
    precio: 'Cotizar',
    disponible: true,
  },
  {
    id: 7,
    nombre: 'Block de Concreto 20x20x40',
    categoria: 'Blocks',
    descripcion: 'Block de concreto alta resistencia para muros de carga.',
    presentacion: 'Pieza',
    precio: 'Cotizar',
    disponible: true,
  },
  {
    id: 8,
    nombre: 'Tabique Rojo Recocido',
    categoria: 'Blocks',
    descripcion: 'Tabique de barro tradicional para muros divisorios.',
    presentacion: 'Millar',
    precio: 'Cotizar',
    disponible: true,
  },
  {
    id: 9,
    nombre: 'Arena de Río Cribada',
    categoria: 'Agregados',
    descripcion: 'Arena fina lavada para mezclas de concreto y morteros.',
    presentacion: 'M³',
    precio: 'Cotizar',
    disponible: true,
  },
  {
    id: 10,
    nombre: 'Grava 3/4"',
    categoria: 'Agregados',
    descripcion: 'Grava triturada para concreto estructural.',
    presentacion: 'M³',
    precio: 'Cotizar',
    disponible: true,
  },
  {
    id: 11,
    nombre: 'Tubo PVC Hidráulico 4"',
    categoria: 'Plomería',
    descripcion: 'Tubo de PVC para instalaciones hidráulicas y drenaje.',
    presentacion: 'Tramo de 6 m',
    precio: 'Cotizar',
    disponible: true,
  },
  {
    id: 12,
    nombre: 'Tubo HDPE 2"',
    categoria: 'Plomería',
    descripcion: 'Tubería de polietileno de alta densidad para agua potable.',
    presentacion: 'Rollo de 100 m',
    precio: 'Cotizar',
    disponible: true,
  },
  {
    id: 13,
    nombre: 'Cable THW Cal. 12',
    categoria: 'Eléctricos',
    descripcion: 'Cable de cobre para instalaciones eléctricas residenciales.',
    presentacion: 'Rollo de 100 m',
    precio: 'Cotizar',
    disponible: true,
  },
  {
    id: 14,
    nombre: 'Centro de Carga 8 Circuitos',
    categoria: 'Eléctricos',
    descripcion: 'Centro de carga con interruptor principal para instalaciones residenciales.',
    presentacion: 'Pieza',
    precio: 'Cotizar',
    disponible: true,
  },
  {
    id: 15,
    nombre: 'Impermeabilizante Acrílico 5 Años',
    categoria: 'Acabados',
    descripcion: 'Impermeabilizante acrílico fibratado para techos y azoteas.',
    presentacion: 'Cubeta de 19 L',
    precio: 'Cotizar',
    disponible: true,
  },
  {
    id: 16,
    nombre: 'Pintura Vinílica Premium',
    categoria: 'Acabados',
    descripcion: 'Pintura vinílica lavable para interiores y exteriores.',
    presentacion: 'Cubeta de 19 L',
    precio: 'Cotizar',
    disponible: true,
  },
]

const categorias = ['Todos', 'Cementos', 'Aceros', 'Blocks', 'Agregados', 'Plomería', 'Eléctricos', 'Acabados']

export default function MaterialesPage() {
  const [filtro, setFiltro] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')

  const materialesFiltrados = materiales.filter(m => {
    const matchCategoria = filtro === 'Todos' || m.categoria === filtro
    const matchBusqueda = m.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                          m.descripcion.toLowerCase().includes(busqueda.toLowerCase())
    return matchCategoria && matchBusqueda
  })

  return (
    <div className="min-h-screen bg-costa-light">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-costa-secondary/95 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-costa-gold flex items-center justify-center">
              <span className="text-costa-secondary font-black text-xl">CG</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-white text-xl">COSTA G</span>
              <span className="block text-[10px] text-costa-gold">Constructora & Inmobiliaria</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white/70 hover:text-white text-sm font-medium">INICIO</Link>
            <Link href="/servicios" className="text-white/70 hover:text-white text-sm font-medium">SERVICIOS</Link>
            <Link href="/proyectos" className="text-white/70 hover:text-white text-sm font-medium">PROYECTOS</Link>
            <Link href="/materiales" className="text-white text-sm font-medium">MATERIALES</Link>
            <Link href="/contacto" className="text-white/70 hover:text-white text-sm font-medium">CONTACTO</Link>
          </div>
          <Link href="/contacto">
            <button className="bg-costa-gold text-costa-secondary px-6 py-2.5 rounded font-bold text-sm">
              COTIZAR
            </button>
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-16 bg-costa-secondary">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-costa-gold/20 text-costa-gold text-sm font-semibold mb-6">
            Distribuidora de Materiales
          </span>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Catálogo de <span className="text-costa-gold">Materiales</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mb-8">
            Materiales de construcción de primera calidad. Venta al por mayor y menor con precios competitivos y entrega directa en obra.
          </p>
          
          {/* Barra de búsqueda */}
          <div className="max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar materiales..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full px-6 py-4 pr-12 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-costa-gold"
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filtros */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categorias.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFiltro(cat)}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                    filtro === cat
                      ? 'bg-costa-gold text-costa-secondary shadow-lg'
                      : 'bg-white border-2 border-costa-secondary/20 text-costa-secondary hover:border-costa-gold hover:text-costa-gold'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Contador de resultados */}
          <p className="text-center text-gray-500 mb-8">
            Mostrando <strong className="text-costa-secondary">{materialesFiltrados.length}</strong> materiales
          </p>

          {/* Grid de Materiales */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {materialesFiltrados.map(material => (
              <div key={material.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                {/* Imagen placeholder con icono */}
                <div className="h-40 bg-gradient-to-br from-costa-secondary to-costa-dark flex items-center justify-center relative">
                  <span className="text-6xl opacity-30">
                    {material.categoria === 'Cementos' && '🏗️'}
                    {material.categoria === 'Aceros' && '🔩'}
                    {material.categoria === 'Blocks' && '🧱'}
                    {material.categoria === 'Agregados' && '⛰️'}
                    {material.categoria === 'Plomería' && '🔧'}
                    {material.categoria === 'Eléctricos' && '⚡'}
                    {material.categoria === 'Acabados' && '🎨'}
                  </span>
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-costa-gold text-costa-secondary text-xs font-bold">
                    {material.categoria}
                  </span>
                  {material.disponible && (
                    <span className="absolute top-3 right-3 px-2 py-1 rounded bg-green-500 text-white text-xs font-bold">
                      Disponible
                    </span>
                  )}
                </div>

                {/* Contenido */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-costa-secondary mb-2 group-hover:text-costa-gold transition-colors">
                    {material.nombre}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {material.descripcion}
                  </p>
                  
                  {/* Presentación */}
                  <div className="flex items-center justify-between py-3 border-t border-gray-100 mb-4">
                    <span className="text-xs text-gray-500">Presentación</span>
                    <span className="font-semibold text-costa-secondary text-sm">{material.presentacion}</span>
                  </div>

                  {/* Botón */}
                  <a 
                    href={`https://wa.me/527472735934?text=Hola,%20me%20interesa%20cotizar%20${encodeURIComponent(material.nombre)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-costa-secondary text-white text-center py-3 rounded font-bold hover:bg-costa-dark transition-colors"
                  >
                    Solicitar Cotización
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Sin resultados */}
          {materialesFiltrados.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No se encontraron materiales con esos criterios.</p>
              <button 
                onClick={() => { setFiltro('Todos'); setBusqueda(''); }}
                className="mt-4 text-costa-gold font-semibold hover:underline"
              >
                Ver todos los materiales
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-costa-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-costa-secondary mb-4">
            ¿Necesitas cotización por volumen?
          </h2>
          <p className="text-costa-secondary/80 mb-8">
            Ofrecemos precios especiales para compras al por mayor. Contáctanos para una cotización personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <button className="bg-costa-secondary text-white px-8 py-4 rounded font-bold hover:bg-costa-dark transition-all">
                SOLICITAR COTIZACIÓN
              </button>
            </Link>
            <a href="tel:+527472735934">
              <button className="bg-white text-costa-secondary px-8 py-4 rounded font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                📞 747 273 5934
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer simple */}
      <footer className="bg-costa-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/50">© {new Date().getFullYear()} COSTA G - Constructora e Inmobiliaria. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp */}
      <a href="https://wa.me/527472735934?text=Hola,%20me%20interesa%20cotizar%20materiales" target="_blank" rel="noopener noreferrer" className="whatsapp-btn animate-pulse-glow">
        <svg viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  )
}

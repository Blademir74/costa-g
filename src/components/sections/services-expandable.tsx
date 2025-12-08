'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Building2,
  Hammer,
  Package,
  PenTool,
  FileCheck,
  ArrowRight,
  Check,
  ChevronRight,
} from 'lucide-react'

// ========================================
// TIPOS
// ========================================

interface ServiceDetail {
  id: string
  title: string
  slug: string
  icon: string
  shortDescription: string
  fullDescription: string
  features: string[]
  benefits: string[]
  image: string
}

interface ServicesExpandableProps {
  services?: ServiceDetail[]
  title?: string
  subtitle?: string
  className?: string
}

// ========================================
// ICONOS MAP
// ========================================

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Hammer,
  Package,
  PenTool,
  FileCheck,
}

// ========================================
// SERVICIOS DEFAULT
// ========================================

const defaultServices: ServiceDetail[] = [
  {
    id: 'construccion',
    title: 'Construcción',
    slug: 'construccion',
    icon: 'Building2',
    shortDescription: 'Construcción de obra civil, puentes, caminos y edificaciones con enfoque Bio-Sustentable.',
    fullDescription: 'Somos especialistas en construcción de obra civil con más de 243 puentes conservados y múltiples proyectos de infraestructura en Guerrero y Estado de México. Utilizamos técnicas y materiales que minimizan el impacto ambiental.',
    features: [
      'Construcción de puentes vehiculares',
      'Edificaciones educativas (aulas, escuelas)',
      'Canchas deportivas con techumbre',
      'Pavimentación con concreto hidráulico',
      'Caminos artesanales',
      'Muros de contención',
    ],
    benefits: [
      'Huella de carbono reducida',
      'Materiales de primera calidad',
      'Cumplimiento en tiempo y costo',
      'Personal técnico certificado',
    ],
    image: '/images/services/construccion.jpg',
  },
  {
    id: 'remodelacion',
    title: 'Remodelación',
    slug: 'remodelacion',
    icon: 'Hammer',
    shortDescription: 'Renovación y rehabilitación de espacios existentes manteniendo la integridad estructural.',
    fullDescription: 'Transformamos y renovamos espacios existentes respetando la estructura original y mejorando la funcionalidad. Especializados en rehabilitación de puentes vehiculares y caminos.',
    features: [
      'Rehabilitación estructural de puentes',
      'Renovación de espacios educativos',
      'Ampliaciones residenciales',
      'Restauración de infraestructura',
      'Rehabilitación de carreteras',
      'Mejoramiento de caminos rurales',
    ],
    benefits: [
      'Evaluación estructural completa',
      'Reforzamiento certificado',
      'Mínima interrupción de uso',
      'Garantía de calidad',
    ],
    image: '/images/services/remodelacion.jpg',
  },
  {
    id: 'materiales',
    title: 'Venta de Materiales',
    slug: 'venta-materiales',
    icon: 'Package',
    shortDescription: 'Suministro de materiales de construcción de primera calidad para todo tipo de obra.',
    fullDescription: 'Ofrecemos materiales de construcción de alta calidad con entregas puntuales. Trabajamos con los mejores proveedores para garantizar productos que cumplan con las normas más exigentes.',
    features: [
      'Cemento y concreto premezclado',
      'Acero y varilla',
      'Agregados pétreos',
      'Block y tabique',
      'Materiales para acabados',
      'Impermeabilizantes ecológicos',
    ],
    benefits: [
      'Precios competitivos',
      'Entrega a obra',
      'Materiales certificados',
      'Asesoría técnica incluida',
    ],
    image: '/images/services/materiales.jpg',
  },
  {
    id: 'diseno',
    title: 'Diseño Arquitectónico',
    slug: 'diseno',
    icon: 'PenTool',
    shortDescription: 'Diseño de proyectos arquitectónicos con enfoque sustentable y funcional.',
    fullDescription: 'Creamos diseños arquitectónicos que combinan estética, funcionalidad y sustentabilidad. Nuestro equipo desarrolla proyectos personalizados adaptados a las necesidades de cada cliente.',
    features: [
      'Diseño arquitectónico completo',
      'Planos estructurales',
      'Renders 3D fotorrealistas',
      'Diseño sustentable',
      'Trámite de permisos',
      'Asesoría en normatividad',
    ],
    benefits: [
      'Diseño personalizado',
      'Enfoque Bio-Sustentable',
      'Visualización 3D',
      'Documentación completa',
    ],
    image: '/images/services/diseno.jpg',
  },
  {
    id: 'consultoria',
    title: 'Consultoría',
    slug: 'consultoria',
    icon: 'FileCheck',
    shortDescription: 'Asesoría técnica especializada en viabilidad, supervisión y auditorías de obra.',
    fullDescription: 'Brindamos servicios de consultoría integral para proyectos de construcción. Desde estudios de factibilidad hasta supervisión de obra, garantizamos el éxito de tu proyecto.',
    features: [
      'Estudios de viabilidad técnica',
      'Supervisión de obra',
      'Auditorías de calidad',
      'Peritajes estructurales',
      'Análisis de costos',
      'Gestión de proyectos',
    ],
    benefits: [
      'Experiencia comprobada',
      'Informes detallados',
      'Soporte continuo',
      'Toma de decisiones informada',
    ],
    image: '/images/services/consultoria.jpg',
  },
]

// ========================================
// COMPONENTE SERVICIOS INTERACTIVOS
// ========================================

export function ServicesExpandable({
  services = defaultServices,
  title = 'Nuestros Servicios',
  subtitle = 'Soluciones integrales de construcción con enfoque Bio-Sustentable',
}: ServicesExpandableProps) {
  const [activeService, setActiveService] = useState<string>(services[0]?.id || '')

  const currentService = services.find(s => s.id === activeService) || services[0]
  const IconComponent = currentService ? iconMap[currentService.icon] || Building2 : Building2

  return (
    <section 
      className="py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span 
            className="inline-block px-4 py-1.5 text-sm font-bold rounded-full mb-4"
            style={{ 
              background: 'linear-gradient(135deg, rgba(135,206,235,0.2) 0%, rgba(135,206,235,0.1) 100%)',
              color: '#1A3A52',
              border: '1px solid rgba(135,206,235,0.3)',
            }}
          >
            Servicios Profesionales
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-4"
            style={{ color: '#1A3A52' }}
          >
            {title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748b' }}>
            {subtitle}
          </p>
        </div>

        {/* Layout Principal */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Tabs de Servicios - Izquierda */}
          <div className="lg:col-span-4 space-y-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Building2
              const isActive = activeService === service.id

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className="w-full text-left p-4 rounded-xl transition-all duration-300"
                  style={{
                    background: isActive 
                      ? 'linear-gradient(135deg, #1A3A52 0%, #0f2439 100%)'
                      : 'white',
                    boxShadow: isActive 
                      ? '0 10px 40px rgba(26,58,82,0.3)'
                      : '0 2px 10px rgba(0,0,0,0.05)',
                    border: isActive ? 'none' : '1px solid #e2e8f0',
                    transform: isActive ? 'scale(1.02)' : 'scale(1)',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: isActive 
                          ? 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)'
                          : 'linear-gradient(135deg, rgba(135,206,235,0.2) 0%, rgba(135,206,235,0.1) 100%)',
                      }}
                    >
                      <Icon 
                        className="w-6 h-6" 
                        style={{ color: isActive ? '#ffffff' : '#1A3A52' }} 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 
                        className="font-bold text-base truncate"
                        style={{ color: isActive ? '#ffffff' : '#1A3A52' }}
                      >
                        {service.title}
                      </h3>
                      <p 
                        className="text-sm truncate"
                        style={{ color: isActive ? 'rgba(255,255,255,0.7)' : '#64748b' }}
                      >
                        {service.shortDescription.slice(0, 50)}...
                      </p>
                    </div>
                    <ChevronRight 
                      className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                      style={{ 
                        color: isActive ? '#D4AF37' : '#94a3b8',
                        transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                      }}
                    />
                  </div>
                </button>
              )
            })}
          </div>

          {/* Contenido del Servicio - Derecha */}
          <div className="lg:col-span-8">
            <div 
              className="rounded-2xl overflow-hidden h-full"
              style={{
                background: 'white',
                boxShadow: '0 20px 60px rgba(26,58,82,0.1)',
                border: '1px solid rgba(135,206,235,0.2)',
              }}
            >
              {/* Header del servicio */}
              <div 
                className="p-8 pb-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(135,206,235,0.1) 0%, rgba(135,206,235,0.05) 100%)',
                  borderBottom: '1px solid rgba(135,206,235,0.2)',
                }}
              >
                <div className="flex items-start gap-5">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
                      boxShadow: '0 8px 20px rgba(212,175,55,0.3)',
                    }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 
                      className="text-2xl md:text-3xl font-black mb-2"
                      style={{ color: '#1A3A52' }}
                    >
                      {currentService?.title}
                    </h3>
                    <p className="text-base" style={{ color: '#64748b' }}>
                      {currentService?.fullDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Features */}
                  <div>
                    <h4 
                      className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2"
                      style={{ color: '#1A3A52' }}
                    >
                      <span 
                        className="w-8 h-0.5 rounded-full"
                        style={{ background: 'linear-gradient(90deg, #D4AF37 0%, #B8860B 100%)' }}
                      />
                      Servicios Incluidos
                    </h4>
                    <ul className="space-y-3">
                      {currentService?.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm"
                          style={{ color: '#475569' }}
                        >
                          <Check 
                            className="w-5 h-5 flex-shrink-0 mt-0.5" 
                            style={{ color: '#22c55e' }} 
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 
                      className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2"
                      style={{ color: '#1A3A52' }}
                    >
                      <span 
                        className="w-8 h-0.5 rounded-full"
                        style={{ background: 'linear-gradient(90deg, #87CEEB 0%, #5BA4C9 100%)' }}
                      />
                      Beneficios
                    </h4>
                    <ul className="space-y-3">
                      {currentService?.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm"
                          style={{ color: '#475569' }}
                        >
                          <span 
                            className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                            style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)' }}
                          />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/servicios/${currentService?.slug}`} className="flex-1">
                    <button 
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 font-bold rounded-xl transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
                        color: '#ffffff',
                        boxShadow: '0 8px 25px rgba(212,175,55,0.3)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)'
                        e.currentTarget.style.boxShadow = '0 12px 35px rgba(212,175,55,0.4)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(212,175,55,0.3)'
                      }}
                    >
                      Ver más detalles
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                  <Link href="/contacto" className="flex-1">
                    <button 
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 font-bold rounded-xl transition-all duration-300"
                      style={{
                        background: 'transparent',
                        color: '#1A3A52',
                        border: '2px solid #1A3A52',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#1A3A52'
                        e.currentTarget.style.color = '#ffffff'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = '#1A3A52'
                      }}
                    >
                      Solicitar Cotización
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { type ServiceDetail, type ServicesExpandableProps }

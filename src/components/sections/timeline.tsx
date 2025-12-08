'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import {
  FileSearch,
  Ruler,
  HardHat,
  CheckCircle,
  Wrench,
  ClipboardCheck,
  Building2,
  Sparkles,
} from 'lucide-react'

// ========================================
// TIPOS
// ========================================

interface TimelinePhase {
  id: string
  number: string
  title: string
  description: string
  icon: string
  duration?: string
  details?: string[]
}

interface TimelineProps {
  phases?: TimelinePhase[]
  title?: string
  subtitle?: string
  className?: string
}

// ========================================
// ICONOS MAP
// ========================================

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileSearch,
  Ruler,
  HardHat,
  CheckCircle,
  Wrench,
  ClipboardCheck,
  Building2,
  Sparkles,
}

// ========================================
// FASES DE CONSTRUCCIÓN DEFAULT
// ========================================

const defaultPhases: TimelinePhase[] = [
  {
    id: 'fase-1',
    number: '01',
    title: 'Consultoría Inicial',
    description: 'Análisis de necesidades y estudio de viabilidad del proyecto.',
    icon: 'FileSearch',
    duration: '1-2 semanas',
    details: [
      'Reunión inicial con el cliente',
      'Análisis del terreno y ubicación',
      'Estudio de factibilidad técnica',
      'Presupuesto preliminar',
    ],
  },
  {
    id: 'fase-2',
    number: '02',
    title: 'Diseño y Planeación',
    description: 'Elaboración de planos, diseño arquitectónico y permisos.',
    icon: 'Ruler',
    duration: '2-4 semanas',
    details: [
      'Diseño arquitectónico',
      'Ingeniería estructural',
      'Trámite de permisos',
      'Cronograma de obra',
    ],
  },
  {
    id: 'fase-3',
    number: '03',
    title: 'Preparación del Sitio',
    description: 'Acondicionamiento del terreno y cimentación.',
    icon: 'HardHat',
    duration: '2-3 semanas',
    details: [
      'Limpieza y nivelación',
      'Trazo y excavación',
      'Cimentación',
      'Instalaciones subterráneas',
    ],
  },
  {
    id: 'fase-4',
    number: '04',
    title: 'Construcción',
    description: 'Ejecución de obra civil con materiales de primera calidad.',
    icon: 'Building2',
    duration: 'Variable',
    details: [
      'Estructura principal',
      'Muros y techumbres',
      'Instalaciones',
      'Control de calidad continuo',
    ],
  },
  {
    id: 'fase-5',
    number: '05',
    title: 'Acabados',
    description: 'Terminaciones, pintura y detalles finales.',
    icon: 'Sparkles',
    duration: '2-4 semanas',
    details: [
      'Acabados interiores',
      'Pintura y recubrimientos',
      'Carpintería y herrería',
      'Limpieza final',
    ],
  },
  {
    id: 'fase-6',
    number: '06',
    title: 'Entrega Final',
    description: 'Inspección final y entrega del proyecto terminado.',
    icon: 'CheckCircle',
    duration: '1 semana',
    details: [
      'Inspección de calidad',
      'Documentación técnica',
      'Capacitación de uso',
      'Garantías y soporte',
    ],
  },
]

// ========================================
// COMPONENTE TIMELINE
// ========================================

export function Timeline({
  phases = defaultPhases,
  title = 'Nuestro Proceso',
  subtitle = 'Metodología de trabajo comprobada para garantizar resultados excepcionales',
  className,
}: TimelineProps) {
  const [activePhase, setActivePhase] = useState<string | null>(null)

  return (
    <section className={cn('section bg-white', className)}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-secondary-700 text-sm font-medium rounded-full mb-4">
            Fases de Construcción
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-700 mb-4">
            {title.split(' ').map((word, i) => (
              <span key={i}>
                {word === 'Proceso' || word === 'Fases' ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                    {word}
                  </span>
                ) : (
                  word
                )}{' '}
              </span>
            ))}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200" />

          {/* Phases Grid */}
          <div className="grid grid-cols-6 gap-4">
            {phases.map((phase, index) => {
              const IconComponent = iconMap[phase.icon] || FileSearch
              const isActive = activePhase === phase.id

              return (
                <div
                  key={phase.id}
                  className="relative"
                  onMouseEnter={() => setActivePhase(phase.id)}
                  onMouseLeave={() => setActivePhase(null)}
                >
                  {/* Circle */}
                  <div className="flex justify-center mb-8">
                    <div
                      className={cn(
                        'w-12 h-12 rounded-full flex items-center justify-center',
                        'border-4 border-white shadow-lg',
                        'transition-all duration-300 cursor-pointer',
                        isActive
                          ? 'bg-accent-400 scale-110'
                          : 'bg-primary-300 hover:bg-primary-400'
                      )}
                    >
                      <IconComponent
                        className={cn(
                          'w-5 h-5 transition-colors',
                          isActive ? 'text-secondary-900' : 'text-secondary-700'
                        )}
                      />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={cn(
                      'text-center p-4 rounded-xl transition-all duration-300',
                      isActive ? 'bg-secondary-50 shadow-md' : ''
                    )}
                  >
                    <span className="text-xs font-bold text-accent-500 mb-1 block">
                      FASE {phase.number}
                    </span>
                    <h3 className="text-sm font-semibold text-secondary-700 mb-2 line-clamp-2">
                      {phase.title}
                    </h3>
                    <p
                      className={cn(
                        'text-xs text-neutral-500 transition-all duration-300',
                        isActive ? 'opacity-100' : 'opacity-0 h-0'
                      )}
                    >
                      {phase.duration}
                    </p>
                  </div>

                  {/* Expanded Details */}
                  {isActive && phase.details && (
                    <div
                      className={cn(
                        'absolute top-full left-1/2 -translate-x-1/2 z-20',
                        'w-64 p-4 mt-2 rounded-xl',
                        'bg-white shadow-xl border border-neutral-100',
                        'animate-fade-in-up'
                      )}
                    >
                      <p className="text-sm text-neutral-600 mb-3">
                        {phase.description}
                      </p>
                      <ul className="space-y-1">
                        {phase.details.map((detail, i) => (
                          <li
                            key={i}
                            className="text-xs text-neutral-500 flex items-center gap-2"
                          >
                            <span className="w-1 h-1 bg-accent-400 rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-3">
          {phases.map((phase) => {
            const IconComponent = iconMap[phase.icon] || FileSearch
            const isActive = activePhase === phase.id

            return (
              <div
                key={phase.id}
                className={cn(
                  'rounded-xl border transition-all duration-300',
                  isActive
                    ? 'border-primary-300 bg-primary-50'
                    : 'border-neutral-200 bg-white'
                )}
              >
                <button
                  onClick={() =>
                    setActivePhase(isActive ? null : phase.id)
                  }
                  className="w-full p-4 flex items-center gap-4 text-left"
                >
                  <div
                    className={cn(
                      'w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0',
                      'transition-colors duration-300',
                      isActive ? 'bg-accent-400' : 'bg-primary-200'
                    )}
                  >
                    <IconComponent
                      className={cn(
                        'w-5 h-5',
                        isActive ? 'text-secondary-900' : 'text-secondary-700'
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-accent-500 block">
                      FASE {phase.number}
                    </span>
                    <h3 className="font-semibold text-secondary-700">
                      {phase.title}
                    </h3>
                  </div>
                  <div
                    className={cn(
                      'w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center',
                      'transition-transform duration-300',
                      isActive && 'rotate-180'
                    )}
                  >
                    <svg
                      className="w-4 h-4 text-neutral-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Expanded Content */}
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  )}
                >
                  <div className="px-4 pb-4 pl-20">
                    <p className="text-sm text-neutral-600 mb-3">
                      {phase.description}
                    </p>
                    {phase.duration && (
                      <span className="inline-block px-2 py-1 bg-accent-100 text-accent-700 text-xs rounded-full mb-3">
                        Duración: {phase.duration}
                      </span>
                    )}
                    {phase.details && (
                      <ul className="space-y-2">
                        {phase.details.map((detail, i) => (
                          <li
                            key={i}
                            className="text-sm text-neutral-500 flex items-center gap-2"
                          >
                            <CheckCircle className="w-4 h-4 text-eco-500 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { type TimelinePhase, type TimelineProps }

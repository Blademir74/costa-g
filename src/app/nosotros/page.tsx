import { Metadata } from 'next'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { HeroPage } from '@/components/shared/hero-modern'
import { Button } from '@/components/ui'
import { CTASection, WhyUsSection } from '@/components/sections'
import { VALUES, TIMELINE, STATS } from '@/lib/constants'
import {
  Shield,
  Award,
  CheckCircle,
  Rocket,
  Leaf,
  Building2,
  Users,
  Target,
  Heart,
  ArrowRight,
} from 'lucide-react'

// ========================================
// METADATA
// ========================================

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce a Costa G - Empresa constructora Bio-Sustentable en Chilpancingo, Guerrero. Nuestra misión, visión, valores y trayectoria.',
}

// ========================================
// ICONOS MAP
// ========================================

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Award,
  CheckCircle,
  Rocket,
}

// ========================================
// PÁGINA NOSOTROS
// ========================================

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <HeroPage
        title="Sobre Nosotros"
        description="Somos una empresa joven conformada por un equipo de profesionales enfocados en las necesidades de nuestros clientes y en la calidad de nuestros servicios."
        breadcrumbs={[{ label: 'Nosotros', href: '/nosotros' }]}
        badge="Desde 2018"
      />

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-eco-100 text-eco-700 text-sm font-medium rounded-full mb-4">
                🌱 Constructora Bio-Sustentable
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-700 mb-6">
                Comercializadora e Inmobiliaria{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                  Costa G
                </span>
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  <strong className="text-secondary-700">COSTA G S.A. DE C.V.</strong> es una
                  empresa joven conformada por un equipo de profesionales enfocados en las
                  necesidades de nuestros clientes y en la calidad de nuestros servicios.
                </p>
                <p>
                  En un corto tiempo hemos desarrollado un conjunto de obras importantes en
                  el sector privado y gobierno, cumpliendo con los costos y tiempos de
                  ejecución establecidos.
                </p>
                <p>
                  Contamos con personal técnico profesional para cumplir cualquier desafío
                  de tiempo y costo. Somos una empresa emprendedora en proceso de
                  crecimiento, con bases sólidas en ser una empresa constructora
                  Bio-Sustentable.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/proyectos">
                  <Button
                    variant="primary"
                    size="lg"
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                  >
                    Ver Proyectos
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button variant="outline" size="lg">
                    Contactar
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, index) => (
                <div
                  key={index}
                  className={cn(
                    'p-6 rounded-2xl',
                    'bg-gradient-to-br',
                    index === 0
                      ? 'from-primary-100 to-primary-200'
                      : index === 1
                      ? 'from-secondary-100 to-secondary-200'
                      : index === 2
                      ? 'from-accent-100 to-accent-200'
                      : 'from-eco-100 to-eco-200'
                  )}
                >
                  <div
                    className={cn(
                      'text-4xl font-bold mb-2',
                      index === 0
                        ? 'text-primary-700'
                        : index === 1
                        ? 'text-secondary-700'
                        : index === 2
                        ? 'text-accent-700'
                        : 'text-eco-700'
                    )}
                  >
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="p-8 bg-white rounded-2xl border border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-secondary-700" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-700 mb-4">
                Nuestra Misión
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Construir con los menores procesos contaminantes y dejar en cada obra
                una huella de carbono menor para preservar nuestro mundo, así mismo
                buscamos ser una empresa certificada en edificaciones Bio-Sustentables.
              </p>
            </div>

            {/* Filosofía */}
            <div className="p-8 bg-white rounded-2xl border border-neutral-200 hover:border-accent-300 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-700 mb-4">
                Nuestra Filosofía
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Nos identificamos como una empresa responsable, comprometidos con las
                necesidades de nuestros clientes. Cada proyecto es una oportunidad para
                demostrar nuestra capacidad, honestidad y proactividad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-secondary-700 text-sm font-medium rounded-full mb-4">
              Lo que nos define
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-700 mb-4">
              Nuestros{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                Valores
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, index) => {
              const IconComponent = iconMap[value.icon] || CheckCircle
              return (
                <div
                  key={index}
                  className={cn(
                    'text-center p-8 rounded-2xl',
                    'bg-gradient-to-b from-neutral-50 to-white',
                    'border border-neutral-100',
                    'hover:border-primary-200 hover:shadow-lg',
                    'transition-all duration-300 group'
                  )}
                >
                  <div
                    className={cn(
                      'w-16 h-16 mx-auto mb-6 rounded-2xl',
                      'bg-primary-100 text-secondary-700',
                      'flex items-center justify-center',
                      'group-hover:bg-accent-400 group-hover:text-secondary-900',
                      'transition-colors duration-300'
                    )}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-700 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline / Trayectoria */}
      <section className="py-20 bg-secondary-700">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-200 text-sm font-medium rounded-full mb-4">
              Nuestra Historia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trayectoria de{' '}
              <span className="text-accent-400">Éxito</span>
            </h2>
            <p className="text-primary-200 max-w-2xl mx-auto">
              Desde 2018 hemos crecido constantemente, completando proyectos cada vez
              más desafiantes
            </p>
          </div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-400 via-primary-400 to-accent-400 hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {TIMELINE.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    'relative md:flex items-center gap-8',
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  )}
                >
                  {/* Content */}
                  <div
                    className={cn(
                      'flex-1',
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    )}
                  >
                    <div
                      className={cn(
                        'inline-block p-6 rounded-xl',
                        'bg-white/10 backdrop-blur-sm',
                        'border border-white/10',
                        'hover:bg-white/15 transition-colors duration-300'
                      )}
                    >
                      <span className="text-accent-400 font-bold text-lg">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-semibold text-white mt-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-primary-200 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-accent-400 border-4 border-secondary-700" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bio-Sustentable Section */}
      <section className="py-20 bg-eco-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-eco-100 rounded-2xl flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-eco-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-700 mb-6">
                Compromiso{' '}
                <span className="text-eco-600">Bio-Sustentable</span>
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                En Costa G creemos que el desarrollo de infraestructura debe ir de la
                mano con el cuidado del medio ambiente. Por eso, en cada proyecto
                implementamos prácticas que reducen nuestra huella de carbono.
              </p>
              <ul className="space-y-3">
                {[
                  'Menores procesos contaminantes',
                  'Huella de carbono reducida',
                  'Materiales eco-responsables',
                  'Certificación en edificaciones Bio-Sustentables',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-neutral-600"
                  >
                    <CheckCircle className="w-5 h-5 text-eco-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-eco-400 to-eco-600 p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <Leaf className="w-24 h-24 mx-auto mb-6 opacity-80" />
                  <h3 className="text-3xl font-bold mb-2">100%</h3>
                  <p className="text-eco-100">Compromiso Eco-Responsable</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-400 rounded-2xl flex items-center justify-center">
                <Building2 className="w-10 h-10 text-secondary-900" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="quote"
        title="¿Listo para construir con nosotros?"
        description="Contáctanos y descubre cómo podemos hacer realidad tu proyecto con responsabilidad ambiental."
        primaryButtonText="Iniciar Proyecto"
        primaryButtonHref="/contacto"
      />
    </>
  )
}

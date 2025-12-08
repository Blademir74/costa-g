import Link from 'next/link'
import { notFound } from 'next/navigation'
import { HeroPage } from '@/components/shared/hero-modern'
import { CTASection } from '@/components/sections'
import { 
  Building2, 
  Hammer, 
  Package, 
  PenTool, 
  FileCheck, 
  Check,
  ArrowLeft,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react'

// ========================================
// DATOS DE SERVICIOS
// ========================================

const servicesData: Record<string, {
  id: string
  title: string
  icon: string
  shortDescription: string
  fullDescription: string
  features: string[]
  benefits: string[]
  process: { step: number; title: string; description: string }[]
}> = {
  'construccion': {
    id: 'construccion',
    title: 'Construcción',
    icon: 'Building2',
    shortDescription: 'Construcción de obra civil, puentes, caminos y edificaciones con enfoque Bio-Sustentable.',
    fullDescription: 'Somos especialistas en construcción de obra civil con más de 243 puentes conservados y múltiples proyectos de infraestructura en Guerrero y Estado de México. Utilizamos técnicas y materiales que minimizan el impacto ambiental, garantizando construcciones duraderas y responsables con el medio ambiente.',
    features: [
      'Construcción de puentes vehiculares y peatonales',
      'Edificaciones educativas (aulas, escuelas, módulos)',
      'Canchas deportivas con techumbre metálica',
      'Pavimentación con concreto hidráulico',
      'Caminos artesanales y rurales',
      'Muros de contención y estabilización',
      'Infraestructura pública y gubernamental',
      'Obras de drenaje y alcantarillado',
    ],
    benefits: [
      'Huella de carbono reducida en cada proyecto',
      'Materiales de primera calidad certificados',
      'Cumplimiento garantizado en tiempo y costo',
      'Personal técnico profesional certificado',
      'Supervisión constante durante toda la obra',
      'Garantía post-construcción incluida',
    ],
    process: [
      { step: 1, title: 'Consulta Inicial', description: 'Analizamos tus necesidades y requerimientos específicos del proyecto.' },
      { step: 2, title: 'Diseño y Presupuesto', description: 'Elaboramos propuesta técnica y económica detallada.' },
      { step: 3, title: 'Ejecución', description: 'Construcción con supervisión continua y reportes de avance.' },
      { step: 4, title: 'Entrega', description: 'Verificación de calidad y entrega formal del proyecto.' },
    ],
  },
  'remodelacion': {
    id: 'remodelacion',
    title: 'Remodelación',
    icon: 'Hammer',
    shortDescription: 'Renovación y rehabilitación de espacios existentes manteniendo la integridad estructural.',
    fullDescription: 'Transformamos y renovamos espacios existentes respetando la estructura original y mejorando la funcionalidad. Especializados en rehabilitación de puentes vehiculares, carreteras y edificaciones que requieren renovación integral.',
    features: [
      'Rehabilitación estructural de puentes vehiculares',
      'Renovación de espacios educativos',
      'Ampliaciones residenciales y comerciales',
      'Restauración de infraestructura dañada',
      'Rehabilitación de carreteras y caminos',
      'Mejoramiento de caminos rurales',
      'Reforzamiento estructural',
      'Actualización de instalaciones',
    ],
    benefits: [
      'Evaluación estructural completa antes de iniciar',
      'Reforzamiento con técnicas certificadas',
      'Mínima interrupción durante los trabajos',
      'Garantía de calidad en acabados',
      'Cumplimiento de normativas vigentes',
      'Asesoría técnica especializada',
    ],
    process: [
      { step: 1, title: 'Diagnóstico', description: 'Evaluación técnica del estado actual de la estructura.' },
      { step: 2, title: 'Propuesta', description: 'Plan de intervención detallado con tiempos y costos.' },
      { step: 3, title: 'Rehabilitación', description: 'Ejecución de trabajos con mínima afectación.' },
      { step: 4, title: 'Verificación', description: 'Pruebas de calidad y entrega documentada.' },
    ],
  },
  'venta-materiales': {
    id: 'materiales',
    title: 'Venta de Materiales',
    icon: 'Package',
    shortDescription: 'Suministro de materiales de construcción de primera calidad para todo tipo de obra.',
    fullDescription: 'Ofrecemos materiales de construcción de alta calidad con entregas puntuales directamente en tu obra. Trabajamos con los mejores proveedores para garantizar productos que cumplan con las normas más exigentes del sector.',
    features: [
      'Cemento y concreto premezclado',
      'Acero estructural y varilla corrugada',
      'Agregados pétreos (grava, arena, piedra)',
      'Block, tabique y materiales de mampostería',
      'Materiales para acabados de primera',
      'Impermeabilizantes ecológicos',
      'Tubería y conexiones hidráulicas',
      'Material eléctrico certificado',
    ],
    benefits: [
      'Precios competitivos del mercado',
      'Entrega directa a tu obra',
      'Materiales con certificación de calidad',
      'Asesoría técnica sin costo adicional',
      'Crédito disponible para clientes frecuentes',
      'Stock garantizado en productos principales',
    ],
    process: [
      { step: 1, title: 'Cotización', description: 'Envíanos tu lista de materiales para cotizar.' },
      { step: 2, title: 'Confirmación', description: 'Validamos disponibilidad y confirmamos precios.' },
      { step: 3, title: 'Entrega', description: 'Coordinamos entrega en tu obra o punto de recolección.' },
      { step: 4, title: 'Soporte', description: 'Asesoría técnica durante tu proyecto.' },
    ],
  },
  'diseno': {
    id: 'diseno',
    title: 'Diseño Arquitectónico',
    icon: 'PenTool',
    shortDescription: 'Diseño de proyectos arquitectónicos con enfoque sustentable y funcional.',
    fullDescription: 'Creamos diseños arquitectónicos que combinan estética, funcionalidad y sustentabilidad. Nuestro equipo de arquitectos e ingenieros desarrolla proyectos personalizados adaptados a las necesidades específicas de cada cliente.',
    features: [
      'Diseño arquitectónico completo',
      'Planos estructurales y ejecutivos',
      'Renders 3D fotorrealistas',
      'Diseño sustentable y bioclimático',
      'Trámite de permisos y licencias',
      'Asesoría en normatividad local',
      'Diseño de interiores',
      'Proyectos de urbanización',
    ],
    benefits: [
      'Diseño 100% personalizado',
      'Enfoque Bio-Sustentable integrado',
      'Visualización 3D antes de construir',
      'Documentación completa para construcción',
      'Optimización de espacios y recursos',
      'Cumplimiento de normas y reglamentos',
    ],
    process: [
      { step: 1, title: 'Briefing', description: 'Entendemos tus necesidades, gustos y presupuesto.' },
      { step: 2, title: 'Anteproyecto', description: 'Presentamos propuesta conceptual y renders iniciales.' },
      { step: 3, title: 'Proyecto Ejecutivo', description: 'Desarrollo de planos detallados para construcción.' },
      { step: 4, title: 'Entrega', description: 'Documentación completa lista para permisos y obra.' },
    ],
  },
  'consultoria': {
    id: 'consultoria',
    title: 'Consultoría',
    icon: 'FileCheck',
    shortDescription: 'Asesoría técnica especializada en viabilidad, supervisión y auditorías de obra.',
    fullDescription: 'Brindamos servicios de consultoría integral para proyectos de construcción. Desde estudios de factibilidad hasta supervisión de obra y auditorías técnicas, garantizamos el éxito de tu proyecto con nuestro equipo de expertos.',
    features: [
      'Estudios de viabilidad técnica y económica',
      'Supervisión de obra pública y privada',
      'Auditorías de calidad y seguridad',
      'Peritajes estructurales certificados',
      'Análisis de costos y presupuestos',
      'Gestión de proyectos y licitaciones',
      'Dictámenes técnicos especializados',
      'Capacitación en normatividad',
    ],
    benefits: [
      'Experiencia comprobada en obra pública',
      'Informes técnicos detallados y profesionales',
      'Soporte continuo durante todo el proyecto',
      'Toma de decisiones basada en datos',
      'Reducción de riesgos y costos',
      'Cumplimiento normativo garantizado',
    ],
    process: [
      { step: 1, title: 'Análisis', description: 'Evaluamos el alcance y requerimientos de consultoría.' },
      { step: 2, title: 'Propuesta', description: 'Presentamos plan de trabajo y honorarios.' },
      { step: 3, title: 'Ejecución', description: 'Realizamos la consultoría con entregas parciales.' },
      { step: 4, title: 'Informe Final', description: 'Documentación completa con recomendaciones.' },
    ],
  },
}

// Iconos map
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Hammer,
  Package,
  PenTool,
  FileCheck,
}

// ========================================
// GENERAR RUTAS ESTÁTICAS
// ========================================

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }))
}

// ========================================
// METADATA
// ========================================

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug]
  
  if (!service) {
    return {
      title: 'Servicio no encontrado | Costa G',
    }
  }

  return {
    title: `${service.title} | Servicios | Costa G`,
    description: service.fullDescription,
  }
}

// ========================================
// PÁGINA DE SERVICIO
// ========================================

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug]

  if (!service) {
    notFound()
  }

  const IconComponent = iconMap[service.icon] || Building2

  return (
    <>
      {/* Hero */}
      <HeroPage
        title={service.title}
        description={service.shortDescription}
        badge="Servicio Profesional"
        breadcrumbs={[
          { label: 'Servicios', href: '/servicios' },
          { label: service.title, href: `/servicios/${params.slug}` },
        ]}
      />

      {/* Contenido Principal */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Botón Regresar */}
          <Link 
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm font-semibold mb-8 transition-colors"
            style={{ color: '#64748b' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Servicios
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Columna Principal */}
            <div className="lg:col-span-2">
              {/* Descripción */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)' }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black" style={{ color: '#1A3A52' }}>
                    Acerca de este servicio
                  </h2>
                </div>
                <p className="text-lg leading-relaxed" style={{ color: '#475569' }}>
                  {service.fullDescription}
                </p>
              </div>

              {/* Características */}
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3" style={{ color: '#1A3A52' }}>
                  <span 
                    className="w-10 h-1 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #D4AF37 0%, #B8860B 100%)' }}
                  />
                  Servicios Incluidos
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{ background: 'rgba(135,206,235,0.1)' }}
                    >
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                      <span style={{ color: '#475569' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Proceso */}
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3" style={{ color: '#1A3A52' }}>
                  <span 
                    className="w-10 h-1 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #87CEEB 0%, #5BA4C9 100%)' }}
                  />
                  Nuestro Proceso
                </h3>
                <div className="space-y-4">
                  {service.process.map((step) => (
                    <div 
                      key={step.step}
                      className="flex gap-4 p-5 rounded-xl"
                      style={{ 
                        background: 'white',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                        border: '1px solid rgba(135,206,235,0.2)',
                      }}
                    >
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white"
                        style={{ background: 'linear-gradient(135deg, #1A3A52 0%, #0f2439 100%)' }}
                      >
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-bold mb-1" style={{ color: '#1A3A52' }}>{step.title}</h4>
                        <p className="text-sm" style={{ color: '#64748b' }}>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Card de Beneficios */}
              <div 
                className="rounded-2xl p-6 mb-6 sticky top-24"
                style={{ 
                  background: 'linear-gradient(135deg, #1A3A52 0%, #0f2439 100%)',
                  boxShadow: '0 20px 40px rgba(26,58,82,0.3)',
                }}
              >
                <h3 className="text-lg font-bold text-white mb-4">
                  Beneficios
                </h3>
                <ul className="space-y-3 mb-6">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span 
                        className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                        style={{ background: '#D4AF37' }}
                      />
                      <span className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/contacto">
                  <button 
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 font-bold rounded-xl transition-all duration-300 mb-4"
                    style={{
                      background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
                      color: '#ffffff',
                    }}
                  >
                    Solicitar Cotización
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>

                {/* Contacto directo */}
                <div className="pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                  <p className="text-xs uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Contacto Directo
                  </p>
                  <a 
                    href="tel:7472735934"
                    className="flex items-center gap-3 text-sm mb-2"
                    style={{ color: 'rgba(255,255,255,0.8)' }}
                  >
                    <Phone className="w-4 h-4" style={{ color: '#D4AF37' }} />
                    747 273 5934
                  </a>
                  <a 
                    href="mailto:Inmob.costag@Hotmail.com"
                    className="flex items-center gap-3 text-sm"
                    style={{ color: 'rgba(255,255,255,0.8)' }}
                  >
                    <Mail className="w-4 h-4" style={{ color: '#D4AF37' }} />
                    Inmob.costag@Hotmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        variant="quote"
        title={`¿Necesitas ${service.title.toLowerCase()}?`}
        description="Contáctanos para una cotización gratuita. Nuestro equipo de expertos está listo para ayudarte."
        primaryButtonText="Solicitar Cotización"
        primaryButtonHref="/contacto"
      />
    </>
  )
}

import { HeroModern } from '@/components/shared/hero-modern'
import {
  StatsCounter,
  ProjectsSection,
  WhyUsSection,
  CTASection,
  Timeline,
  ServicesExpandable,
} from '@/components/sections'

// ========================================
// PÁGINA HOME - COSTA G
// Diseño Moderno, Elegante y Minimalista
// ========================================

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Moderno con Stats integrados */}
      <HeroModern
        title="Construimos el Futuro con Calidad Sustentable"
        description="Especialistas en construcción, rehabilitación de puentes y desarrollo de infraestructura con enfoque ecológico en Guerrero, México."
        badge="Empresa Bio-Sustentable"
        primaryCTA={{
          label: 'Ver Proyectos',
          href: '/proyectos',
        }}
        secondaryCTA={{
          label: 'Solicitar Cotización',
          href: '/contacto',
        }}
        stats={[
          { value: '243+', label: 'Puentes Conservados' },
          { value: '17+', label: 'Proyectos Completados' },
          { value: '7+', label: 'Años de Experiencia' },
          { value: '100%', label: 'Compromiso Eco' },
        ]}
        showScrollIndicator={true}
      />

      {/* Stats Counter - Sección separada */}
      <StatsCounter variant="dark" />

      {/* Timeline - Fases de Construcción */}
      <Timeline
        title="Nuestro Proceso"
        subtitle="Metodología de trabajo comprobada para garantizar resultados excepcionales en cada proyecto"
      />

      {/* Servicios Expandibles */}
      <ServicesExpandable
        title="Servicios Profesionales"
        subtitle="Soluciones integrales de construcción con enfoque Bio-Sustentable"
      />

      {/* Projects Section */}
      <ProjectsSection limit={6} showFilters={true} />

      {/* Why Us Section */}
      <WhyUsSection variant="default" />

      {/* Values Section */}
      <WhyUsSection variant="values" />

      {/* CTA Section */}
      <CTASection
        variant="quote"
        title="¿Tienes un proyecto en mente?"
        description="Contáctanos para una cotización gratuita. Nuestro equipo de expertos está listo para hacer realidad tu visión con responsabilidad ambiental."
        primaryButtonText="Solicitar Cotización Gratuita"
        primaryButtonHref="/contacto"
      />
    </>
  )
}

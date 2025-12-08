import { Metadata } from 'next'
import { HeroPage } from '@/components/shared/hero-modern'
import { Timeline, ServicesExpandable, CTASection } from '@/components/sections'

// ========================================
// METADATA
// ========================================

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Servicios de construcción, remodelación, venta de materiales, diseño arquitectónico y consultoría con enfoque Bio-Sustentable en Guerrero, México.',
}

// ========================================
// PÁGINA SERVICIOS
// ========================================

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <HeroPage
        title="Nuestros Servicios"
        description="Soluciones integrales de construcción con enfoque Bio-Sustentable. Desde consultoría inicial hasta la entrega final de tu proyecto."
        breadcrumbs={[{ label: 'Servicios', href: '/servicios' }]}
        badge="Profesionales Certificados"
      />

      {/* Timeline de Fases */}
      <Timeline
        title="Fases de Construcción"
        subtitle="Proceso estructurado para garantizar calidad y cumplimiento en cada etapa"
      />

      {/* Servicios Expandibles */}
      <ServicesExpandable
        title="Servicios Detallados"
        subtitle="Explora cada uno de nuestros servicios y descubre cómo podemos ayudarte"
      />

      {/* CTA */}
      <CTASection
        variant="contact"
        title="¿Necesitas una cotización?"
        description="Nuestro equipo está listo para ayudarte con tu proyecto."
        primaryButtonText="Contactar Ahora"
        primaryButtonHref="/contacto"
      />
    </>
  )
}

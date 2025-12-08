import { Metadata } from 'next'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { HeroPage } from '@/components/shared/hero-modern'
import { ContactForm } from '@/components/shared'
import { SITE_CONFIG } from '@/lib/constants'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ChevronDown,
} from 'lucide-react'

// ========================================
// METADATA
// ========================================

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contáctanos para cotizaciones, consultas o más información sobre nuestros servicios de construcción Bio-Sustentable en Guerrero, México.',
}

// ========================================
// PREGUNTAS FRECUENTES
// ========================================

const faqs = [
  {
    question: '¿En qué zonas trabajan?',
    answer: 'Trabajamos principalmente en el Estado de Guerrero y Estado de México. Hemos completado proyectos en municipios como Tlapa de Comonfort, Ometepec, Coahuayutla, Xochihuehuetlan, Tlacoachistlahuaca y las zonas de Texcoco y Toluca.',
  },
  {
    question: '¿Qué tipos de proyectos realizan?',
    answer: 'Realizamos construcción de obra civil incluyendo puentes vehiculares, edificaciones educativas (aulas, canchas), pavimentación con concreto hidráulico, caminos artesanales, muros de contención y rehabilitación de infraestructura.',
  },
  {
    question: '¿Cuánto tiempo tarda una cotización?',
    answer: 'Generalmente proporcionamos una cotización preliminar dentro de las primeras 48-72 horas después de recibir los detalles del proyecto. Las cotizaciones detalladas pueden tomar de 1 a 2 semanas dependiendo de la complejidad.',
  },
  {
    question: '¿Qué significa ser una empresa Bio-Sustentable?',
    answer: 'Significa que construimos con los menores procesos contaminantes posibles, buscando reducir la huella de carbono en cada obra. Utilizamos materiales y técnicas que respetan el medio ambiente mientras mantenemos la calidad de construcción.',
  },
  {
    question: '¿Trabajan con gobierno y sector privado?',
    answer: 'Sí, trabajamos tanto con dependencias gubernamentales (SDUOPOT, Ayuntamientos) como con el sector privado. Tenemos experiencia en licitaciones y contratos públicos.',
  },
]

// ========================================
// PÁGINA CONTACTO
// ========================================

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <HeroPage
        title="Contáctanos"
        description="Estamos listos para ayudarte con tu próximo proyecto. Contáctanos para cotizaciones, consultas o más información."
        breadcrumbs={[{ label: 'Contacto', href: '/contacto' }]}
        badge="Respuesta en 24 hrs"
      />

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info - 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-secondary-700 mb-6">
                  Información de Contacto
                </h2>
                <p className="text-neutral-600 mb-8">
                  Puedes comunicarte con nosotros por cualquiera de estos medios.
                  Responderemos lo más pronto posible.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                  className={cn(
                    'flex items-start gap-4 p-5 rounded-xl',
                    'bg-neutral-50 border border-neutral-100',
                    'hover:border-primary-300 hover:shadow-md',
                    'transition-all duration-300 group'
                  )}
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-accent-400 transition-colors">
                    <Phone className="w-5 h-5 text-secondary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-700">Teléfono</h3>
                    <p className="text-accent-600 font-medium">
                      {SITE_CONFIG.contact.phone}
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                      Lun - Vie: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.contact.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'flex items-start gap-4 p-5 rounded-xl',
                    'bg-eco-50 border border-eco-100',
                    'hover:border-eco-300 hover:shadow-md',
                    'transition-all duration-300 group'
                  )}
                >
                  <div className="w-12 h-12 bg-eco-100 rounded-xl flex items-center justify-center group-hover:bg-eco-500 transition-colors">
                    <MessageCircle className="w-5 h-5 text-eco-700 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-700">WhatsApp</h3>
                    <p className="text-eco-600 font-medium">Enviar mensaje</p>
                    <p className="text-xs text-neutral-500 mt-1">
                      Respuesta rápida
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className={cn(
                    'flex items-start gap-4 p-5 rounded-xl',
                    'bg-neutral-50 border border-neutral-100',
                    'hover:border-primary-300 hover:shadow-md',
                    'transition-all duration-300 group'
                  )}
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-accent-400 transition-colors">
                    <Mail className="w-5 h-5 text-secondary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-700">Email</h3>
                    <p className="text-accent-600 font-medium break-all">
                      {SITE_CONFIG.contact.email}
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                      Para cotizaciones detalladas
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div
                  className={cn(
                    'flex items-start gap-4 p-5 rounded-xl',
                    'bg-neutral-50 border border-neutral-100'
                  )}
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-secondary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-700">Oficina</h3>
                    <p className="text-neutral-600 text-sm">
                      {SITE_CONFIG.address.street}
                    </p>
                    <p className="text-neutral-600 text-sm">
                      {SITE_CONFIG.address.colony}
                    </p>
                    <p className="text-neutral-600 text-sm">
                      C.P. {SITE_CONFIG.address.postalCode},{' '}
                      {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div
                  className={cn(
                    'flex items-start gap-4 p-5 rounded-xl',
                    'bg-neutral-50 border border-neutral-100'
                  )}
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-secondary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-700">Horario</h3>
                    <p className="text-neutral-600 text-sm">
                      Lunes - Viernes: {SITE_CONFIG.hours.weekdays}
                    </p>
                    <p className="text-neutral-600 text-sm">
                      Sábado: {SITE_CONFIG.hours.saturday}
                    </p>
                    <p className="text-neutral-500 text-sm">
                      Domingo: {SITE_CONFIG.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-semibold text-secondary-700 mb-4">
                  Síguenos
                </h3>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: SITE_CONFIG.social.facebook, label: 'Facebook' },
                    { icon: Instagram, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
                    { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
                    { icon: Youtube, href: SITE_CONFIG.social.youtube, label: 'YouTube' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'w-10 h-10 rounded-full',
                        'bg-neutral-100 text-neutral-600',
                        'flex items-center justify-center',
                        'hover:bg-accent-400 hover:text-secondary-900',
                        'transition-colors duration-300'
                      )}
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
                <h2 className="text-2xl font-bold text-secondary-700 mb-2">
                  Envíanos un mensaje
                </h2>
                <p className="text-neutral-600 mb-8">
                  Completa el formulario y nos pondremos en contacto contigo pronto.
                </p>
                <ContactForm variant="default" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-neutral-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-secondary-100">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
            <p className="text-secondary-600">
              Mapa de Google Maps
            </p>
            <p className="text-sm text-secondary-500">
              {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
            </p>
          </div>
        </div>
        {/* Google Maps iframe would go here */}
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-secondary-700 text-sm font-medium rounded-full mb-4">
              Preguntas Frecuentes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-700 mb-4">
              ¿Tienes dudas?
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Aquí respondemos las preguntas más comunes sobre nuestros servicios.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className={cn(
                  'group rounded-xl bg-white border border-neutral-200',
                  'hover:border-primary-300 transition-colors duration-300'
                )}
              >
                <summary
                  className={cn(
                    'flex items-center justify-between p-5 cursor-pointer',
                    'list-none font-semibold text-secondary-700',
                    '[&::-webkit-details-marker]:hidden'
                  )}
                >
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-neutral-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

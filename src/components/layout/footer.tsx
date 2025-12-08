import Link from 'next/link'
import { cn } from '@/lib/utils'
import { SITE_CONFIG, SERVICES } from '@/lib/constants'
import { Logo } from './logo'
import { Button, Input } from '@/components/ui'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Leaf,
} from 'lucide-react'

// ========================================
// COMPONENTE FOOTER
// ========================================

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-700 text-white">
      {/* Newsletter Section */}
      <div className="bg-secondary-800">
        <div className="container-custom py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold mb-2">
                Recibe actualizaciones de nuestros proyectos
              </h3>
              <p className="text-primary-200">
                Suscríbete a nuestro newsletter y mantente informado
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <div className="relative flex-1 sm:w-80">
                <Input
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20"
                />
              </div>
              <Button
                type="submit"
                variant="accent"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Suscribirme
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo variant="full" size="lg" linkToHome={false} />
            </div>
            <p className="text-primary-100 mb-6 leading-relaxed">
              Empresa constructora con enfoque Bio-Sustentable. Comprometidos con la calidad, 
              el medio ambiente y la satisfacción de nuestros clientes.
            </p>

            {/* Eco Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full">
              <Leaf className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-300 font-medium">
                Empresa Bio-Sustentable
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <SocialLink
                href={SITE_CONFIG.social.facebook}
                icon={<Facebook className="w-5 h-5" />}
                label="Facebook"
              />
              <SocialLink
                href={SITE_CONFIG.social.instagram}
                icon={<Instagram className="w-5 h-5" />}
                label="Instagram"
              />
              <SocialLink
                href={SITE_CONFIG.social.linkedin}
                icon={<Linkedin className="w-5 h-5" />}
                label="LinkedIn"
              />
              <SocialLink
                href={SITE_CONFIG.social.youtube}
                icon={<Youtube className="w-5 h-5" />}
                label="YouTube"
              />
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Servicios
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="text-primary-100 hover:text-accent-400 transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-4 mt-8 text-white">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Proyectos', href: '/proyectos' },
                { label: 'Desarrollos', href: '/desarrollos' },
                { label: 'Nosotros', href: '/nosotros' },
                { label: 'Blog', href: '/blog' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-100 hover:text-accent-400 transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-primary-100 hover:text-accent-400 transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent-400" />
                  <span className="leading-relaxed">
                    {SITE_CONFIG.address.street}
                    <br />
                    {SITE_CONFIG.address.colony}
                    <br />
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
                    <br />
                    C.P. {SITE_CONFIG.address.postalCode}
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                  className="flex items-center gap-3 text-primary-100 hover:text-accent-400 transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-accent-400" />
                  <span>{SITE_CONFIG.contact.phone}</span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="flex items-center gap-3 text-primary-100 hover:text-accent-400 transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-accent-400" />
                  <span className="break-all">{SITE_CONFIG.contact.email}</span>
                </a>
              </li>

              <li className="flex items-start gap-3 text-primary-100">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent-400" />
                <div>
                  <p>Lun - Vie: {SITE_CONFIG.hours.weekdays}</p>
                  <p>Sábados: {SITE_CONFIG.hours.saturday}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Aviso de Privacidad', href: '/privacidad' },
                { label: 'Términos y Condiciones', href: '/terminos' },
                { label: 'Política de Cookies', href: '/cookies' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-100 hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact CTA */}
            <div className="mt-8 p-6 bg-white/5 rounded-xl">
              <h5 className="font-semibold mb-2">¿Tienes un proyecto?</h5>
              <p className="text-primary-200 text-sm mb-4">
                Contáctanos para una cotización gratuita
              </p>
              <Button
                variant="accent"
                fullWidth
                size="sm"
              >
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-200">
            <p>
              © {currentYear} {SITE_CONFIG.legalName}. Todos los derechos reservados.
            </p>
            <p className="flex items-center gap-2">
              Hecho con
              <span className="text-red-400">❤</span>
              en Guerrero, México
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ========================================
// SOCIAL LINK COMPONENT
// ========================================

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'w-10 h-10 flex items-center justify-center rounded-full',
        'bg-white/10 text-white',
        'hover:bg-accent-400 hover:text-secondary-900',
        'transition-all duration-200'
      )}
      aria-label={label}
    >
      {icon}
    </a>
  )
}

export { Footer }

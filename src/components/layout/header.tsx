'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants'
import { Logo } from './logo'
import { Button } from '@/components/ui'
import {
  Menu,
  X,
  Search,
  Phone,
  ChevronDown,
  Building2,
  Hammer,
  Package,
  PenTool,
  FileCheck,
} from 'lucide-react'

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
// COMPONENTE HEADER
// ========================================

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú mobile al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [])

  // Prevenir scroll cuando menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
            : 'bg-transparent py-4'
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Logo
              variant="full"
              size={isScrolled ? 'sm' : 'md'}
              colorMode={isScrolled ? 'light' : 'dark'}
            />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.children ? (
                    // Item con dropdown
                    <button
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 rounded-lg',
                        'text-sm font-medium',
                        'transition-colors duration-200',
                        isScrolled
                          ? 'text-secondary-700 hover:bg-primary-100'
                          : 'text-white hover:bg-white/20',
                        activeDropdown === item.label && (isScrolled ? 'bg-primary-100' : 'bg-white/20')
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          activeDropdown === item.label && 'rotate-180'
                        )}
                      />
                    </button>
                  ) : (
                    // Item simple
                    <Link
                      href={item.href}
                      className={cn(
                        'px-4 py-2 rounded-lg',
                        'text-sm font-medium',
                        'transition-colors duration-200',
                        isScrolled
                          ? 'text-secondary-700 hover:bg-primary-100'
                          : 'text-white hover:bg-white/20'
                      )}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.label && (
                    <div
                      className={cn(
                        'absolute top-full left-0 mt-2',
                        'w-64 p-2',
                        'bg-white rounded-xl shadow-medium',
                        'border border-neutral-100',
                        'animate-fade-in'
                      )}
                    >
                      {item.children.map((child) => {
                        const IconComponent = child.icon
                          ? iconMap[child.icon]
                          : null

                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={cn(
                              'flex items-center gap-3 px-4 py-3 rounded-lg',
                              'text-sm text-secondary-700',
                              'transition-colors duration-200',
                              'hover:bg-primary-50'
                            )}
                          >
                            {IconComponent && (
                              <IconComponent className="w-5 h-5 text-primary-500" />
                            )}
                            <span>{child.label}</span>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Search Button */}
              <button
                className={cn(
                  'p-2 rounded-lg',
                  'transition-colors duration-200',
                  isScrolled
                    ? 'text-secondary-700 hover:bg-primary-100'
                    : 'text-white hover:bg-white/20'
                )}
                aria-label="Buscar"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Phone Button */}
              <a
                href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                className={cn(
                  'p-2 rounded-lg',
                  'transition-colors duration-200',
                  isScrolled
                    ? 'text-secondary-700 hover:bg-primary-100'
                    : 'text-white hover:bg-white/20'
                )}
                aria-label="Llamar"
              >
                <Phone className="w-5 h-5" />
              </a>

              {/* CTA Button */}
              <Link href="/contacto">
                <Button
                  variant="accent"
                  size="sm"
                >
                  Cotizar Ahora
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                className={cn(
                  'p-2',
                  isScrolled ? 'text-secondary-700' : 'text-white'
                )}
                aria-label="Llamar"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  'p-2',
                  isScrolled ? 'text-secondary-700' : 'text-white'
                )}
                aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/50 lg:hidden',
          'transition-opacity duration-300',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm',
          'bg-white shadow-xl',
          'transform transition-transform duration-300 lg:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <Logo variant="full" size="sm" linkToHome={false} />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-secondary-700 hover:bg-neutral-100 rounded-lg"
            aria-label="Cerrar menú"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col h-[calc(100%-80px)] overflow-y-auto">
          <nav className="flex-1 p-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="mb-2">
                {item.children ? (
                  <MobileDropdown item={item} />
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'block px-4 py-3 rounded-lg',
                      'text-secondary-700 font-medium',
                      'hover:bg-primary-50 transition-colors'
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t bg-neutral-50">
            <Button
              variant="primary"
              fullWidth
              className="mb-3"
            >
              Cotizar Ahora
            </Button>
            <div className="flex items-center justify-center gap-2 text-sm text-neutral-600">
              <Phone className="w-4 h-4" />
              <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`}>
                {SITE_CONFIG.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// ========================================
// MOBILE DROPDOWN
// ========================================

interface MobileDropdownProps {
  item: (typeof NAV_ITEMS)[number]
}

function MobileDropdown({ item }: MobileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (!item.children) return null

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center justify-between w-full px-4 py-3 rounded-lg',
          'text-secondary-700 font-medium',
          'hover:bg-primary-50 transition-colors'
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            'w-5 h-5 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      <div
        className={cn(
          'overflow-hidden transition-all duration-200',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="pl-4 py-2">
          {item.children.map((child) => {
            const IconComponent = child.icon ? iconMap[child.icon] : null

            return (
              <Link
                key={child.label}
                href={child.href}
                className={cn(
                  'flex items-center gap-3 px-4 py-2 rounded-lg',
                  'text-neutral-600',
                  'hover:bg-primary-50 transition-colors'
                )}
              >
                {IconComponent && (
                  <IconComponent className="w-4 h-4 text-primary-500" />
                )}
                <span>{child.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export { Header }

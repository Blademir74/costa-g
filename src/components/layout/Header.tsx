'use client'

/**
 * HEADER - COSTA G
 * 
 * ⚠️ CÓDIGO LIMPIO - SIN SearchBar
 * 
 * Características:
 * - Logo Premium CG
 * - Navegación de 5 items
 * - CTA "Cotizar Proyecto"
 * - Menú móvil hamburger
 * - Cambio de estilo al scroll
 */

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '../ui/Logo'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-luxury py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo 
            variant={isScrolled ? 'primary' : 'inverse'} 
            size="md"
          />

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center gap-1" 
            role="navigation" 
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2.5 font-medium text-sm tracking-wide 
                          transition-all duration-300 rounded-lg group ${
                  isScrolled 
                    ? 'text-charcoal-500 hover:text-navy-500 hover:bg-skyLight-100' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
                <span 
                  className={`absolute bottom-1 left-5 right-5 h-0.5 rounded-full 
                             transform scale-x-0 group-hover:scale-x-100 
                             transition-transform duration-300 origin-left ${
                    isScrolled ? 'bg-gold-500' : 'bg-gold-400'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/contacto"
              className={`group relative px-7 py-3 rounded-xl font-semibold text-sm 
                        tracking-wide overflow-hidden transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-r from-navy-500 to-navy-400 text-white shadow-luxury-button hover:shadow-luxury-button-hover hover:-translate-y-1'
                  : 'bg-gold-500 text-navy-500 shadow-gold hover:shadow-gold-hover hover:-translate-y-1'
              }`}
            >
              Cotizar Proyecto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden relative w-10 h-10 flex items-center justify-center 
                      rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'text-navy-500 hover:bg-skyLight-100' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span 
                className={`block h-0.5 rounded-full transition-all duration-300 origin-center ${
                  isScrolled ? 'bg-navy-500' : 'bg-white'
                } ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
              />
              <span 
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? 'bg-navy-500' : 'bg-white'
                } ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`}
              />
              <span 
                className={`block h-0.5 rounded-full transition-all duration-300 origin-center ${
                  isScrolled ? 'bg-navy-500' : 'bg-white'
                } ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <nav 
            className={`py-6 px-2 rounded-2xl ${
              isScrolled ? 'bg-skyLight-100' : 'bg-white/10 backdrop-blur-xl'
            }`}
            role="navigation" 
            aria-label="Navegación móvil"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-5 py-3.5 rounded-xl font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'text-charcoal-600 hover:bg-white hover:text-navy-500'
                      : 'text-white hover:bg-white/20'
                  }`}
                  style={{ 
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 mx-2 px-5 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 
                         text-navy-500 font-semibold text-center shadow-gold"
              >
                Cotizar Proyecto
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

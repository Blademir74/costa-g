'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Building2, Shield, Award, Leaf, CheckCircle2 } from 'lucide-react'

// ========================================
// TIPOS
// ========================================

interface HeroModernProps {
  title: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  backgroundVideo?: string
  primaryCTA?: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  badge?: string
  stats?: {
    value: string
    label: string
  }[]
  showScrollIndicator?: boolean
  className?: string
}

// ========================================
// COMPONENTE HERO - DISEÑO ESPECTACULAR
// ========================================

export function HeroModern({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  badge,
  stats,
  showScrollIndicator = true,
}: HeroModernProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  // Características destacadas
  const features = [
    'Proyectos Gubernamentales',
    'Certificación Bio-Sustentable',
    '243+ Puentes Conservados',
  ]

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* ===== FONDO CON GRADIENTE AZUL CIELO ===== */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #e0f4ff 0%, #87CEEB 30%, #5BA4C9 70%, #1A3A52 100%)',
        }}
      />

      {/* Patrón de puntos decorativo */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1A3A52 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Formas geométricas decorativas */}
      <div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20"
        style={{ 
          background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div 
        className="absolute bottom-40 left-1/3 w-96 h-96 rounded-full opacity-10"
        style={{ 
          background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Líneas decorativas */}
      <svg 
        className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-10"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
      >
        <line x1="1200" y1="0" x2="800" y2="1080" stroke="#1A3A52" strokeWidth="1" />
        <line x1="1400" y1="0" x2="1000" y2="1080" stroke="#1A3A52" strokeWidth="0.5" />
        <line x1="1600" y1="0" x2="1200" y2="1080" stroke="#1A3A52" strokeWidth="0.5" />
      </svg>

      {/* ===== CONTENIDO PRINCIPAL ===== */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-200px)]">
            
            {/* ===== COLUMNA IZQUIERDA - TEXTO ===== */}
            <div 
              className="order-2 lg:order-1"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Badge Eco */}
              {badge && (
                <div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.2) 0%, rgba(34,197,94,0.1) 100%)',
                    border: '1px solid rgba(34,197,94,0.4)',
                    boxShadow: '0 4px 20px rgba(34,197,94,0.15)',
                  }}
                >
                  <Leaf className="w-4 h-4" style={{ color: '#16a34a' }} />
                  <span className="text-sm font-bold tracking-wide" style={{ color: '#15803d' }}>
                    {badge}
                  </span>
                </div>
              )}

              {/* Title - IMPACTANTE */}
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-6"
                style={{ color: '#1A3A52' }}
              >
                {title.split(' ').map((word, i) => {
                  const isGold = ['Futuro', 'Sustentable', 'Calidad'].includes(word)
                  return (
                    <span key={i} className="inline-block mr-3 mb-2">
                      {isGold ? (
                        <span 
                          className="relative"
                          style={{ 
                            color: '#B8860B',
                            textShadow: '2px 2px 4px rgba(212,175,55,0.3)',
                          }}
                        >
                          {word}
                          {/* Subrayado dorado */}
                          <span 
                            className="absolute bottom-0 left-0 w-full h-1 rounded-full"
                            style={{ 
                              background: 'linear-gradient(90deg, #D4AF37 0%, #B8860B 100%)',
                              transform: 'translateY(4px)',
                            }}
                          />
                        </span>
                      ) : (
                        word
                      )}
                    </span>
                  )
                })}
              </h1>

              {/* Description */}
              {description && (
                <p 
                  className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
                  style={{ color: '#1A3A52', opacity: 0.8 }}
                >
                  {description}
                </p>
              )}

              {/* Features List */}
              <div className="flex flex-wrap gap-4 mb-10">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg"
                    style={{
                      background: 'rgba(255,255,255,0.6)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(26,58,82,0.1)',
                    }}
                  >
                    <CheckCircle2 className="w-4 h-4" style={{ color: '#16a34a' }} />
                    <span className="text-sm font-semibold" style={{ color: '#1A3A52' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                {primaryCTA && (
                  <Link href={primaryCTA.href}>
                    <button 
                      className="group flex items-center justify-center gap-3 px-8 py-4 font-bold rounded-xl transition-all duration-500 min-w-[220px]"
                      style={{
                        background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
                        color: '#ffffff',
                        boxShadow: '0 10px 40px rgba(212,175,55,0.4), 0 4px 12px rgba(0,0,0,0.1)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
                        e.currentTarget.style.boxShadow = '0 20px 50px rgba(212,175,55,0.5), 0 8px 20px rgba(0,0,0,0.15)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)'
                        e.currentTarget.style.boxShadow = '0 10px 40px rgba(212,175,55,0.4), 0 4px 12px rgba(0,0,0,0.1)'
                      }}
                    >
                      {primaryCTA.label}
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </Link>
                )}
                {secondaryCTA && (
                  <Link href={secondaryCTA.href}>
                    <button 
                      className="flex items-center justify-center gap-3 px-8 py-4 font-bold rounded-xl transition-all duration-300 min-w-[220px]"
                      style={{
                        background: 'rgba(26,58,82,0.1)',
                        color: '#1A3A52',
                        border: '2px solid #1A3A52',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#1A3A52'
                        e.currentTarget.style.color = '#ffffff'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(26,58,82,0.1)'
                        e.currentTarget.style.color = '#1A3A52'
                      }}
                    >
                      {secondaryCTA.label}
                    </button>
                  </Link>
                )}
              </div>

              {/* Stats en línea */}
              {stats && stats.length > 0 && (
                <div className="flex flex-wrap gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-left">
                      <div 
                        className="text-3xl md:text-4xl font-black"
                        style={{ color: '#1A3A52' }}
                      >
                        {stat.value}
                      </div>
                      <div 
                        className="text-sm font-medium uppercase tracking-wider"
                        style={{ color: '#1A3A52', opacity: 0.6 }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ===== COLUMNA DERECHA - VISUAL ===== */}
            <div 
              className="order-1 lg:order-2 relative"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateX(0)' : 'translateX(30px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
              }}
            >
              {/* Contenedor de imagen con efecto */}
              <div className="relative">
                {/* Marco decorativo */}
                <div 
                  className="absolute -top-4 -right-4 w-full h-full rounded-3xl"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
                    opacity: 0.3,
                  }}
                />
                <div 
                  className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl"
                  style={{
                    border: '2px solid #1A3A52',
                    opacity: 0.2,
                  }}
                />
                
                {/* Imagen principal */}
                <div 
                  className="relative rounded-3xl overflow-hidden"
                  style={{
                    boxShadow: '0 30px 60px rgba(26,58,82,0.3), 0 10px 20px rgba(0,0,0,0.1)',
                  }}
                >
                  {/* SVG Placeholder de Construcción Profesional */}
                  <svg 
                    viewBox="0 0 600 500" 
                    className="w-full h-auto"
                    style={{ background: 'linear-gradient(180deg, #87CEEB 0%, #5BA4C9 100%)' }}
                  >
                    {/* Cielo con nubes */}
                    <defs>
                      <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#87CEEB" />
                        <stop offset="100%" stopColor="#5BA4C9" />
                      </linearGradient>
                      <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1A3A52" />
                        <stop offset="100%" stopColor="#0f2439" />
                      </linearGradient>
                      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#B8860B" />
                      </linearGradient>
                    </defs>
                    
                    {/* Fondo cielo */}
                    <rect width="600" height="500" fill="url(#skyGrad)" />
                    
                    {/* Nubes */}
                    <ellipse cx="100" cy="80" rx="60" ry="30" fill="white" opacity="0.8" />
                    <ellipse cx="140" cy="70" rx="40" ry="25" fill="white" opacity="0.9" />
                    <ellipse cx="450" cy="100" rx="70" ry="35" fill="white" opacity="0.7" />
                    <ellipse cx="500" cy="90" rx="45" ry="28" fill="white" opacity="0.85" />
                    
                    {/* Sol */}
                    <circle cx="520" cy="60" r="40" fill="#D4AF37" opacity="0.4" />
                    <circle cx="520" cy="60" r="25" fill="#D4AF37" opacity="0.6" />
                    
                    {/* Montañas de fondo */}
                    <polygon points="0,350 150,200 300,350" fill="#1A3A52" opacity="0.3" />
                    <polygon points="200,350 400,180 600,350" fill="#1A3A52" opacity="0.2" />
                    
                    {/* Edificio principal - Rascacielos moderno */}
                    <rect x="220" y="120" width="160" height="330" fill="url(#buildingGrad)" />
                    
                    {/* Ventanas del edificio principal */}
                    <g fill="#87CEEB" opacity="0.6">
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
                        <g key={row}>
                          <rect x="235" y={140 + row * 28} width="25" height="18" rx="2" />
                          <rect x="270" y={140 + row * 28} width="25" height="18" rx="2" />
                          <rect x="305" y={140 + row * 28} width="25" height="18" rx="2" />
                          <rect x="340" y={140 + row * 28} width="25" height="18" rx="2" />
                        </g>
                      ))}
                    </g>
                    
                    {/* Edificio secundario izquierdo */}
                    <rect x="80" y="220" width="120" height="230" fill="#1A3A52" opacity="0.8" />
                    <g fill="#87CEEB" opacity="0.5">
                      {[0, 1, 2, 3, 4, 5, 6, 7].map((row) => (
                        <g key={row}>
                          <rect x="95" y={240 + row * 26} width="20" height="14" rx="1" />
                          <rect x="125" y={240 + row * 26} width="20" height="14" rx="1" />
                          <rect x="155" y={240 + row * 26} width="20" height="14" rx="1" />
                        </g>
                      ))}
                    </g>
                    
                    {/* Edificio secundario derecho */}
                    <rect x="400" y="250" width="130" height="200" fill="#1A3A52" opacity="0.7" />
                    <g fill="#87CEEB" opacity="0.5">
                      {[0, 1, 2, 3, 4, 5, 6].map((row) => (
                        <g key={row}>
                          <rect x="415" y={270 + row * 24} width="22" height="12" rx="1" />
                          <rect x="447" y={270 + row * 24} width="22" height="12" rx="1" />
                          <rect x="479" y={270 + row * 24} width="22" height="12" rx="1" />
                        </g>
                      ))}
                    </g>
                    
                    {/* Grúa de construcción */}
                    <rect x="520" y="150" width="8" height="300" fill="#D4AF37" />
                    <rect x="480" y="150" width="80" height="8" fill="#D4AF37" />
                    <rect x="540" y="150" width="40" height="8" fill="#D4AF37" />
                    <line x1="528" y1="158" x2="485" y2="250" stroke="#1A3A52" strokeWidth="2" />
                    <rect x="478" y="245" width="20" height="30" fill="#B8860B" />
                    
                    {/* Puente en construcción */}
                    <rect x="50" y="400" width="500" height="15" fill="url(#goldGrad)" />
                    <rect x="120" y="380" width="15" height="70" fill="#1A3A52" />
                    <rect x="280" y="380" width="15" height="70" fill="#1A3A52" />
                    <rect x="440" y="380" width="15" height="70" fill="#1A3A52" />
                    
                    {/* Cables del puente */}
                    <path d="M127 380 Q 200 340, 287 380" stroke="#1A3A52" strokeWidth="3" fill="none" />
                    <path d="M287 380 Q 360 340, 447 380" stroke="#1A3A52" strokeWidth="3" fill="none" />
                    
                    {/* Suelo/Base */}
                    <rect x="0" y="450" width="600" height="50" fill="#2d5a3d" />
                    
                    {/* Texto de marca */}
                    <text x="300" y="480" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" opacity="0.8">
                      COSTA G - Construyendo el Futuro
                    </text>
                  </svg>
                  
                  {/* Overlay con degradado */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, transparent 60%, rgba(26,58,82,0.3) 100%)',
                    }}
                  />
                </div>

                {/* Badge flotante - REPOSICIONADO MÁS ABAJO */}
                <div 
                  className="absolute -bottom-8 -left-6 px-6 py-4 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    border: '1px solid rgba(212,175,55,0.3)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)' }}
                    >
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-black" style={{ color: '#1A3A52' }}>7+</div>
                      <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#64748b' }}>
                        Años de Experiencia
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badge Garantía - REPOSICIONADO */}
                <div 
                  className="absolute top-6 -right-4 px-5 py-3 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, #1A3A52 0%, #0f2439 100%)',
                    boxShadow: '0 15px 30px rgba(26,58,82,0.3)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-sm font-bold text-white">Garantía Total</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <button
            onClick={scrollToContent}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-300"
            style={{ color: '#1A3A52' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.6'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <span className="text-xs uppercase tracking-[0.2em] font-bold">Descubre más</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        )}
      </div>
    </section>
  )
}

// ========================================
// HERO PARA PÁGINAS INTERNAS
// ========================================

interface HeroPageProps {
  title: string
  description?: string
  backgroundImage?: string
  breadcrumbs?: { label: string; href: string }[]
  badge?: string
  className?: string
}

export function HeroPage({
  title,
  description,
  backgroundImage,
  breadcrumbs,
  badge,
}: HeroPageProps) {
  return (
    <section
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1A3A52 0%, #0f2439 100%)',
      }}
    >
      {/* Imagen opcional */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Patrón decorativo */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Elementos decorativos */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full -translate-y-1/2 translate-x-1/2"
        style={{ 
          background: 'radial-gradient(circle, rgba(135,206,235,0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <div className="max-w-3xl">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: 'rgba(135,206,235,0.7)' }}>
              <Link href="/" className="hover:text-white transition-colors">
                Inicio
              </Link>
              {breadcrumbs.map((crumb, index) => (
                <span key={index} className="flex items-center gap-2">
                  <span style={{ color: 'rgba(135,206,235,0.4)' }}>/</span>
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-white font-medium">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Badge */}
          {badge && (
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold rounded-full mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.1) 100%)',
                color: '#D4AF37',
                border: '1px solid rgba(212,175,55,0.3)',
              }}
            >
              <Award className="w-4 h-4" />
              {badge}
            </span>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p 
              className="text-lg md:text-xl leading-relaxed max-w-2xl"
              style={{ color: 'rgba(135,206,235,0.8)' }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export { type HeroModernProps, type HeroPageProps }

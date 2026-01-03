'use client'

import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  image: string
  primaryCta?: string
  secondaryCta?: string
}

export default function Hero({ 
  title, 
  subtitle, 
  image, 
  primaryCta = "Ver Portafolio", 
  secondaryCta = "Contactar" 
}: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Fondo con Imagen y Fallback inteligente */}
      <div className="absolute inset-0 z-0">
        {image && image !== '' ? (
          <Image
            src={image}
            alt="Infraestructura Costa G"
            fill
            className="object-cover opacity-60"
            priority
            quality={95}
          />
        ) : (
          // Fallback visual sutil si no hay imagen (Patrón oscuro)
          <div className="w-full h-full bg-slate-900" />
        )}
        
        {/* Capas de Contraste (Vital para legibilidad) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/90" />
        <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern-grid.svg')]" />
      </div>

      <div className="container relative z-10 px-4 text-center">
        {/* Badge Institucional (Oficial, no de debug) */}
        <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-300 text-xs font-bold tracking-widest uppercase">
            Constructora Bio-Sustentable
          </span>
        </div>
        
        {/* Título de Alto Impacto */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight drop-shadow-2xl max-w-6xl mx-auto">
          {title}
        </h1>
        
        {/* Subtítulo */}
        <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light text-shadow-sm">
          {subtitle}
        </p>
        
        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link 
            href="/proyectos"
            className="group px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold transition-all shadow-[0_0_30px_-10px_rgba(2,132,199,0.5)] hover:shadow-sky-500/40 hover:-translate-y-1 flex items-center gap-3 text-lg"
          >
            {primaryCta}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          
          <Link 
            href="/contacto" 
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 rounded-xl font-bold transition-all backdrop-blur-md text-lg"
          >
            {secondaryCta}
          </Link>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
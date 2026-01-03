'use client'

import Link from 'next/link'

interface CTASectionProps {
  title: string
  description: string
  primaryButtonText: string
  primaryButtonHref?: string
}

export default function CTASection({ 
  title, 
  description, 
  primaryButtonText,
  primaryButtonHref = '/contacto' 
}: CTASectionProps) {
  return (
    // Agregamos 'bg-slate-900' para asegurar contraste con el texto blanco
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-sky-500 blur-[100px] transform translate-x-1/2" />
        <div className="absolute left-0 bottom-0 w-1/3 h-full bg-emerald-500 blur-[100px] transform -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          {description}
        </p>
        
        <Link 
          href={primaryButtonHref}
          className="inline-flex items-center justify-center px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-sky-900/50 hover:shadow-sky-500/30 hover:-translate-y-1 gap-2 group"
        >
          {primaryButtonText}
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
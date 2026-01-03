import Link from 'next/link'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  href: string
  delay?: number
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  delay = 0,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative p-8 lg:p-10 bg-white rounded-2xl border border-slate-100 
                 transition-all duration-500 ease-out
                 hover:border-sky-100 hover:shadow-luxury-lg hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon Container */}
      <div 
        className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 
                   flex items-center justify-center text-4xl
                   transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
      >
        {icon}
      </div>

      {/* Title */}
      <h3 
        className="font-display font-semibold text-xl text-slate-800 mb-4
                   transition-colors duration-300 group-hover:text-sky-600"
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 leading-relaxed mb-8 text-[0.9375rem]">
        {description}
      </p>

      {/* Link Arrow */}
      <div 
        className="flex items-center gap-2 text-sky-600 font-medium text-sm
                   transition-all duration-300 group-hover:gap-4"
      >
        <span>Explorar</span>
        <svg 
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 8l4 4m0 0l-4 4m4-4H3" 
          />
        </svg>
      </div>

      {/* Hover Gradient Overlay */}
      <div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/0 to-sky-600/0 
                   opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none"
      />
    </Link>
  )
}

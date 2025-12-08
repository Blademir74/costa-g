import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ChevronRight, Home } from 'lucide-react'

// ========================================
// TIPOS
// ========================================

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  showHome?: boolean
}

// ========================================
// COMPONENTE
// ========================================

function Breadcrumb({ items, className, showHome = true }: BreadcrumbProps) {
  const allItems = showHome
    ? [{ label: 'Inicio', href: '/' }, ...items]
    : items

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center', className)}
    >
      <ol
        className="flex items-center flex-wrap gap-1 text-sm"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1
          const isHome = index === 0 && showHome

          return (
            <li
              key={index}
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {/* Separador */}
              {index > 0 && (
                <ChevronRight
                  className="w-4 h-4 mx-2 text-neutral-400 flex-shrink-0"
                  aria-hidden="true"
                />
              )}

              {/* Link o texto */}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    'inline-flex items-center gap-1.5',
                    'text-neutral-600 hover:text-secondary-700',
                    'transition-colors duration-200'
                  )}
                  itemProp="item"
                >
                  {isHome && (
                    <Home className="w-4 h-4" aria-hidden="true" />
                  )}
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span
                  className={cn(
                    'inline-flex items-center gap-1.5',
                    isLast
                      ? 'text-secondary-700 font-medium'
                      : 'text-neutral-600'
                  )}
                  itemProp="name"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {isHome && (
                    <Home className="w-4 h-4" aria-hidden="true" />
                  )}
                  {item.label}
                </span>
              )}

              <meta itemProp="position" content={String(index + 1)} />
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export { Breadcrumb, type BreadcrumbItem, type BreadcrumbProps }

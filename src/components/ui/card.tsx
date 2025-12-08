import { cn } from '@/lib/utils'

// ========================================
// CARD CONTAINER
// ========================================

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'filled'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
}

function Card({
  className,
  variant = 'default',
  padding = 'md',
  hover = true,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    default: 'bg-white shadow-soft',
    elevated: 'bg-white shadow-medium',
    outlined: 'bg-white border border-neutral-200',
    filled: 'bg-neutral-50',
  }

  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden',
        'transition-all duration-300',
        variantStyles[variant],
        paddingStyles[padding],
        hover && 'hover:shadow-medium hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// ========================================
// CARD HEADER
// ========================================

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn('flex flex-col space-y-1.5', className)}
      {...props}
    >
      {children}
    </div>
  )
}

// ========================================
// CARD TITLE
// ========================================

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

function CardTitle({
  className,
  as: Component = 'h3',
  children,
  ...props
}: CardTitleProps) {
  return (
    <Component
      className={cn(
        'text-xl font-semibold text-secondary-700 leading-tight',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

// ========================================
// CARD DESCRIPTION
// ========================================

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

function CardDescription({ className, children, ...props }: CardDescriptionProps) {
  return (
    <p
      className={cn('text-neutral-600 text-sm', className)}
      {...props}
    >
      {children}
    </p>
  )
}

// ========================================
// CARD CONTENT
// ========================================

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  )
}

// ========================================
// CARD FOOTER
// ========================================

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div
      className={cn('flex items-center pt-4', className)}
      {...props}
    >
      {children}
    </div>
  )
}

// ========================================
// CARD IMAGE
// ========================================

interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: 'video' | 'square' | 'card'
  overlay?: boolean
}

function CardImage({
  className,
  aspectRatio = 'card',
  overlay = false,
  alt = '',
  ...props
}: CardImageProps) {
  const aspectStyles = {
    video: 'aspect-video',
    square: 'aspect-square',
    card: 'aspect-[4/3]',
  }

  return (
    <div className={cn('relative overflow-hidden', aspectStyles[aspectRatio])}>
      <img
        className={cn(
          'w-full h-full object-cover',
          'transition-transform duration-500',
          'group-hover:scale-105',
          className
        )}
        alt={alt}
        {...props}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-transparent to-transparent" />
      )}
    </div>
  )
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardImage,
  type CardProps,
}

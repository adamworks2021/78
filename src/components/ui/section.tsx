import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'default' | 'muted' | 'gradient' | 'mystical'
  padding?: 'default' | 'large' | 'small'
}

export function Section({ 
  children, 
  className, 
  id, 
  background = 'default',
  padding = 'default'
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative',
        {
          'bg-white': background === 'default',
          'bg-gray-50': background === 'muted',
          'bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50': background === 'gradient',
          'mystical-gradient': background === 'mystical',
        },
        {
          'py-16 sm:py-24': padding === 'default',
          'py-24 sm:py-32': padding === 'large',
          'py-8 sm:py-12': padding === 'small',
        },
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ 
  title, 
  subtitle, 
  description, 
  centered = true,
  className 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      'mx-auto max-w-2xl',
      centered && 'text-center',
      className
    )}>
      {subtitle && (
        <h2 className="text-base font-semibold leading-7 text-brand-primary">
          {subtitle}
        </h2>
      )}
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </p>
      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  )
}

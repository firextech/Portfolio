'use client'
import { useCountUp } from '@/hooks/useCountUp'

interface Props {
  end: number
  suffix?: string
  label: string
  color?: string
  variant?: 'dark' | 'light'
}

export default function StatCounter({ end, suffix = '', label, color = '#00A1E0', variant = 'dark' }: Props) {
  const { count, ref } = useCountUp(end, 1800, true)

  const containerClass =
    variant === 'light'
      ? 'flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-sf-navy/10 shadow-[0_4px_16px_rgba(3,45,96,0.06)] hover:shadow-[0_12px_28px_rgba(3,45,96,0.12)] hover:-translate-y-1 hover:border-sf-blue/40 transition-all duration-300'
      : 'flex flex-col items-center text-center p-6 rounded-2xl bg-sf-cloud/5 border border-white/5 hover:border-sf-blue/20 transition-all duration-500'

  const labelClass =
    variant === 'light'
      ? 'text-sf-navy/70 text-sm font-mono leading-tight text-center font-medium'
      : 'text-white/40 text-sm font-mono leading-tight text-center'

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={containerClass}
      style={variant === 'light' ? { borderTop: `3px solid ${color}` } : undefined}
    >
      <span
        className="font-display font-bold text-4xl lg:text-5xl leading-none mb-2"
        style={{ color }}
      >
        {count}{suffix}
      </span>
      <span className={labelClass}>{label}</span>
    </div>
  )
}

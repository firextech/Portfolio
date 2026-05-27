'use client'
import { useCountUp } from '@/hooks/useCountUp'

interface Props {
  end: number
  suffix?: string
  label: string
  color?: string
}

export default function StatCounter({ end, suffix = '', label, color = '#00A1E0' }: Props) {
  const { count, ref } = useCountUp(end, 1800, true)

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="flex flex-col items-center text-center p-6 rounded-2xl bg-sf-cloud/5 border border-white/5 hover:border-sf-blue/20 transition-all duration-500">
      <span
        className="font-display font-bold text-4xl lg:text-5xl leading-none mb-2"
        style={{ color }}
      >
        {count}{suffix}
      </span>
      <span className="text-white/40 text-sm font-mono leading-tight text-center">{label}</span>
    </div>
  )
}

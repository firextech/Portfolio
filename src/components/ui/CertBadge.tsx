'use client'
import { useState } from 'react'
import Image from 'next/image'
import type { Certification } from '@/lib/data'

interface Props {
  cert: Certification
}

const CATEGORY_LABELS: Record<string, string> = {
  admin:      'Admin',
  developer:  'Developer',
  consultant: 'Consultant',
  specialist: 'Specialist',
  associate:  'Associate',
}

export default function CertBadge({ cert }: Props) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="relative h-64 cursor-pointer"
      style={{ perspective: '1200px' }}
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="w-full h-full relative transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* ── Front ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-2 p-5"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            background: `linear-gradient(150deg, ${cert.gradient[0]}22, ${cert.gradient[1]}14)`,
            border: `1px solid ${cert.color}44`,
          }}
        >
          {/* Shimmer */}
          <div className="absolute inset-0 rounded-2xl shimmer-badge pointer-events-none" />

          {/* Official badge image */}
          <div className="relative w-20 h-20 flex-shrink-0 drop-shadow-lg">
            <Image
              src={cert.badge}
              alt={cert.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Cert name — dark for legibility on light bg */}
          <p
            className="text-center font-display font-bold text-sm leading-tight px-1"
            style={{ color: cert.color }}
          >
            {cert.name.replace('Salesforce ', '')}
          </p>

          {/* Category pill */}
          <span
            className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium"
            style={{
              background: cert.color + '18',
              color: cert.color,
              border: `1px solid ${cert.color}40`,
            }}
          >
            {CATEGORY_LABELS[cert.category]}
          </span>
        </div>

        {/* ── Back ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-2 p-4"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: `linear-gradient(135deg, ${cert.gradient[0]}, ${cert.gradient[1]})`,
          }}
        >
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={cert.badge}
              alt={cert.name}
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
          <p className="text-white font-display font-bold text-center text-sm leading-tight">
            {cert.name}
          </p>
          {cert.issueYear && (
            <p className="text-white/60 text-xs font-mono">{cert.issueYear}</p>
          )}
          <p className="text-white/75 text-xs text-center leading-relaxed line-clamp-3">
            {cert.description}
          </p>
          <span className="mt-1 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-mono">
            ✓ Certificado por Salesforce
          </span>
        </div>
      </div>
    </div>
  )
}

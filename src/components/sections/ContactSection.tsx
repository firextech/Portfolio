'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { stagger, scaleIn } from '@/lib/motion'
import { CONTACT } from '@/lib/data'

const CARDS = [
  {
    icon: LinkedInIcon,
    title: 'LinkedIn',
    description: 'Conecta conmigo, revisa mi historial profesional completo y todas mis certificaciones Salesforce verificadas.',
    cta: 'Conectar en LinkedIn',
    href: CONTACT.linkedin,
    color: '#0A66C2',
    bg: 'rgba(10,102,194,0.06)',
    border: 'rgba(10,102,194,0.18)',
  },
  {
    icon: TrailheadIcon,
    title: 'Trailblazer Profile',
    description: 'Revisa mi perfil completo en Trailhead: certificaciones verificadas, superbadges y rango Ranger Nivel 4.',
    cta: 'Ver perfil Trailhead',
    href: CONTACT.trailblazer,
    color: '#FF9900',
    bg: 'rgba(255,153,0,0.06)',
    border: 'rgba(255,153,0,0.18)',
  },
]

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="text-sf-blue text-sm font-mono tracking-widest uppercase mb-3">Conectemos</p>
            <h2 className="font-display font-bold text-sf-navy text-4xl lg:text-5xl mb-4">
              ¿Hablamos de
              <br />
              <span className="text-sf-blue">Salesforce?</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Contact cards — 2 columns centered */}
        <motion.div
          ref={ref}
          variants={stagger(0.15)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 gap-6 mb-16"
        >
          {CARDS.map((card) => {
            const Icon = card.icon
            return (
              <motion.a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                className="flex flex-col gap-5 p-8 rounded-2xl border transition-all duration-300 group"
                style={{ background: card.bg, borderColor: card.border }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: card.color + '18' }}
                >
                  <Icon color={card.color} />
                </div>

                <div className="flex-1">
                  <h3 className="font-display font-bold text-sf-navy text-xl mb-2">{card.title}</h3>
                  <p className="text-sf-gray text-sm leading-relaxed">{card.description}</p>
                </div>

                <div
                  className="inline-flex items-center gap-2 font-display font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                  style={{ color: card.color }}
                >
                  {card.cta} →
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Location pill */}
        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-sf-navy/5 border border-sf-navy/10">
              <span className="w-2 h-2 rounded-full bg-sf-blue animate-pulse" />
              <span className="text-sf-navy/60 text-sm font-mono">España · Remoto</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function LinkedInIcon({ color }: { color: string }) {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill={color}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function TrailheadIcon({ color: _ }: { color: string }) {
  return (
    <Image
      src="/assets/trailhead-logo.png"
      alt="Trailhead"
      width={28}
      height={28}
      className="object-contain h-7 w-auto"
    />
  )
}

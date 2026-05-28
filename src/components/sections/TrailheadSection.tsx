'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import StatCounter from '@/components/ui/StatCounter'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { stagger, scaleIn, fadeUp } from '@/lib/motion'
import { TRAILHEAD_STATS } from '@/lib/data'

const STAT_CARDS = [
  { end: TRAILHEAD_STATS.rankLevel, suffix: '', label: 'Nivel\nRanger', color: '#FF9900' },
  { end: TRAILHEAD_STATS.superbadges, suffix: '+', label: 'Super-\nbadges', color: '#1B96FF' },
  { end: TRAILHEAD_STATS.modules, suffix: '+', label: 'Módulos\ncompletados', color: '#00A1E0' },
]

export default function TrailheadSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section
      id="trailhead"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #032D60 100%)' }}
    >
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sf-orange/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Flame + rank */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex flex-col items-center text-center"
          >
            {/* Trailhead logo — breathing on the image itself, no box */}
            <motion.div
              className="mb-8"
              animate={{
                scale: [1, 1.05, 1],
                filter: [
                  'drop-shadow(0 0 18px rgba(255,153,0,0.25))',
                  'drop-shadow(0 0 48px rgba(255,153,0,0.70))',
                  'drop-shadow(0 0 18px rgba(255,153,0,0.25))',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/assets/TrailheadRecorte.png"
                alt="Trailhead"
                width={280}
                height={140}
                className="object-contain max-w-full"
              />
            </motion.div>

            {/* Rank */}
            <div className="mb-4">
              <p className="font-mono text-sf-orange text-sm tracking-widest uppercase mb-2">Rango Trailhead</p>
              <h3 className="font-display font-bold text-white text-5xl">{TRAILHEAD_STATS.rank}</h3>
              <p className="text-white/40 text-sm font-mono mt-2">Nivel {TRAILHEAD_STATS.rankLevel} · Top Trailblazers</p>
            </div>

            {/* Trailhead link */}
            <a
              href={TRAILHEAD_STATS.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sf-orange text-white font-display font-semibold text-sm hover:bg-sf-orange/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,153,0,0.4)]"
            >
              Ver perfil Trailblazer →
            </a>
          </motion.div>

          {/* Right: Stats + info */}
          <div>
            <ScrollReveal>
              <div className="mb-8">
                <p className="text-sf-orange text-sm font-mono tracking-widest uppercase mb-3">Aprendizaje continuo</p>
                <h2 className="font-display font-bold text-white text-4xl lg:text-5xl mb-4">
                  Trailhead
                  <br />
                  <span className="text-sf-orange">Stats</span>
                </h2>
                <p className="text-white/40 leading-relaxed">
                  Trailhead es la plataforma de formación gratuita de Salesforce. Con más
                  de 40 superbadges completados y rango Ranger nivel 4, mantengo mis
                  conocimientos actualizados con las últimas innovaciones de Salesforce.
                </p>
              </div>
            </ScrollReveal>

            {/* Stat counters grid */}
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {STAT_CARDS.map((stat) => (
                <motion.div key={stat.label} variants={scaleIn}>
                  <StatCounter {...stat} />
                </motion.div>
              ))}
            </motion.div>

            {/* Achievement badges */}
            <ScrollReveal delay={0.4}>
              <div className="space-y-3">
                {[
                  { iconSrc: '/icons/trophy.svg', title: 'Ranger', desc: 'El rango más alto de Trailhead, nivel 4' },
                  { iconSrc: '/icons/bolt.svg',   title: 'Superbadge Champion', desc: '40+ superbadges de Salesforce completados' },
                  { iconSrc: '/icons/robot.svg',  title: 'Einstein AI Expert', desc: 'Especializado en AI y Einstein Analytics' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-sf-orange/20 transition-all duration-300"
                  >
                    <Image src={item.iconSrc} alt="" width={28} height={28} className="w-7 h-7" />
                    <div>
                      <p className="font-display font-semibold text-white text-sm">{item.title}</p>
                      <p className="text-white/40 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { EXPERIENCES } from '@/lib/data'

const MAIN_EXPERIENCES = EXPERIENCES.filter((e) => !e.outsideEcosystem)
const OUTSIDE_EXPERIENCES = EXPERIENCES.filter((e) => e.outsideEcosystem)

export default function ExperienceSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [showOutside, setShowOutside] = useState(false)

  return (
    <section
      id="experiencia"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #032D60 0%, #041E42 100%)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-sf-blue blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-sf-electric blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="text-sf-blue text-sm font-mono tracking-widest uppercase mb-3">Trayectoria</p>
            <h2 className="font-display font-bold text-white text-4xl lg:text-5xl">
              Experiencia
              <br />
              <span className="text-sf-blue">Profesional</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-sf-blue/20">
            <motion.div
              className="w-full bg-sf-blue origin-top"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              style={{ height: '100%' }}
            />
          </div>

          <div className="space-y-16 lg:space-y-24">
            {/* Experiencia dentro del ecosistema Salesforce */}
            {MAIN_EXPERIENCES.map((exp, i) => (
              <TimelineItem key={exp.company} exp={exp} index={i} inView={inView} />
            ))}

            {/* Experiencia fuera del ecosistema Salesforce */}
            <AnimatePresence initial={false}>
              {showOutside &&
                OUTSIDE_EXPERIENCES.map((exp, i) => (
                  <TimelineItem
                    key={exp.company}
                    exp={exp}
                    index={MAIN_EXPERIENCES.length + i}
                    inView
                    secondary
                  />
                ))}
            </AnimatePresence>
          </div>

          {/* Toggle button */}
          <div className="relative z-10 flex justify-center mt-16 pl-16 lg:pl-0">
            <button
              onClick={() => setShowOutside((v) => !v)}
              aria-expanded={showOutside}
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-sf-blue/25 bg-white/5 text-white/70 text-sm font-display font-medium hover:border-sf-blue/50 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-sf-blue/60 group-hover:bg-sf-blue transition-colors" />
              {showOutside
                ? 'Ocultar experiencia fuera de Salesforce'
                : 'Ver experiencia laboral fuera de Salesforce'}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`w-4 h-4 transition-transform duration-300 ${showOutside ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Top diagonal clip from About */}
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}
      />
    </section>
  )
}

function TimelineItem({
  exp,
  index,
  inView,
  secondary = false,
}: {
  exp: typeof EXPERIENCES[0]
  index: number
  inView: boolean
  secondary?: boolean
}) {
  const isLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: secondary ? 0.85 : 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: secondary ? 0 : 0.5 + index * 0.25 }}
      className={`relative flex flex-col lg:flex-row lg:gap-8 pl-16 lg:pl-0 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 lg:left-1/2 top-8 -translate-x-1/2 z-10">
        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
          exp.current ? 'bg-sf-blue border-sf-blue' : 'bg-transparent border-sf-blue/60'
        }`}>
          {exp.current && <span className="w-2 h-2 rounded-full bg-white animate-ping absolute" />}
        </div>
      </div>

      {/* Date on opposite side (desktop) */}
      <div className={`hidden lg:flex w-[calc(50%-2rem)] items-start ${isLeft ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
        <div className="text-right">
          <span className="font-mono text-sf-blue text-sm">{exp.startDate} — {exp.endDate}</span>
          <p className="text-white/30 text-xs mt-1">{exp.location}</p>
          {exp.type === 'internship' && (
            <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-sf-orange/15 border border-sf-orange/30 text-sf-orange text-xs font-mono">
              Prácticas
            </span>
          )}
          {exp.type === 'freelance' && (
            <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono">
              Autónomo
            </span>
          )}
        </div>
      </div>

      {/* Card */}
      <div className="lg:w-[calc(50%-2rem)] lg:pl-8 lg:pr-0">
        {/* Mobile date */}
        <div className="flex items-center gap-2 mb-3 lg:hidden">
          <span className="font-mono text-sf-blue text-xs">{exp.startDate} — {exp.endDate}</span>
          {exp.type === 'internship' && (
            <span className="px-2 py-0.5 rounded-full bg-sf-orange/15 border border-sf-orange/30 text-sf-orange text-xs font-mono">
              Prácticas
            </span>
          )}
          {exp.type === 'freelance' && (
            <span className="px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono">
              Autónomo
            </span>
          )}
        </div>

        <div
          className={`rounded-2xl border p-6 transition-all duration-500 group ${
            secondary
              ? 'border-white/10 bg-white/[0.03] hover:border-white/20'
              : 'border-sf-blue/10 bg-white/5 hover:border-sf-blue/30 hover:bg-white/8'
          }`}
        >
          {/* Company header */}
          <div className="flex items-start justify-between mb-4 gap-3">
            <div>
              <h3 className={`font-display font-bold text-xl mb-1 ${secondary ? 'text-white/80' : 'text-white'}`}>{exp.role}</h3>
              <p className={`font-display font-semibold ${secondary ? 'text-white/50' : 'text-sf-blue'}`}>{exp.company}</p>
            </div>
            {exp.current && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sf-blue/15 border border-sf-blue/30 text-sf-blue text-xs font-mono flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-sf-blue animate-pulse" />
                Actual
              </span>
            )}
            {secondary && (
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/15 text-white/40 text-xs font-mono flex-shrink-0">
                Fuera de Salesforce
              </span>
            )}
          </div>

          {/* Description */}
          <ul className="space-y-1.5 mb-5">
            {exp.description.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-white/50 text-sm leading-relaxed">
                <span className="text-sf-blue mt-1 flex-shrink-0">▸</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-1.5">
            {exp.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded-lg bg-sf-navy border border-sf-blue/15 text-white/60 text-xs font-mono group-hover:border-sf-blue/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

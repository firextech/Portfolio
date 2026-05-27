'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { stagger, fadeUp } from '@/lib/motion'
import { SKILLS, SKILL_CATEGORIES, type Skill } from '@/lib/data'

const CATEGORIES = Object.keys(SKILL_CATEGORIES) as Array<keyof typeof SKILL_CATEGORIES>

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof SKILL_CATEGORIES | 'all'>('all')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const showingIA = activeCategory === 'ia'

  const filtered = activeCategory === 'all'
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="text-sf-blue text-sm font-mono tracking-widest uppercase mb-3">Tecnologías</p>
            <h2 className="font-display font-bold text-sf-navy text-4xl lg:text-5xl mb-4">
              Stack &amp; <span className="text-sf-blue">Skills</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Category filter */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-sm font-display font-medium transition-all duration-300 ${
                activeCategory === 'all' ? 'bg-sf-navy text-white' : 'bg-sf-cloud text-sf-navy hover:bg-sf-gray/10'
              }`}
            >
              Todos
            </button>
            {CATEGORIES.map((cat) => {
              const meta = SKILL_CATEGORIES[cat]
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-xl text-sm font-display font-medium transition-all duration-300"
                  style={{
                    background: activeCategory === cat ? meta.color : meta.bg,
                    color: activeCategory === cat ? 'white' : meta.color,
                    border: `1px solid ${meta.color}30`,
                  }}
                >
                  {meta.label}
                </button>
              )
            })}
          </div>
        </ScrollReveal>

        {/* Einstein callout — only visible when IA filter active */}
        <AnimatePresence>
          {showingIA && (
            <motion.div
              key="einstein-callout"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden mb-10"
            >
              <div
                className="relative rounded-2xl p-6 flex items-center gap-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,153,0,0.08), rgba(232,69,124,0.06))',
                  border: '1px solid rgba(255,153,0,0.2)',
                }}
              >
                <div className="flex-shrink-0 w-28 h-28 relative">
                  <Image
                    src="/assets/einstein.png"
                    alt="Einstein — Salesforce AI"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-mono text-sf-orange text-xs tracking-widest uppercase mb-1">Salesforce Einstein</p>
                  <h3 className="font-display font-bold text-sf-navy text-xl mb-2">
                    IA aplicada al CRM
                  </h3>
                  <p className="text-sf-gray text-sm leading-relaxed max-w-xl">
                    Dominio de herramientas de IA generativa (ChatGPT, Claude, Copilot) aplicadas al desarrollo
                    Salesforce. Especialista en la creación de procesos Python que interactúan con el ecosistema
                    Salesforce vía APIs y automatizaciones inteligentes.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skills grid */}
        <motion.div
          ref={ref}
          variants={stagger(0.06)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((skill) => (
            <SkillBar key={skill.name} skill={skill} inView={inView} />
          ))}
        </motion.div>

        {/* Legend */}
        <ScrollReveal delay={0.4} className="mt-10 flex flex-wrap justify-center gap-6">
          {(['Intermedio', 'Avanzado', 'Experto'] as const).map((level) => (
            <div key={level} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                level === 'Experto' ? 'bg-sf-blue' : level === 'Avanzado' ? 'bg-sf-electric/70' : 'bg-sf-gray'
              }`} />
              <span className="text-sf-gray text-xs font-mono">{level}</span>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}

function SkillBar({ skill, inView }: { skill: Skill; inView: boolean }) {
  const meta = SKILL_CATEGORIES[skill.category]
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (inView && !animated) {
      const t = setTimeout(() => setAnimated(true), 200)
      return () => clearTimeout(t)
    }
  }, [inView, animated])

  return (
    <motion.div
      variants={fadeUp}
      className="p-5 rounded-2xl border border-sf-gray/10 hover:border-sf-blue/20 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(3,45,96,0.08)] group"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="font-display font-semibold text-sf-navy text-sm">{skill.name}</p>
          <span className="text-xs font-mono mt-0.5 inline-block" style={{ color: meta.color }}>
            {meta.label}
          </span>
        </div>
        <span
          className="px-2 py-0.5 rounded-full text-xs font-mono"
          style={{ background: meta.bg, color: meta.color, border: `1px solid ${meta.color}20` }}
        >
          {skill.level}
        </span>
      </div>

      <div className="h-1.5 rounded-full bg-sf-cloud overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animated ? `${skill.levelPercent}%` : '0%',
            background: `linear-gradient(90deg, ${meta.color}, ${meta.color}CC)`,
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </div>

      <div className="flex justify-end mt-1">
        <span className="text-xs font-mono text-sf-gray/50">{skill.levelPercent}%</span>
      </div>
    </motion.div>
  )
}

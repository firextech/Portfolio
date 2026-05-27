'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import StatCounter from '@/components/ui/StatCounter'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { fadeLeft, fadeRight, stagger, fadeUp } from '@/lib/motion'
import { CONTACT } from '@/lib/data'

const STATS = [
  { end: 3, suffix: '+', label: 'Años de\nexperiencia', color: '#00A1E0' },
  { end: 8,  suffix: '',  label: 'Certificaciones\nSalesforce',  color: '#1B96FF' },
  { end: 4,  suffix: '',  label: 'Nivel Ranger\nTrailhead',       color: '#FF9900' },
  { end: 35, suffix: '+', label: 'Superbadges\ncompletados',      color: '#7B5EA7' },
]


export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="sobre-mi" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="text-sf-blue text-sm font-mono tracking-widest uppercase mb-3">Sobre mí</p>
            <h2 className="font-display font-bold text-sf-navy text-4xl lg:text-5xl">
              Apasionado del ecosistema
              <br />
              <span className="text-sf-blue">Salesforce</span>
            </h2>
          </div>
        </ScrollReveal>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Stats grid + badges */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="grid grid-cols-2 gap-4 mb-8">
              {STATS.map((stat) => (
                <StatCounter key={stat.label} {...stat} />
              ))}
            </div>

            {/* Cambridge B2 English badge — prominent */}
            <div className="mb-8">
              <div
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,75,130,0.07), rgba(0,75,130,0.03))',
                  borderColor: 'rgba(0,75,130,0.25)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-base font-bold flex-shrink-0"
                  style={{ background: '#004B82', color: '#fff' }}
                >
                  C
                </div>
                <div>
                  <p className="font-display font-bold text-sm" style={{ color: '#004B82' }}>
                    Cambridge English B2 First
                  </p>
                  <p className="text-xs font-mono" style={{ color: 'rgba(0,75,130,0.6)' }}>
                    Certificado por Cambridge Assessment · Upper-Intermediate
                  </p>
                </div>
                <span
                  className="ml-auto px-2.5 py-1 rounded-full text-xs font-mono font-semibold flex-shrink-0"
                  style={{ background: '#004B82', color: '#fff' }}
                >
                  B2
                </span>
              </div>
            </div>

            {/* Profile photo + mini card */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-sf-cloud">
              <Image
                src="/profile.jpg"
                alt="Diego Gil Jiménez"
                fill
                className="object-cover object-center"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-sf-navy/90 to-transparent">
                <p className="text-white font-display font-semibold">Diego Gil Jiménez</p>
                <p className="text-white/60 text-sm">Salesforce Developer · VIEWNEXT (IBM)</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio text */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <div className="space-y-4 text-sf-navy/70 leading-relaxed text-base">
              <p>
                Soy un <strong className="text-sf-navy">Desarrollador y Consultor Salesforce</strong> con sólida
                experiencia en la gestión integral de organizaciones CRM, desde la administración y configuración
                funcional hasta el desarrollo de soluciones técnicas complejas que generan valor de negocio real.
              </p>
              <p>
                En <strong className="text-sf-navy">VIEWNEXT (IBM)</strong> diseño e implemento soluciones
                Salesforce personalizadas para clientes enterprise, abarcando automatización avanzada con Flows,
                desarrollo Apex, integraciones con sistemas externos e implementaciones completas de Service Cloud.
              </p>
              <p>
                Con <strong className="text-sf-navy">8 certificaciones oficiales de Salesforce</strong>, rango
                Ranger nivel 4 en Trailhead y más de 35 superbadges completados, combino solidez técnica
                con visión funcional para entregar soluciones robustas, escalables y alineadas con los objetivos
                de negocio de cada cliente.
              </p>
              <p>
                En 2026, mi foco está en la <strong className="text-sf-navy">adopción de Salesforce Einstein</strong>{' '}
                e inteligencia artificial aplicada a CRM, automatizaciones predictivas y arquitecturas de
                integración que conectan Salesforce con el ecosistema tecnológico empresarial.
              </p>
            </div>

            {/* Tech highlights */}
            <div className="pt-4 border-t border-sf-cloud">
              <p className="text-sf-navy/40 text-xs font-mono uppercase tracking-widest mb-3">Especialidades clave</p>
              <div className="flex flex-wrap gap-2">
                {['Apex', 'Flows', 'Service Cloud', 'LWC', 'SOQL', 'REST API', 'Einstein AI', 'Administración'].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-sf-blue/8 text-sf-blue text-sm font-display font-medium border border-sf-blue/15"
                    style={{ background: 'rgba(0,161,224,0.06)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links row */}
            <div className="flex gap-4 pt-2">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sf-blue text-sm font-display font-semibold hover:underline"
              >
                Ver LinkedIn →
              </a>
              <a
                href={CONTACT.trailblazer}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sf-orange text-sm font-display font-semibold hover:underline"
              >
                Ver Trailhead →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

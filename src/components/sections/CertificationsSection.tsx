'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CertBadge from '@/components/ui/CertBadge'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { stagger, scaleIn } from '@/lib/motion'
import { CERTIFICATIONS } from '@/lib/data'

export default function CertificationsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="certificaciones" className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">

      {/* Einstein — asomándose por la izquierda, inclinado +25° con flotación */}
      <div
        className="absolute left-0 top-0 w-40 lg:w-52 pointer-events-none hidden lg:block"
        style={{ zIndex: 2, animation: 'float 3.5s ease-in-out infinite', animationDelay: '1s' }}
      >
        <motion.div
          initial={{ opacity: 0, x: -110 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ rotate: '25deg', transformOrigin: 'bottom left' }}
        >
          <Image
            src="/assets/einstein.png"
            alt="Einstein — Salesforce AI"
            width={208}
            height={260}
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6" style={{ zIndex: 1 }}>

        {/* Header */}
        <ScrollReveal>
          <div className="mb-4 text-center">
            <p className="text-sf-blue text-sm font-mono tracking-widest uppercase mb-3">Credenciales oficiales</p>
            <h2 className="font-display font-bold text-sf-navy text-4xl lg:text-5xl mb-4">
              8 Certificaciones
              <br />
              <span className="text-sf-blue">Salesforce</span>
            </h2>
            <p className="text-sf-gray max-w-xl mx-auto text-base leading-relaxed">
              Pasa el ratón por encima de cada badge para conocer los detalles.
              Certificaciones obtenidas entre 2022 y 2024.
            </p>
          </div>
        </ScrollReveal>

        {/* Certs strip highlight */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Admin', 'Developer', 'Consultant', 'AI Specialist'].map((cat) => (
              <span key={cat} className="px-4 py-1.5 rounded-full border border-sf-blue/20 text-sf-blue text-xs font-mono bg-sf-blue/5">
                {cat}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Badge grid */}
        <motion.div
          ref={ref}
          variants={stagger(0.07, 0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div key={cert.id} variants={scaleIn}>
              <CertBadge cert={cert} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <ScrollReveal delay={0.5}>
          <p className="text-center text-sf-gray/60 text-xs font-mono mt-10">
            Verificado en Salesforce Trailhead · trailblazer.salesforce.com/dgiljimnez
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}


'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CertBadge from '@/components/ui/CertBadge'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { stagger, scaleIn } from '@/lib/motion'
import { CERTIFICATIONS, OTHER_CERTIFICATIONS } from '@/lib/data'

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
          <div className="mb-12 text-center">
            <p className="text-sf-blue text-sm font-mono tracking-widest uppercase mb-3">Credenciales oficiales</p>
            <h2 className="font-display font-bold text-sf-navy text-4xl lg:text-5xl mb-4">
              8 Certificaciones
              <br />
              <span className="text-sf-blue">Salesforce</span>
            </h2>
            <p className="text-sf-gray max-w-xl mx-auto text-base leading-relaxed">
              Pasa el ratón por encima de cada badge para conocer los detalles.
              Certificaciones obtenidas.
            </p>
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

        {/* ── Otras certificaciones y formación ── */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20">
            <div className="mb-8 text-center">
              <p className="text-sf-orange text-sm font-mono tracking-widest uppercase mb-3">
                Otras certificaciones y formación
              </p>
              <h3 className="font-display font-bold text-sf-navy text-2xl lg:text-3xl">
                Más allá de Salesforce
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {OTHER_CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.name}
                  className={`relative rounded-2xl p-5 flex items-start gap-4 border transition-all duration-300 hover:-translate-y-1 ${
                    cert.highlight ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                  style={{
                    background: cert.highlight
                      ? `linear-gradient(135deg, ${cert.color}12, ${cert.color}05)`
                      : '#ffffff',
                    borderColor: cert.highlight ? `${cert.color}40` : 'rgba(3,45,96,0.1)',
                    boxShadow: '0 4px 16px rgba(3,45,96,0.04)',
                  }}
                >
                  {/* Logo / inicial */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border"
                    style={{ borderColor: `${cert.color}25` }}
                  >
                    {cert.logo ? (
                      <Image
                        src={cert.logo}
                        alt={cert.issuer}
                        width={40}
                        height={40}
                        className="object-contain h-9 w-auto"
                      />
                    ) : (
                      <span
                        className="font-display font-bold text-lg"
                        style={{ color: cert.color }}
                      >
                        {cert.issuer.replace(/^Impartido por\s*/i, '').charAt(0)}
                      </span>
                    )}
                  </div>

                  <div className="min-w-0">
                    <p className="font-display font-bold text-sf-navy text-sm leading-tight">
                      {cert.name}
                    </p>
                    <p className="text-xs font-mono mt-1" style={{ color: cert.color }}>
                      {cert.issuer}
                    </p>
                    {cert.detail && (
                      <p className="text-sf-gray/70 text-xs mt-1.5 leading-relaxed">{cert.detail}</p>
                    )}
                  </div>

                  {cert.highlight && (
                    <span
                      className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-mono font-semibold"
                      style={{ background: cert.color, color: '#fff' }}
                    >
                      B2
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

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


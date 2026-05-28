'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { stagger, heroTitle, fadeUp } from '@/lib/motion'
import { CONTACT } from '@/lib/data'

const LightningCanvas = dynamic(() => import('../canvas/LightningCanvas'), { ssr: false })

const STATS = [
  { value: '3+',  label: 'Años de\nexperiencia' },
  { value: '8',   label: 'Certificaciones\nSalesforce' },
  { value: '40+', label: 'Superbadges\nen Trailhead' },
]

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grain-overlay"
      style={{ background: 'linear-gradient(135deg, #032D60 0%, #0B1F3A 50%, #041E42 100%)' }}
    >
      <LightningCanvas />

      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(0,161,224,0.08) 0%, transparent 70%)' }}
      />

      {/* Cloud decoration (bottom-left) */}
      <div className="absolute left-0 bottom-20 w-80 h-48 z-[1] opacity-10 pointer-events-none">
        <Image src="/assets/cloud-2.svg" alt="" fill className="object-contain" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center w-full">

        {/* Left: Text */}
        <motion.div variants={stagger(0.12, 0.3)} initial="hidden" animate="visible">

          {/* Main headline */}
          <motion.h1
            variants={heroTitle}
            className="font-display font-bold text-white mb-4 leading-[1.05]"
            style={{ fontSize: 'clamp(48px, 7vw, 88px)' }}
          >
            Diego Gil
            <br />
            <span className="text-sf-blue">Jiménez</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={fadeUp} className="font-display font-semibold text-white/60 text-lg mb-3">
            Salesforce Developer & Consultant
          </motion.p>
          <motion.p variants={fadeUp} className="text-white/40 text-base mb-10 max-w-md leading-relaxed">
            Transformando procesos empresariales en{' '}
            <span className="text-white/60">VIEWNEXT · IBM</span>.
            <br />
            Apex, Flows, Service/Sales/Experience Cloud y tareas de consultoría.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-sf-blue text-white font-display font-semibold text-sm hover:bg-sf-electric transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,161,224,0.4)]"
            >
              <LinkedInIcon />
              Conectar en LinkedIn
            </a>
            <a
              href={CONTACT.trailblazer}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-display font-semibold text-sm hover:border-sf-orange hover:bg-sf-orange/10 transition-all duration-300"
            >
              <Image src="/assets/TrailheadRecorte.png" alt="Trailhead" width={18} height={18} className="object-contain h-[18px] w-auto" />
              Ver Trailhead
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={stagger(0.08, 0.1)} className="flex flex-wrap gap-8">
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="flex flex-col">
                <span className="font-display font-bold text-3xl text-sf-blue leading-none">{stat.value}</span>
                <span className="text-white/40 text-xs mt-1 font-mono whitespace-pre-line">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Photo + Astro mascot */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative flex items-center justify-center"
        >
          {/* Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-sf-blue/10 blur-3xl" />

          {/* Profile photo */}
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 animate-float">
            <div className="absolute inset-0 rounded-full animate-pulse-glow" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-sf-blue/40 ring-4 ring-sf-blue/10">
              <Image
                src="/profile.jpg"
                alt="Diego Gil Jiménez"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Badge: Ranger */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 12 }}
              className="absolute -bottom-4 -left-4 bg-sf-navy border border-sf-orange/30 rounded-xl px-4 py-2 flex items-center gap-2"
            >
              <Image src="/icons/flame.svg" alt="" width={20} height={20} className="w-5 h-5" />
              <div>
                <p className="text-white text-xs font-display font-bold">Ranger Nv.4</p>
                <p className="text-white/40 text-xs font-mono">Trailhead</p>
              </div>
            </motion.div>

            {/* Badge: Certs */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.4, type: 'spring', stiffness: 200, damping: 12 }}
              className="absolute -top-4 -right-4 bg-sf-navy border border-sf-blue/30 rounded-xl px-4 py-2 flex items-center gap-2"
            >
              <Image src="/icons/medal.svg" alt="" width={20} height={20} className="w-5 h-5" />
              <div>
                <p className="text-white text-xs font-display font-bold">8 Certs</p>
                <p className="text-white/40 text-xs font-mono">Certificado</p>
              </div>
            </motion.div>
          </div>

          {/* Official Astro mascot — bottom right, floating */}
          <motion.div
            initial={{ opacity: 0, x: 60, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -right-4 lg:-right-10 bottom-0 w-32 lg:w-44 hidden lg:block"
            style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '0.5s' }}
          >
            <Image
              src="/assets/astro-official.png"
              alt="Astro — Salesforce Mascot"
              width={176}
              height={220}
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30 hover:text-sf-blue transition-colors duration-300"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-6"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.button>

      {/* Bottom diagonal clip */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 z-10"
        style={{ background: '#FFFFFF', clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
      />
    </section>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}


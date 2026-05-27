'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useActiveSection } from '@/hooks/useActiveSection'
import { mobileMenuVariants, fadeDown } from '@/lib/motion'

const NAV_LINKS = [
  { id: 'sobre-mi',        label: 'Sobre Mí' },
  { id: 'experiencia',     label: 'Experiencia' },
  { id: 'certificaciones', label: 'Certificaciones' },
  { id: 'skills',          label: 'Skills' },
  { id: 'trailhead',       label: 'Trailhead' },
  { id: 'contacto',        label: 'Contacto' },
]

const SECTION_IDS = NAV_LINKS.map((l) => l.id)

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScrollProgress()
  const activeSection = useActiveSection(SECTION_IDS)
  const scrolled = scrollY > 80

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        variants={fadeDown}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass border-b border-sf-blue/10 py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2.5"
          >
            <div className="bg-white rounded-lg px-2 py-1 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
              <Image
                src="/assets/salesforce-logo-legit.png"
                alt="Salesforce"
                width={90}
                height={28}
                className="object-contain h-7 w-auto"
              />
            </div>
            <span className="hidden sm:block text-white/60 font-display font-medium text-xs group-hover:text-white/90 transition-colors duration-300">
              Diego Gil
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 font-display ${
                    activeSection === link.id
                      ? 'text-sf-blue bg-sf-blue/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/diego-giljiménez-941595240"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-sf-blue text-white text-sm font-display font-semibold hover:bg-sf-electric transition-colors duration-300"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Menú"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 glass flex flex-col items-center justify-center gap-2 lg:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: i * 0.07 } }}
                onClick={() => scrollTo(link.id)}
                className={`text-2xl font-display font-bold py-3 px-8 rounded-xl transition-all duration-300 ${
                  activeSection === link.id ? 'text-sf-blue' : 'text-white hover:text-sf-blue'
                }`}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
              href="https://www.linkedin.com/in/diego-giljiménez-941595240"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 px-8 py-3 rounded-xl bg-sf-blue text-white font-display font-semibold hover:bg-sf-electric transition-colors"
            >
              <LinkedInIcon />
              LinkedIn
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

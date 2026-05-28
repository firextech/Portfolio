import Image from 'next/image'
import { CONTACT } from '@/lib/data'


export default function Footer() {
  return (
    <footer className="bg-sf-navy border-t border-sf-blue/10 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-lg px-2 py-0.5">
            <Image
              src="/assets/salesforce-logo-legit.png"
              alt="Salesforce"
              width={72}
              height={22}
              className="object-contain h-5 w-auto"
            />
          </div>
          <span className="text-white/40 font-display text-sm">
            Diego Gil Jiménez · Salesforce Developer
          </span>
        </div>
        <p className="text-white/30 text-sm font-mono">
          © {new Date().getFullYear()} · Construido con Next.js ☁
        </p>
        <div className="flex items-center gap-4">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-sf-blue transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href={CONTACT.trailblazer}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-40 hover:opacity-90 transition-opacity duration-300"
            aria-label="Trailblazer"
          >
            <Image
              src="/assets/TrailheadRecorte.png"
              alt="Trailhead"
              width={24}
              height={24}
              className="object-contain h-6 w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

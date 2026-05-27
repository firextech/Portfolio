'use client'
import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  alpha: number
  radius: number
  color: string
}

const COLORS = ['#1B96FF', '#00A1E0', '#1B96FF', '#00A1E0', '#FF9900']

export default function LightningCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Respect reduced-motion: skip the animation entirely.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 150 : 700

    let animId: number | null = null
    let particles: Particle[] = []
    let arcs: Array<{ x1: number; y1: number; x2: number; y2: number; life: number }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
      radius: Math.random() * 1.5 + 0.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }))

    const spawnArc = () => {
      if (Math.random() > 0.3) return
      const p1 = particles[Math.floor(Math.random() * particles.length)]
      const p2 = particles[Math.floor(Math.random() * particles.length)]
      const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y)
      if (dist < 80) arcs.push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y, life: 1 })
    }

    let frame = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
      })

      arcs = arcs.filter((a) => a.life > 0)
      arcs.forEach((a) => {
        ctx.beginPath()
        ctx.moveTo(a.x1, a.y1)
        ctx.lineTo(a.x2, a.y2)
        ctx.strokeStyle = '#1B96FF'
        ctx.globalAlpha = a.life * 0.6
        ctx.lineWidth = 0.8
        ctx.stroke()
        a.life -= 0.08
      })

      ctx.globalAlpha = 1

      if (frame % 8 === 0) spawnArc()
      frame++
      animId = requestAnimationFrame(draw)
    }

    const start = () => {
      if (animId == null) animId = requestAnimationFrame(draw)
    }
    const stop = () => {
      if (animId != null) {
        cancelAnimationFrame(animId)
        animId = null
      }
    }

    // Only animate while the hero canvas is actually on screen — saves
    // battery/CPU and keeps scrolling fluid on mobile.
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    )
    io.observe(canvas)

    const onVisibility = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stop()
      io.disconnect()
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  )
}

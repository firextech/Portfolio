'use client'
import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const ringPosRef = useRef({ x: 0, y: 0 })

  // Only enable on devices with a real pointer (desktop). Never on touch/mobile.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setEnabled(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setEnabled(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
    }

    let frameId: number
    const animateRing = () => {
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.12
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.12
      ring.style.transform = `translate(${ringPosRef.current.x - 20}px, ${ringPosRef.current.y - 20}px)`
      frameId = requestAnimationFrame(animateRing)
    }
    frameId = requestAnimationFrame(animateRing)

    const onEnterLink = () => {
      dot.style.transform += ' scale(2)'
      ring.style.borderColor = '#FF9900'
      ring.style.width = '50px'
      ring.style.height = '50px'
    }
    const onLeaveLink = () => {
      ring.style.borderColor = '#00A1E0'
      ring.style.width = '40px'
      ring.style.height = '40px'
    }

    const links = document.querySelectorAll('a, button')
    links.forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frameId)
      links.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterLink)
        el.removeEventListener('mouseleave', onLeaveLink)
      })
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-sf-blue pointer-events-none mix-blend-screen"
        style={{ transition: 'none' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] w-10 h-10 rounded-full border-2 border-sf-blue pointer-events-none"
        style={{ transition: 'width 0.3s, height 0.3s, border-color 0.3s' }}
      />
    </>
  )
}

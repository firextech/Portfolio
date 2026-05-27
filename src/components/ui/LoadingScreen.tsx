'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer)
          setTimeout(() => setVisible(false), 300)
          return 100
        }
        return p + 4
      })
    }, 40)
    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[10000] bg-sf-navy flex flex-col items-center justify-center"
        >
          {/* Monogram */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="mb-8"
          >
            <div className="w-20 h-20 rounded-2xl bg-sf-blue flex items-center justify-center">
              <span className="font-display font-bold text-white text-3xl tracking-wide">DGJ</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-white/60 font-display text-sm tracking-widest uppercase mb-10"
          >
            Diego Gil Jiménez
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-sf-blue rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.04 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

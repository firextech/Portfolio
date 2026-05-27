import type { Variants } from 'framer-motion'

const EXPO_OUT = [0.16, 1, 0.3, 1] as const
const SPRING_OUT = [0.34, 1.56, 0.64, 1] as const

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EXPO_OUT } },
}

export const fadeDown: Variants = {
  hidden:  { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EXPO_OUT } },
}

export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EXPO_OUT } },
}

export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EXPO_OUT } },
}

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: SPRING_OUT } },
}

export const stagger = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden:  {},
  visible: { transition: { staggerChildren, delayChildren } },
})

export const heroTitle: Variants = {
  hidden:  { opacity: 0, y: 60, filter: 'blur(8px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.9, ease: EXPO_OUT },
  },
}

export const navbarVariants: Variants = {
  hidden:  { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EXPO_OUT } },
}

export const mobileMenuVariants: Variants = {
  hidden:  { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EXPO_OUT } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } },
}

export const cardHover = {
  rest:  { y: 0, boxShadow: '0 8px 24px rgba(3,45,96,0.12)' },
  hover: { y: -8, boxShadow: '0 24px 48px rgba(3,45,96,0.22)', transition: { duration: 0.35, ease: EXPO_OUT } },
}

export const loadingVariants: Variants = {
  initial: { opacity: 1 },
  exit:    { opacity: 0, transition: { duration: 0.6, ease: EXPO_OUT, delay: 0.2 } },
}

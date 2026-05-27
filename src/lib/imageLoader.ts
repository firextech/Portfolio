export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  const base = process.env.NODE_ENV === 'production' ? '/Portfolio' : ''
  return `${base}${src}`
}

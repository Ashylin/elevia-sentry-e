import { useEffect, useRef } from 'react'

/**
 * Tracks how far a tall "scroll spacer" container has been scrolled through,
 * as a 0..1 progress value. Written to a ref (not state) so consumers driving
 * a three.js scene via useFrame can read it every frame without triggering
 * React re-renders on scroll.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const containerRef = useRef<T>(null)
  const progressRef = useRef(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let raf = 0

    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const raw = total > 0 ? -rect.top / total : 0
      progressRef.current = Math.min(1, Math.max(0, raw))
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return { containerRef, progressRef }
}

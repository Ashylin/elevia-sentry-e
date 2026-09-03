import { useEffect, useRef, useState } from 'react'
import './VideoBackdrop.css'

export default function VideoBackdrop() {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setActive(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      rootMargin: '200px 0px',
    })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (active) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [active])

  return (
    <div className="video-backdrop" aria-hidden="true" ref={wrapperRef}>
      <video
        className="video-backdrop__video"
        ref={videoRef}
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/media/ambient-signal.webm" type="video/webm" />
        <source src="/media/ambient-signal.mp4" type="video/mp4" />
      </video>
      <div className="video-backdrop__scrim" />
    </div>
  )
}

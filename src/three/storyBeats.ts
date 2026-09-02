import * as THREE from 'three'

export interface Stop {
  key: 'geophone' | 'think' | 'warn' | 'solar'
  start: number
  end: number
  cameraPos: [number, number, number]
  lookAt: [number, number, number]
  fov: number
}

// Each stop is a "hold" — the camera sits still across [start, end] of overall
// scroll progress so a beat (ripple pulse, AI glow, light sequence) has real
// screen time to play out. Between stops the camera eases from one framing to
// the next. Ranges intentionally leave gaps for those transitions.
export const STOPS: Stop[] = [
  { key: 'geophone', start: 0.0, end: 0.18, cameraPos: [0.35, -0.8, 1.65], lookAt: [0.85, -1.0, 0.5], fov: 26 },
  { key: 'think', start: 0.3, end: 0.48, cameraPos: [0.55, -0.05, 2.05], lookAt: [-0.05, -0.25, 0.2], fov: 24 },
  { key: 'warn', start: 0.58, end: 0.82, cameraPos: [0.55, 0.42, 2.3], lookAt: [-0.05, 0.42, 0.32], fov: 30 },
  { key: 'solar', start: 0.92, end: 1.0, cameraPos: [3.5, 2.8, 4.7], lookAt: [0, 0.5, 0], fov: 30 },
]

export function smoothstep(t: number) {
  const x = THREE.MathUtils.clamp(t, 0, 1)
  return x * x * (3 - 2 * x)
}

export interface StorySample {
  cameraPos: [number, number, number]
  lookAt: [number, number, number]
  fov: number
  /** index into STOPS that best represents the current view, for text/UI */
  activeIndex: number
  /** 0..1 local progress while resting inside a stop; 0 during transitions */
  holdT: number
  /** true while camera is resting on a stop rather than moving between them */
  isHolding: boolean
}

const posA = new THREE.Vector3()
const posB = new THREE.Vector3()
const posOut = new THREE.Vector3()
const lookA = new THREE.Vector3()
const lookB = new THREE.Vector3()
const lookOut = new THREE.Vector3()

export function sampleStory(p: number): StorySample {
  const clamped = THREE.MathUtils.clamp(p, 0, 1)

  if (clamped <= STOPS[0].start) {
    const s = STOPS[0]
    return { cameraPos: s.cameraPos, lookAt: s.lookAt, fov: s.fov, activeIndex: 0, holdT: 0, isHolding: true }
  }

  for (let i = 0; i < STOPS.length; i++) {
    const s = STOPS[i]
    if (clamped >= s.start && clamped <= s.end) {
      const holdT = s.end > s.start ? (clamped - s.start) / (s.end - s.start) : 1
      return { cameraPos: s.cameraPos, lookAt: s.lookAt, fov: s.fov, activeIndex: i, holdT, isHolding: true }
    }
    const next = STOPS[i + 1]
    if (next && clamped > s.end && clamped < next.start) {
      const t = smoothstep((clamped - s.end) / (next.start - s.end))
      posA.set(...s.cameraPos)
      posB.set(...next.cameraPos)
      posOut.lerpVectors(posA, posB, t)
      lookA.set(...s.lookAt)
      lookB.set(...next.lookAt)
      lookOut.lerpVectors(lookA, lookB, t)
      return {
        cameraPos: [posOut.x, posOut.y, posOut.z],
        lookAt: [lookOut.x, lookOut.y, lookOut.z],
        fov: THREE.MathUtils.lerp(s.fov, next.fov, t),
        activeIndex: t < 0.5 ? i : i + 1,
        holdT: 0,
        isHolding: false,
      }
    }
  }

  const last = STOPS[STOPS.length - 1]
  return {
    cameraPos: last.cameraPos,
    lookAt: last.lookAt,
    fov: last.fov,
    activeIndex: STOPS.length - 1,
    holdT: 1,
    isHolding: true,
  }
}

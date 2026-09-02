import { useMemo, useRef } from 'react'
import type { RefObject } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { ContactShadows } from '@react-three/drei'
import * as THREE from 'three'
import SentryDevice, { type StatusLightRefs } from './SentryDevice'
import GeophoneSensor from './GeophoneSensor'
import { sampleStory } from './storyBeats'

interface StoryExperienceProps {
  progressRef: RefObject<number>
  onBeatChange?: (index: number) => void
}

const tmpPos = new THREE.Vector3()
const tmpLook = new THREE.Vector3()
const BEAT_KEYS = ['geophone', 'think', 'warn', 'solar'] as const

export default function StoryExperience({ progressRef, onBeatChange }: StoryExperienceProps) {
  const { camera } = useThree()

  const lightRefs = useMemo<StatusLightRefs>(
    () => ({
      red: { current: null },
      amber: { current: null },
      green: { current: null },
      redGlow: { current: null },
      amberGlow: { current: null },
      greenGlow: { current: null },
    }),
    [],
  )
  const brainGlowRef = useRef<THREE.PointLight>(null)
  const brainMaterialRef = useRef<THREE.MeshStandardMaterial>(null)
  const rippleRefs = useRef<(THREE.Mesh | null)[]>([])

  const lastBeat = useRef(-1)
  const clock = useRef(0)

  useFrame((_, delta) => {
    clock.current += delta
    const sample = sampleStory(progressRef.current)

    tmpPos.set(...sample.cameraPos)
    camera.position.copy(tmpPos)
    tmpLook.set(...sample.lookAt)
    camera.lookAt(tmpLook)
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = sample.fov
      camera.updateProjectionMatrix()
    }
    if (sample.activeIndex !== lastBeat.current) {
      lastBeat.current = sample.activeIndex
      onBeatChange?.(sample.activeIndex)
    }
    const beatKey = BEAT_KEYS[sample.activeIndex]
    const onGeophone = beatKey === 'geophone'
    const onThink = beatKey === 'think'
    const onWarn = beatKey === 'warn'

    // vibration ripples — pulse outward while resting on the geophone beat
    const rippleStrength = onGeophone ? 1 : 0
    rippleRefs.current.forEach((ring, i) => {
      if (!ring) return
      const mat = ring.material as THREE.MeshBasicMaterial
      const t = (clock.current * 0.55 + i / rippleRefs.current.length) % 1
      ring.scale.setScalar(1 + t * 3.4)
      mat.opacity = rippleStrength * (1 - t) * 0.55
    })

    // on-device "thinking" glow — pulses through the badge plate while parked on the think beat
    const thinkPulse = 0.5 + Math.sin(clock.current * 3.2) * 0.5
    const thinkStrength = onThink ? thinkPulse : 0
    if (brainGlowRef.current) brainGlowRef.current.intensity = thinkStrength * 1.6
    if (brainMaterialRef.current) brainMaterialRef.current.emissiveIntensity = thinkStrength * 0.9

    // detect → think → warn light sequence, cycling while resting on the warn beat
    let red = 0.05
    let amber = 0.05
    let green = 1
    if (onWarn) {
      const cyclePos = (clock.current * 0.5) % 1
      red = cyclePos < 0.3 ? 1 : 0.08
      amber = cyclePos >= 0.3 && cyclePos < 0.6 ? 1 : 0.08
      green = cyclePos >= 0.6 ? 1 : 0.08
    }
    if (lightRefs.red.current) lightRefs.red.current.emissiveIntensity = red
    if (lightRefs.amber.current) lightRefs.amber.current.emissiveIntensity = amber
    if (lightRefs.green.current) lightRefs.green.current.emissiveIntensity = green
    if (lightRefs.redGlow.current) lightRefs.redGlow.current.intensity = red * 0.4
    if (lightRefs.amberGlow.current) lightRefs.amberGlow.current.intensity = amber * 0.4
    if (lightRefs.greenGlow.current) lightRefs.greenGlow.current.intensity = green * 0.4
  })

  return (
    <>
      <SentryDevice lightRefs={lightRefs} brainGlowRef={brainGlowRef} brainMaterialRef={brainMaterialRef} />
      <GeophoneSensor rippleRefs={rippleRefs} />
      <ContactShadows position={[0, -1.08, 0]} opacity={0.5} scale={6} blur={2.4} far={2} frames={1} />
    </>
  )
}

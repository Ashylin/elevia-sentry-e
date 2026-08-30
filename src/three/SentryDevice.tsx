import { useMemo, useRef } from 'react'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'
import { getSolarTexture } from './solarTexture'
import { getBadgeTexture } from './badgeTexture'

export interface LightState {
  red: number
  amber: number
  green: number
}

export const IDLE_LIGHTS: LightState = { red: 0.05, amber: 0.05, green: 1 }

interface StatusLightProps {
  position: [number, number, number]
  color: string
  intensity: number
}

function StatusLight({ position, color, intensity }: StatusLightProps) {
  return (
    <group position={position} rotation={[Math.PI / 2, 0, 0]}>
      <mesh>
        <cylinderGeometry args={[0.075, 0.075, 0.03, 24]} />
        <meshStandardMaterial color="#0a0c0a" roughness={0.5} metalness={0.4} />
      </mesh>
      <mesh position={[0, 0.018, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.02, 24]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={intensity}
          roughness={0.3}
          toneMapped={false}
        />
      </mesh>
      <pointLight color={color} intensity={intensity * 0.4} distance={0.6} decay={2} />
    </group>
  )
}

function SirenGrille() {
  const dots = useMemo(() => {
    const pts: [number, number][] = []
    const rings = 3
    for (let r = 1; r <= rings; r++) {
      const count = r * 6
      for (let i = 0; i < count; i++) {
        const a = (i / count) * Math.PI * 2
        pts.push([Math.cos(a) * r * 0.045, Math.sin(a) * r * 0.045])
      }
    }
    return pts
  }, [])

  return (
    <group>
      <mesh>
        <cylinderGeometry args={[0.16, 0.16, 0.06, 32]} />
        <meshStandardMaterial color="#111411" roughness={0.6} metalness={0.3} />
      </mesh>
      {dots.map(([x, y], i) => (
        <mesh key={i} position={[x, y, 0.032]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.008, 0.008, 0.01, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      ))}
    </group>
  )
}

function SolarPanel() {
  const texture = useMemo(() => getSolarTexture(), [])
  return (
    <group position={[0, 1.02, -0.05]} rotation={[-0.55, 0, 0]}>
      {/* struts */}
      <mesh position={[-0.42, -0.18, 0]}>
        <boxGeometry args={[0.05, 0.4, 0.05]} />
        <meshStandardMaterial color="#1b1f1a" roughness={0.6} metalness={0.3} />
      </mesh>
      <mesh position={[0.42, -0.18, 0]}>
        <boxGeometry args={[0.05, 0.4, 0.05]} />
        <meshStandardMaterial color="#1b1f1a" roughness={0.6} metalness={0.3} />
      </mesh>
      {/* panel */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[1.1, 0.06, 0.72]} />
        <meshStandardMaterial color="#1b1f1a" roughness={0.5} metalness={0.4} />
      </mesh>
      <mesh position={[0, 0.09, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.02, 0.64]} />
        <meshStandardMaterial map={texture} roughness={0.35} metalness={0.5} />
      </mesh>
      {/* antenna */}
      <mesh position={[0.5, 0.35, -0.3]}>
        <cylinderGeometry args={[0.012, 0.012, 0.6, 8]} />
        <meshStandardMaterial color="#2a2f28" roughness={0.5} metalness={0.5} />
      </mesh>
    </group>
  )
}

interface SentryDeviceProps {
  lights?: LightState
  showMount?: boolean
}

export default function SentryDevice({ lights = IDLE_LIGHTS, showMount = true }: SentryDeviceProps) {
  const group = useRef<THREE.Group>(null)
  const badgeTexture = useMemo(() => getBadgeTexture(), [])

  return (
    <group ref={group}>
      {showMount && (
        <mesh position={[0, -0.55, 0]}>
          <cylinderGeometry args={[0.09, 0.11, 1.1, 12]} />
          <meshStandardMaterial color="#141712" roughness={0.8} metalness={0.1} />
        </mesh>
      )}

      {/* main body */}
      <RoundedBox args={[1.15, 1.55, 0.62]} radius={0.06} smoothness={4} position={[0, 0.15, 0]}>
        <meshStandardMaterial color="#5a6b45" roughness={0.65} metalness={0.15} />
      </RoundedBox>

      {/* hinge / seam detail */}
      <mesh position={[0, 0.15, 0.311]}>
        <boxGeometry args={[1.1, 1.5, 0.005]} />
        <meshStandardMaterial color="#48573a" roughness={0.7} metalness={0.1} />
      </mesh>

      {/* status lights, stacked on front face */}
      <StatusLight position={[-0.32, 0.62, 0.315]} color="#c1272d" intensity={lights.red} />
      <StatusLight position={[-0.32, 0.42, 0.315]} color="#f2a93b" intensity={lights.amber} />
      <StatusLight position={[-0.32, 0.22, 0.315]} color="#35c46b" intensity={lights.green} />

      {/* siren / speaker grille */}
      <group position={[0.32, 0.42, 0.34]} rotation={[Math.PI / 2, 0, 0]}>
        <SirenGrille />
      </group>

      {/* badge plate */}
      <mesh position={[0, -0.42, 0.315]}>
        <boxGeometry args={[0.85, 0.16, 0.01]} />
        <meshStandardMaterial color="#0d1f14" roughness={0.5} metalness={0.3} />
      </mesh>
      <mesh position={[0, -0.42, 0.321]}>
        <planeGeometry args={[0.83, 0.14]} />
        <meshBasicMaterial map={badgeTexture} transparent toneMapped={false} />
      </mesh>

      <SolarPanel />
    </group>
  )
}

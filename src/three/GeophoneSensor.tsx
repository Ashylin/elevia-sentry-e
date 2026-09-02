import type { RefObject } from 'react'
import * as THREE from 'three'

export interface RippleRefs {
  refs: RefObject<(THREE.Mesh | null)[]>
}

interface GeophoneSensorProps {
  position?: [number, number, number]
  rippleRefs?: RefObject<(THREE.Mesh | null)[]>
}

const RING_COUNT = 3

export default function GeophoneSensor({
  position = [0.95, -1.05, 0.6],
  rippleRefs,
}: GeophoneSensorProps) {
  return (
    <group position={position}>
      {/* stake */}
      <mesh position={[0, -0.12, 0]}>
        <cylinderGeometry args={[0.018, 0.02, 0.24, 8]} />
        <meshStandardMaterial color="#141712" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* sensor puck */}
      <mesh position={[0, 0.015, 0]}>
        <cylinderGeometry args={[0.055, 0.06, 0.05, 20]} />
        <meshStandardMaterial color="#0d0f0d" roughness={0.5} metalness={0.4} />
      </mesh>
      <mesh position={[0, 0.042, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.008, 20]} />
        <meshStandardMaterial
          color="#35c46b"
          emissive="#35c46b"
          emissiveIntensity={0.5}
          roughness={0.3}
          toneMapped={false}
        />
      </mesh>
      <pointLight position={[0, 0.06, 0]} color="#35c46b" intensity={0.15} distance={0.4} decay={2} />

      {/* vibration ripple rings, animated from the story driver */}
      {Array.from({ length: RING_COUNT }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (rippleRefs?.current) rippleRefs.current[i] = el
          }}
          position={[0, -0.135, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <ringGeometry args={[0.05, 0.062, 32]} />
          <meshBasicMaterial color="#35c46b" transparent opacity={0} toneMapped={false} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  )
}

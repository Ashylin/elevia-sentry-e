import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows, Environment, Lightformer } from '@react-three/drei'
import SentryDevice from './SentryDevice'

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [6.5, 2.9, 9.25], fov: 26 }}
      gl={{ antialias: true, powerPreference: 'high-performance', toneMappingExposure: 1.3 }}
    >
      <color attach="background" args={['#050705']} />
      <fog attach="fog" args={['#050705', 7, 16]} />

      <hemisphereLight color="#4a6c56" groundColor="#050705" intensity={0.8} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 5, 2]} intensity={2.2} color="#eef2ea" />
      <directionalLight position={[-3, 2, -2]} intensity={0.7} color="#2a6b41" />
      <pointLight position={[0, 1.5, 2.5]} intensity={0.5} color="#c4c4c4" />
      <pointLight position={[-1.5, 1.2, -3]} intensity={0.9} color="#5fd68a" distance={8} decay={2} />

      <Suspense fallback={null}>
        <SentryDevice />
        <ContactShadows position={[0, -1.08, 0]} opacity={0.55} scale={6} blur={2.4} far={2} frames={1} />
        <Environment resolution={128} frames={1}>
          <Lightformer intensity={2.2} color="#eef2ea" position={[3, 5, 2]} scale={[4, 4, 1]} />
          <Lightformer intensity={1.4} color="#35c46b" position={[-3, 1, -2]} scale={[3, 3, 1]} />
          <Lightformer intensity={0.7} color="#ffffff" position={[0, -2, 3]} scale={[5, 2, 1]} form="ring" />
        </Environment>
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3.2}
        maxPolarAngle={Math.PI / 1.9}
        autoRotate
        autoRotateSpeed={0.9}
        target={[0, -1.1, 0]}
      />
    </Canvas>
  )
}

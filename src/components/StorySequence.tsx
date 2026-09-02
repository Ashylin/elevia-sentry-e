import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useScrollProgress } from '../hooks/useScrollProgress'
import StoryExperience from '../three/StoryExperience'
import './StorySequence.css'

const FLOW_STEPS = ['Detect', 'Think', 'Warn'] as const

const BEAT_COPY = [
  {
    eyebrow: 'Step 1 · Detect',
    title: 'Feels every footstep.',
    body: 'A geophone ground sensor picks up elephant movement through vibration in the earth — long before it comes into view.',
    flowIndex: 0,
  },
  {
    eyebrow: 'Step 2 · Think',
    title: 'On-device intelligence.',
    body: 'Edge AI confirms the pattern instantly, right on the node. No cloud, no signal required — works without internet, 100% local, always on.',
    flowIndex: 1,
  },
  {
    eyebrow: 'Step 3 · Warn',
    title: 'Instant local alert.',
    body: 'Bright light, loud siren, and a clear red / amber / green indicator warn people nearby — before they meet the herd.',
    flowIndex: 2,
  },
  {
    eyebrow: 'Always Watching',
    title: 'Solar powered. Always on.',
    body: 'Rugged, weatherproof, and self-sufficient — long battery life and low maintenance built for the terrain of the Nilgiris.',
    flowIndex: -1,
  },
]

export default function StorySequence() {
  const { containerRef, progressRef } = useScrollProgress<HTMLDivElement>()
  const [beatIndex, setBeatIndex] = useState(0)
  const copy = BEAT_COPY[beatIndex]

  return (
    <section className="story" id="how-it-works" ref={containerRef}>
      <div className="story__pin">
        <div className="story__canvas">
          <Canvas
            dpr={[1, 1.75]}
            camera={{ position: [1.35, -0.5, 1.25], fov: 20 }}
            gl={{ antialias: true, powerPreference: 'high-performance', toneMappingExposure: 1.3 }}
          >
            <color attach="background" args={['#050705']} />
            <fog attach="fog" args={['#050705', 7, 16]} />

            <hemisphereLight color="#4a6c56" groundColor="#050705" intensity={0.8} />
            <ambientLight intensity={0.35} />
            <directionalLight position={[3, 5, 2]} intensity={2.2} color="#eef2ea" />
            <directionalLight position={[-3, 2, -2]} intensity={0.7} color="#2a6b41" />
            <pointLight position={[0, 1.5, 2.5]} intensity={0.5} color="#c4c4c4" />

            <Suspense fallback={null}>
              <StoryExperience progressRef={progressRef} onBeatChange={setBeatIndex} />
            </Suspense>
          </Canvas>
        </div>

        <div className="story__overlay">
          <div className="story__flow" aria-hidden="true">
            {FLOW_STEPS.map((step, i) => (
              <div key={step} className={`story__flow-step${i === copy.flowIndex ? ' is-active' : ''}`}>
                <span className="story__flow-dot" />
                {step}
              </div>
            ))}
          </div>

          <div className="story__text" key={beatIndex}>
            <div className="story__eyebrow">{copy.eyebrow}</div>
            <h2 className="story__title">{copy.title}</h2>
            <p className="story__body">{copy.body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

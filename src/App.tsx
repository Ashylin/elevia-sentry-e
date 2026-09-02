import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import StorySequence from './components/StorySequence'
import WhySentryE from './components/WhySentryE'
import Pilot from './components/Pilot'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <div className="ambient-bg" aria-hidden="true">
        <span className="ambient-bg__blob ambient-bg__blob--a" />
        <span className="ambient-bg__blob ambient-bg__blob--b" />
        <span className="ambient-bg__blob ambient-bg__blob--c" />
      </div>
      <Nav />
      <main>
        <Hero />
        <About />
        <StorySequence />
        <WhySentryE />
        <Pilot />
      </main>
      <Footer />
    </>
  )
}

export default App

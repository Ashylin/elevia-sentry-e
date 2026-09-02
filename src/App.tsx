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

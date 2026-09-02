import Nav from './components/Nav'
import Hero from './components/Hero'
import ComingSoon from './components/ComingSoon'
import Mission from './components/Mission'
import WhyElevia from './components/WhyElevia'
import Newsletter from './components/Newsletter'
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
        <ComingSoon />
        <Mission />
        <WhyElevia />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

export default App

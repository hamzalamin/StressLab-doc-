import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import QuickStart from './components/QuickStart'
import Examples from './components/Examples'
import Documentation from './components/Documentation'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <QuickStart />
      <Examples />
      <Documentation />
      <Footer />
    </div>
  )
}

export default App
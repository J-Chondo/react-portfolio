import React from 'react'
import './App.css';
import Hero from './components/Hero'
import Footer from './components/Footer';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';


function App() {
  return (
    <div>
      <Hero/>
      <Projects />
      <Skills/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import './App.css';
import Landing from './Components/Landing'
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Projects from './Components/Projects';



function App() {
  return (
    <div>
      <Landing/>
      <Projects />
      <Skills/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
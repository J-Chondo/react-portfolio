import React from 'react'
import ProjectCard from '../common/ProjectCard'

function Project() {
  return (
    <section id="projects" className='containerProject'>
    <h1 className="sectionTitle">Projects</h1>
    <div className='projectsContainer'>
      <ProjectCard
        src= ''
        link="https://github.com/"
        h3="Viberr"
        p="Streaming App"
      />
      <ProjectCard
        src= ''
        link="https://github.com/"
        h3="Fresh Burger"
        p="Hamburger Restaurant"
      />
      <ProjectCard
        src=''
        link="https://github.com/"
        h3="Hipsster"
        p="Glasses Shop"
      />
      <ProjectCard
        src=''
        link="https://github.com/"
        h3="FitLift"
        p="Fitness App"
      />
    </div>
  </section>
  )
}

export default Project
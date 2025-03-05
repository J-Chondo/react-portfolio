import React from 'react'
import ProjectCard from '../common/ProjectCard'

function Project() {
  return (
    <section id="projects" className='containerProject'>
    <h1 className="sectionTitle">Projects</h1>
    <div className='projectsContainer'>
      <ProjectCard
        src= ''
        link="https://keeper-app-eta-mauve.vercel.app/"
        h3="Keeper"
        p="Notes App"
      />
      <ProjectCard
        src= ''
        link="https://workout-app-omega-seven.vercel.app/"
        h3="Fittness"
        p="workout App"
      />
      <ProjectCard
        src=''
        link="https://expense-tracker-react-five-swart.vercel.app/"
        h3="Expense-Tracker"
        p="Budget tracker App"
      />
      <ProjectCard
        src=''
        link="https://react-todo-app-delta-three.vercel.app/"
        h3="To-Do's"
        p="Todo list App"
      />
    </div>
  </section>
  )
}

export default Project
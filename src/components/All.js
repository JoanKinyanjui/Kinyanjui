import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home'
import Projects from './Projects/Projects'
import Work from './Work/work'

function All() {
  return (
    <div>
        <Home />
        <About />
        <Projects />
        <Work />
        <Contact />
    </div>
  )
}

export default All
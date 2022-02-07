import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import './All.css';

export default function All() {
  return(
      <div className='All'>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      
      </div>
  )
}

import { Button } from 'react-bootstrap';
import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

export default function About() {
  return(
    <div className='About'>
      <div className='item'>
        <img  src='/Images/222.jpeg' className='me'/>
      </div>

      <div className='item'>
        <h1> ~ About Me ~</h1>
        <p>
        I am  a front-end developer located in Nairobi ,Kenya.I have serious passion for creating  attractive, user-friendly, easy to use and responsive designs
for websites,webapps and applications.My interest lies in the whole front-end spectrum and working on ambitious projects for creative and positive people.
This site is a place for me to showcase some of my projects. I am a well-organised person, an independent employee with high attention to detail which makes me an amazing problem-solver.
In terms of non-computer hobbies ,I am an outdoor person who loves travelling and exploring nature.I also fancy watching movies.My professional background may have taken many twists and turns from being a small business owner and entrepreneur to finally settling for code . As a web developer, I enjoy using my unequivocal 
love for making things, and my mission-driven work ethic to literally change the world. That's why I am excited to make a big impact at a high growth company.
<br/><br />

<div class="skills">
Here are a few technologies that I have worked with:
<br />
<ul class='skills-set'>
<li class="skills">JavaScript</li>
<li class="skills">ReactJs</li>
<li class="skills">HTML &  CSS</li>
<li class="skills">SASS</li>
<li class="skills">BootStrap</li>
</ul>
</div>
<Link to='/BlogLayout'><Button style={{
       color:'gray',
      margin:'auto', 
      padding:'2px 30px',
       borderRadius:'12px', 
       backgroundColor:'blueviolet',
       color:'black',
       border:'none'}}>Visit My Blog</Button></Link>
        </p>
      </div>
    </div>
  )
}



{/* <div className='About'>
<h2 class="heading">About me</h2>

<div class='home1-about'>

I am  a front-end developer located in Nairobi ,Kenya.I have serious passion for creating  attractive, user-friendly, easy to use and responsive designs
for websites,webapps and applications.My interest lies in the whole front-end spectrum and working on ambitious projects for creative and positive people.
This site is a place for me to showcase some of my projects. From small learning projects to some serious software engineering projects.
I am a well-organised person, an independent employee with high attention to detail which makes me an amazing problem-solver.
In terms of non-computer hobbies ,I am an outdoor person who loves travelling and exploring nature.I also fancy watching movies and reading once in a while.
My professional background may have taken many twists and turns from being a small business owner and entrepreneur to finally settling for code . I've never stopped engaging my passion to help others 
and solve problems. As a web developer, I enjoy using my unequivocal 
love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company.
<br/><br />
Here are a few technologies that I have worked with:
<br />
<div class="skills">
<ul class='skills-set'>
<li class="skills">JavaScript</li>
<li class="skills">ReactJs</li>
<li class="skills">HTML &  CSS</li>
<li class="skills">SASS</li>
<li class="skills">BootStrap</li>
</ul>
</div>
</div>
</div> */}
import { Button } from 'react-bootstrap';
import React from 'react';
// import './About.css';
import { Link } from 'react-router-dom';

export default function About() {
  return(
    <div className='About w-screen  max-h-max block md:flex py-8 bg-black text-gray-300 font-serif'>
      <div className='item w-full md:w-1/4  flex place-content-center h-96 md:h-screen grid justify-items-center'>
        <img  src='/Images/222.jpeg' className='me mx-auto w-full px-8 md:mx-0 h-96 rounded-lg'/>
      </div>

      <div className='item  w-5/6  mx-auto  md:w-3/4 md:h-screen max-h-max grid place-items-center py-8 md:py-0'>
<div className='grid justify-items-center w-5/6'>
<h1> ~ About Me ~</h1>
        <p className='xs:text-sm md:text-base w-full'>
        I am  a front-end developer located in Nairobi ,Kenya.I have serious passion for creating  attractive, user-friendly, easy to use and responsive designs
for websites,webapps and applications.My interest lies in the whole front-end spectrum and working on ambitious projects for creative and positive people.
This site is a place for me to showcase some of my projects. I am a well-organised person, an independent employee with high attention to detail which makes me an amazing problem-solver.
In terms of non-computer hobbies ,I am an outdoor person who loves travelling and exploring nature.I also fancy watching movies.My professional background may have taken many twists and turns from being a small business owner and entrepreneur to finally settling for code . As a web developer, I enjoy using my unequivocal 
love for making things, and my mission-driven work ethic to literally change the world. That's why I am excited to make a big impact at a high growth company.
<br/><br />

<div class="skills flex py-8 justify-between">

<div className='block'>
<p className='whitespace-nowrap '>~Frontend~</p>
<ul class='skills-set italic xs:text-sm md:text-base list-disc '>
<li class="skills">JavaScript</li>
<li class="skills">ReactJs</li>
<li class="skills">Gatsby</li>
<li class="skills">Redux</li>
<li class="skills">Nextjs</li>
<li class="skills">Material UI</li>
<li class="skills">Chakra UI</li>
<li class="skills">Bootstrap</li>

</ul>
</div>
<div className='block'>
<p className='whitespace-nowrap '>~Backened~</p>
<ul class='skills-set italic xs:text-sm md:text-base list-disc'>
<li class="skills">Node js</li>
<li class="skills">Express</li>
<li class="skills">Django</li>
<li class="skills">MongoDB</li>
<li class="skills">PostgresQL</li>
</ul>
</div>
<div className='block'>
<p className='whitespace-nowrap'>~Blockchain~</p>
<ul class='skills-set italic xs:text-sm md:text-base list-disc'>
<li class="skills">Solidity</li>
</ul>
</div>
</div>


      <Link to='/Resume'><Button 
      style={{
       color:'gray',
       margin:'auto', 
       padding:'2px 30px',
       borderRadius:'12px', 
       backgroundColor:'blueviolet',
       color:'black',
       border:'none'}}> My CV</Button></Link>
        </p>
</div>
      </div>
    </div>
  )
}





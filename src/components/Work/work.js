import React from 'react'
import Card from './Card';
import '../Work/work.css';

function Work() {
  return (
    <div className='All font-serif text-base md:text-xl text-gray-300'>
     <h3><i>~ My Work Flow ~</i></h3>
    <div className='Work'>
       
       <Card className='card1' title='Analyse'  p='I conduct user research to identify the problem I want to solve.' />
       <Card  title='Define'  p='I brainstorm possible design solutions to the identified problem.' />
       <Card   title='Plan'   p='I create wireframes and sketches of the product I’m about to design.'/>
       <Card  title='Prototype'   p='I create high fidelity design and prototype the screens.'/>
       <Card    title='Implement'  p=' After designing, I deliver for implementation.'/>
       
    </div>
    </div>
  )
}

export default Work;
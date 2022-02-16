import React from 'react';
import { Button } from 'react-bootstrap';
import Nav from '../Nav/Nav';
import './Home.css';

function Home() {
  return (
      
    <div className='Home'> 

    <div className='home1'>
  <img src='/Images/best.png' className='myImg'/> 
    </div>
    <div className='home2'>
    <p>Hae there, I'm</p><br />
     <h1 className='myName'><b>Joan Kinyanjui</b></h1><br />
     <h2><b>~FRONT-END DEVELOPER ~</b></h2><br />
     <a href="mailto:kinyanjuijoan52@gmail.com">
       <Button style={{
       color:'gray',
      margin:'auto', 
      padding:'2px 25px',
       borderRadius:'12px', 
       backgroundColor:'blueviolet',
       color:'black',
       border:'none'}}>Hire Me</Button></a>
     
    </div>

    <div className="socials"> 
      <ul className='socials-0'>
            <li className="socials-10"  ><a href="https://github.com/JoanKinyanjui"><i class="fab socials-10 fa-2x fa-github"></i></a></li> 
            <li className="socials-10"  ><a href=" https://www.instagram.com/wambui-j/"> <i class="fab  fa-2x fa-instagram-square "></i></a></li>
            <li className="socials-10" ><a href="https://www.linkedin.com/in/joankinyanjui/"><i class="fab fa-2x fa-linkedin"></i></a></li>
            <li className="socials-10"  ><a href="https://twitter.com/jo_kinyanjui"><i class="fab fa-2x  fa-twitter-square "></i></a></li>
            <li className="socials-10" ><a href="mailto:kinyanjuijoan52@gmail.com"><i class="fas fa-2x fa-envelope"></i></a></li>
         </ul>
    </div>

    </div>

    
  )
}

export default Home;
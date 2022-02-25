import React from 'react';
import './BlogContent.css';

function Container2() {
    return (
      <div className='Container2'>
      <h5>ABOUT ME</h5>
      <div className='myFlex'>
      <img className='aboutme-img' src='/Images/22.jpeg'/>
      <p>I'm Joan Kinyanjui, I sometimes enjoy writing  about my everyday experiences concernig life,style,travel and tech.  </p>
  
      <div className='categories'>
          <p>CATEGORIES </p>
          <ul>
              <li>Life</li>
              <li>Style</li>
              <li>Tech</li>
              <li>Travel</li>
          </ul>
      </div>
      </div>
      </div>
    )
  }
  
  export default  Container2;
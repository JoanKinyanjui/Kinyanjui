import React from 'react';
import './BlogContent.css';

function Container2() {
    return (
      <div className='Container2'>
      <h5>ABOUT ME</h5>
      <div className='myFlex'>
      <img className='aboutme-img' src='/Images/me.jpg'/>
      <p>I'm Marianne Richmond—writer, artist and inspirationalist. My words have touched millions over the past two decades through my children's books and gift products.
  Basically I put love into words and help you connect with the people + moments that matter. </p>
  
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
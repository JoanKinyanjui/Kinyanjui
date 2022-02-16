import React from 'react';
import { navItems } from './navitems';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
  <div className='Nav'>

    {/* Links */}
    
    <ul className='nav-list'>
      {navItems.map((item)=>(
<a className='nav-item'><li>{item.title}</li> </a>
      ))}
    </ul>
  
     
   
    </div>

  )
}

export default Nav;

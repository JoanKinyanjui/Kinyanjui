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
<Link to={item.path} className='nav-item'><li>{item.title}</li> </Link>
      ))}
    </ul>
  
     
   
    </div>

  )
}

export default Nav;

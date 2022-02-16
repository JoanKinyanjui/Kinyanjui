import React from 'react';
import Work from '../Work/work';
import './Projects.css';

function Projects(){
    return(
    <>
        <div className='Projects'>
            <h1>~ Projects ~</h1>
            <br />
            <br />
            <br />
     <div className='container1'>
         <div className='container-item'>
<img className='project-img' alt='carwash' src='/Images/Myportfolio.jpg'/>
<p>Amani Carwash</p>
         </div>
         <div className='container-item'>
<img className='project-img' alt='gloww'  src='/Images/project-gloww.jpg'/>
<p>Gloww Cream Online Shop</p>
         </div>
         <div className='container-item'>
<img className='project-img' alt='me2u'  src='/Images/project-me2u.jpg'/>
<p>Me2u Courrier</p>
         </div>
     </div>
        </div>

<div>
    <Work />
</div>
</>
        
    )
}

export default Projects;
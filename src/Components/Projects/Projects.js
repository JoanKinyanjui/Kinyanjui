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
         <a href='https://amanicarwash.netlify.app/'><div className='container-item'>
<img className='project-img' alt='carwash' src='/Images/Myportfolio.jpg'/>
<p>Amani Carwash</p>
         </div></a>
         <a href='https://glowwke.com/'><div className='container-item'>
<img className='project-img' alt='gloww'  src='/Images/project-gloww.jpg'/>
<p>Gloww Cream Online Shop</p>
         </div></a>
         <a href='https://me2ucourier.netlify.app/'><div className='container-item'>
<img className='project-img' alt='me2u'  src='/Images/project-me2u.jpg'/>
<p>Me2u Courrier</p>
         </div></a>
     </div>
        </div>

<div>
    <Work />
</div>
</>
        
    )
}

export default Projects;
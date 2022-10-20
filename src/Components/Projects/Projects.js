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
         <a href='https://amanicarwash.co.ke'><img className='project-img' alt='carwash' src='/Images/Myportfolio.jpg'/></a>
<p>Amani Carwash</p>
         </div>
        <div className='container-item'>
        <a href='https://glowwke.com/'> <img className='project-img' alt='gloww'  src='/Images/project-gloww.jpg'/></a>
<p>Gloww Cream Online Shop</p>
         </div>
         <div className='container-item'>
         <a href='https://me2ucourier.netlify.app/'><img className='project-img' alt='me2u'  src='/Images/project-me2u.jpg'/></a>
<p>Me2u Courrier</p>
         </div>
         <div className='container-item'>
         <a href='https://zenbit.netlify.app/'><img className='project-img' alt='feedback application'  src='/Images/work2.png'/></a>
<p>Feedback Application</p>
         </div>
         <div className='container-item'>
         <a href='https://spiffy-bombolone-8d6b22.netlify.app/'><img className='project-img' alt='subtle-statements'  src='/Images/js-app.png'/></a>
<p>E-commerce Shop</p>
         </div>
         <div className='container-item'>
         <a href='https://whitelisting-dapp-five.vercel.app/'><img className='project-img' alt='whitelisting dapp'  src='/Images/whitelist.png'/></a>
<p>Whitelisting Dapp</p>
         </div>
        <div className='container-item'>
         <a href='https://code-for-impact-site-ne25.vercel.app/'><img className='project-img' alt='whitelisting dapp'  src='/Images/whitelist.png'/></a>
<p>Code For Impact Landing App</p>
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

import React from 'react'
import '../global.css';
import Socials from './Socials';
import './Home.css';
import { motion } from "framer-motion";


function Home() {
  return (
    <div className="Home" >

<div className='width-screen flex h-full'>
<motion.div className='w-1/2  grid place-content-center '
 initial={{ scale: 0,opacity:1 }}
 animate={{ rotate: 360, scale: 1 }}
 transition={{
  delay: 3,
  x: { duration: 10000 },
  default: { ease: "linear" },
   type: "spring",
   stiffness: 2600,
   damping: 20
 }}
 >
  <img src='/Images/best.png' className='border-solid border-x-fuchsia-600  rounded-full shadow-2xl shadow-slate-900'/>
  </motion.div>
<div className='w-1/2 grid place-content-start my-auto  relative'>
<div className='w-full  grid justify-items-start '>
<p className='place-content-left flex text-4xl md:text-6xl py-2 font-medium text-gray-300'>JOAN KINYANJUI</p>
  <p  className='place-content-left flex text-xl pb-8 font-medium text-gray-300 italic'>~FRONTEND DEVELOPER~</p>
  <a href="mailto:kinyanjuijoan52@gmail.com">
<button className='place-content-left flex py-2 font-medium bg-purple-700 px-4 py-2 rounded-full text-gray-300'>Hire Me</button>
</a>
</div>
  </div>
</div>
<div className=' absolute left-0 bottom-0 h-16  flex justify-end w-full  place-content-center'>
<ul className=' w-full md:w-1/2  flex  justify-between my-auto text-gray-300 mr-8 md:mr-16'>
            <li   ><a href="https://github.com/JoanKinyanjui"><i class="fab socials-10 fa-2x fa-github"></i></a></li> 
            <li   ><a href=" https://www.instagram.com/wambui-j/"> <i class="fab  fa-2x fa-instagram-square "></i></a></li>
            <li ><a href="https://www.linkedin.com/in/joankinyanjui/"><i class="fab fa-2x fa-linkedin"></i></a></li>
            <li  ><a href="https://twitter.com/jo_kinyanjui"><i class="fab fa-2x  fa-twitter-square "></i></a></li>
            <li ><a href="mailto:kinyanjuijoan52@gmail.com"><i class="fas fa-2x fa-envelope"></i></a></li>
</ul>
</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="	#8a2be2" fill-opacity="1" d="M0,128L40,112C80,96,160,64,240,90.7C320,117,400,203,480,202.7C560,203,640,117,720,106.7C800,96,880,160,960,170.7C1040,181,1120,139,1200,112C1280,85,1360,75,1400,69.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
    </div>
  )
}

export default Home
import React from 'react'
import './Blog.css';
import BlogContent from './BlogContent';


function Blog() {
  return (
    <div className='Blog'>
      <div className='second-title'>
<ul>
                <li>Life</li>
                <li>Style</li>
                <li>Tech</li>
                <li>Travel</li>
            </ul>
</div>

        <div className='first-image'>
<img className='first-actual-image' src='/Images/wa.jpg' />
</div>

<div className='first-title'>
 
<p>My Blog</p>
<hr/>
</div>


    </div>

    
    
    
  )
}

export default Blog
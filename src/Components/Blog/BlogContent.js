import React from 'react'
import { Link } from 'react-router-dom';
import './BlogContent.css';
import Container2 from './Container2';
import Posts from './Posts';
import Topbar from './Topbar/Topbar';

function BlogContent() {
  return (<>
    <div className='Blog-content'>
        <div className='Container1'>
            <Posts />
            
           
        </div>
<div className='BlogContent Container2'>
<Container2 />
</div>

       

        </div>
        </>
  )
}

export default BlogContent;




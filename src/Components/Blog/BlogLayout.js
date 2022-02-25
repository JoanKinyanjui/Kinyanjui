import React from 'react'
import Blog from './Blog'
import BlogContent from './BlogContent'
import './Bloglayout.css';
import Topbar from './Topbar/Topbar';

function BlogLayout() {


  
  return (
    <div className='BlogLayout'>
      <Topbar  title='Back to My Portfolio'/>
<Blog />
<BlogContent />

    </div>
  )
}

export default BlogLayout
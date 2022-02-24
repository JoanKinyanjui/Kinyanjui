import React from 'react';
import './Posts.css';

function Post() {
  return (
    <div className='Post'>
        <img className='post-img' src='/Images/friends.jpg' />
        <div className='post-info'>
            <div className='postCats'>
                <span className='postCat' > Travel</span>
                <span className='postCat' >Life</span>
            </div>
<span className='postTitle'> Being in a group of friends</span>
<span className='postDate'> 1hr ago</span>
        </div>
        <p className='postDesc'>I am a bit late getting started with this course but glad at least to be this far. I decided this year I was going to tell people I am a writer. This was a big and welcome step for me. I am "from" Wisconsin but have lived in Virginia for 36 years currently in Charlottesville VA close to the Blue Ridge Mountains.
I have been writing 300-500 word articles for the FosterCare/Adoption community for 13 years and wrote my first novel 90,000+ words in 2020 spring 100 Days to Write a Book course — now in its 3rd
draft. I feel like I have a helpful story that I consider a "spiritual odyssey". Here is a quote that helps distill the concept and I am including it in the prologue — There is an energy in the world, a spark, an electricity that everything is plugged into. The Greeks called it zoe the mystics call it “Spirit,” and Obi-Wan called it “the force”. — Rob Bell, Love Wins

</p>

    </div>
  )
}

export default Post;
<img />

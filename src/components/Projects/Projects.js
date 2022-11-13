import React from 'react'
import { Container,Grid,Box} from '@mui/material';
import './Projects.css'

function Projects() {
  return (
    <div className='bg-black'>
        <p className='text-gray-700'>
            ~Projects~
            <Container maxWidth='xl' className='py-8'>
            <Grid container>
    {/* Project1 */}
  <Grid item xs={12} md={6} className=' relative flex justify-center h-max py-16 '>
    <Box>
<img  src='/Images/project-gloww.jpg' className='Big  w-5/6 h-mx md:h-96 mx-auto '/>
<div className=' w-full md:w-1/2 shadow-lg block mx-auto  absolute bg-purple-300 text-gray-700   right-0 bottom-0 '>
<p>Gloww</p>
<p>This is a websitemjijilk,kn kmlndh fbkk;mnjkl;ksjndns dknkcjjnnnknj</p>
</div>
    </Box>
  </Grid>

{/* project2 */}
<Grid item xs={12} md={6} className='relative flex justify-center h-max  py-16'>
    <Box>
<img  src='/Images/MyPortfolio.jpg' className='Big  w-5/6 h-mx md:h-96 mx-auto '/>
<div className=' w-full md:w-1/2 shadow-lg block mx-auto  absolute bg-purple-300 text-gray-700   right-0 bottom-0 '>
<p>Gloww</p>
<p>This is a websitemjijilk,kn kmlndh fbkk;mnjkl;ksjndns dknkcjjnnnknj</p>
</div>
    </Box>
  </Grid>
 
  {/* Project3 */}
  <Grid item xs={12} md={6} className='relative flex justify-center h-max  py-16'>
    <Box>
<img  src='/Images/js-app.png' className='Big  w-ful h-mx md:h-96 mx-auto '/>
<div className=' w-full md:w-1/2 shadow-lg block mx-auto  absolute bg-purple-300 text-gray-700   right-0 bottom-0 '>
<p>Gloww</p>
<p>This is a websitemjijilk,kn kmlndh fbkk;mnjkl;ksjndns dknkcjjnnnknj</p>
</div>
    </Box>
  </Grid>

  {/* Project4 */}
  <Grid item xs={12} md={6} className=' relative flex justify-center h-max  py-16'>
    <Box>
<img  src='/Images/project-me2u.jpg' className=' Big  w-5/6 h-mx md:h-96 mx-auto '/>
<div className=' w-full md:w-1/2 shadow-lg block mx-auto  absolute bg-purple-300 text-gray-700   right-0 bottom-0 '>
<p>Gloww</p>
<p>This is a websitemjijilk,kn kmlndh fbkk;mnjkl;ksjndns dknkcjjnnnknj</p>
</div>
    </Box>
  </Grid>

  {/* 5 */}
  <Grid item xs={12} md={6} className=' relative flex justify-center h-max  py-16'>
    <Box>
<img  src='/Images/whitelist.png' className='Big  w-5/6 h-mx md:h-96 mx-auto '/>
<div className=' w-full md:w-1/2 shadow-lg block mx-auto  absolute bg-purple-300 text-gray-700   right-0 bottom-0 '>
<p>Gloww</p>
<p>This is a websitemjijilk,kn kmlndh fbkk;mnjkl;ksjndns dknkcjjnnnknj</p>
</div>
    </Box>
  </Grid>

  {/* 6 */}
  <Grid item xs={12} md={6} className='relative flex justify-center h-max  py-16'>
    <Box>
<img  src='/Images/work2.png' className='Big  w-5/6 h-mx md:h-96 mx-auto '/>
<div className=' w-full md:w-1/2 shadow-lg block mx-auto  absolute bg-purple-300 text-gray-700   right-0 bottom-0 '>
<p>Gloww</p>
<p>This is a websitemjijilk,kn kmlndh fbkk;mnjkl;ksjndns dknkcjjnnnknj</p>
</div>
    </Box>
  </Grid>

</Grid> 
            </Container>
        </p>
    </div>
  )
}

export default Projects
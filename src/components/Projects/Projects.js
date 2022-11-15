import React from 'react'
import { Container,Grid,Box} from '@mui/material';
import './Projects.css'

function Projects() {
  return (
    <div className='bg-black'>
        <p className='text-gray-300 pt-8'>
            ~Projects~
            <Container maxWidth='xl' className='py-8'>
            <Grid container>
    {/* Project1 */}
  <Grid item xs={12} md={6} className=' relative flex justify-center h-max py-16 '>
    <Box>
<img  src='/Images/project-gloww.jpg' className='Big  w-5/6 h-mx md:h-96 mx-auto 'alt='gloww '/>
<div className=' w-full md:w-1/2 shadow-lg block mx-auto  absolute  bg-purple-200 text-gray-700    right-0 bottom-0 '>
<p   >Gloww</p>
<p>This is a website page for a skincare business</p>
</div>
    </Box>
  </Grid>

{/* project2 */}
<Grid item xs={12} md={6} className='relative flex justify-center h-max  py-16'>
    <Box>
    <a href='https://www.amanicarwash.co.ke/'><img  src='/Images/MyPortfolio.jpg' className='Big  w-5/6 h-mx md:h-96 mx-auto '/></a>
<div className=' w-full md:w-1/2 shadow-lg block mx-auto  absolute bg-purple-200 text-gray-700   right-0 bottom-0 '>
<p className='italic'>Amani Carwash</p>
<p>This is a website for a carwash business</p>
</div>
    </Box>
  </Grid>
 
  {/* Project3 */}
  <Grid item xs={12} md={6} className='relative flex justify-center h-max  py-16'>
    <Box>
<img  src='/Images/js-app.png' className='Big  w-ful h-max md:h-96 mx-auto '/>
<div className=' w-full md:w-3/4 shadow-lg block mx-auto  absolute  bg-purple-200 text-gray-700    right-0 bottom-0 '>
<p className='italic'>Subtle-statements</p>
<p>This is an e-commerce jewellery shop</p>
</div>
    </Box>
  </Grid>

  {/* Project4 */}
  <Grid item xs={12} md={6} className=' relative flex justify-center h-max  py-16'>
    <Box>
      <a href='https://me2ucourier.netlify.app/'> 
<img  src='/Images/project-me2u.jpg' className=' Big  w-5/6 h-mx md:h-96 mx-auto '/>
</a>
<div className=' w-full md:w-1/2 shadow-lg block mx-auto  absolute  bg-purple-200 text-gray-700    right-0 bottom-0 '>
<p className='italic'>Me2U</p>
<p>This is a Courier service website</p>
</div>
    </Box>
  </Grid>

  {/* 5 */}
  <Grid item xs={12} md={6} className=' relative flex justify-center h-max  py-16'>
    <Box>
      <a href='https://whitelisting-dapp-five.vercel.app/'> 
<img  src='/Images/whitelist.png' className='Big  w-5/6 h-mx md:h-96 mx-auto '/>
</a>
<div className=' w-full md:w-1/2 shadow-lg block mx-auto  absolute  bg-purple-200 text-gray-700    right-0 bottom-0 '>
<p className='italic'>Whitelist Dapp</p>
<p>This is a whitelisting Dapp ,that allows people to whitelist themselves so as to mint nft's from an nft marketplace 5mins before the public sale</p>
</div>
    </Box>
  </Grid>

  {/* 6 */}
  <Grid item xs={12} md={6} className='relative flex justify-center h-max  py-16'>
    <Box>
        <a href='https://www.amanicarwash.co.ke/'> <img  src='/Images/work2.png' className='Big  w-5/6 h-mx md:h-96 mx-auto '/></a>

<div className=' w-full md:w-1/2 shadow-lg block mx-auto  absolute  bg-purple-200 text-gray-700    right-0 bottom-0 '>
<p className='italic'>Feedback App</p>
<p>This is a feedback form that allows consumers to comment on a seervice</p>
</div>
    </Box>
  </Grid>
  {/* 7 */}
  <Grid item xs={12} md={6} className='relative flex justify-center h-max  py-16'>
    <Box>
<img  src='/Images/BonusDapp.png' className='Big  w-5/6 h-mx md:h-96 mx-auto '/>
<div className=' w-full md:w-1/2 shadow-lg block mx-auto  absolute  bg-purple-200 text-gray-700    right-0 bottom-0 '>
<p className='italic'>Bonus Distribution Dapp</p>
<p>This is a bonus distribution dapp that allows employees to register themselves for bonus distribution that happens quartely through their crypto wallets</p>
</div>
    </Box>
  </Grid>
  {/* 8 */}
  <Grid item xs={12} md={6} className='relative flex justify-center h-max  py-16'>
    <Box>
<a href='https://code-for-impact-site-aum4.vercel.app/'>  
<img  src='/Images/codeForImpact.png' className='Big  w-5/6 h-mx md:h-96 mx-auto '/>
</a>
<div className=' w-full md:w-1/2 shadow-lg block mx-auto  absolute  bg-purple-200 text-gray-700    right-0 bottom-0 '>
<p className='italic'>Code For Impact</p>
<p>This is a website for code for impact.An organisation that seeks to teach code for the benefit of people who do not have access to resources</p>
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
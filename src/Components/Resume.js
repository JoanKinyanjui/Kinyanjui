import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Resume() {
  const navigate = useNavigate();
  return (
    <div className='Resume'>  
     <div className='goBack'>
        <button onClick={() => navigate(-1)} className='goback-button'> back</button>
    </div>
        <img  src='/Images/cv-2022-1.jpg' className='resume-img'/>
    </div>
  )
}

export default Resume
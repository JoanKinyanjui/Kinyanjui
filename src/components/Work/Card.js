import React from 'react';
import '../Work/work.css';

function Card(props) {
  return (
    <div className='container'>
      
        <br />
        <h5> {props.title}</h5>
        <br />
        <p>{props.p}</p>
        <br />


    </div>
  )
}

export default Card;
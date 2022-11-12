import React from 'react';
import anime from 'animejs/lib/anime.es.js';

anime({
    targets: 'div.box',
  translateY: 300,
  direction: 'alternate',
  loop: false,
  delay: function(el, i, l) {
    return 300 +( i * 200)
  },
  endDelay: function(el, i, l) {
    return (l - i) * 100;
  }
  });

function Socials() {
  return (
    <div className=' flex socials block width-screen place-content-center'>
        <div className='box'>1</div>
        <div className='box'>2</div>
        <div className='box'>3</div>
        <div className='box'>4</div>
    </div>
  )
}

export default Socials;
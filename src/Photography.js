import React from 'react';
import './styles/styles.css';
import WovenImageList from './PhotoGrid';
import Footer from './Footer';
import photography_main from './photographs/photography_main.png'

const Photography = () => {

  return (
    <div>
      <div className='page'>
      <div className='intro-spacing'>
        <div>
      <div className= "big-header"> My Photography</div>
      <div className= "intro-body"> 
          Traveling is a big part of who I am, giving me a chance to slow down and appreciate the simple things. Whether it’s capturing the beauty of a place through my camera or people-watching to see how others live their lives, I love immersing myself in the moment.
        </div>
      </div>
        {/* <img className= 'photo-main' src={photography_main}/> */}
      </div>
        <WovenImageList/>
        </div>
        <Footer/>
    </div>
          
  );
};

export default Photography;



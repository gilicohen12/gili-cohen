import React from 'react';
import './styles.css';
import WovenImageList from './PhotoGrid';

// import IMG_5066 from './Photographs/IMG_5066.jpg'
// import IMG_4946 from './Photographs/IMG_4946.jpg'
// import IMG_4946 from './Photographs/IMG_4946.jpg'
// import IMG_4946 from './Photographs/IMG_4946.jpg'
// import IMG_4946 from './Photographs/IMG_4946.jpg'
// import IMG_4946 from './Photographs/IMG_4946.jpg'
// import IMG_4946 from './Photographs/IMG_4946.jpg'
// import IMG_4946 from './Photographs/IMG_4946.jpg'
// import IMG_4946 from './Photographs/IMG_4946.jpg'
// import IMG_4946 from './Photographs/IMG_4946.jpg'
// import IMG_4946 from './Photographs/IMG_4946.jpg'
// import IMG_4946 from './Photographs/IMG_4946.jpg'


const Photography = () => {
  

  return (

    
    <div>
      <div className= "big-header"> My Photography</div>
        <div className= "intro-body"> Traveling is an intrinsic part of my identity, a passion that goes beyond the mere act of exploration. Through my global adventures, I find solace and creativity in <b>observing the intricate relationships of the world and the beauty of nature</b>. Each destination becomes a canvas for my lens, capturing moments that reflect the unique tapestry of cultures and landscapes. Solo traveling, in particular, has allowed me to capture the world as I see it, immersing myself fully in the experience and documenting the essence of each place through my unique lens. People-watching, has become a medium that reminds me to <b>slow down and notice the little things</b>, observe the <b>diverse ways individuals choose to live their lives</b>. My travels have become not just about the places, but about the <b>people and the richness they bring to every corner of the globe</b>.</div>
        <WovenImageList/>
    </div>
              
  
  );
};

export default Photography;



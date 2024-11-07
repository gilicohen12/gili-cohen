import React from 'react';
import './styles/styles.css';
import Piece from './Piece';
import Footer from './Footer';

const ExploratoryPieces = () => {
    return (
      <div>
        <div className='page'>
        <div className= "big-header">  Exploratory Pieces </div>
        <div className='intro-body'> As I am immersing myself in the world of CS, I find myself encountering ever-changing buzzwords that I'm eager to stay on top of. To tackle this, I've tapped into my passion for writing and paired it with my insatiable curiosity, to embark on short research sprints. These exploratory pieces serve as my journey to unravel everything there is to know about the evolving tech industry. </div>
        <div className='pieces'> 
          <Piece/>
         <Piece/>
         <Piece/> 
        </div>
        </div>
        <Footer/>
      </div>
    );
  };
  
export default ExploratoryPieces;
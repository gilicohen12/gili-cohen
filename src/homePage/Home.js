import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import home_page_photo2 from '../photographs/home_page_photo2.png';
import SkillsBar from './SkillsBar';
import ExperienceTimeline from './ExperienceTimeline';
import Footer from '../Footer';
import Typewriter from 'typewriter-effect';

const Home = () => {

  useEffect(() => {
    const hash = window.location.hash;

    // Check if the hash matches the ID of your component
    if (hash === '#experience') {
      // Scroll to the element with the corresponding ID
      const targetElement = document.querySelector(hash);

      // Scroll to the element if found
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    // If the hash doesn't match, proceed with existing logic
    else if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, []);


  return (
    <div>
      <div className="page">
        <div className='intro-spacing'>
          <div className="content-container">
          <div >
            <div className="big-header">
              <Typewriter
                options={{
                  strings: ["Gili Cohen"],
                  autoStart: true,
                  delay: 100,
                  loop: true,
                }} />
             </div>
            <div className="intro-body"> 
            Welcome to my space! I’m a <b>computer science student</b> with a combined major in <b>interaction design</b>, driven by a passion for creating seamless connections between technology and people. I thrive on tackling challenges in both <b>front-end and back-end development</b>, with a growing fascination for <b>AI</b> and its potential to revolutionize computer science education. Blending <b>technical expertise</b> with <b>creative thinking</b>, I aim to build solutions that make a lasting impact. Beyond the screen, I find inspiration through photography, yoga, and exploring new cultures and places.

            </div>
          </div>
          <div className="image-container">
      <img className='move-left' src={home_page_photo2} />
    </div>
    </div>

        </div>
        <SkillsBar />
        <div id='experience'><ExperienceTimeline /></div>
        <div className='others'>
          <div className='box'>
            <div className='small-header'> Exploratory Pieces</div>
            <div className='small-section'></div>
            <div className='body'> As I am immersing myself in the world of CS, I find myself encountering ever-changing buzzwords that I'm eager to stay on top of. To tackle this...
              <Link to="/exploratory" className='learn-more'>learn more </Link>
            </div>

          </div>
          <div className='box'>
            <div className='small-header'>My Photography</div>
            <div className='small-section'></div>
            <div className='body'> Traveling is an intrinsic part of my identity, a passion that goes beyond the mere act of exploration. Through my global adventures...
              <Link to="/photography" className='learn-more'>learn more </Link>
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Home;
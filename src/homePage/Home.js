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
            <div className="intro-body"> Welcome to my digital space, where technology meets creativity. I am a <b>computer science</b> and <b>design</b> enthusiast, driven by a passion for both meticulous details and the expansive landscapes within the digital realm. As a dedicated student, my passion lies at the intersection of <b>front and back-end development</b>, with a particular interest in the vast possibilities of <b>AI</b>. I am captivated not only by the technical intricacies of AI development but also by its profound and lasting impact on <b>computer science education</b>. As a <b>leader</b> at heart, I approach challenges with a blend of technical expertise and a deep appreciation for <b>creativity</b>, finding the balance between meticulous detail and zoomed out perspectives. Beyond the lines of code, I find inspiration in the art of <b>photography</b>, the serenity of <b>yoga</b>, and the exploration of new horizons through <b>travel</b>.</div>
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
import React, { useRef } from 'react';
import '../styles/styles.css';
import Footer from '../Footer';
import ProjectCard from './ProjectCard';
import battleshipImage from '../photographs/battleship.jpeg';
import webcrawlerImage from '../photographs/webcrawler.png';
import synthImage from '../photographs/synth.jpeg';
import flowItImage from '../photographs/FlowIt.png';

const ExploratoryPieces = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -345, // Scroll by card width
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 345, // Scroll by card width
        behavior: 'smooth',
      });
    }
  };

  const cards = [
    {
      projectTitle: 'Web Crawler',
      projectSummary:
        'A social media web crawler and scraper that can gather and process large amounts of data from a desired website.',
      projectCodeURL: 'https://github.com/gilicohen12/web-crawler',
      technology: ['Python', 'HTML Parsing', 'Socket Connections', 'Web Scraping'],
      fullDetails:
        'Developed a Python-based web crawler and scraper tailored for social media platforms, designed to efficiently gather and process large datasets from targeted websites. The project includes a custom parser to extract relevant webpage data, ensuring clean and structured outputs. To optimize performance, the crawler uses a mechanism to track visited URLs, preventing redundancy and improving efficiency.',
      image: webcrawlerImage,
    },
    {
      projectTitle: 'Battleship AI Bot',
      projectSummary:
        'Command-line Battleship game with socket connections for seamless multiplayer interactions.',
      projectCodeURL: 'https://github.com/gilicohen12/battleship-ai-bot',
      technology: ['Java', 'MVC Architecture', 'Socket Connections', 'Desktop Application'],
      fullDetails:
        'The Battleship AI Bot is a Java-based command-line game that modernizes the classic Battleship experience. Built with Model-View-Controller (MVC) architecture, it separates game logic, networking, and AI functionality, ensuring modularity and scalability. It uses socket programming for real-time multiplayer and features an AI opponent for a challenging single-player mode.',
      image: battleshipImage,
    },
    {
      projectTitle: 'Synth',
      projectSummary:
        'An AI-driven code autocompletion research project using Python and OpenAI API. Worked alongside Northeastern Professor to develop better design thinking skills for CS students through app utilization.',
      technology: ['Python', 'OpenAI API'],
      fullDetails:
        'An AI-driven code autocompletion research project using Python and OpenAI API. Collaborated with Northeastern professors to enhance coding education by integrating AI tools to support design thinking and problem-solving. Developed a system of classes and decorators to append specifications and tests for improved query accuracy. Assessed Synth’s effectiveness by creating over four complex code designs and contributed to an assignment aimed at advancing coding skills for computer science students.',
      image: synthImage,
    },
    {
      projectTitle: 'FlowIt',
      projectSummary:
        'Mobile app that enhances yoga practice with AI-driven pose recommendations and personalized sequences. Aims to streamline, enrich, and personalize yoga sequences and lesson planning.',
      projectCodeURL: 'https://github.com/gilicohen12/FlowIt',
      technology: ['Python', 'React', 'iOS', 'Node.js'],
      fullDetails:
        'A modern yoga app that uses AI to provide customized pose recommendations and tailored sequences, adapting to individual goals and skill levels. Designed with a clean, intuitive interface, it empowers users to deepen their yoga practice while promoting balance and mindfulness.',
      image: flowItImage,
    },
  ];

  return (
    <div>
      <div className="page">
        <div className="big-header">Personal Projects</div>
        <div className="intro-body">
          As I dive deeper into the tech world, I find myself surrounded by ever-evolving buzzwords and ideas that I’m eager to keep up with. To tackle this, I’ve leaned into my passion for creating and my curiosity, taking on personal projects that range from exploring new tech stacks to working on launching my own app. These projects are my way of staying at the forefront of the tech industry, constantly learning and adapting while bringing my ideas to life.
        </div>
        <div className="horizontal-scroll-container">
          <button className="nav-button left" onClick={scrollLeft}>
            {'<'}
          </button>
          <div className="horizontal-scroll" ref={scrollRef}>
            {cards.map((card, index) => (
              <div className="project-card" key={index}>
                <ProjectCard {...card} />
              </div>
            ))}
          </div>
          <button className="nav-button right" onClick={scrollRight}>
            {'>'}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExploratoryPieces;

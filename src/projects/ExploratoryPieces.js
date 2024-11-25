import React from 'react';
import '../styles/styles.css';
import Footer from '../Footer';
import ProjectCard from './ProjectCard';
import battleshipImage from '../photographs/battleship.jpeg';
import webcrawlerImage from '../photographs/webcrawler.png';
import synthImage from '../photographs/synth.jpeg';

const ExploratoryPieces = () => {
  return (
    <div>
      <div className='page'>
        <div className="big-header">  Personal Projects </div>
        <div className='intro-body'> 
        As I dive deeper into the tech world, I find myself surrounded by ever-evolving buzzwords and ideas that I’m eager to keep up with. To tackle this, I’ve leaned into my passion for creating and my curiosity, taking on personal projects that range from exploring new tech stacks to working on launching my own app. These projects are my way of staying at the forefront of the tech industry, constantly learning and adapting while bringing my ideas to life.
        </div>
        <div className='pieces'>
          <ProjectCard
            projectTitle='Web Crawler'
            projectSummary="A social media web crawler and scraper that can gather and process large amounts of data from a desired website."
            projectCodeURL='https://github.com/gilicohen12/web-crawler'
            technology={['Python', 'HTML Parsing', 'Socket Connections', 'Web Scraping']}
            fullDetails='Developed a Python-based web crawler and scraper tailored for social media platforms, designed to efficiently gather and process large datasets from targeted websites. The project includes a custom parser to extract relevant webpage data, ensuring clean and structured outputs. To optimize performance, the crawler uses a mechanism to track visited URLs, preventing redundancy and improving efficiency. '
            image = {webcrawlerImage}
          />
          <ProjectCard
            projectTitle='Battleship AI Bot'
            projectSummary="Command-line Battleship game with socket connections for seamless multiplayer interactions."
            projectCodeURL='https://github.com/gilicohen12/battleship-ai-bot'
            technology={['Java', 'MVC Architecture', 'Socket Connections', 'Desktop Application']}
            fullDetails ="The Battleship AI Bot is a Java-based command-line game that modernizes the classic Battleship experience. Built with Model-View-Controller (MVC) architecture, it separates game logic, networking, and AI functionality, ensuring modularity and scalability. It uses socket programming for real-time multiplayer and features an AI opponent for a challenging single-player mode"
            image = {battleshipImage}
          />
          <ProjectCard
            projectTitle='Synth'
            projectSummary='An AI-driven code autocompletion research project using Python and OpenAI API. Worked alongside Northeastern Professor to develop better design thinking skills for CS students through app utilization.'
            technology={['Python', 'OpenAI API']}
            fullDetails = "An AI-driven code autocompletion research project using Python and OpenAI API. Collaborated with Northeastern professors to enhance coding education by integrating AI tools to support design thinking and problem-solving. Developed a system of classes and decorators to append specifications and tests for improved query accuracy. Assessed Synth’s effectiveness by creating over four complex code designs and contributed to an assignment aimed at advancing coding skills for computer science students."
            image = {synthImage}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExploratoryPieces;
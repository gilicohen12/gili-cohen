import React from 'react';
import '../styles/styles.css';
import Footer from '../Footer';
import ProjectCard from './ProjectCard';
import battleshipImage from '../photographs/battleship.png';
import webcrawlerImage from '../photographs/webcrawler.png';
import synthImage from '../photographs/synth.png';

const ExploratoryPieces = () => {
  return (
    <div>
      <div className='page'>
        <div className="big-header">  Exploratory Pieces </div>
        <div className='intro-body'> As I am immersing myself in the world of CS, I find myself encountering ever-changing buzzwords that I'm eager to stay on top of. To tackle this, I've tapped into my passion for writing and paired it with my insatiable curiosity, to embark on short research sprints. These exploratory pieces serve as my journey to unravel everything there is to know about the evolving tech industry. </div>
        <div className='pieces'>
          <ProjectCard
            projectTitle='Web Crawler'
            projectSummary="A social media web crawler and scraper that can gather and process large amounts of data from a desired website."
            projectCodeURL='https://github.com/gilicohen12/web-crawler'
            technology={['Python', 'HTML Parsing', 'Socket Connections', 'Web Scraping']}
            fullDetails='Created a social media web crawler and scraper that can gather and process large amounts of data from a desired website. Designed a parser to process webpage data and allow the web crawler to not resist previously visited websites'
            image = {webcrawlerImage}
          />
          <ProjectCard
            projectTitle='Battleship AI Bot'
            projectSummary="Command-line Battleship game with socket connections for seamless multiplayer interactions."
            projectCodeURL='https://github.com/gilicohen12/battleship-ai-bot'
            technology={['Java', 'MVC Architecture', 'Socket Connections', 'Desktop Application']}
            image = {battleshipImage}
          />
          <ProjectCard
            projectTitle='Synth'
            projectSummary='An AI-driven code autocompletion research project using Python and OpenAI API. Worked alongside Northeastern Professor to develop better design thinking skills for CS students through app utilization.'
            technology={['Python', 'OpenAI API']}
            image = {synthImage}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExploratoryPieces;
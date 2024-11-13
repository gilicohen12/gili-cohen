import React from 'react';
import '../styles/styles.css';
import Tech from './Tech';
import java from '../toolIcons/java.png';
import figma from '../toolIcons/figma.png';
import latex from '../toolIcons/latex.png';
import git from '../toolIcons/git.png';
import javascript from '../toolIcons/javascript.png';
import nextjs from '../toolIcons/nextjs.png';
import nodejs from '../toolIcons/nodejs.png';
import tailwind from '../toolIcons/tailwind.png';
import python from '../toolIcons/python.png';
import react from '../toolIcons/react.png';

const SkillsBar = () => {
    return (

        <div> 
        <div className= "small-header">My Skills</div>
        <div className= "skills-box">
            <Tech
            imageSrc= {java}
            altText="Java"
            description="Java"/>
            <Tech
            imageSrc= {python}
            altText="python"
            description="Python"/>
            <Tech
            imageSrc= {react}
            altText="react"
            description="React"/>
            <Tech
            imageSrc= {nextjs}
            altText="next.js"
            description="Next.js"/>
            <Tech
            imageSrc= {nodejs}
            altText="nodejs"
            description="Node.js"/>
            <Tech
            imageSrc= {tailwind}
            altText="tailwind"
            description="TailwindCSS"/>
            <Tech
            imageSrc= {git}
            altText="git"
            description="Git"/>
            <Tech
            imageSrc= {figma}
            altText="figma"
            description="Figma"/>
            <Tech
            imageSrc= {javascript}
            altText="javascript"
            description="JavaScript"/>
            <Tech
            imageSrc= {latex}
            altText="latex"
            description="Latex"/>
        </div>
        </div>
        
    
    );
  };

  export default SkillsBar;
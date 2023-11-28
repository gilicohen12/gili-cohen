import React from 'react';
import './styles.css';
import Tech from './Tech';
import java from './java.png';
import figma from './figma.png'
import latex from './latex.png'
import git from './git.png'
import javascript from './javascript.png'
import nextjs from './nextjs.png'
import nodejs from './nodejs.png'
import tailwind from './tailwind.png'
import python from './python.png'
import react from './react.png'

const SkillsBar = () => {
    return (

        <div className='section'> 
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
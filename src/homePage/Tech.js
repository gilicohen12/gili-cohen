import React from 'react';

const Tech = ({ imageSrc, altText, description }) => {
  return (
    <div className="tech">
      <img src={imageSrc} alt={altText} className="tech-image" />
      <p className="tech-text">{description}</p>
    </div>
  );
};

export default Tech;

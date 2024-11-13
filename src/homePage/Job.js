import React from 'react';
import '../styles/styles.css'; // You can create a CSS file for styling

const Job = ({ title, description, bodyText1, bodyText2 }) => {
  return (
    <div className="wide-rectangle">
      <div className="container">
        <div className="left-column">
          <div className="job-header">{title}</div>
          <div className="job-title">{description}</div>
        </div>
        <div className="right-column">
          <ul>
            <li className="job-body">{bodyText1}</li>
            <li className="job-body">{bodyText2}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Job;
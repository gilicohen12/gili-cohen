import React, { useEffect, useRef } from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import '../styles/styles.css'; // Ensure this file contains the font-family styles

const Job = ({ title, description, bodyText1, bodyText2, date }) => {
  const jobRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    jobRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      jobRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body1"
        color="text.secondary"
      >
        {date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot></TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <div
          className="fade-in"
          ref={(el) => (jobRefs.current[0] = el)}
        >
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
        </div>
      </TimelineContent>
    </TimelineItem>
  );
};

export default Job;
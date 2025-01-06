import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Job from "./Job";

export default function ExperienceTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: { flex: 0.2 },
        pb: 15,
      }}
    >
      <Job
  title="MFS Investment Management"
  description="DevSecOps Software Engineer"
  bodyText1="Built software to streamline Jira workflows and automate onboarding processes, managing over 1,000 tickets to improve team productivity and reduce manual intervention."
  bodyText2="Developed a React metrics dashboard integrating Azure, Bitbucket, and Coralogix APIs, while automating CI/CD pipelines with OpenShift and Jenkins to enhance deployment scalability and efficiency."
  date="July 2024 - Present"
/>
<Job
  title="TAMID Consulting Group"
  description="Software Project Manager"
  bodyText1="Led a full-stack team of 6 developers to execute a dashboard aimed at optimizing TAMID’s recruitment process, while orchestrating data cleaning, analysis, and database management to maintain 16+ semesters of recruitment data."
  bodyText2="Utilized Node.js and React to create an intuitive and responsive dashboard interface, enhancing UX and accessibility. Implemented Agile methodologies to streamline development, ensuring on-time delivery of defined project milestones."
  date="June - Dec 2023"
/>
<Job
  title="Synth"
  description="Software Research Assistant"
  bodyText1="Researched AI-powered code autocompletion using Python and OpenAI API, focusing on improving query-response accuracy and exploring practical applications in coding education."
  bodyText2="Designed and tested 4+ complex code projects while collaborating with professors to create assignments aimed at enhancing introductory computer science students’ design thinking and problem-solving skills."
  date="Sep - Dec 2023"
/>

      <Job
        title="Invictuss"
        description="Front-End Developer & Design Lead"
        bodyText1="Led a team of five designers in the creation of low, mid, and high-fidelity wireframes and prototypes, overseeing the design process from conceptualization to execution."
        bodyText2="Utilized Figma to implement user-centered design principles, crafting an intuitive and visually compelling user interface aimed at enhancing user engagement and driving business growth. Additionally, leveraged React and Tailwind CSS to design and develop a responsive website from scratch, implementing search optimization strategies and ensuring a seamless user experience."
        date="Jan - Apr 2023"
      />
    </Timeline>
  );
}

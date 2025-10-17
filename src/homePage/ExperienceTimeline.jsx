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
        title="Full-Stack Developer"
        description=" MORSE Corp"
        bodyText1="Engineering React features with Python integrations to power a data management platform serving 200+ daily users, optimizing data usability through responsive visualizations and dynamic, server-side filtering."
        bodyText2="Deploying Dockerized Celery workers and RabbitMQ-based inter-app messaging to trigger AI imaging models asynchronously, reducing latency and boosting throughput across workflows."
        date="July 2025 - Present"
      />
      <Job
        title="Software Engineer"
        description="MFS Investment Management"
        bodyText1="Built software to streamline Jira workflows and automate onboarding processes, managing over 1,000 tickets to improve team productivity and reduce manual intervention."
        bodyText2="Developed a React metrics dashboard integrating Azure, Bitbucket, and Coralogix APIs, while automating CI/CD pipelines with OpenShift and Jenkins to enhance deployment scalability and efficiency."
        date="July 2024 - Jan 2025"
      />
      <Job
        title="Project Manager"
        description="TAMID Consulting Group"
        bodyText1="Led a full-stack team of 6 developers to execute a dashboard aimed at optimizing TAMID’s recruitment process, while orchestrating data cleaning, analysis, and database management to maintain 16+ semesters of recruitment data."
        bodyText2="Utilized Node.js and React to create an intuitive and responsive dashboard interface, enhancing UX and accessibility. Implemented Agile methodologies to streamline development, ensuring on-time delivery of defined project milestones."
        date="June - Dec 2023"
      />
      <Job
        title="Undergraduate Research Assistant"
        description="Synth"
        bodyText1="Researched AI-powered code autocompletion using Python and OpenAI API, focusing on improving query-response accuracy and exploring practical applications in coding education."
        bodyText2="Designed and tested 4+ complex code projects while collaborating with professors to create assignments aimed at enhancing introductory computer science students’ design thinking and problem-solving skills."
        date="Sep - Dec 2023"
      />

    </Timeline>
  );
}

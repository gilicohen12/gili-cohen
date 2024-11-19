import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import Job from './Job';

export default function ExperienceTimeline() {

    return (
        <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: { flex: 0.2 },
                pb: 15,
            }}>
            <Job
                title="MFS Investment Management"
                description="DevSecOps Software Engineer"
                bodyText1="Created a React dashboard to automate Jira ticket generation and onboarding via Azure, Bitbucket, and Coralogix APIs."
                bodyText2="Collaborated on automating CI/CD pipelines using OpenShift and Jenkins, driving scalability in software delivery "
                date="July 2024 - Present"
            />
            <Job
              title="TAMID Consulting Group"
              description="Software Project Manager"
              bodyText1="Led a cross-functional team of six developers in the successful execution of a full-stack project aimed at optimizing the organization's recruitment process."
              bodyText2="Guided back-end team to preform data cleaning, analysis, and database management to store and maintain evolving recruitment data, while leading front-end to utilize modern web development technologies such as Node.js and React to create an intuitive and responsive dashboard interface, thereby enhancing user experience and accessibility."
                date= "June - Dec 2023"
            />
            <Job
                title="Synth"
                description="Software Research Assistant"
                bodyText1="I am currently engaged in researching the intricacies of AI-powered code autocompletion in software development using Python. Working alongside my professor and co-assistent, we are harnessing the potent capabilities of the OpenAI API to uncover potential use cases and limitations."
                bodyText2="In the course of our work, we are working on initiatives to refine query-response accuracy. This involves the implementation of a system of classes and decorators, strategically appending specifications and tests to queries for an elevated level of precision. We are actively working to craft an assignment tailored to enrich the design thinking skills of introductory computer science students, bridging the gap between theoretical concepts and practical application."
                date="Sep - Dec 2023"
            />
            <Job
              title="Invictuss"
              description="Front-End Developer & Design Lead"
              bodyText1="Led a team of five designers in the creation of low, mid, and high-fidelity wireframes and prototypes, overseeing the design process from conceptualization to execution."
              bodyText2="Utilized Figma to implement user-centered design principles, crafting an intuitive and visually compelling user interface aimed at enhancing user engagement and driving business growth. Additionally, leveraged React and Tailwind CSS to design and develop a responsive website from scratch, implementing search optimization strategies and ensuring a seamless user experience."
                date = "Jan - Apr 2023"
           />
        </Timeline>
    );
}
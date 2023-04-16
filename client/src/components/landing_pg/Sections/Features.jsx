import React from 'react'
import './Features.css'
// import  '../Button/Buttonstart.css'

export default function Features() {
  return (
    <div id='features' className='Section4'>
        <div className="svg_s4">
                <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon">
                <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
            </svg>
            </div>
            <img className='img3' src="https://github.githubassets.com/images/modules/site/home-campaign/git-branch-collaboration.svg" alt="" height='1000px'/>
            <div className="container_s3">
                <div className="topic s4">
                    <h1>
                    Features
                    </h1>
                    <span className='description_s4'>
                    Project Pilot includes the following features:
                    <br/><br/>
                    <ul className="features">
                        <li className='featuresitems'><span className="bold">Admin dashboard :</span>  Allows administrators to manage the overall operations of the platform, including user management, permissions, and integrations.</li>
                        <li className='featuresitems'><span className="bold">User dashboard :</span>  Provides candidates and employees with access to job listings, application forms, interview schedules, and other job-related tools. Users can also view and edit their profile section, which includes their GitHub info.</li>
                        <li className='featuresitems'><span className="bold">Project management tools :</span> Helps organizations manage projects more efficiently, improve communication and collaboration among team members, and increase productivity. This includes Kanban boards for visualizing project progress, a calendar for managing project timelines, and task management tools for tracking tasks and assigning responsibilities.</li>
                        
                        <li className='featuresitems'><span className="bold">Collaboration features :</span>  Enables team members to work together more effectively, share files, and communicate in real-time. This includes a chat feature for one-to-one interactions among team members, a discussion forum for team-wide communication and discussions, and the ability to contribute to projects and collaborate on tasks.</li>

                        <li className='featuresitems'><span className="bold">Task management tools :</span>  Allows organizations to track tasks, assign responsibilities, and monitor progress.</li>

                        <li className='featuresitems'><span className="bold">Reporting and duplicate project detection:</span>  Users can report any duplicate projects or issues, helping to maintain project quality and avoid redundancy.</li>
                    </ul>
                    </span>
                    </div>
                    <div className="topic s4">
                    <h1>
                    Benefits
                    </h1>
                    <span className='description_s4'>
                    Project Pilot offers the following benefits to organizations:
                    <br/><br/>
                    <ul className="features">
                        <li className='featuresitems'><span className="bold">Efficient project management:</span>  The project management tools, including Kanban boards, calendar, and task management, help teams collaborate, stay organized, and meet project deadlines, resulting in improved productivity and project outcomes.
                        </li>
                        <li className='featuresitems'><span className="bold">Real-time collaboration: </span>  The collaboration features, such as chat and discussion forum, facilitate real-time communication and collaboration among team members, promoting efficient teamwork and knowledge sharing.</li>
                        <li className='featuresitems'><span className="bold">Project quality maintenance:</span> The reporting and duplicate project detection feature allows users to report any issues or duplicates, helping to maintain project quality and avoid redundancy.
                        </li>
                        
                        <li className='featuresitems'><span className="bold">Collaboration features :</span>  Enables team members to work together more effectively, share files, and communicate in real-time. This includes a chat feature for one-to-one interactions among team members, a discussion forum for team-wide communication and discussions, and the ability to contribute to projects and collaborate on tasks.</li>

                        <li className='featuresitems'><span className="bold">User-friendly interface:</span>  Project Pilot offers an intuitive and user-friendly interface that is easy to navigate and use, making it accessible to users with varying levels of technical expertise.</li>

                    </ul>
                    </span>
                    </div>
            </div>
    </div>
  )
}

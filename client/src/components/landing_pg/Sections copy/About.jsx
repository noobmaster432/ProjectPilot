import React from 'react'
import './About.css'
import  '../Button/Buttonstart.css'

export default function About() {
    return (
        <div id='about' className='Section3'>
            <div className="svg">
                <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon">
                <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
            </svg>
            </div>
            <img className='img2' src="https://github.githubassets.com/images/modules/site/home-campaign/git-branch-productivity.svg" alt="" height='900px'/>
            <div className="container_s3">
                <div className="topic s3">
                    <h1>
                        Who We Are??
                    </h1>
                    <span className='description_s3 bn5'>
                    <span className="bold">Project Pilot</span> is a project management system that provides a streamlined recruitment process and effective project management tools. It includes a landing page, admin dashboard, recruiter dashboard, and user dashboard, along with other features that enable organizations to manage projects and recruitment more efficiently.
                    </span>
                    <h1>
                    Getting Started
                    </h1>
                    <span className='description_s3 bn5'>
                    To get started with Project Pilot, simply <a href='#' className="bold">sign up</a> for an account on the landing page. Once you're logged in, you'll have access to the admin dashboard, recruiter dashboard, and user dashboard, depending on your role in the organization.
                    </span>
                </div>
            </div>
            </div>  
            
    )
}


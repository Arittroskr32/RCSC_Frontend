import React from 'react'
import "./Logo_desc.css"

const Logo_desc = () => {
  return (
    <div className='Logo_desc'>
      <div className="page1">
        <div className="content">
          <div className="tagline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
            >
              <path d="M12 22c-4-1.5-8-5-8-10V5l8-3 8 3v7c0 5-4 8.5-8 10z"></path>
            </svg>
            <span>Securing the digital frontier</span>
          </div>

          <h1>RUET Cyber Security Club</h1>
          <p>
            Empowering students with the knowledge and skills to excel in the
            ever-evolving world of cybersecurity through hands-on learning,
            competitions, and community.
          </p>

          <div className="buttons">
            <a href="/contact" className="btn btn-primary">
              Join Us
            </a>
            <a
              href="/resources"
              className="btn btn-secondary"
            >
              Explore Resources
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logo_desc

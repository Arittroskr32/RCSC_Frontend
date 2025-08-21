import React from 'react'
import "./Home_about.css"

const Home_about = () => {
  return (
    <div className='Home_about'>
      <section className="about-us-section card-page">
        <div className="page">
          <div className="section-header">
            <h2>About Our Club</h2>
            <p>
              RUET Cyber Security Club is a student-led organization dedicated to
              fostering a culture of cybersecurity awareness and expertise. We
              provide a platform for students to learn, practice, and excel in
              various domains of cybersecurity.
            </p>
          </div>
          <div className="grid-cards">
            <div className="card">
              <div className="card-head">
                <div className="icon-container">
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
                    className="icon-shield"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                  </svg>
                </div>
                <h3>Learn</h3>
              </div>
              <p>
                Access curated learning resources, workshops, and training
                sessions to build your cybersecurity knowledge.
              </p>
            </div>
            <div className="card">
              <div className="card-head">
                <div className="icon-container">
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
                    className="icon-code"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3>Practice</h3>
              </div>
              <p>
                Participate in CTF competitions, bug bounty programs, and
                hands-on labs to sharpen your skills.
              </p>
            </div>
            <div className="card">
              <div className="card-head">
                <div className="icon-container">
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
                    className="icon-users"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3>Connect</h3>
              </div>
              <p>
                Join a community of like-minded individuals, network with
                professionals, and collaborate on projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home_about

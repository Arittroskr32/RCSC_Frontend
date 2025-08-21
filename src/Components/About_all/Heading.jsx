import React from 'react'
import "./Heading.css"

const Heading = () => {
  return (
    <div className='header_part'>
                <div className="frontpage-wrapper">
                    <div className="frontpage page">
                        <div className="frontpage-content">
                            <h1 className="title">About Us</h1>
                            <p className="details">The RUET Cyber Security Club is a thriving community of cybersecurity enthusiasts at Rajshahi University of Engineering & Technology (RUET). Our mission is to empower students with the knowledge, skills, and practical experience needed to excel in the field of cybersecurity.</p>
                        </div>
                        <div className="frontpage-img">
                            <img src="/Assets/about_image.jpg" alt="About RUET Cyber Security Club" className="about-img-border" />
                        </div>
                    </div>
                </div>

        <div className="page2 page">
            <h2 className="subtitle">What We Do</h2>
            <p className="details">At RUET Cyber Security Club (RCSC), we empower students to learn, practice, and excel in the ever-evolving field of cybersecurity. We organize hands-on workshops, technical training sessions, Capture The Flag (CTF) competitions, bug bounty programs, and collaborative research projects to bridge the gap between theory and real-world application.</p>

            <p className="details">Additionally, we provide a comprehensive repository of learning resources, ensuring that our members stay ahead with the latest tools, techniques, and industry trends. Our initiatives include:</p>

            <div className="grid-cards">
                <div className="card card1">
                    <div className="card-head">
                        <div className="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                        </div>
                        <h3>Technical Training</h3>
                    </div>
                    <p>We provide hands-on training in various security domains including network security, web security, cryptography, reverse engineering, and more.</p>
                </div>
                <div className="card card2">
                    <div className="card-head">
                        <div className="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <circle cx="12" cy="12" r="6"></circle>
                                <circle cx="12" cy="12" r="2"></circle>
                            </svg>
                        </div>
                        <h3>Competitions</h3>
                    </div>
                    <p>We organize and participate in various cybersecurity competitions, including CTFs, hackathons, and bug bounty programs to apply theoretical knowledge.</p>
                </div>
                <div className="card card3">
                    <div className="card-head">
                        <div className="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <h3>Community Building</h3>
                    </div>
                    <p>We foster a supportive community where members can share knowledge, collaborate on projects, and grow together in their cybersecurity journey.</p>
                </div>
                <div className="card card4">
                    <div className="card-head">
                        <div className="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                <circle cx="12" cy="8" r="6"></circle>
                            </svg>
                        </div>                                
                        <h3>Career Development</h3>
                    </div>
                    <p>We help members prepare for cybersecurity careers through resume building, interview preparation, and connecting with industry professionals.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Heading

import React from 'react'
import { Link } from 'react-router-dom'
import "./About_joinus.css"

const About_joinus = () => {
  return (
    <div className='About_joinus'>
      <div className="page6 page">
            <h2 className="subtitle">Why Join Us</h2>
            <div className="grid-cards">
                <div className="card card1">
                    <div className="card-head">
                        <h3>Skill Development</h3>
                    </div>
                    <p>Gain practical cybersecurity skills through hands-on workshops and training sessions.</p>
                </div>
                
                <div className="card card2">
                    <div className="card-head">
                        <h3>Networking</h3>
                    </div>
                    <p>Connect with like-minded individuals, industry professionals, and alumni.</p>
                </div>
                
                <div className="card card3">
                    <div className="card-head">
                        <h3>Competition Experience</h3>
                    </div>
                    <p>Participate in CTF competitions and hackathons to test and showcase your skills.</p>
                </div>
                
                <div className="card card4">
                    <div className="card-head">
                        <h3>Resume Building</h3>
                    </div>
                    <p>Add valuable experience and achievements to your resume through club activities.</p>
                </div>
                
                <div className="card card5">
                    <div className="card-head">
                        <h3>Research Opportunities</h3>
                    </div>
                    <p>Collaborate on research projects and potentially publish papers in cybersecurity.</p>
                </div>
                
                <div className="card card6">
                    <div className="card-head">
                        <h3>Community Support</h3>
                    </div>
                    <p>Learn in a supportive environment where knowledge sharing is encouraged.</p>
                </div>
            </div>
            <div className="join-btn">
                <Link to={"../contact"} className="join-club-btn">Join Our Club</Link>
            </div>                                      
        </div>
    </div>
  )
}

export default About_joinus

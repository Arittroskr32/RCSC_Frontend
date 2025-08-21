import React from 'react'
import { SiCyberdefenders } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { GiArchiveResearch } from "react-icons/gi";
import "./What_we_do.css"

const What_we_do = () => {
  return (
    <div className='what_we_do'>
      <h1>What We Do</h1>
      <div className="what_we_do_main">
        <div className="box">
            <SiCyberdefenders className='icon' />
            <h2>Digital Gurdians: Cyber Awareness & Defense</h2>
            <p>We promote a secure digital world through workshops, seminars, and campaigns, educating students on cyber threats, online privacy, and safe internet practices.</p>
        </div>

        <div className="box">
            <MdSecurity className='icon' />
            <h2>Cyber Warriors: CTF,Bug Bounty & Pentesting</h2>
            <p>We train students in offensive security through CTFs, bug bounty hunting, and penetration testing, providing hands-on experience and real-world hacking expertise.</p>
        </div>

        <div className="box">
            <GiArchiveResearch className='icon' />
            <h2>Future Architects: Research & Cybersecurity Careers</h2>
            <p>We guide aspiring students in writing research papers, publishing articles, and exploring career paths in the cybersecurity industry.</p>
        </div>
      </div>
    </div>
  )
}

export default What_we_do

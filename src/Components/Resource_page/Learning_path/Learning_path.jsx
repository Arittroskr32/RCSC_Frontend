import React from "react";
import { Link } from "react-router-dom";
import "./Learning_path.css"

const Learning_path = () => {
  const resourceData = [
    {
      level: 'Beginner',
      title: 'Foundations',
      duration: '1-2 months',
      description: 'Build a solid foundation in computer networks, operating systems, and basic programming.',
      topics: [
        'Linux Fundamentals',
        'Solve basic CTF Problems',
        'Basic Programming (Python)',
        'Introduction to Cybersecurity Concepts',
      ],
      resources: [
        { name: 'PicoCTF', link: 'https://picoctf.org/' },
        { name: 'CTFlearn', link: 'https://ctflearn.com/' },
      ],
    },
    {
      level: 'Intermediate',
      title: 'Core Security Skills',
      duration: '5-6 months',
      description: 'Learn essential security concepts and start practicing with advance tools and techniques.',
      topics: [
        'Web Application Security',
        'Network Security',
        'Advance Cryptography',
        'Security Tools (Autopsy, Burpsuit, Wireshark, etc.)',
        'Vulnerability Assessment',
      ],
      resources: [
        { name: 'PicoCTF', link: 'https://picoctf.org/' },
        { name: 'CTFlearn', link: 'https://ctflearn.com/' },
        { name: 'TryHackMe', link: 'https://tryhackme.com/' },
      ],
    },
    {
      level: 'Advanced',
      title: 'Specialization',
      duration: '6-8 months',
      description: 'Choose a specialization area and deep dive into advanced concepts and techniques.',
      topics: [
        'Penetration Testing',
        'Malware Analysis',
        'Digital Forensics',
        'Incident Response',
        'Cloud Security',
      ],
      resources: [
        { name: 'Blogs', link: 'https://medium.com/' },
        { name: 'TryHackMe', link: 'https://tryhackme.com/' },
      ],
    },
    {
      level: 'Expert',
      title: 'Professional Skills',
      duration: 'Ongoing',
      description: 'Develop professional skills, contribute to the community, and prepare for industry certifications.',
      topics: [
        'Research and Development',
        'Bug Bounty Hunting',
        'Security Architecture',
        'Certifications (CEH, OSCP, etc.)',
        'Mentoring and Knowledge Sharing',
      ],
      resources: [
        { name: 'Bug Bounty Hunting Guide', link: '#' },
        { name: 'Certification Preparation Resources', link: '#' },
      ],
    },
  ];

  return (
    <div className="resource-path-container">
      <h2 className="resource-path-title">Learning Path</h2>
      <p className="resource-path-description">
        Follow our recommended learning path to build your cybersecurity skills from beginner to advanced level. This roadmap is designed to provide a structured approach to learning various aspects of cybersecurity.
      </p>
      <div className="timeline-container">
        <div className="timeline">
          {resourceData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'timeline-item-reverse' : ''}`}
            >
              <div className={`timeline-content ${index % 2 === 0 ? 'content-reverse' : ''}`}>
                <div className="timeline-card">
                  <div className="level-tag">{item.level}</div>
                  <h3 className="timeline-card-title">{item.title}</h3>
                  <p className="timeline-card-duration">Estimated duration: {item.duration}</p>
                  <p className="timeline-card-description">{item.description}</p>
                  <h4 className="timeline-card-subtitle">Key Topics:</h4>
                  <ul className="topics-list">
                    {item.topics.map((topic, idx) => (
                      <li key={idx} className="topic-item">
                        <span className="bullet-point">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <h4 className="timeline-card-subtitle">Recommended Resources:</h4>
                  <ul className="resources-list">
                    {item.resources.map((resource, idx) => (
                      <li key={idx}>
                        <Link to={resource.link} className="resource-link">
                          {resource.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cta-container">
        <p className="cta-text">
          Remember, this is just a suggested path. Feel free to adapt it based on your interests and goals.
        </p>
        <Link to="/contact" className="cta-button">Contact for Guidance</Link>
      </div>
    </div>
  );
}

export default Learning_path;

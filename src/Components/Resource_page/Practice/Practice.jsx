import React from 'react';
import './Practice.css';

const Practice = () => {
  return (
    <div className="practice-container">
      <h2 className="practice-title">Practice Platforms</h2>
      <p className="practice-description">
        Improve your cybersecurity skills through hands-on practice. Here are some recommended platforms for different skill levels.
      </p>
      <div className="practice-grid">
        {[
          {
            name: 'TryHackMe',
            description:
              'Learn cybersecurity through hands-on exercises and labs in a browser-based environment.',
            link: 'https://tryhackme.com/',
            image: 'https://assets.tryhackme.com/img/THMlogo.png',
          },
          {
            name: 'HackTheBox',
            description:
              'Cybersecurity training platform with realistic scenarios and machines to practice on.',
            link: 'https://www.hackthebox.com/',
            image: 'https://www.hackthebox.com/images/logo-htb.svg',
          },
          {
            name: 'VulnHub',
            description:
              'Provides materials allowing anyone to gain practical hands-on experience with digital security.',
            link: 'https://www.vulnhub.com/',
            image: 'https://www.vulnhub.com/static/img/logo.svg',
          },
          {
            name: 'PortSwigger Web Security Academy',
            description:
              'Free online training center for web security with interactive labs.',
            link: 'https://portswigger.net/web-security',
            image:
              'https://portswigger.net/content/images/logos/portswigger-logo.svg',
          },
          {
            name: 'CTF Time',
            description:
              'Platform listing upcoming CTF competitions and team rankings.',
            link: 'https://ctftime.org/',
            image: 'https://ctftime.org/static/images/ct/logo.svg',
          },
          {
            name: 'PicoCTF',
            description:
              'Free computer security education program with original content built on a capture-the-flag framework.',
            link: 'https://picoctf.org/',
            image:
              'https://picoctf.org/img/logos/picoctf-logo-horizontal-white.svg',
          },
        ].map((platform, index) => (
          <div key={index} className="platform-card">
            <div className="platform-card-image">
              <img
                src={platform.image}
                alt={platform.name}
                className="platform-image"
              />
            </div>
            <div className="platform-card-content">
              <div className="platform-header">
                <h3 className="platform-title">{platform.name}</h3>
              </div>
              <p className="platform-description">{platform.description}</p>
            </div>
            <div className="platform-footer">
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-link"
              >
                Visit Platform
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="practice-session">
        <h3 className="session-title">Practice Sessions</h3>
        <p className="session-description">
          Join our weekly practice sessions where we solve challenges together and learn from each other.
        </p>
        <a
          href="/activities"
          className="session-btn"
        >
          Join Practice Sessions
        </a>
      </div>
    </div>
  );
};

export default Practice;

import React from 'react';
import { ChevronRightIcon, ExternalLinkIcon } from 'lucide-react';
import './Learning_material.css';

const Learning_material = () => {
  const categories = [
    {
      category: 'Web Security',
      resources: [
        { title: 'OWASP Top 10', link: 'https://owasp.org/www-project-top-ten/' },
        { title: 'Web Security Academy', link: 'https://portswigger.net/web-security' },
        { title: 'CTF-learn', link: 'https://ctflearn.com/' },
      ],
    },
    {
      category: 'OSINT & Steganography',
      resources: [
        { title: 'OSINT', link: 'https://gralhix.com/list-of-osint-exercises/' },
        { title: 'PicoCTF', link: 'https://play.picoctf.org/practice' },
        { title: 'CTF-learn', link: 'https://ctflearn.com/' },
      ],
    },
    {
      category: 'Cryptography',
      resources: [
        { title: 'CryptoHack', link: 'https://cryptohack.org/' },
        { title: 'PicoCTF', link: 'https://play.picoctf.org/practice' },
        { title: 'Cryptography Basics', link: 'https://tryhackme.com/room/cryptographybasics' },
        
      ],
    },
    {
      category: 'Reverse Engineering',
      resources: [
        { title: 'Reverse Engineering- PicoCTF', link: 'https://play.picoctf.org/practice' },
        { title: 'Github', link: 'https://github.com/Kasimir123/CTFWriteUps' },
        { title: 'Reverse Engineering', link: 'https://0xinfection.github.io/reversing/' },   
      ],
    },
    {
      category: 'Digital Forensics',
      resources: [
        { title: 'Forensic - PicoCTF', link: 'https://play.picoctf.org/practice' },
        { title: 'Forensic - CTFlearn', link: 'https://ctflearn.com/' },
        { title: 'CTF Handbook', link: 'https://ctf101.org/forensics/overview/' },
      ],
    },
    {
      category: 'Pwn - Binary Explotations',
      resources: [
        { title: 'PicoCTF', link: 'https://play.picoctf.org/practice' },
        { title: 'CTF-learn', link: 'https://ctflearn.com/' },
      ],
    },
  ];

  return (
    <div className="learning-material-container">
      <h2 className="learning-material-title">Learning Materials</h2>

      <div className="learning-material-grid">
        {categories.map((category, index) => (
          <div key={index} className="learning-material-card">
            <h3 className="category-title">{category.category}</h3>
            <ul className="resources-list">
              {category.resources.map((resource, idx) => (
                <li key={idx} className="resource-item">
                  <a
                    href={resource.link}
                    className="resource-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ChevronRightIcon className="icon-chevron" />
                    <span>{resource.title}</span>
                    <ExternalLinkIcon className="icon-external-link" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="club-library-container">
        <h3 className="club-library-title">Club Library</h3>
        <p className="club-library-description">
          As a club member, you get access to our digital library containing e-books, research papers, and exclusive tutorials created by our senior members.
        </p>
        <a href="/contact" className="join-library-btn">
          Contact to Access Library
        </a>
      </div>
    </div>
  );
};

export default Learning_material;

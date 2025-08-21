import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./About_history.css";

const historyEvents = [
  {
    year: "2025",
    title: "Best Cybersecurity Club",
    description: "Recognized as Best Cybersecurity Club by Team Phonix at Phonix Summit 2025, Bangladesh’s largest cybersecurity event."
  },
  {
    year: "2024",
    title: "Expansion & Growth",
    description: "Expanded our activities to include research collaborations and industry partnerships."
  },
  {
    year: "2024",
    title: "Cyber Fest",
    description: "Hosted our first-ever Cyber Fest, bringing together cybersecurity enthusiasts from across the country."
  },
  {
    year: "2023",
    title: "Official Registration",
    description: "RUET Cyber Security Club was officially registered as a university club, marking a significant milestone in our journey."
  },
  {
    year: "2022",
    title: "National Recognition",
    description: "Our team secured top positions in national cybersecurity competitions, putting RUET CSE on the map."
  },
  {
    year: "2020",
    title: "Virtual Transition",
    description: "Successfully transitioned to virtual events and workshops during the global pandemic, expanding our reach."
  },
  {
    year: "2018",
    title: "Community Foundation",
    description: "RUET Cyber Security Club began its journey as a community of enthusiastic students passionate about cybersecurity."
  }
];

const About_history = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const toggleVisible = () => {
    setVisibleCount(prev => (prev === 6 ? historyEvents.length : 6));
  };

  return (
    <div className='About_history'>
      <div className="page3 page">
        <h2 className="subtitle">Our History</h2>

        {/* Animate container layout changes */}
        <motion.div className="history-lane" >
          <AnimatePresence exitBeforeEnter>
            {historyEvents.slice(0, visibleCount).map((event, index) => (
              <motion.div
                key={event.year + event.title}
                className="history-carddeck"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
                layout
              >
                <div className="outer-container">
                  <div className="circle">
                    <div className="inner-circle"></div>
                  </div>
                </div>
                <div className="history-card">
                  <div className="card">
                    <div className="year">{event.year}</div>
                    <h3 className="title">{event.title}</h3>
                    <p className="description">{event.description}</p>
                  </div>
                </div>
                <div className="small-line"></div>
              </motion.div>
            ))}
          </AnimatePresence>

          <div className="page-line"></div>
        </motion.div>

        {historyEvents.length > 6 && (
          <motion.button
            onClick={toggleVisible}
            className="toggle-btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
          >
            {visibleCount === 6 ? "Show More" : "Show Less"}
          </motion.button>
        )}
      </div>

      <div className="page4 page">
        <h2 className="subtitle">Our Mission & Vision</h2>
        <div className="misson-grid">
          <div className="misson card">
            <h3>Our Mission</h3>
            <p className="des">
              To empower RUET students with cybersecurity knowledge and skills through practical learning experiences, fostering a community of ethical hackers and security professionals who contribute to a safer digital world.
            </p>
          </div>
          <div className="vision card">
            <h3>Our Vision</h3>
            <p className="des">
              To be recognized as a leading university cybersecurity club that produces skilled professionals, innovative research, and meaningful contributions to the cybersecurity community both nationally and internationally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_history;
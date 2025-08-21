import React from 'react';
import "./Faq.css"

const Faq = () => {
  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {[
          {
            question: 'How can I join the RUET Cyber Security Club?',
            answer:
              'You can join our club by filling out the membership form or Contact us for that. We welcome students from all departments with an interest in cybersecurity.',
          },
          {
            question:
              'Do I need prior knowledge of cybersecurity to join the club?',
            answer:
              'No, we welcome members of all skill levels. Our learning resources are designed to help beginners get started, and we have mentorship programs to guide new members.',
          },
          {
            question:
              'How often does the club organize events and workshops?',
            answer:
              'We typically organize 4-6 events or workshops per month during the academic semester. This includes technical workshops, CTF competitions, and guest speaker sessions.',
          },
          {
            question:
              'Can I participate in CTF competitions as a beginner?',
            answer:
              'Absolutely! We organize internal CTF competitions with challenges suitable for beginners. These are great opportunities to learn and practice in a supportive environment.',
          },
          {
            question:
              'If I participate in the club CTF, are there any benefits?',
            answer:
              'Yes, participating in our CTF competitions will enhance your cybersecurity skills, and we will feature students who perform exceptionally well in the competition.',
          },
          {
            question: "How can I contribute to the club's activities?",
            answer:
              'Members can contribute by helping organize events, creating learning resources, mentoring new members, representing the club in competitions, and more. We encourage active participation from all members.',
          },
          {
            question: 'Are there any membership fees?',
            answer:
              'We have a nominal annual membership fee that helps cover the cost of organizing events and maintaining our resources.',
          },
          {
            question: 'Can alumni still be involved with the club?',
            answer:
              'Yes, we have an alumni network where graduates can stay connected, mentor current students, and participate in certain events. We value the continued involvement of our alumni.',
          },
        ].map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="contact-section">
        <p className="contact-text">Have more questions? Feel free to reach out to us.</p>
        <a
          href="/contact"
          className="contact-btn"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Faq;

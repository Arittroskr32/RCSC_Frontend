import React, { useState, useEffect, useContext } from "react";
import Card from "../Components/Card/Card";
import { Context } from "../main";
import "./Members.css";
import axios from "axios";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";

const Members = () => {
  const { BACKEND_URL } = useContext(Context);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/members/getmember`);
        const membersData = response.data.data || [];
        setMembers(membersData);
      } catch (err) {
        setError(err.message || "Failed to load members");
        console.error("Error fetching members:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [BACKEND_URL]);

  if (loading) return <div className="loading">Loading members...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="member">
      <h1 className="mainh1">Meet Our Panel Members</h1>
      <h1>Our Advisor</h1>
      <div className="advisor">
        {members
          .filter((member) => member.post === "Advisor" || member.post === "advisor")
          .map((member) => (
            <Card
              key={member._id}
              name={member.name}
              imageUrl={member.image_url}
              committee={member.committee}
              post={member.post}
              roll={member.roll}
              department={member.department}
              contact={member.contact}
              series={member.series}
            />
          ))}
      </div>
      <h1 className="new-committee-h1">Executive Committee (2024-2025)</h1>
      <div className="new-committee-senior">
        {(() => {
          // Filter for current committee (not old) and not Advisor
          const execMembers = members.filter(
            (member) => member.committee !== "old" && !(member.post && member.post.toLowerCase().includes("advisor"))
          );

          // Helper to check post
          const isPresident = (post) => post && post.toLowerCase().includes("president") && !post.toLowerCase().includes("vice");
          const isGeneralSecretary = (post) => post && post.toLowerCase().includes("general secretary");
          const isVicePresident = (post) => post && post.toLowerCase().includes("vice president");
          const isJointSecretary = (post) => post && post.toLowerCase().includes("joint secretary");

          // 1. President(s)
          const presidents = execMembers.filter(m => isPresident(m.post));
          // 2. General Secretary(s)
          const generalSecretaries = execMembers.filter(m => isGeneralSecretary(m.post));
          // 3. Vice President(s)
          const vicePresidents = execMembers.filter(m => isVicePresident(m.post));
          // 4. Joint Secretary(s)
          const jointSecretaries = execMembers.filter(m => isJointSecretary(m.post));

          // Remove those already included
          const shownIds = new Set([
            ...presidents.map(m => m._id),
            ...generalSecretaries.map(m => m._id),
            ...vicePresidents.map(m => m._id),
            ...jointSecretaries.map(m => m._id),
          ]);

          // 5. Remaining by series: 20, then 21, then 22
          const rest20 = execMembers.filter(m => m.series === 20 && !shownIds.has(m._id));
          const rest21 = execMembers.filter(m => m.series === 21 && !shownIds.has(m._id));
          const rest22 = execMembers.filter(m => m.series === 22 && !shownIds.has(m._id));

          // Render in order
          return [
            ...presidents,
            ...generalSecretaries,
            ...vicePresidents,
            ...jointSecretaries,
            ...rest20,
            ...rest21,
            ...rest22,
          ].map((member) => (
            <Card
              key={member._id}
              name={member.name}
              imageUrl={member.image_url}
              committee={member.committee}
              post={member.post}
              roll={member.roll}
              department={member.department}
              contact={member.contact}
              series={member.series}
            />
          ));
        })()}
      </div>

      <h1 className="old-committee-h1">Hall of Fame</h1>
      <div className="previous-committee">
        {members
          .filter((member) => member.committee === "old") 
          .map((member) => (
            <Card
              key={member._id}
              name={member.name}
              imageUrl={member.image_url}
              committee={member.committee}
              post={member.post}
              roll={member.roll}
              department={member.department}
              contact={member.contact}
              series={member.series}
            />
          ))}
      </div>

      {/* Team Structure Section */}
      <div className="team-structure">
        <h2 className="subtitle">Team Structure</h2>
        <div className="box">
          <h3>Organizational Structure</h3>

          <div className="sub-section">
            <h4>Advisory Board</h4>
            <p>The club is guided by an advisory board consisting of:</p>
            <ul>
              <li>Faculty Advisors from RUET</li>
              <li>Industry Professionals</li>
              <li>Alumni Advisors</li>
            </ul>
          </div>
          
          <div className="sub-section">
            <h4>Senior Executive Committee</h4>
            <p>The Executive Committee is responsible for the overall management and direction of the club. It consists of:</p>
            <ul>
              <li>President</li>
              <li>Vice President</li>
              <li>General Secretary</li>
              <li>Joint Secretary</li>
            </ul>
          </div>
          
          <div className="sub-section">
            <h4>Junior Executive Committee</h4>
            <p>Junior Executive Committee members lead various aspects of the club's activities and reports to the Senior Executive Committee:</p>
            <ul>
              <li>Organizing Lead</li>
              <li>Administrative Operation Lead</li>
              <li>Training Coordinator</li>
              <li>CTF and Training Programs Lead</li>
              <li>Creative Director</li>
              <li>Brand Strategy and Engagement Lead</li>
              <li>Finance Strategist</li>
              <li>Research and Development Strategist</li>
            </ul>
          </div>
          
          <div className="sub-section">
            <h4>Working Groups</h4>
            <p>Members are organized into specialized working groups based on their interests:</p>
            <ul>
              <li>Web Security Group</li>
              <li>Network Security Group</li>
              <li>Cryptography Group</li>
              <li>Reverse Engineering Group</li>
              <li>Digital Forensics Group</li>
              <li>CTF Team</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="join-section">
        <h2 className="subtitle">Join Our Team</h2>
        <p className="details">
          We're always looking for passionate individuals to join our community. Whether you're a beginner or an experienced cybersecurity enthusiast, there's a place for you in our club.
        </p>
        <div className="button-container">
          <Link to="/contact" className="join-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Apply for Membership
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Members;
import React from "react";
import { Github, Linkedin } from "lucide-react";
import "./Developer.css";

const GradientBorderCard = ({ developer }) => (
  <div className="custom-rel-card group">
    {/* Gradient border with animation */}
    <div className="custom-card-gradient-border"></div>

    {/* Card content */}
    <div className="custom-card-content">
      {/* Header with series and roll */}
      <div className="custom-card-header">
        <div className="custom-series-label">
          {developer.series} Series
        </div>
        <div className="custom-roll-highlight">
          <div className="custom-roll-content">#{developer.roll}</div>
        </div>
      </div>

      {/* Profile image with hover effects */}
      <div className="custom-card-avatar">
        <div className="custom-avatar-img-wrapper">
          <img
            src={developer.image || "/placeholder.svg"}
            alt={developer.name}
            width={80}
            height={80}
            className="custom-avatar-img"
          />
          <div className="custom-avatar-status"></div>
        </div>
      </div>

      {/* Name and role */}
      <div className="custom-card-info">
        <h3 className="custom-dev-name">{developer.name}</h3>
        <p className="custom-dev-role">{developer.role}</p>
        <p className="custom-dev-dept">{developer.dept}</p>
      </div>

      {/* Social links */}
      <div className="custom-card-social">
        {developer.linkedin_url && (
          <a
            href={developer.linkedin_url}
            className="custom-social-link linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="custom-social-icon linkedin" />
          </a>
        )}
        {developer.github_url && (
          <a
            href={developer.github_url}
            className="custom-social-link github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="custom-social-icon github" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Developer = ({ devTeam }) => (
  <div className="page7 page">
    <h2 className="subtitle">Meet the Developer Team</h2>
    <div className="profile-grid">
      {devTeam.map((developer, index) => (
        <GradientBorderCard developer={developer} key={index} />
      ))}
    </div>
  </div>
);

export default Developer;
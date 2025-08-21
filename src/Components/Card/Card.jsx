import React from 'react';
// Assets in public should be referenced by their public path
const RUET_logo_path = "/Assets/ruet_logo_white_transparent.png";
const RCSC_logo_path = "/Assets/RCSC_card.png";
import "./Card.css";

const Card = ({ name, imageUrl, post, roll, department, contact, series }) => {
  return (
    <div className="card">
      {/* Top colored section with profile image */}
      <div className="card-header">
        {/* RUET Logo in top left corner */}
        <div className="card-logo-left">
          <img src={RUET_logo_path} alt="RUET Logo" className="logo" />
        </div>
        {/* RCSC Logo in top right corner */}
        <div className="card-logo-right">
          <img src={RCSC_logo_path} alt="Cyber Shield Logo" className="logo" />
        </div>
        <div className="card-profile">
          <img src={imageUrl} alt={name} />
        </div>
      </div>
      {/* Content section */}
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p className="card-position">{post}</p>
        {/* Contact and Series */}
        <p className="card-contact">Contact: {contact}</p>
        {post !== 'Advisor' && <p className="card-series">Series: {series}</p>}
        <p className="card-info">
          {post === "Advisor" ? "Computer Science & Engineering" : `${roll} • ${department}`}
        </p>
      </div>
    </div>
  );
};

export default Card;

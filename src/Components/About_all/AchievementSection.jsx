import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./AchievementSection.css";

const truncate = (text, wordLimit = 20) => {
  if (!text) return "";
  const words = text.split(/\s+/);
  return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
};

const AchievementSection = ({ achievements }) => {
  const navigate = useNavigate();

  return (
    <div className="achievement-card-grid">
      {achievements.map((ach, index) => (
        <motion.div
          key={ach._id}
          className="achievement-card"
          onClick={() => navigate(`/achievement/${ach._id}`)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 198, 255, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={ach.image} alt={ach.title} className="achievement-img" />
          <h3 className="achievement-title">{ach.title}</h3>
          <p className="achievement-desc">
            {truncate(ach.description)}
            <button
              className="click-here-btn"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/achievement/${ach._id}`);
              }}
            >
              click here
            </button>
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default AchievementSection;
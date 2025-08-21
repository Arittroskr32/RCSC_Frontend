import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../main";
import "./Achievement.css";
import Footer from "../Components/Footer/Footer";


const Achievement = () => {
  const { id } = useParams();
  const { BACKEND_URL } = useContext(Context);
  const navigate = useNavigate();
  const [achievement, setAchievement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAchievement = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/achievements/${id}`);
        setAchievement(res.data.data);
      } catch (err) {
        setError("Failed to load achievement");
      } finally {
        setLoading(false);
      }
    };
    fetchAchievement();
  }, [id, BACKEND_URL]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!achievement) return null;

  return (
    <div className="achievement-detail-container">
      <div className="achievement-detail-card">
        <button
          className="achievement-back-btn"
          onClick={() => navigate('/about')}
        >
          ← Back
        </button>
        <img src={achievement.image} alt={achievement.title} className="achievement-detail-img" />
        <h1 className="achievement-detail-title">{achievement.title}</h1>
        <p className="achievement-detail-desc">{achievement.description}</p>
      </div>
      <Footer />
    </div>
  );
};

export default Achievement;

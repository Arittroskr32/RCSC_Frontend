import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../main'; 
import "./About_us.css";
import Heading from '../Components/About_all/Heading';
import About_history from '../Components/About_all/About_history';
import About_joinus from '../Components/About_all/About_joinus';
import AchievementSection from '../Components/About_all/AchievementSection';
import Developer from '../Components/About_all/Developer';
import Footer from "../Components/Footer/Footer";

const About_us = () => {
  const { BACKEND_URL } = useContext(Context);
  const [devTeam, setDevTeam] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const devTeamResponse = await axios.get(`${BACKEND_URL}/api/dev_team`, { withCredentials: true });
        setDevTeam(devTeamResponse.data.devTeam);

        const achievementsResponse = await axios.get(`${BACKEND_URL}/api/achievements`, { withCredentials: true });
        setAchievements(achievementsResponse.data.achievements);

        setLoading(false);
      } catch (error) {
        console.error("Axios Error:", error);

        if (error.response) {
          console.error("Response Data:", error.response.data);
          console.error("Response Status:", error.response.status);
          console.error("Response Headers:", error.response.headers);
          setError(error.response.data.message || `Error ${error.response.status}`);
        } else if (error.request) {
          console.error("Request Data:", error.request);
          setError("No response received from the server. Check network.");
        } else {
          console.error("Error Message:", error.message);
          setError(error.message);
        }

        setLoading(false);
      }
    };

    fetchData();
  }, [BACKEND_URL]);

  const toggleShowMore = (index) => {
    setShowMore((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
  <div className="about-cover">
    <div className="about-page">
      <div className="container">
        <Heading />
        <About_history />

        {/* Achievement */}
        <div className="odd-bg">
          <div className="page5 page">
            <h2 className="subtitle">Our Achievements</h2>
            <AchievementSection achievements={achievements} />
          </div>
        </div>

        <About_joinus />

      {/* Developer Team */}
        <Developer devTeam={devTeam} />
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default About_us;

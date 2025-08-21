import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../main';
import "./Home.css";
import Home_sponsor from "../Components/Home_section/Home_sponsor"
import Explore_club from '../Components/Home_section/Explore_club';
import Home_about from "../Components/Home_section/Home_about"
import Logo_desc from "../Components/Home_section/Logo_desc"
import Footer from "../Components/Footer/Footer";

const Home = () => {
  const { BACKEND_URL } = useContext(Context);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const truncateDescription = (text) => {
    const words = text.split(' ');
    if (words.length > 25) {
      return words.slice(0, 25).join(' ') + '...';
    }
    return text;
  };

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/announcement`);
        
        const announcementsData = response.data.announcements || [];

        if (!Array.isArray(announcementsData)) {
          throw new Error('Invalid announcements data');
        }
        
        const lastThree = announcementsData
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 3);
        
        setAnnouncements(lastThree);
      } catch (err) {
        console.error('Error fetching announcements:', err);
        setError(err.message || 'Failed to fetch announcements');
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, [BACKEND_URL]);

  if (loading) return <div className="loading">Loading announcements...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="home-page">
      <Logo_desc />
      <Home_about />
      
      <section className="latest-posts-section card-page">
        <div className="page">
          <div className="section-header">
            <h2>Latest Announcements & Posts</h2>
            <p>Stay updated with our latest news and events</p>
          </div>
          
          {announcements.length > 0 ? (
            <div className="grid-cards">
              {announcements.map((announcement) => (
                <a
                  href={announcement.post_url}
                  className="card announcement-link"
                  key={announcement._id || announcement.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="image-container">
                    <img 
                      src={announcement.image} 
                      alt={announcement.title}
                      onError={(e) => {
                        e.target.src = '/default-announcement.jpg';
                      }}
                    />
                  </div>
                  <div className="post-details">
                    <p className="post-date">
                      {new Date(announcement.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <h3>{announcement.title}</h3>
                    <p>{truncateDescription(announcement.description)}</p>
                    <span className="view-post">View post ➝</span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="no-announcements">No announcements available</p>
          )}
        </div>
      </section>

      <Explore_club />
      <Home_sponsor />
      <Footer />
    </div>
  );
};

export default Home;
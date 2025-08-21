import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../main';
import "./Home_sponsor.css";

const Home_sponsor = () => {
  const { BACKEND_URL } = useContext(Context);
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSponsors = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BACKEND_URL}/api/sponsors`);
        setSponsors(response.data.sponsors || []);
      } catch (err) {
        setError('Failed to load sponsors');
        console.error('Error fetching sponsors:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSponsors();
  }, [BACKEND_URL]);

  return (
    <div className='Home_sponsor'>
      <section className="sponsors card-page">
        <div className="page">
          <div className="section-header">
            <h2>Sponsors</h2>
            <p>
              Partner with us and showcase your brand to thousands of
              cybersecurity enthusiasts. Together, we can advance the future of
              tech innovation and security.
            </p>
          </div>

          {loading ? (
            <div className="sponsor-cards">
              <div className="sponsor">Loading...</div>
            </div>
          ) : error ? (
            <div className="sponsor-cards">
              <div className="sponsor">{error}</div>
            </div>
          ) : (
            <div className="sponsor-cards">
              {sponsors.length > 0 ? (
                sponsors.map((sponsor) => (
                  <div className="sponsor" key={sponsor._id || sponsor.id}>
                    {sponsor.logo_url ? (
                      <img 
                        src={`${sponsor.logo_url}`} 
                        alt={sponsor.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.textContent = sponsor.name;
                          fallback.className = 'sponsor-name';
                          e.target.parentNode.appendChild(fallback);
                        }}
                      />
                    ) : (
                      <div className="sponsor-name">{sponsor.name}</div>
                    )}
                  </div>
                ))
              ) : (
                <div className="sponsor">No sponsors available</div>
              )}
            </div>
          )}
        </div>
      </section>

      <div className="sponsor-us card-page">
        <div className="page">
          <div className="section-header">
            <h2>Interested in Sponsoring?</h2>
            <p>
              Your sponsorship enables the growth and development of the next
              generation of cybersecurity experts and innovators. By partnering
              with us, you'll be making a lasting impact on the future of
              cybersecurity education, while gaining exposure to a highly engaged
              and tech-savvy audience.
            </p>
            <h3>Join Our Mission</h3>
            <p>
              Support the future of cybersecurity by becoming a key partner in
              this journey. Your contribution helps shape the talent, technology,
              and community that will drive the industry forward.
            </p>
            <a href="/contact" className="sponsor-btn">
              Become a Sponsor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_sponsor;
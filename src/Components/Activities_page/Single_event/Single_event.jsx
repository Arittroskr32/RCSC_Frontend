import React, { useContext, useRef, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EventContext } from "../../../Context/EventContext";
import "./Single_event.css";

const Single_event = () => {
  const { id } = useParams();  
  const { events, loading, error } = useContext(EventContext);
  const navigate = useNavigate();

  const contentRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const event = events.find((e) => e?.id?.toString() === id || e?._id?.toString() === id);

  if (loading) return <div className="loading">Loading event details...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!event) return <div className="not-found">Event not found</div>;
  useEffect(() => {
    const el = contentRef.current;
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY || window.pageYOffset;
      setProgress(docHeight > 0 ? Math.min(100, (scrolled / docHeight) * 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [event]);

  return (
    <div className="Single-event">
      <div className="event-detail-container" ref={contentRef}>
        <div className='progress-wrap' aria-hidden>
          <div className='progress-bar' style={{ width: `${progress}%` }} />
        </div>

        <div className='hero-meta'>
          <div className='hero-controls'>
            <button className="back-button" onClick={() => navigate("/activities")}>← Back</button>
          </div>

          <div className='author-row'>
            <div className='author-block'>
              <h2 className="event-title">{event.title}</h2>
              <p className="event-date">{event.date}</p>
            </div>
          </div>
        </div>

        {/* Main Event Image (large) */}
        <div className="event-main-image">
          <img src={event.image} alt={event.title} />
        </div>

        {/* Event Description Section */}
        <div className="event-description">
          <p>{event.description}</p>
        </div>

        {/* Event Gallery Section */}
        <div className="event-gallery">
          <h3>Event Gallery</h3>
          <div className="gallery-grid">
            {event.gallery.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`Gallery ${index + 1}`} className="gallery-image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single_event;

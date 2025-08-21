import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarIcon, ChevronRightIcon } from "lucide-react";
import "./Event.css";
import { EventContext } from "../../../Context/EventContext";

const Event = () => {
  const { events, setSelectedEvent } = useContext(EventContext);
  const navigate = useNavigate();

  const handleEventClick = (event) => {
    setSelectedEvent(event); 
    navigate(`/activities/${event._id}`); 
  };

  const truncateDescription = (description) => {
    const words = description.split(" ");
    return words.length > 30 ? words.slice(0, 30).join(" ") + "..." : description;
  };

  return (
    <div className="event-grid">
      {events.length > 0 ? (
        events.map((event) => (
          <div key={event._id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-content">
              <div className="event-date">
                <CalendarIcon className="icon" />
                <span>{event.date}</span>
              </div>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{truncateDescription(event.description)}</p>
              <button className="details-button" onClick={() => handleEventClick(event)}>
                View Details <ChevronRightIcon className="icon" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No events found for this tab.</p>
      )}
    </div>
  );
};

export default Event;

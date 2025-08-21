import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../main";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const { BACKEND_URL } = useContext(Context);
  const [eventsData, setEventsData] = useState([]); 
  const [events, setEvents] = useState([]); 
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeTab, setActiveTab] = useState("events");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/activities`);
        setEventsData(response.data.activities || []);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to load events");
        setLoading(false);
        console.error("Error fetching events:", err);
      }
    };
    fetchAllEvents();
  }, []);

  useEffect(() => {
    if (eventsData.length > 0) {
      fetchEvents(activeTab);
    }
  }, [activeTab, eventsData]);

  const fetchEvents = (type) => {
    const filteredEvents = eventsData.filter(event => event.event_type === type);
    if (JSON.stringify(filteredEvents) !== JSON.stringify(events)) {
      setEvents(filteredEvents);
    }
  };

  return (
    <EventContext.Provider
      value={{
        events,
        fetchEvents,
        selectedEvent,
        setSelectedEvent,
        activeTab,
        setActiveTab,
        loading,
        error
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
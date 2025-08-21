import React, { useContext, useEffect } from "react";
import "./Activities.css";
import What_we_do from "../Components/Activities_page/What_we_do/What_we_do";
import Event from "../Components/Activities_page/Event/Event";
import { EventContext } from "../Context/EventContext"; 
import Footer from "../Components/Footer/Footer";

const Activities = () => {
  const { activeTab, setActiveTab, fetchEvents } = useContext(EventContext); 

  const tabs = [
    { id: "events", label: "Events & Gallery" },
    { id: "upcoming", label: "Upcoming Events" },
    { id: "workshops", label: "Workshops" },
    { id: "projects", label: "Projects & Initiatives" },
  ];

  useEffect(() => {
    fetchEvents(activeTab);
  }, [activeTab, fetchEvents]);

  return (
    <div className="activities-wrapper">
      <What_we_do />
      <section className="tab-section">
        <div className="tab-container">
          <nav className="nav">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}  
                className={`tab-button ${activeTab === tab.id ? "active-tab" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      <section className="content-section">
        <Event />
      <Footer />
      </section>
    </div>
  );
};

export default Activities;

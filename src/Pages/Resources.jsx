import React, { useState } from 'react';
import "./Resources.css"
import Footer from '../Components/Footer/Footer';
import {
  BookOpenIcon,
  CodeIcon,
  HelpCircleIcon,
  BoxIcon,
  WrenchIcon,
} from 'lucide-react';
import Learning_path from "../Components/Resource_page/Learning_path/Learning_path";
import Learning_material from '../Components/Resource_page/Learning_material/Learning_material';
import Tools from '../Components/Resource_page/Tools/Tools';
import Faq from "../Components/Resource_page/Faq/Faq";
import Practice from '../Components/Resource_page/Practice/Practice';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('learning');

  return (
    <div className="resources-container">
      {/* Header */}
      <section className="resources-header">
        <div className="background-overlay"></div>
        <div className="header-content">
          <div className="header-text">
            <h1 className="header-title">Resources</h1>
            <p className="header-description">
              Access curated cybersecurity learning materials, tools, practice platforms, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="tab-navigation">
        <div className="tab-navigation-container">
          <nav className="tab-buttons">
            {[
              { id: 'learning', label: 'Learning Materials', icon: BookOpenIcon },
              { id: 'path', label: 'Learning Path', icon: BoxIcon },
              { id: 'tools', label: 'Tools', icon: WrenchIcon },
              { id: 'practice', label: 'Practice', icon: CodeIcon },
              { id: 'faq', label: 'FAQ', icon: HelpCircleIcon },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-button ${activeTab === tab.id ? 'active-tab' : ''}`}
              >
                <tab.icon className="tab-icon" />
                <p>{tab.label}</p>
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <section className="content-sections">
        <div className="content-container">
          {activeTab === 'learning' && <Learning_material />}
          {activeTab === 'path' && <Learning_path />}
          {activeTab === 'tools' && <Tools />}
          {activeTab === 'practice' && <Practice />}
          {activeTab === 'faq' && <Faq />}
        </div>
      <Footer />
      </section>
    </div>
  );
};

export default Resources;

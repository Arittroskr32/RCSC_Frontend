import React, { useState, useRef, useEffect } from 'react';
// Use public folder URL for assets rather than importing from ../../../public
const RCSC_logo_path = "/Assets/RCSC_logo2.png";
import "./Navbar.css";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const location = useLocation(); 

  // Close sidebar when clicking outside
  useEffect(() => {
    if (!isSidebarOpen) return;
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  // Helper function to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className='navbar'>
    <div className="nav-left">
      <img src={RCSC_logo_path} alt="RCSC_logo" />
          <h1>Ruet Cyber Security Club</h1>
      </div>
      <div className="nav-right">
        <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <i className='bx bx-x' onClick={() => setIsSidebarOpen(false)}></i>
          <ul>
              <li>
                <Link 
                  to="/" 
                  onClick={() => setIsSidebarOpen(false)} 
                  className={isActive("/") ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  onClick={() => setIsSidebarOpen(false)} 
                  className={isActive("/about") ? "active" : ""}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  onClick={() => setIsSidebarOpen(false)} 
                  className={isActive("/blog") ? "active" : ""}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/resources" 
                  onClick={() => setIsSidebarOpen(false)} 
                  className={isActive("/resources") ? "active" : ""}
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link 
                  to="/activities" 
                  onClick={() => setIsSidebarOpen(false)} 
                  className={isActive("/activities") ? "active" : ""}
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link 
                  to="/members" 
                  onClick={() => setIsSidebarOpen(false)} 
                  className={isActive("/members") ? "active" : ""}
                >
                  Members
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={() => setIsSidebarOpen(false)} 
                  className={isActive("/contact") ? "active" : ""}
                >
                  Contact Us
                </Link>
              </li>
          </ul>
        </div>

        
        <ul className='all-menu'>
            <li>
              <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={isActive("/about") ? "active" : ""}>About Us</Link>
            </li>
            <li>
              <Link to="/blog" className={isActive("/blog") ? "active" : ""}>Blog</Link>
            </li>
            <li>
              <Link to="/resources" className={isActive("/resources") ? "active" : ""}>Resources</Link>
            </li>
            <li>
              <Link to="/activities" className={isActive("/activities") ? "active" : ""}>Activities</Link>
            </li>
            <li>
              <Link to="/members" className={isActive("/members") ? "active" : ""}>Members</Link>
            </li>
            <li>
              <Link to="/contact" className={isActive("/contact") ? "active" : ""}>Contact Us</Link>
            </li>
        </ul>

        
        <div className='menu' onClick={() => setIsSidebarOpen(true)}>
          <i className='bx bx-menu'></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
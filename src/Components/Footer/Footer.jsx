import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
// Use asset path served from public folder
const footerLogoPath = "/Assets/footer_logo.png";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEnvelope, FaPhone, FaFacebookSquare, FaTwitter, FaYoutube, FaDiscord, FaLinkedin, FaArrowRight } from "react-icons/fa";

import { Context } from '../../main';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const { BACKEND_URL: ctxBackendUrl } = useContext(Context) || {};
  const baseUrl = ctxBackendUrl || import.meta.env.VITE_BACKEND_URL || ""; 

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const trimmed = (email || "").toLowerCase().trim();
    if (!trimmed) return toast.error("Please enter an email");
    // simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      const msg = 'Please enter a valid email address';
      toast.error(msg);
      setFeedback({ type: 'error', message: msg });
      return;
    }
    if (!baseUrl) {
      const msg = 'Backend URL not configured. Ensure Context BACKEND_URL or VITE_BACKEND_URL is set.';
      toast.error(msg);
      setFeedback({ type: 'error', message: msg });
      return;
    }
    setLoading(true);
    console.log('[Footer] subscribing', email);
    // clear previous feedback
    setFeedback(null);
    try {
      const payload = { email: trimmed };
      console.log('[Footer] subscribe payload', payload);
      const res = await axios.post(`${baseUrl}/api/newsletter/subscribe`, payload, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log('[Footer] subscribe response', res && res.data);
      const successMsg = res?.data?.message || "Subscribed successfully";
      toast.success(successMsg);
      // fallback: if toast UI isn't mounted or visible, show alert (debugging aid)
      if (typeof document !== 'undefined' && !document.querySelector('.Toastify__toast-container')) {
        alert(successMsg);
      }
      setEmail("");
      // inline feedback for visibility if toasts are not showing
      setFeedback({ type: 'success', message: successMsg });
    } catch (err) {
      console.error('[Footer] subscribe error', err);
      // More user-friendly error messages depending on the failure type
      if (err.response) {
        const status = err.response.status;
        const serverMsg = err.response.data?.message;
        let msg;
        if (serverMsg) msg = serverMsg;
        else if (status === 400) msg = 'Invalid email or bad request.';
        else if (status === 404) msg = 'Subscription endpoint not found (404). Backend may be down.';
        else if (status >= 500) msg = 'Server error. Please try again later.';
        else msg = `Request failed with status ${status}.`;
        toast.error(msg);
        // fallback alert when toast doesn't show (helps during dev)
        if (typeof document !== 'undefined' && !document.querySelector('.Toastify__toast-container')) {
          alert(msg);
        }
        setFeedback({ type: 'error', message: msg });
      } else if (err.request) {
        // Request made but no response received
        const msg = 'No response from server. Check your network or backend.';
        toast.error(msg);
        if (typeof document !== 'undefined' && !document.querySelector('.Toastify__toast-container')) {
          alert(msg);
        }
        setFeedback({ type: 'error', message: msg });
      } else {
        // Something happened setting up the request
        const msg = err.message || 'Failed to subscribe';
        toast.error(msg);
        if (typeof document !== 'undefined' && !document.querySelector('.Toastify__toast-container')) {
          alert(msg);
        }
        setFeedback({ type: 'error', message: msg });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="footer">
      <div className="row">
        <div className="about col">
          <img src={footerLogoPath} alt="Footer Logo" className="footer_logo" />
          <p className="bio">
            RUET Cyber Security Club is a community of cybersecurity enthusiasts dedicated to learning, research, and ethical hacking. We organize workshops, CTF challenges, and tech events to foster skills in cybersecurity.
          </p>
        </div>

        <div className="contact col">
          <h3>
            Address <div className="underline"><span></span></div>
          </h3>
          <p>Rajshahi University of Engineering & Technology - RUET</p>
          <p>Kazla, Rajshahi-6204, Bangladesh.</p>
          <p className="email"><FaEnvelope /> ruetcyberofficial@gmail.com</p>
          <p className="phone-no"><FaPhone /> +880 1521719912</p>
        </div>

        <div className="link col">
          <h3>
            Links <div className="underline"><span></span></div>
          </h3>
          <ul id="menuList">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/activities">Activities</Link></li>
            <li><Link to="/members">Members</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="social col">
          <h3>
            Newsletter <div className="underline"><span></span></div>
          </h3>
          <form onSubmit={handleSubscribe}>
            <FaEnvelope />
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" disabled={loading} aria-busy={loading}>
              <FaArrowRight />
            </button>
          </form>
         
          <div className="social-icons">
            <a href="https://www.facebook.com/RUETCyber"><FaFacebookSquare /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaDiscord /></a>
            <a href="https://www.linkedin.com/company/ruet-cyber/"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <hr />

      <div className="copyright">
        <p>© 2025 RUET Cyber Security Club. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./ContactUs.css";
import { FaMapLocationDot, FaEnvelope, FaPhoneVolume } from 'react-icons/fa6';
import { FaFacebookSquare, FaTwitter, FaDiscord, FaLinkedin } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from '../main';
import Footer from '../Components/Footer/Footer';

const ContactUs = () => {
  const { BACKEND_URL } = useContext(Context);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Floating label effect for inputs
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");
    inputs.forEach((input) => {
      const focusFunc = () => input.parentNode.classList.add("focus");
      const blurFunc = () => {
        if (input.value === "") input.parentNode.classList.remove("focus");
      };
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
      return () => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      };
    });
  }, []);

  // Strict email validation
  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  // International phone validation
  const isValidPhone = (phone) => {
    return /^\+?[\d\s\-\(\)]{7,20}$/.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    // Trim all inputs first
    const trimmedData = {
      username: formData.username.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim()
    };

    if (!trimmedData.username) {
      toast.error('Name is required', { position: "top-center" });
      return false;
    } else if (trimmedData.username.length < 2) {
      toast.error('Name must be at least 2 characters', { position: "top-center" });
      return false;
    } else if (trimmedData.username.length > 50) {
      toast.error('Name must be less than 50 characters', { position: "top-center" });
      return false;
    }

    if (!trimmedData.email) {
      toast.error('Email is required', { position: "top-center" });
      return false;
    } else if (!isValidEmail(trimmedData.email)) {
      toast.error('Please enter a valid email address', { position: "top-center" });
      return false;
    }

    if (!trimmedData.phone) {
      toast.error('Phone number is required', { position: "top-center" });
      return false;
    } else if (!isValidPhone(trimmedData.phone)) {
      toast.error('Please enter a valid phone number (e.g., +880 1234567890)', { position: "top-center" });
      return false;
    }

    if (!trimmedData.message) {
      toast.error('Message is required', { position: "top-center" });
      return false;
    } else if (trimmedData.message.length < 10) {
      toast.error('Message must be at least 10 characters', { position: "top-center" });
      return false;
    } else if (trimmedData.message.length > 500) {
      toast.error('Message must be less than 500 characters', { position: "top-center" });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim()
        }),
        credentials: 'include'
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Submission failed');
      }

      toast.success('Thank you! Your message has been sent successfully.', { position: "top-center" });
      setFormData({
        username: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(error.message || 'Failed to submit form. Please try again.', { position: "top-center" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='contact-page'>
      <ToastContainer />
      <div className="contact_main">
        <div className="container">
          <div className="contact_info">
            <h2>Let's Get in Touch</h2>
            <p className="subheading">
              Have questions? Want to collaborate? Whether you're a student, security enthusiast, or industry professional, we'd love to connect. Drop us a message, and let's make cybersecurity better together!
            </p>
            <div className="contact_details">
              <div className="location">
                <p><FaMapLocationDot style={{ color: '#06b6d4' ,fontSize: '1.7rem',marginBottom: '.4rem'}} /> RUET - Kazla, Rajshahi-6204, Bangladesh.</p>
              </div>
              <p className="cmail"><FaEnvelope style={{ color: '#06b6d4' ,fontSize: '1.5rem'}} /> rcsc@gmail.com</p>
              <p className="cphone-no"><FaPhoneVolume style={{ color: '#06b6d4' ,fontSize: '1.5rem'}} /> +880 1816811419</p>
            </div>
            <div className="social_connect">
              <h3>Connect with us :</h3>
              <div className="social_icons">
                <a href="#" onClick={(e) => e.preventDefault()}><FaFacebookSquare /></a>
                <a href="#" onClick={(e) => e.preventDefault()}><FaTwitter /></a>
                <a href="#" onClick={(e) => e.preventDefault()}><FaDiscord /></a>
                <a href="#" onClick={(e) => e.preventDefault()}><FaLinkedin /></a>
              </div>
            </div>
          </div>
          <div className="contact_form">
            <span className="circle one"></span>
            <span className="circle two"></span>
            <form onSubmit={handleSubmit}>
              <h2>Contact us</h2>
              <div className="input-container">
                <input
                  type="text"
                  name="username"
                  className="input"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <label>Username</label>
                <span>Username</span>
              </div>

              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  className="input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label>Email</label>
                <span>Email</span>
              </div>

              <div className="input-container">
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <label> Phone </label>
                <span> Phone </span>
              </div>

              <div className="input-container textarea">
                <textarea
                  name="message"
                  className="input"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <label>Message</label>
                <span>Message</span>
              </div>

              <button
                type="submit"
                className="btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="odd-bg">
        <div className="join-benefits">
          <h2>Join Our Club</h2>
          <h3>Membership Benefits</h3>
          <ul>
            <li><span>•</span> Access to exclusive workshops and training sessions</li>
            <li><span>•</span> Opportunity to participate in CTF competitions</li>
            <li><span>•</span> Networking with industry professionals</li>
            <li><span>•</span> Access to our digital library of resources</li>
            <li><span>•</span> Mentorship from experienced members</li>
            <li><span>•</span> Certificate of participation in club activities</li>
          </ul>
          <h3>Membership Requirements</h3>
          <ul>
            <li><span>•</span> Must be a current student at RUET</li>
            <li><span>•</span> Interest in cybersecurity (no prior experience required)</li>
            <li><span>•</span> Commitment to attend regular meetings and events</li>
            <li><span>•</span> Annual membership fee: 300 BDT</li>
          </ul>
          <Link to="/contact" className="join-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>  Apply for Membership</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
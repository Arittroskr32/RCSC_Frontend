import React, { useState, useEffect, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../main";
import RCSC_logo from "/Assets/RCSC_logo2.png";
import "./Blog.css";
import axios from "axios";
import Footer from "../Components/Footer/Footer";
import { toast } from 'react-toastify';

const Blog = () => {
  const { BACKEND_URL } = useContext(Context);
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // newsletter form state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subLoading, setSubLoading] = useState(false);
  const [subFeedback, setSubFeedback] = useState(null);
  const navigate = useNavigate();

  const categories = [
    "All",
    "Web Security",
    "Binary Exploitation",
    "Cryptography",
    "Network Security",
    "Reverse Engineering",
    "Forensics",
    "CTF Writeups",
    "Bug Bounty",
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/blogs/get_blogs`);
        setBlogs(res.data.blogs || []);
      } catch (err) {
        setError(err.message || "Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [BACKEND_URL]);

  const filteredBlogs = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return blogs.filter((blog) => {
      const tags = blog.tags || [];
      const title = blog.title || "";
      const category = blog.category || "";

      const matchesSearch =
        !q ||
        tags.some((tag) => tag.toLowerCase().includes(q)) ||
        title.toLowerCase().includes(q) ||
        category.toLowerCase().includes(q);

      const matchesCategory =
        selectedCategory === "All" ||
        blog.category === selectedCategory ||
        tags.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [blogs, searchQuery, selectedCategory]);

  const truncateDescription = (text, wordLimit = 15) => {
    if (!text) return "";
    const words = text.trim().split(/\s+/);
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  if (loading) return <div className="loading">⏳ Loading blogs...</div>;
  if (error) return <div className="error">⚠ {error}</div>;

  return (
    <div className="blog_page">
      <div className="blog-list-container">
        <div className="blog-main-header">
          <h1 className="rcsc-blog-title">Ruet Cyber Security Club Blog</h1>
          <p className="rcsc-blog-desc">
            Explore the latest insights, research, and discoveries in cybersecurity, penetration testing, and ethical hacking.
          </p>
        </div>
        <div className="blog-header-bar">
          <h2 className="blog-page-title">All Blogs</h2>
        </div>

        {/* Search & Filter */}
        <div className="blog-container">
          <div className="search-and-blog">
            <div className="search-wrapper">
              <div className="search-bar">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search blogs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="category-scroll">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="blog-card-grid">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="blog-card"
                    onClick={() => navigate(`/blog/${blog._id}`)}
                  >
                    <div className="blog-image-container">
                      <img
                        src={blog.image || "/default-blog-image.jpg"}
                        alt={blog.title}
                        onError={(e) => (e.target.src = "/default-blog-image.jpg")}
                      />
                      <span className="blog-category-badge">{blog.category}</span>
                    </div>

                    <div className="blog-content">
                      <div className="blog-header">
                        <img src={RCSC_logo} alt="Author" className="author-img" />
                        <div className="author-meta">
                          <p className="author-name">{blog.author || "RCSC"}</p>
                          <span className="blog-date">
                            {blog.date
                              ? (() => {
                                  const d = new Date(blog.date);
                                  const day = d.getDate();
                                  const month = d.toLocaleString(undefined, { month: "short" });
                                  const year = d.getFullYear();
                                  return `${day} ${month} ${year}`;
                                })()
                              : "Unknown date"}
                          </span>
                        </div>
                      </div>
                      <h3 className="blog-title">{blog.title || "Untitled Blog"}</h3>
                      <p className="blog-description">
                        {truncateDescription(blog.description)}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-results">No blogs found.</div>
              )}
            </div>
          </div>
        </div>
        <section className="news-page">
          <div className="newsletter-section">
            <h2 className="subtitle">Stay Updated</h2>
            <p className="details">
              Subscribe to our newsletter to receive the latest cybersecurity insights and updates.
            </p>
            <form
              className="form-container"
              onSubmit={async (e) => {
                e.preventDefault();
                const trimmed = (newsletterEmail || "").toLowerCase().trim();
                if (!trimmed) {
                  const msg = 'Please enter an email address';
                  toast.error(msg);
                  setSubFeedback({ type: 'error', message: msg });
                  return;
                }
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(trimmed)) {
                  const msg = 'Please enter a valid email address';
                  toast.error(msg);
                  setSubFeedback({ type: 'error', message: msg });
                  return;
                }
                const baseUrl = BACKEND_URL || import.meta.env.VITE_BACKEND_URL || "";
                if (!baseUrl) {
                  const msg = 'Backend URL not configured.';
                  toast.error(msg);
                  setSubFeedback({ type: 'error', message: msg });
                  return;
                }
                setSubLoading(true);
                setSubFeedback(null);
                try {
                  const payload = { email: trimmed };
                  console.log('[Blog] subscribe payload', payload);
                  const res = await axios.post(`${baseUrl}/api/newsletter/subscribe`, payload, { headers: { 'Content-Type': 'application/json' } });
                  const successMsg = res?.data?.message || 'Subscribed successfully';
                  toast.success(successMsg);
                  setNewsletterEmail("");
                  setSubFeedback({ type: 'success', message: successMsg });
                } catch (err) {
                  console.error('[Blog] subscribe error', err);
                  const serverMsg = err?.response?.data?.message;
                  const status = err?.response?.status;
                  let msg;
                  if (serverMsg) msg = serverMsg;
                  else if (status === 400) msg = 'Invalid email or bad request.';
                  else if (status === 404) msg = 'Subscription endpoint not found (404).';
                  else if (status >= 500) msg = 'Server error. Please try again later.';
                  else if (err.request) msg = 'No response from server.';
                  else msg = err.message || 'Failed to subscribe';
                  toast.error(msg);
                  setSubFeedback({ type: 'error', message: msg });
                } finally {
                  setSubLoading(false);
                }
              }}
            >
              <input
                type="email"
                className="email-input"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit" className="subscribe-button" disabled={subLoading}>
                {subLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {subFeedback?.message && (
              <div className={`newsletter-feedback ${subFeedback.type}`} style={{ marginTop: 8 }} role="status">
                {subFeedback.message}
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../main';
import "./Explore_club.css";

const Explore_club = () => {
  const { BACKEND_URL } = useContext(Context);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BACKEND_URL}/api/blogs/get_blogs`);
        // Get last 3 blogs (newest first)
        const lastThreeBlogs = (response.data.blogs || [])
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 3);
        setBlogs(lastThreeBlogs);
      } catch (err) {
        setError('Failed to load blogs');
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const truncateDescription = (text) => {
    const words = text.split(' ');
    if (words.length > 25) {
      return words.slice(0, 25).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className='Explore_club'>
      <section className="explore-us-section card-page">
        <div className="page">
          <div className="section-header">
            <h2>Explore Our Club</h2>
            <p>
              Join our club and explore the world of cybersecurity. We offer
              opportunities to learn, practice, and grow in a collaborative
              environment.
            </p>
          </div>
          <div className="grid-cards">
            <div className="card">
              <div className="card-head">
                <div className="icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon-shield"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                  </svg>
                </div>
                <h3>About Us</h3>
              </div>
              <p>
                Learn about our mission, history, achievements, and the team
                behind the RUET Cyber Security Club.
              </p>
            </div>
            <div className="card">
              <div className="card-head">
                <div className="icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon-calendar"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                </div>
                <h3>Activities</h3>
              </div>
              <p>
                Explore our past and upcoming events, workshops, CTF
                competitions, and bug bounty programs.
              </p>
            </div>
            <div className="card">
              <div className="card-head">
                <div className="icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon-book"
                  >
                    <path d="M12 7v14"></path>
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <h3>Resources</h3>
              </div>
              <p>
                Access our curated learning materials, tools, practice
                platforms, and cybersecurity roadmaps.
              </p>
            </div>
            <div className="card">
              <div className="card-head">
                <div className="icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon-users"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3>Members</h3>
              </div>
              <p>
                Meet our core team members and learn about the structure of our
                club's leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="latest-blogs card-page">
        <div className="page">
          <div className="section-header">
            <h2>Latest Blogs</h2>
            <Link to="/blog" className="view-all">
              View all ➝
            </Link>
          </div>
          {loading ? (
            <div className="grid-cards">
              <div className="card">Loading blogs...</div>
            </div>
          ) : error ? (
            <div className="grid-cards">
              <div className="card">{error}</div>
            </div>
          ) : (
            <div className="grid-cards">
              {blogs.length > 0 ? (
                blogs.map((blog) => (
                  <div className="card" key={blog._id || blog.id}>
                    <div className="image-container">
                      <img 
                        src={blog.image} 
                        onError={(e) => {
                          e.target.src = 'default-blog-image.jpg';
                        }}
                      />
                    </div>
                    <div className="post-details">
                      <p className="post-date">
                        {blog.author && (
                          <span className="blog-author">{blog.author}</span>
                        )}
                        {blog.author && <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>}
                        {new Date(blog.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </p>
                      <h3>{blog.title}</h3>
                      <p className="description">
                        {truncateDescription(blog.description)}
                      </p>
                      <Link to={`/blog/${blog._id || blog.id}`} className="read-more">
                        Read more ➝
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="card">No blogs available</div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Explore_club;
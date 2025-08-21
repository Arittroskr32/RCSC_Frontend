import React, { useEffect, useState, useContext, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from '../../main';
import './Single_blog.css';
import axios from 'axios';

// Use public asset path (served from /public) to avoid importing from public folder
const RCSC_logo = '/Assets/RCSC_logo2.png';

const SingleBlog = () => {
  const navigate = useNavigate();
  const { BACKEND_URL } = useContext(Context);
  const { blogid } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const contentRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/blogs/get_blogs`);
        const selectedBlog = response.data.blogs.find((b) => b._id === blogid);
        
        if (selectedBlog) {
          setBlog(selectedBlog);
        } else {
          setError('Blog not found');
        }
      } catch (err) {
        setError(err.message || 'Failed to load blog');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogid, BACKEND_URL]);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = el.scrollHeight - el.clientHeight;
      // When content is not scrollable inside, use window scroll for progress
      if (total > 0) {
        const scrolled = el.scrollTop;
        setProgress(Math.min(100, Math.max(0, (scrolled / total) * 100)));
      } else {
        // fallback to window-based reading progress for long pages
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const winScrolled = window.scrollY || window.pageYOffset;
        setProgress(docHeight > 0 ? Math.min(100, (winScrolled / docHeight) * 100) : 0);
      }
    };

    // listen to both scroll targets
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', onScroll);
    };
  }, [blog]);

  if (loading) return <p className='loading'>Loading...</p>;
  if (error) return <p className='error'>{error}</p>;
  if (!blog) return <p className='not-found'>Blog not found</p>;

  // only back navigation required per request

  return (
    <div className="blog_single">
      <div className='single-blog-container'>
        <div className='progress-wrap' aria-hidden>
          <div className='progress-bar' style={{ width: `${progress}%` }} />
        </div>

        <header className='blog-hero'>
          <div className='hero-meta'>
            <div className='hero-controls'>
              <button className='back-button' onClick={() => navigate('/blog')}>← Back</button>
            </div>

            <div className='author-row'>
              <img src={RCSC_logo} alt='RCSC Logo' className='rcsc-logo' />
              <div className='author-block'>
                <p className='author-name'>{blog.author || 'Unknown Author'}</p>
                <p className='blog-date'>
                  {blog.date ? new Date(blog.date).toLocaleDateString() : 'Unknown date'}
                </p>
              </div>
            </div>
          </div>
          <h1 className='blog-title'>{blog.title || 'Untitled Blog'}</h1>
  {/* back button placed before logo and author */}
        </header>

        <main className='blog-body' ref={contentRef}>
          <figure className='blog-image'>
            <img
              src={blog.image || '/default-blog-image.jpg'}
              alt={blog.title || 'Blog image'}
              onError={(e) => {
                e.target.src = '/default-blog-image.jpg';
              }}
            />
            {blog.caption && <figcaption className='image-caption'>{blog.caption}</figcaption>}
          </figure>

          <article className='blog-content'>
            {/* Keep original description/content */}
            <div className='blog-description' dangerouslySetInnerHTML={{ __html: blog.description || 'No description available' }} />
          </article>

          {blog.tags && blog.tags.length > 0 && (
            <div className='tags'>
              {blog.tags.map((t) => (
                <span className='tag' key={t}>{t}</span>
              ))}
            </div>
          )}
        </main>

        <footer className='blog-footer'>
          <div className='footer-left'>
            <p className='small-muted'>Published: {blog.date ? new Date(blog.date).toLocaleString() : '—'}</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SingleBlog;
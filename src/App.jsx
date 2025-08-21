import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";

import Navbar from './Components/Navbar/Navbar';
// import Footer from './Components/Footer/Footer';
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Single_blog from './Components/Single_blog/Single_blog';
import AboutUs from "./Pages/About_us";
import Resources from "./Pages/Resources";
import Activities from "./Pages/Activities";
import Members from "./Pages/Members";
import ContactUs from "./Pages/ContactUs";
import NotFound from "./Components/Invalid_page/Invalid_page"; 
import Single_event from './Components/Activities_page/Single_event/Single_event';
import Achievement from "./Pages/Achievement";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogid" element={<Single_blog />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/resources" element={<Resources />} />

        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/:id" element={<Single_event />} />

        <Route path="/members" element={<Members />} />

        <Route path="/contact" element={<ContactUs />} />

        <Route path="/achievement/:id" element={<Achievement />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;

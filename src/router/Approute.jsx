import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
// import JobSeekers from "../pages/JobSeekers";
// import Employers from "../pages/Employers";
// import Resources from "../pages/Resources";
// import Contact from "../pages/Contact";
// import Location from "../pages/Location";
// import Careers from "../pages/Careers";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<About />} />
        {/* <Route path="job-seekers" element={<JobSeekers />} />
        <Route path="employers" element={<Employers />} />
        <Route path="resources" element={<Resources />} />
        <Route path="contact" element={<Contact />} />
        <Route path="location" element={<Location />} />
        <Route path="careers" element={<Careers />} /> */}
    </Routes>
  );
};

export default AppRoutes;

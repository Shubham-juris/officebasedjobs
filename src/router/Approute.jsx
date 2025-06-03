import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import JobSeekers from "../pages/JobSeekers";

import ContactUsPage from "../pages/ContactUsPage";
import Employers from "../pages/Employers";
import Resource from "../pages/Resource";
import AboutPage from "../pages/AboutPage";
import Careers from "../pages/careers-xyz";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="job-seekers" element={<JobSeekers />} />
      <Route path="contact" element={<ContactUsPage />} />
      <Route path="employers" element={<Employers />} />
      <Route path="resource" element={<Resource />} />
      <Route path="careers" element={<Careers />} />
    </Routes>
  );
};

export default AppRoutes;

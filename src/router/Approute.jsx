import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import JobSeekers from "../pages/JobSeekers";
 
import ContactUsPage from "../pages/ContactUsPage";
import AboutUs from "../Componets/AboutUs/AboutUs";
import Employers from "../pages/Employers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="job-seekers" element={<JobSeekers />} />
      <Route path="employers" element={<Employers />} />
    </Routes>
  );
};

export default AppRoutes;

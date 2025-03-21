import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import JobSeekers from "../pages/JobSeekers";
 
import ContactUsPage from "../pages/ContactUsPage";
import AboutUs from "../Componets/AboutUs/AboutUs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/job-seekers" element={<JobSeekers />} />
      <Route path="/contact" element={<ContactUsPage />} />
    </Routes>
  );
};

export default AppRoutes;

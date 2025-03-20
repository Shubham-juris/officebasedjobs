import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import JobSeekers from "../pages/JobSeekers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about-us" element={<About />} />
      <Route path="job-seekers" element={<JobSeekers />} />
    </Routes>
  );
};

export default AppRoutes;

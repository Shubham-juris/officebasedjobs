import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

import JobSeekers from "../pages/JobSeekers";
import AboutUs from "../Componets/AboutUs/AboutUs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="job-seekers" element={<JobSeekers />} />
    </Routes>
  );
};

export default AppRoutes;

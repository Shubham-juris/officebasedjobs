import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import JobSeekers from "../pages/JobSeekers";
import AboutUs from "../Componets/AboutUs/AboutUs";
import Employers from "../pages/Employers";
import Resource from "../pages/Resource";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="job-seekers" element={<JobSeekers />} />
      <Route path="employers" element={<Employers />} />
      <Route path="resource" element={<Resource />} />
    </Routes>
  );
};

export default AppRoutes;

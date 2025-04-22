import React from "react";
// import AboutUs from "../Componets/AboutUs/AboutUs";
import AboutHeader from "../Componets/AboutUs/AboutHeader";
import AboutMission from "../Componets/AboutUs/AboutMission";
import WhyChooseUs from "../Componets/AboutUs/WhyChooseUs";
import ServicesSection from "../Componets/AboutUs/ServicesSection";

export default function AboutPage() {
  return (
    <>
      {/* <AboutUs /> */}
      <AboutHeader />
      <AboutMission />      
      <ServicesSection />
      <WhyChooseUs />
    </>
  );
}

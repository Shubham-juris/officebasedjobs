import React from "react";
import Hero from "../Componets/Home/Hero";
import Maincontent from "../Componets/Home/Maincontent";
import ContactUs from "../Componets/Home/ContactUs";
import SubscribeSection from "../Componets/Home/SubscribeSection";
import JobSeekerHome from "../Componets/Home/JobSeekerServices";
import TalentSection from "../Componets/Home/TalentSection";
import MainSection from "../Componets/Home/MainSection";
import CareerEmpowerSection from "../Componets/Home/CareerEmpowerSection";


const Home = () => {
  return (
    <>
      <Hero />
      <Maincontent />
      <CareerEmpowerSection />
      <MainSection /> 
      <TalentSection />
      <JobSeekerHome />
      <ContactUs />
      <SubscribeSection />
    </>
  );
};

export default Home;

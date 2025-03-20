import React from "react";
import Hero from "../Componets/Hero/Hero";
import Maincontent from "../Componets/Maincontent/Maincontent";
import Main from "../Componets/Main/Main";
import ContactUs from "../Componets/ContactUs/ContactUs";
import SubscribeSection from "../Componets/subscribe-section/SubscribeSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Maincontent />
      <Main />
      <ContactUs />
      <SubscribeSection />
      {/* <Sitemaintenance/> */}
    </>
  );
};

export default Home;

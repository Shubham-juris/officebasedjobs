import React from "react";
import Hero from "../Componets/Home/Hero";
import Maincontent from "../Componets/Home/Maincontent";
import Main from "../Componets/Home/Main";
import ContactUs from "../Componets/Home/ContactUs";
import SubscribeSection from "../Componets/Home/SubscribeSection";


const Home = () => {
  return (
    <>
      <Hero />
      <Maincontent />
      <Main />
      <ContactUs />
      <SubscribeSection />
    </>
  );
};

export default Home;

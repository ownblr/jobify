import * as React from "react";
import Hero from "./Components/HomeComponents/Hero/Hero";
import IconSection from "./Components/HomeComponents/IconSection/IconSection";
import StatsSection from "./Components/HomeComponents/StatsSection/StatsSection";
import GeneralSection from "./Components/HomeComponents/GeneralSection/GeneralSection";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";
const Home = () => {
  return (
    <>
      <Navigation accountName="Sign In"/>
      <Hero/>
      <StatsSection />
      <IconSection />
      <GeneralSection />
      <Footer />
    </>
  );
};

export default Home;

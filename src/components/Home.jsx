import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;

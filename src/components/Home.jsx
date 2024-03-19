import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;

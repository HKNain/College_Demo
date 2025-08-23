import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Events from "../components/Events";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Mentors from "../components/Mentors";
import Navbar from "../components/Navbar";
import Technical from "../components/Technical";

const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToId) {
      const element = document.getElementById(location.state.scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      // Clear state so scrolling doesn't repeat on back/forward navigation
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      <div
        className="fixed top-0 left-0 w-full h-[130vh] -z-10 
          bg-[url('https://images.pexels.com/photos/33507079/pexels-photo-33507079.jpeg')] 
          bg-cover bg-center"
      ></div>

      <Navbar />

      <div className="bg-white">
        <Hero />
      </div>

      <div className="bg-transparent">
        <About />
      </div>

      <div className="bg-white">
        <Mentors />
        <Events />
        <Gallery />
        <Technical />
        <FAQ />
        <Info />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;

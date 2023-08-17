import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./Pages/HeroSection";
import Features from "./Pages/Features";
import Categories from "./Pages/Categories";
import Member from "./Pages/Member";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <Categories />
      <Member />
      <Footer />
    </div>
  );
};

export default App;

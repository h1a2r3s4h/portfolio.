import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


const App = () => {
  return (
    <div>
      

      {/* 🌐 Navbar and Visual Effects */}
      <Navbar />

      {/* 🏠 Home Section */}
      <section id="home">
        <Hero />
      </section>

      {/* 👤 About Section */}
      <section id="about">
        <About />
      </section>

      {/* 💼 Portfolio Section */}
      <section id="portfolio">
        <MyWork />
      </section>

      {/* 📞 Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* ⚓ Footer */}
      <Footer />
    </div>
  );
};

export default App;

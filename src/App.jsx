import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials"; // optional
import Contact from "./components/Contact"; // optional

export default function App() {
  return (
   <div className="bg-white text-gray-900 font-sans min-h-screen">

      <Navbar />
      <br></br>
      <Hero />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

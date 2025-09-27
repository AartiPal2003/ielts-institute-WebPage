import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto relative"
    >
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-6 z-10">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Crack IELTS with{" "}
          <span className="text-purple-900">
            <TypeAnimation
              sequence={["Confidence", 2000, "", 500]}
              speed={80}
              deletionSpeed={60}
              repeat={Infinity}
            />
          </span>
        </h2>

        <p className="text-lg text-gray-700">
          Join our expert-led courses, AI-driven mock tests, and personalized
          speaking practice to achieve your dream band score.
        </p>

        <motion.button
          className="bg-purple-800 text-white px-6 py-3 rounded-xl shadow-md hover:bg-purple-900 transition"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          Join Now
        </motion.button>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 relative flex justify-center items-center">
        {/* Hero Image */}
        <img
          src="/Hero1.jpg"
          alt="IELTS Prep"
          className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg z-10"
        />

        {/* Speech Bubbles */}
      

        
      </div>
    </section>
  );
};

export default Hero;

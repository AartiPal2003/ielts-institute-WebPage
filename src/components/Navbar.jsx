import React from "react";

const Navbar = () => {
  return (
   <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-purple-900 tracking-wide">
        IELTSPro
      </h1>
      <ul className="hidden md:flex gap-6 text-lg font-medium">
        <li><a href="#home" className="hover:text-purple-900 transition">Home</a></li>
        <li><a href="#features" className="hover:text-purple-900 transition">Features</a></li>
        <li><a href="#testimonials" className="hover:text-purple-900 transition">Testimonials</a></li>
        <li><a href="#contact" className="hover:text-purple-900 transition">Contact</a></li>
      </ul>
      <button className="md:hidden p-2 bg-gray-100 rounded-lg text-gray-800">☰</button>
    </nav>
  );
};

export default Navbar;

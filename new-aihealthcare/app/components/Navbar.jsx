"use client";

import React from "react";

function Navbar() {
  return (
    <div className="w-full bg-blue-600 text-white py-4 px-6 fixed top-0 z-10 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Virtual Health Assistant</div>
        <ul className="flex space-x-6 text-lg">
          <li className="hover:text-blue-300 transition duration-300">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-blue-300 transition duration-300">
            <a href="#features">Features</a>
          </li>
          <li className="hover:text-blue-300 transition duration-300">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-blue-300 transition duration-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;

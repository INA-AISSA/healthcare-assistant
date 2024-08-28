import React from "react";
import { FaHeartbeat, FaUserMd, FaPills } from "react-icons/fa";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="bg-gradient-to-b from-blue-200 via-blue-100 to-white min-h-screen flex flex-col items-center">
      <Navbar />
      {/* Hero Section */}
      <header
        id="home"
        className="relative w-full h-screen bg-blue-600 text-white flex flex-col justify-center items-center text-center px-6 pt-20"
      >
        <h1 className="text-5xl font-bold mb-4 animate-bounce">
          Welcome to Virtual Health Assistant
        </h1>
        <p className="text-lg max-w-xl mb-8 animate-fadeIn">
          Your personal AI-powered healthcare companion, providing real-time
          assistance and connecting you with trusted doctors when needed.
        </p>
        <button className="bg-green-500 text-white py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-green-600 transition duration-300 animate-pulse">
          Get Started
        </button>
        <div className="absolute bottom-10 text-white animate-bounce">
          <span>Scroll Down</span>
          <svg
            className="w-6 h-6 ml-2 inline-block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        {/* Background Image */}
        <img
          src=""
          alt="Health Assistant"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </header>

      {/* Features Section */}
      <section id="features" className="bg-white py-16 px-6 w-full text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 animate-fadeIn">
          Why Choose Us?
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="max-w-xs bg-blue-50 p-6 m-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
            <FaHeartbeat className="text-4xl text-red-500 mb-4 mx-auto animate-pulse" />
            <h3 className="text-2xl font-semibold mb-4">AI-Powered Insights</h3>
            <p className="text-gray-700">
              Our AI analyzes your symptoms and provides accurate health advice,
              tailored to your needs.
            </p>
          </div>
          <div className="max-w-xs bg-blue-50 p-6 m-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
            <FaUserMd className="text-4xl text-green-500 mb-4 mx-auto animate-pulse" />
            <h3 className="text-2xl font-semibold mb-4">
              Real-Time Doctor Connection
            </h3>
            <p className="text-gray-700">
              Get connected with nearby or online doctors for further assistance
              when needed.
            </p>
          </div>
          <div className="max-w-xs bg-blue-50 p-6 m-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
            <FaPills className="text-4xl text-blue-500 mb-4 mx-auto animate-pulse" />
            <h3 className="text-2xl font-semibold mb-4">Health Monitoring</h3>
            <p className="text-gray-700">
              Keep track of your health metrics and receive timely reminders for
              medication and appointments.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        id="about"
        className="bg-gradient-to-r from-green-400 to-blue-500 py-16 px-6 text-white text-center"
      >
        <h2 className="text-4xl font-bold mb-6 animate-fadeIn">
          Ready to Take Control of Your Health?
        </h2>
        <p className="text-lg mb-8">
          Sign up today and start your journey to a healthier life with Virtual
          Health Assistant.
        </p>
        <button className="bg-white text-green-500 py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-gray-100 transition duration-300">
          Get Started Now
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

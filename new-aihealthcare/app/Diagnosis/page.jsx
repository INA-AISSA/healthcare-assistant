import React from "react";
import Link from "next/link";

export default function Diagnosis() {
  return (
    <div className="min-h-screen flex flex-col text-black font-sans items-center justify-center bg-gradient-to-br from-green-200 to-blue-200 p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
        Symptom Checker
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Enter your symptoms below and get instant feedback.
      </p>
      <textarea
        className="w-full max-w-md p-4 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-6"
        rows="4"
        placeholder="Describe your symptoms here..."
      ></textarea>
      <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105">
        Get Diagnosis
      </button>

      <a className="mt-6 text-lg text-blue-700 hover:underline hover:text-blue-800 transition">
        Go back to Home
      </a>
    </div>
  );
}

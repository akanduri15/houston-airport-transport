import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer"; // ✅ Footer import

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import AddExperience from "./pages/AddExperience";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/add-experience" element={<AddExperience />} />
        </Routes>
      </div>

      {/* Footer (Always visible at the bottom) */}
      <Footer />
    </div>
  );
}

export default App;

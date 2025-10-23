import React from "react";
import houstonCity from "../assets/images/houston-city.jpg"; // correct relative path
import "./AboutUs.css";

function AboutUs() {
  return (
    <div
      className="about-us-container"
      style={{
        backgroundImage: `url(${houstonCity})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "16px",
        padding: "2rem",
        color: "white",
      }}
    >
      <h1>About IAHGo</h1>
      <p>
        Welcome to IAHGo! Our goal is to make transportation from George Bush Intercontinental Airport
        simple, reliable, and affordable.
      </p>

      <p>
        Travelers can find the best options for Buses, Uber, and Lyft.
        Users can also share their travel experiences, which become available for others.
      </p>

      <h2>Our Mission</h2>
      <p>
        To empower travelers with accurate, up-to-date information and make airport transportation stress-free.
      </p>
    </div>
  );
}

export default AboutUs;

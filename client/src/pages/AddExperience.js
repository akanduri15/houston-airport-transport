import React, { useState } from "react";
import "./AddExperience.css";
import { collection, addDoc } from "firebase/firestore";




function AddExperience() {
  const [formData, setFormData] = useState({
    terminal: "",
    destination: "",
    cost: "",
    duration: "",
    transportType: "Uber",
    tip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Experience Added:", formData);
    alert("Your experience has been added!");
    setFormData({
      terminal: "",
      destination: "",
      cost: "",
      duration: "",
      transportType: "Uber",
      tip: "",
    });
  };

  return (
    <div className="add-experience-container">
      <h2>Add Your Transportation Experience</h2>
      <form onSubmit={handleSubmit} className="add-experience-form">
        <label>
          Terminal Picked Up From:
          <input
            type="text"
            name="terminal"
            value={formData.terminal}
            onChange={handleChange}
            placeholder="e.g., Terminal B"
            required
          />
        </label>

        <label>
          Enter Destination:
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="e.g., Downtown Houston"
            required
          />
        </label>

        <label>
          Enter Cost ($):
          <input
            type="number"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            placeholder="e.g., 45"
            required
          />
        </label>

        <label>
          Enter Duration (minutes):
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="e.g., 30"
            required
          />
        </label>

        <label>
          Transportation Type:
          <select
            name="transportType"
            value={formData.transportType}
            onChange={handleChange}
          >
            <option value="Uber">Uber</option>
            <option value="Lyft">Lyft</option>
            <option value="Bus">Bus</option>
            <option value="Taxi">Taxi</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Personal Tip:
          <textarea
            name="tip"
            value={formData.tip}
            onChange={handleChange}
            placeholder="Share advice or tips about your trip..."
            rows="4"
          />
        </label>

        <button type="submit" className="submit-button">
          Add Experience
        </button>
      </form>
    </div>
  );
}

export default AddExperience;

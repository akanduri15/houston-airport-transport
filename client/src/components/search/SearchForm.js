import { useState } from "react";
import "./SearchForm.css"; // ✅ import the CSS

export default function SearchForm({ onSearch }) {
  const [terminal, setTerminal] = useState("");
  const [destination, setDestination] = useState("");
  const [transportType, setTransportType] = useState("Uber");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!terminal.trim() || !destination.trim()) return;
    onSearch({ terminal, destination, transportType });
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <label>
        Terminal:
        <select
          value={terminal}
          onChange={(e) => setTerminal(e.target.value)}
          required
        >
          <option value="">Select Terminal</option>
          <option value="Terminal A">Terminal A</option>
          <option value="Terminal B">Terminal B</option>
          <option value="Terminal C">Terminal C</option>
          <option value="Terminal D">Terminal D</option>
          <option value="Terminal E">Terminal E</option>
        </select>
      </label>

      <label>
        Destination:
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Enter hotel or address"
          required
        />
      </label>

      <label>
        Transport Type:
        <select
          value={transportType}
          onChange={(e) => setTransportType(e.target.value)}
        >
          <option value="Uber">Uber</option>
          <option value="Lyft">Lyft</option>
          <option value="Bus">Bus</option>
        </select>
      </label>

      <button type="submit">Search</button>
    </form>
  );
}

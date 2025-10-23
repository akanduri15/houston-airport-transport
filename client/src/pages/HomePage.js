import React, { useState } from 'react';
import NavBar from '../components/common/Navbar';
import SearchForm from "../components/search/SearchForm";
import './HomePage.css';





const HomePage = () => {
  const [error, setError] = useState(null);

  const handleSearch = async (searchData) => {
    console.log('Search data:', searchData);
    alert(`Searching from ${searchData.terminal.name} to ${searchData.destination}`);
    // We'll add real search later
  };

  return (
    <div className="home-page">
      <NavBar />
      
      <main className="main-content">
        <div className="hero-section">
          <h1>🛫 Welcome to IAHGo!</h1>
          <p>Find reliable transportation from Bush Intercontinental Airport</p>
             <SearchForm onSearch={(data) => console.log(data)} />
        </div>
        
        {error && <div className="error-banner">{error}</div>}
        
       
      </main>
    </div>
  );
};

export default HomePage;
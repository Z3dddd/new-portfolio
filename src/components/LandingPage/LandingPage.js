import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const handleEnterClick = () => {
    // This will be used to navigate to the main portfolio
    console.log('Enter clicked - navigate to main portfolio');
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="hero-section">
          <h1 className="hero-title">
            Creative Developer & Designer
          </h1>
          <p className="hero-subtitle">
            Crafting digital experiences with clean code and beautiful design
          </p>
          <button 
            className="enter-button"
            onClick={handleEnterClick}
          >
            ENTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 
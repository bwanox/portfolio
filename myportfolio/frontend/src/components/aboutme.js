import React from 'react';

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me-section">
    <div className="game-stats">
      <h2>Game Stats</h2>
      <div className="stat">
        <span className="label">Name:</span>
        <span className="value">Your Name</span>
      </div>
      <div className="stat">
        <span className="label">Age:</span>
        <span className="value">Your Age</span>
      </div>
      <div className="stat">
        <span className="label">HP:</span>
        <span className="value">100</span>
      </div>
      <div className="stat">
        <span className="label">Weight:</span>
        <span className="value">Your Weight</span>
      </div>
      <div className="stat">
        <span className="label">Traits:</span>
        <span className="value">Your Traits</span>
      </div>
    </div>
  </section>
  );
};

export default AboutMe;
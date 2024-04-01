import React from 'react';
import './aboutme.css';
import logo from '../asserts/img/logo.png';

const AboutMe = () => {
  const traits = [
    { label: 'stupid', value: 'Sclass' },
    { label: 'depressed', value: 'Sclass' },
    { label: 'useless', value: 'Bclass' },
    { label: 'hardworker', value: 'SSclass' },
    { label: 'anxious', value: 'Fclass' },
    { label: 'emotional', value: 'EDclass' },
  ];

  return (
    <section id="about-me" className="about-me-section">
      <div className="game-stats">
        <h2 className="about-me-title">my stats</h2>
        <div className="stat">
          <span className="label">Name:</span>
          <span className="value">Bilal Sahili</span>
          <div className="profile-pic">
            <img src={logo} alt="Profile" />
          </div>
        </div>
        <div className="stat">
          <span className="label">Age:</span>
          <span className="value">18</span>
        </div>
        <div className="stat">
          <span className="label">Health:</span>
          <div class="hp-bar">
            <div class="hp-value" style={{ width: "50%" }}></div>
          </div>
        </div>
        <div className="stat">
          <span className="label">Weight:</span>
          <span className="value">70kg</span>
        </div>
        <div className="stat">
          <span className="label">Traits:</span>
          {traits.map(trait => (
            <div className="stat" key={trait.label}>
              <span className="label"></span>
              <span className="value" style={{ marginRight: '60px' }}>{`${trait.label}-${trait.value}`}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

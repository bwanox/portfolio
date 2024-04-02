import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/aboutme';
import WelcomeMessage from './components/WelcomeMessage';
import './App.css';

const App = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);

  const toggleComponent = (componentName) => {
    switch (componentName) {
      case 'aboutme':
        setShowAboutMe(!showAboutMe);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <Header toggleComponent={toggleComponent} />
      <div style={{ height: '25vh' }}></div>
      <div className="content">
      <WelcomeMessage />
      <div style={{ height: '50vh' }}></div>
      {showAboutMe && <AboutMe />} 
      </div>
    </div>
  );
};

export default App;

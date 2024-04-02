import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/aboutme';
import WelcomeMessage from './components/WelcomeMessage';
import Contact from './components/contact';
import './App.css';

const App = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showContact, setShowContact] = useState(false);
  

  const toggleComponent = (componentName) => {
    switch (componentName) {
      case 'aboutme':
        setShowAboutMe(!showAboutMe);
        break;
      case 'contact':
        setShowContact(!showContact);
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
      {showContact && <Contact />} 

      </div>
    </div>
  );
};

export default App;

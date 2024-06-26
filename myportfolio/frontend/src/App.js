import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/aboutme';
import WelcomeMessage from './components/WelcomeMessage';
import Contact from './components/contact';
import Projects from './components/projects';
import Skills from './components/skills';
import './App.css';

const App = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  

  const toggleComponent = (componentName) => {
    switch (componentName) {
      case 'aboutme':
        setShowAboutMe(!showAboutMe);
        break;
      case 'contact':
        setShowContact(!showContact);
        break;
      case 'projects':
        setShowProjects(!showProjects);
        break;
      case 'skills':
        setShowSkills(!showSkills);
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
      {showProjects && <Projects />}
      {showSkills && <Skills />}

      </div>
    </div>
  );
};

export default App;

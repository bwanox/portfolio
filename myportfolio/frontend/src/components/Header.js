import React from 'react';
import logo from '../asserts/img/logo1.png';
import './Header.css';

const Header= () => {
    const scrollToAboutMe = () => {
      const aboutMeSection = document.getElementById('about-me');
      if (aboutMeSection) {
        aboutMeSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <header>
        <div className="upper-header">
          <img
            src={logo}
            alt="Logo"
            className="logo"
            onClick={scrollToAboutMe}
            style={{ cursor: 'pointer', height: '50px' }}
          />
        <nav>
          <ul className= 'nav-list'>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
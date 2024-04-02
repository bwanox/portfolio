import React, { useEffect, useState } from 'react';
import './WelcomeMessage.css';
import Cat from '../asserts/img/cat.png';
import VideoBackground from '../asserts/videos/background.mp4';
import Planet1 from  '../asserts/img/planet1.png';

const WelcomeMessage = () => {
  const [message, setMessage] = useState('');
  const fullMessage = "Heello, welcome to my portfolio! I'm Bilal Sahili, feel free to travel through my spaceship";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullMessage.length-1) {
        setMessage(prevMessage => prevMessage + fullMessage[i]);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);
  
  return (
    <div>
    <div className="welcome-message-container">
      <video autoPlay loop muted className="video-background">
        <source src={VideoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="planet-container">
          <img
            className="planet"
            src={Planet1}
            alt="planet"
          />
        </div>
    <div className="heading-container">
        <h1 className="portfolio-text">My<br />Portfolio</h1>
      </div> 
      <div className="image-container">
     
        <img
          className="cat-in-space"
          src={Cat}
          alt="catinspace"
        />
        
      </div>
      <div className="text-container">
        <div className="welcome-message">{message}</div>
      </div>
      <div className="contact_way">
        <ul className='infos-list'>
        <li>
              <button className="list-button">Wanna know more about me?</button>
              <span className="list-dot"></span>
            </li>
            <li>
              <button className="list-button">Wanna see some projects I made?</button>
              <span className="list-dot"></span>
            </li>
            <li>
              <button className="list-button">Are you curious about how I got to where I am?</button>
              <span className="list-dot"></span>
              </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;

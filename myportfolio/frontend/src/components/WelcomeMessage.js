import React, { useEffect, useState } from 'react';
import './WelcomeMessage.css';
import Cat from '../asserts/img/cat.png';

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
    <div className="welcome-message-container">
      <div className="text-container">
        <div className="welcome-message">{message}</div>
      </div>
      <div className="image-container">
        <img
          className="cat-in-space"
          src={Cat}
          alt="catinspace"
        />
      </div>
    </div>
  );
};

export default WelcomeMessage;

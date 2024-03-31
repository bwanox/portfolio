import React, { useEffect, useState } from 'react';
import './WelcomeMessage.css';
import Cat from '../asserts/img/cat.png';

const WelcomeMessage = () => {
  const [message, setMessage] = useState('');
  const fullMessage = "Hi, welcome to my portfolio! I'm Bilal Sahili, feel free to travel through my spaceship;";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setMessage((prevMessage) => prevMessage + fullMessage[i]);
      i++;
      if (i > fullMessage.length) {
        clearInterval(typing);
      }
    }, 100); 
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="welcome-message-container">
      <div className="welcome-message">{message}</div>
      <img
        className="cat-in-space"
        src={Cat}
        alt="catinspace"
      />
    </div>
  );
};

export default WelcomeMessage;
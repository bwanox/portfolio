import React, { useState } from 'react';
import './sidenavbar.css';
import { FaUser, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa';

const Sidenavbar = () => {
    const [activeLogo, setActiveLogo] = useState('');

    const handleLogoClick = (logoName) => {
        setActiveLogo(logoName);
        const sectionElement = document.getElementById(logoName);
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="sidenavbar">
            <div><FaUser className={activeLogo === 'AboutMe' ? 'active' : ''} onClick={() => handleLogoClick('AboutMe')} /></div>
            <div><FaProjectDiagram className={activeLogo === 'Projects' ? 'active' : ''} onClick={() => handleLogoClick('Projects')} /></div>
            <div><FaTools className={activeLogo === 'Skills' ? 'active' : ''} onClick={() => handleLogoClick('Skills')} /></div>
            <div><FaEnvelope className={activeLogo === 'Contact' ? 'active' : ''} onClick={() => handleLogoClick('Contact')} /></div>
        </div>
    );
};

export default Sidenavbar;
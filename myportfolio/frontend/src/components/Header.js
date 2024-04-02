import React from 'react';
import logo from '../asserts/img/logo1.png';
import './Header.css';

const Header = ({ toggleComponent }) => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header>
            <div className="upper-header">
                <img
                    src={logo}
                    alt="Logo"
                    className="logo"
                    onClick={() => scrollToSection('about-me')}
                    style={{ cursor: 'pointer', height: '50px' }}
                />
                <nav>
                    <ul className='nav-list'>
                        <li>
                            <a href="#about-me" onClick={() => toggleComponent('aboutme')}>About Me</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={() => toggleComponent('projects')}>Projects</a>
                        </li>
                        <li>
                            <a href="#skills" onClick={() => toggleComponent('skills')}>Skills</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => toggleComponent('contact')}>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

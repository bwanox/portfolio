import { useRef, useState } from "react";
import React from "react";
import './css/Header.css';

const Header = () => {
    const ScrolltoSection=(section)=>{
        const Section=document.getElementById(section);
        if (Section){
            window.scrollTo({
                top:Section.offsetTop,
                behavior:"smooth"
            });
        }
    }

    return (
        <div className="header">
                <nav className="horizontal-navbar">
                    <ul>
                        <li>
                            <a href="#about" onClick={()=>ScrolltoSection("about")}>About me </a>
                        </li>
                        <li>
                            <a href="#projects" onClick={()=>ScrolltoSection("projects")}>my projects </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={()=>ScrolltoSection("contact")}>Contact </a>
                        </li>
                        <li>
                            <a href="#resume" onClick={()=>ScrolltoSection("resume")}>Resume </a>
                        </li>
                    </ul>
                </nav>
            </div>

    );
};

export default Header;
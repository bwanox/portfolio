import React, { useRef, useEffect } from 'react';
import './Contact.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
    const contactPopupRef = useRef(null);

    useEffect(() => {
        const contactLi = document.getElementById("contact-li");
        const contactPopup = contactPopupRef.current;

        if (contactLi && contactPopup) {
            const rect = contactLi.getBoundingClientRect();
            contactPopup.style.top = (rect.bottom + window.pageYOffset) + "px";
            contactPopup.style.left = (rect.left + window.pageXOffset) + "px";
        }
    }, []);

    

    return (
        <div className='contact-popup' ref={contactPopupRef}>
        <div className="contact-content">
            <ul>
                <li ><a href="mailto:moad.bil7458@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> Email</a></li>
                <li ><a href="https://www.linkedin.com/in/moadb/"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
                <li ><a href="https://github.com/bwanox"><FontAwesomeIcon icon={faGithub} /> GitHub</a></li>
                <li ><a href="https://www.instagram.com/kuro_kage7"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
            </ul>
        </div>
    </div>
    );
};

export default Contact;

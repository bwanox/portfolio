import React, { useRef, useEffect } from 'react';
import './Contact.css'; 

const Contact = () => {
    const contactPopupRef = useRef(null);

    useEffect(() => {
        const contactLi = document.getElementById('contact-li');
        const contactPopup = contactPopupRef.current;

        const positionPopup = () => {
            if (contactLi && contactPopup) {
                const contactLiRect = contactLi.getBoundingClientRect();
                contactPopup.style.top = `${contactLiRect.bottom}px`;
                contactPopup.style.left = `${contactLiRect.left}px`;
            }
        };

        positionPopup();

        // Re-position the popup when window is resized
        window.addEventListener('resize', positionPopup);

        return () => {
            window.removeEventListener('resize', positionPopup);
        };
    }, []);

    return (
        <div className='contact-popup' ref={contactPopupRef}>
            <h2>Contact</h2>
            <div className="contact-content">
                <ul>
                    <li id="contact-li"><a href="mailto:moad.bil7458@gmail.com">moad.bil7458@gmail.com</a></li>
                    <li><a href="https://www.linkedin.com/in/moadb/">LinkedIn</a></li>
                    <li><a href="https://github.com/bwanox">GitHub</a></li>
                    <li><a href="https://www.instagram.com/kuro_kage7">Instagram</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;

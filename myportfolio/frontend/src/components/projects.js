import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../asserts/img/image11.jpg';
import image2 from '../asserts/img/image22.jpg';
import image3 from '../asserts/img/image33.jpg';
import './Projects.css';

const Projects = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        sliderRef.current.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: true
    };

    return (
        <div ref={sliderRef} className="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                <Slider {...settings} className="projects-slider">
                    <div>
                        <img src={image1} alt="Project 1" />
                    </div>
                    <div>
                        <img src={image2} alt="Project 2" />
                    </div>
                    <div>
                        <img src={image3} alt="Project 3" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Projects;

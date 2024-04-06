import React from 'react';
import './skills.css';
import Planet1 from '../asserts/img/planet (1).png';
import Planet3 from '../asserts/img/planet (2).png';
import Planet4 from '../asserts/img/planet (3).png';
import Planet5 from '../asserts/img/planet (4).png';
import Planet6 from '../asserts/img/planet (5).png';
import Planet2 from '../asserts/img/planet (6).png';

const Skills = () => {
  const skills = [
    { name: "JavaScript", image:Planet2},
    { name: "React", image: Planet3 },
    { name: "django", image: Planet4 },
    { name: "HTML/CSS", image: Planet6 },
    { name: "C language", image: Planet5 },
    { name: "Python", image: Planet1},

  ];

  return (
    <section id="skills" className="skills-section">
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="planet">
          <img src={skill.image} alt={skill.name} />
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Skills;

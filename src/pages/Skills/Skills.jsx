import React from 'react';
import "./Skills.css";
import skillsImage from "../../images/skillsvector.png";
import { languages,technologies } from '../../assets/data';

const Skills = () => {

  return (
    <div className="skills">
      <div className="skills-image-container">
        <img src={skillsImage} alt="" />
      </div>
      <div className="skills-container">
        <div className="languages-container">
          <h2>Languages</h2>
          <div>
            {languages.map((l, i) => (
              <div key={i}>
                <img src={l.image} alt={l.name} />
              </div>
            ))}
          </div>
        </div>
        <div className="technologies-container">
          <h2>Technologies</h2>
          <div>
            {technologies.map((t, i) => (
              <div key={i}>
                <img src={t.image} alt={t.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills

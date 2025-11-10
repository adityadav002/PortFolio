import React from "react";
import "../styles/Skills.css";

const SkillBar = ({ skill, level }) => {
  return (
    <div className="skill_bar">
      <div className="level_skill">
        <h3>{skill}</h3>
        <h3> {level}%</h3>
      </div>
      <div className="outer_bar">
        <div className="inner_bar" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;

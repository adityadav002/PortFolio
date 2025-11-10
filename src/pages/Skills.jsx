import React from "react";
import "../styles/Skills.css";
import SkillBar from "../components/SkillBar";
import InfiniteScroll from "../components/InfiniteScroll";

function Skills() {
  const skills = [
    { skill: "C++", level: 90 },
    { skill: "Python", level: 80 },
    { skill: "HTML5", level: 95 },
    { skill: "CSS3", level: 90 },
    { skill: "JavaScript", level: 90 },
    { skill: "React", level: 85 },
    { skill: "Node.js", level: 80 },
    { skill: "MongoDB", level: 70 },
    { skill: "MySQL", level: 75 },
    { skill: "Docker", level: 75 },
  ];
  return (
    <>
      <hr />
      <div className="skill_header">
        <h1>Skills</h1>
        <h2>Skills</h2>
      </div>
      <p className="skills_text">
        As a passionate software engineer, I’ve built a strong foundation in web
        development, programming, and problem-solving. My skills include working
        with technologies like HTML, CSS, JavaScript, React, and Node.js, along
        with a growing knowledge of databases and version control using Git and
        GitHub. I’m constantly learning and exploring new tools to write clean,
        efficient, and scalable code.
      </p>
      <br />
      <br />
      <br />
      <div className="skillbar_container">
        {skills.map((item, index) => (
         <>
          <SkillBar key={index} skill={item.skill} level={item.level} />
         </>
        ))}
      </div>
      <InfiniteScroll />
    </>
  );
}

export default Skills;

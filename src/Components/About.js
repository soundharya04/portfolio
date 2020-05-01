import React from "react";

const ValBar = ({ skill, value }) => (
  <div className="skill-group">
    <span>
      <p>{skill}</p>
      <p>{`${value} %`}</p>
    </span>
    <progress max="100" value={value}></progress>
  </div>
);

const About = () => {
  return (
    <div className="about">
      <header>About Me</header>
      <div className="about-content">
        <span className="frame"></span>
        <span className="about-text">
          <h1>Hello, I'm Andruraj</h1>
          <p>
            Experienced Programmer with a demonstrated history of working in the
            information technology and services industry. Skilled in React.js,
            Node.js, Python, Django, Core Java, and MySQL, MangoDB. Web
            Developer and passionate in App development and programming.
          </p>
          <div className="skills">
            <ValBar skill="React JS" value="90" />
            <ValBar skill="Node JS" value="75" />
            <ValBar skill="Python" value="85" />
            <ValBar skill="MySQL" value="80" />
          </div>
        </span>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import profpic from "../images/profpic.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="about">
        <h2 className="section_heading">About me</h2>
      </div>
      <div className="about_flex">
        <img src={profpic} className="profpic"></img>
        <div className="about_content">
          <h3>Who am I ?</h3>
          <p>
            I'm a budding Front-end developer and UI/UX designer. I have 3+
            years of experience in design and develepment. I have developed a
            strong passion for UI effects, animations and creating intuitive,
            dynamic user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

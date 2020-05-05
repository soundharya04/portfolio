import React from "react";
import { VSection, BoxHighlighted } from "./elements";

const About = () => {
  return (
    <VSection
      title="About Me"
      className="about"
      bodyStyle={{ justifyContent: "space-between" }}
    >
      <BoxHighlighted
        bordered
        height="400"
        width="300"
        bodyStyle={{ margin: "45px", marginLeft: 0 }}
      ></BoxHighlighted>
      <span className="about-text">
        <h1>Hello, I'm Andruraj</h1>
        <p>
          Experienced Programmer with a demonstrated history of working in the
          information technology and services industry. Skilled in React.js,
          Node.js, Python, Django, Core Java, and MySQL, MangoDB. Web Developer
          and passionate in App development and programming.
        </p>
      </span>
    </VSection>
  );
};

export default About;

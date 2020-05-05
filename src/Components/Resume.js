import React from "react";
import { VSection, Card } from "./elements";

const Resume = () => {
  return (
    <VSection className="resume" title="Resume">
      <Card color="coral" width="300">
        <h3>Experience</h3>
        <p style={{ color: "#ccc", lineHeight: 2 }}>
          Experienced Programmer with a demonstrated history of working in the
          information technology and services industry. Skilled in React.js,
          Node.js, Python, Django, Core Java, and MySQL, MangoDB.
        </p>
      </Card>
      <span style={{ marginTop: "50px" }}>
        <Card
          color="yellow"
          width="300"
          bodyStyle={{ backgroundColor: "rgba(255,255,255,0.05)" }}
        >
          <h3>Education</h3>
          <p style={{ color: "#ccc", lineHeight: 2 }}>
            Experienced Programmer with a demonstrated history of working in the
            information technology and services industry. Skilled in React.js,
            Node.js, Python, Django, Core Java, and MySQL, MangoDB.
          </p>
        </Card>
      </span>
      <Card color="deepskyblue" width="300">
        <h3>Achievements</h3>
        <p style={{ color: "#ccc", lineHeight: 2 }}>
          Experienced Programmer with a demonstrated history of working in the
          information technology and services industry. Skilled in React.js,
          Node.js, Python, Django, Core Java, and MySQL, MangoDB.
        </p>
      </Card>
    </VSection>
  );
};

export default Resume;

import React from "react";
import { RadialProgress, VSection, Card, BorderedCard } from "./elements";

const Skills = () => {
  return (
    <VSection
      title="Skills"
      className="skills"
      bodyStyle={{ justifyContent: "space-evenly", flexFlow: "wrap" }}
    >
      <Card
        color="deepskyblue"
        height="200"
        width="400"
        bodyStyle={{ display: "flex", justifyContent: "space-between" }}
      >
        <span>
          <h1>React JS</h1>
          <p>Professional React Developer with 2+ yrs of Experience</p>
        </span>
        <RadialProgress
          name="React JS"
          value="90"
          nameColor="#fff"
          valColor="red"
          parentClass="skills"
        />
      </Card>
      <Card
        color="deepskyblue"
        height="200"
        width="400"
        bodyStyle={{ display: "flex", justifyContent: "space-between" }}
      >
        <span>
          <h1>Node JS</h1>
          <p>Professional Node JS Developer with 2+ yrs of Experience</p>
        </span>
        <RadialProgress
          name="Node JS"
          value="75"
          nameColor="#fff"
          valColor="red"
          parentClass="skills"
        />
      </Card>

      <BorderedCard height="200" width="400" bodyStyle={{ display: "flex" }}>
        <span>
          <h1>Python</h1>
          <p>Well-versed in Django, Data Structures and Machine Learning</p>
        </span>
        <RadialProgress
          name="Python"
          value="85"
          nameColor="#fff"
          valColor="red"
          parentClass="skills"
        />
      </BorderedCard>

      <BorderedCard height="200" width="400" bodyStyle={{ display: "flex" }}>
        <span>
          <h1>MySQL</h1>
          <p>Worked with SQL server, Oracle, SQLite and PySQL</p>
        </span>
        <RadialProgress
          name="MySQL"
          value="80"
          nameColor="#fff"
          valColor="red"
          parentClass="skills"
        />
      </BorderedCard>
    </VSection>
  );
};

export default Skills;

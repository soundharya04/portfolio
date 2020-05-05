import React from "react";
import RadialProgress from "./elements/radialProgress";
import SideHeading from "./elements/sideHeading";
import VSection from "./elements/section";

const Skills = () => {
  return (
    <VSection title="Skills">
      <RadialProgress
        name="React JS"
        value="90"
        nameColor="#fff"
        valColor="red"
      />
    </VSection>
  );
};

export default Skills;

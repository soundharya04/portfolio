import React from "react";
import { VSection, BorderedCard } from "./elements";

const Services = () => {
  return (
    <VSection className="services" title="Services">
      <BorderedCard width="300">
        <h2>Website Development</h2>
        <p>
          Do you want to build an interactive website, quick and easy? Come to
          us.
        </p>
      </BorderedCard>
      <span style={{ marginTop: "50px" }}>
        <BorderedCard
          width="300"
          bodyStyle={{ backgroundColor: "rgba(255,255,255,0.05)" }}
        >
          <h2>Coaching</h2>
          <p>Do you want to become a powerful programmer? Come to us.</p>
        </BorderedCard>
      </span>
      <BorderedCard width="300">
        <h2>Mobile Apps</h2>
        <p>
          Do you want to build an Android Application, quick and easy. Come to
          us.
        </p>
      </BorderedCard>
    </VSection>
  );
};

export default Services;

import React from "react";

export const Vsection = ({ classname, heading }) => {
  return (
    <section className={classname}>
      <h2 className="section_heading">{heading}</h2>
    </section>
  );
};

import React from "react";

export const Vsection = ({ classname, heading, ...props }) => {
  return (
    /*--Vsection border---*/
    <section className={classname} style={{ color: "white" }}>
      <h2 className="section_heading">{heading}</h2>
      <div>{props.children}</div>
    </section>
  );
};

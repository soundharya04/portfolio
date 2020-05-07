import React from "react";

export const Vsection = ({ classname, heading, ...props }) => {
  return (
    <section className={classname}>
<<<<<<< HEAD
=======
      {console.log(classname, "123")}
>>>>>>> 5ad99d148e757a5659c23b791794188084815c4c
      <h2 className="section_heading">{heading}</h2>
      <div>{props.children}</div>
    </section>
  );
};

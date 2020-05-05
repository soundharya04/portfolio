import React from "react";

const SideHeading = ({ title, style }) => {
  return (
    <header className="side-header" style={{ ...style }}>
      {title}
    </header>
  );
};

export default SideHeading;

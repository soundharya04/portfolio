import React from "react";

const Header = () => {
  return (
    <div className="header">
      <span>
        <b>ANDRU</b>
        <i>Developer</i>
      </span>
      <span className="menu-btn" onClick={(e) => console.log("header clicked")}>
        MENU
      </span>
    </div>
  );
};

export default Header;

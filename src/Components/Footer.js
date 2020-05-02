import React from "react";

const Footer = () => {
  return (
    <footer>
      <span>&copy; 2020. All Rights Reserved</span>
      <span>
        <p
          onClick={(e) => {
            window.scroll({ top: 0, behavior: "smooth" });
          }}
        >
          >
        </p>
      </span>
    </footer>
  );
};

export default Footer;

import React from "react";

const AnchorToTop = () => {
  return (
    <div
      className="anchor-to-top"
      onClick={(e) => {
        window.scroll({ top: 0, behavior: "smooth" });
      }}
    >
      <p></p>
    </div>
  );
};

export default AnchorToTop;

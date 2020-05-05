import React from "react";
import SideHeading from "./sideHeading";

const VSection = ({ title, ...props }) => {
  const [view, setView] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      const all = document.querySelector(`.${title}`).getClientRects()[0];
      if (scroll > all.top && scroll < all.bottom) {
        if (view === false) {
          setView(true);
        }
      }
    });
  }, [view]);
  return (
    <div
      className={
        view ? `vertical-section ${title} fadein` : `vertical-section ${title}`
      }
    >
      <SideHeading title={title} />
      <div className={`${title} content`}>{props.children}</div>
    </div>
  );
};

export default VSection;

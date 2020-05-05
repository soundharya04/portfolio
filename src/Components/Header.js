import React from "react";
import { AnchorToTop } from "./elements";

const Header = () => {
  const [scroll, setScroll] = React.useState({
    scrolled: true,
    percentage: 0,
  });

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 10;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      if (isTop) {
        setScroll({
          scrolled: true,
          percentage: Math.floor(scrolled),
        });
      } else {
        setScroll({
          scrolled: false,
          percentage: Math.floor(scrolled),
        });
      }
    });
  }, []);
  return (
    <div className={scroll.scrolled ? "header" : "header scrolled"}>
      <div>
        <span>
          <b>ANDRU</b>
          {scroll.scrolled ? <i>Developer</i> : null}
        </span>
        <span
          className="menu-btn"
          onClick={(e) => console.log("header clicked")}
        >
          MENU
        </span>
      </div>
      {scroll.scrolled ? null : (
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${scroll.percentage}%` }}
          ></div>
        </div>
      )}
      {scroll.scrolled ? null : <AnchorToTop />}
    </div>
  );
};

export default Header;

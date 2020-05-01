import React from "react";

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
          ...scroll,
          scrolled: true,
          percentage: Math.floor(scrolled),
        });
      } else {
        setScroll({
          ...scroll,
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
          <i>Developer</i>
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
    </div>
  );
};

export default Header;

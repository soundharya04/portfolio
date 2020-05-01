import React from "react";

const Header = () => {
  const [scroll, setScroll] = React.useState(true);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 10;
      if (isTop) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <div className={scroll ? "header" : "header scrolled"}>
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

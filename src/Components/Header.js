import React from "react";

const Header = () => {
<<<<<<< HEAD
  return (
    <header id="home" className="home">
      <div className="hero_text_box">
        <h1>Soundharya Kannan</h1>
        <h2 className="slide_text">
          <span className="text_1">Full stack Developer</span>
          <span className="text_2">UI/UX Designer</span>
        </h2>
        <a href="#about" className="page_nav">
          View my profile
        </a>
      </div>
      <div className="social_links">
        <i className="ion-social-twitter icon_big" size="400"></i>
        <i className="ion-social-facebook icon_big" size="400"></i>
        <i className="ion-social-instagram icon_big" size="400"></i>
        <i className="ion-social-github icon_big" size="400"></i>
      </div>
    </header>
=======
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
>>>>>>> 503598573ac0ba393a8c52698f5db1fb84b2c70d
  );
};

export default Header;

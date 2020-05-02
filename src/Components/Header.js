import React from "react";

const Header = () => {
  return (
    <header id="home" className="home">
      <nav className="hidden_nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
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
  );
};

export default Header;

import React, { Component } from "react";

//styles
import "./App.css";
import "./grid.css";
//import "./normalize.css";
import "./ionicons.min.css";
import "./bootstrap.css";

//images
import profpic from "./images/profpic.jpg";

class App extends Component {
  render() {
    return (
      <div class="body">
        <div class="layout">
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
          <section id="about">
            <div className="about">
              <h2 className="section_heading">About me</h2>
            </div>
            <div className="about_flex">
              <img src={profpic} className="profpic"></img>
              <div className="about_content">
                <h3>Who am I ?</h3>
                <p>
                  I'm a budding Front-end developer and UI/UX designer. I have
                  3+ years of experience in design and develepment. I have
                  developed a strong passion for UI effects, animations and
                  creating intuitive, dynamic user experiences.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import profpic from "../images/profpic.jpg";

import css3 from "../images/carousel/css.jpg";
import html5 from "../images/carousel/html5.jpg";
import reactjs from "../images/carousel/react.png";
import redux from "../images/carousel/redux.jpg";
import oracle from "../images/carousel/oracle.jpg";

class About extends Component {
  componentDidMount() {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      //var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      // for (i = 0; i < dots.length; i++) {
      //   dots[i].className = dots[i].className.replace(" active", "");
      // }
      slides[slideIndex - 1].style.display = "block";
      //dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
  }
  render() {
    return (
      <section id="about">
        <div className="about">
          <h2 className="section_heading">About me</h2>
        </div>
        <div className="about_flex">
          <img src={profpic} className="profpic"></img>
          <div className="about_content">
            <h3>Who am I ?</h3>
            <p>
              I'm a budding Front-end developer and UI/UX designer. I have 3+
              years of experience in design and develepment. I have developed a
              strong passion for UI effects, animations and creating intuitive,
              dynamic user experiences.
            </p>
          </div>
        </div>
        <section className="skills">
          <h2 className="section_heading">Skills</h2>

          <div className="about_skills">
            <div className="skills_carousel">
              <div className="slideshow-container">
                <div className="mySlides fades">
                  <img src={css3} className="car_img"></img>
                </div>

                <div className="mySlides fades">
                  <img src={html5} className="car_img"></img>
                </div>

                <div className="mySlides fades">
                  <img src={reactjs} className="car_img"></img>
                </div>

                <div className="mySlides fades">
                  <img src={redux} className="car_img"></img>
                </div>

                <div className="mySlides fades">
                  <img src={oracle} className="car_img"></img>
                </div>
              </div>

              {/* <div className="dots_disp">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div> */}
            </div>

            <div className="skills_level_bar">
              <div className="level_bar">
                <div className="bar">
                  <div className="tag">React</div>
                  <div className="level" style={{ width: "75%" }}></div>
                </div>
                <span className="val">70%</span>
              </div>
              <div className="level_bar">
                <div className="bar">
                  <div className="tag">HTML</div>
                  <div className="level" style={{ width: "85%" }}></div>
                </div>
                <span className="val">85%</span>
              </div>
              <div className="level_bar">
                <div className="bar">
                  <div className="tag">CSS</div>
                  <div className="level" style={{ width: "80%" }}></div>
                </div>
                <span className="val">80%</span>
              </div>
              <div className="level_bar">
                <div className="bar">
                  <div className="tag">Redux</div>
                  <div className="level" style={{ width: "70%" }}></div>
                </div>
                <span className="val">80%</span>
              </div>
              <div className="level_bar">
                <div className="bar">
                  <div className="tag">Oracle</div>
                  <div className="level" style={{ width: "90%" }}></div>
                </div>
                <span className="val">80%</span>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default About;

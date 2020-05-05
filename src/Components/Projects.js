import React from "react";
import snowpass from "../images/projects/snowpass.jpg";
import purple from "../images/projects/purple_crop.png";
import analysis from "../images/projects/analysis.png";

const Projects = () => {
  return (
    <section className="projects">
      <div className="about">
        <h2 className="section_heading">Projects</h2>
      </div>
      <div className="projects_card">
        <div className="snowpass_pro">
          <div>
            <img className="snowpass_img" src={snowpass}></img>
            <div className="pro_caption">SNOWPASS</div>
            <div className="overlay">
              <div className="text">
                <h1>SNOWPASS</h1>
                <h2>React/Redux</h2>
                <a href="" className="page_nav">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="purple_pro">
          <div>
            <img className="purple_img" src={purple}></img>
            <div className="pro_caption">PURPLE</div>
            <div className="overlay">
              <div className="text">
                <h1>PURPLE</h1>
                <h2>React/Redux</h2>
                <a href=" " className="page_nav">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="analytic_pro">
          <div>
            <img className="analytic_img" src={analysis}></img>
            <div className="pro_caption">ANALYTICS</div>
            <div className="overlay">
              <div className="text">
                <h1>ANALYTICS</h1>
                <h2>React/Redux</h2>
                <a href=" " className="page_nav">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import { Vsection } from "./Sections";

const Contacts = () => {
  return (
    <Vsection classname="vsection" heading="Contact">
      <div className="con_flex">
        <div className="contact">
          <div className="button draw">
            <span className="contact_section">
              <h5>Soundharya Kannan</h5>
              <p>FULL STACK DEVELOPER</p>
            </span>
            <span className="contact_section">
              <h5>Email</h5>
              <p>sounsatoz@mail.com</p>
            </span>
            <span className="contact_section">
              <h5>Call me</h5>
              <p>+91 9876543210</p>
            </span>
          </div>
        </div>

        <div className="reach">
          <div className="reach_info">
            <input
              type="Name"
              id="Name"
              name="Name"
              placeholder="Name"
              className="contact_text"
            ></input>
          </div>
          <div className="reach_info">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              className="contact_text"
            ></input>
          </div>
          <div className="reach_info">
            <input
              type="mobile number"
              id="mobile_number"
              name="mobile number"
              placeholder="mobile number"
              className="contact_text"
            ></input>
          </div>
          <div>
            <button className="con_button">Submit</button>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer_content">
          SOUNDHARYA KANNAN <span className="footer_clr">©2020</span>
        </div>
      </footer>
    </Vsection>
  );
};

export default Contacts;

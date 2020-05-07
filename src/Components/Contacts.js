import React from "react";
import { Vsection } from "./Sections";

const Contacts = () => {
  return (
    <Vsection classname="vsection" heading="CONTACT">
      <div className="con_flex">
        <div className="contact">
          <div className="button draw">
            <span className="contact_section">
              <h5>Soundharya Kannan</h5>
              <p>FULL STACK DEVELOPER</p>
            </span>
            <span className="contact_section">
              <h5>Email</h5>
              <p>souns14@mail.com</p>
            </span>
            <span className="contact_section">
              <h5>Call me</h5>
              <p>+91 9677935225</p>
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
    </Vsection>
  );
};

export default Contacts;

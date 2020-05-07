import React from "react";
import { Vsection } from "./Sections";

const Contacts = () => {
  return (
    <Vsection classname="vsection" heading="CONTACT">
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
        <div>
          <div className="reach">
            <p>Name</p>
          </div>
        </div>
      </div>
    </Vsection>
  );
};

export default Contacts;

import React from "react";
import { Vsection } from "./Sections";

const Contacts = () => {
  return (
    <div>
      <Vsection classname="vsection" heading="CONTACT">
        <div className="info_box">
          <div className="info">
            <div className="info_sec">
              <h5>Soundharya Kannan</h5>
              <p>Full stack developer</p>
            </div>
            <div className="info_sec">
              <h5>CALL ME</h5>
              <p>+91 9677935225</p>
            </div>
            <div className="info_sec">
              <h5>EMAIL</h5>
              <p>souns14@gmail.com</p>
            </div>
            <p></p>
          </div>
        </div>
      </Vsection>
    </div>
  );
};

export default Contacts;

import React from "react";
import { BoxHighlighted, VSection } from "./elements";

const Contact = () => {
  const [form, setForm] = React.useState({
    username: "",
    email: "",
    mobile: "",
    message: "",
  });

  return (
    <VSection title="Contact Me" className="contact">
      <BoxHighlighted>
        <div className="contact-info">
          <span>
            <b>EMAIL</b>
            <p>andruraj05@gmail.com</p>
            <p>andruraj0511@gmail.com</p>
            <br />
            <b>CALL ME</b>
            <p>+91 7418412712</p>
            <br />
            <b>LOCATION</b>
            <p>Chennai</p>
          </span>
        </div>
      </BoxHighlighted>
      <div className="form">
        <div className="identity">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="text"
            pattern="\d*"
            maxLength="10"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={(e) => {
              setForm({ ...form, mobile: e.target.value });
            }}
          />
        </div>
        <div className="message">
          <textarea
            name="message"
            cols="80"
            rows="10"
            placeholder="Enter your message here..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>
        </div>
        <div className="button-anim">
          <button>Send Message</button>
        </div>
      </div>
    </VSection>
  );
};

export default Contact;

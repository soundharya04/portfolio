import React from "react";

const Contact = () => {
  const [view, setView] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      const all = document.querySelector(".contact").getClientRects()[0];
      if (scroll > all.top && scroll < all.bottom) {
        if (view === false) {
          setView(true);
        }
      }
    });
  }, [view]);
  return (
    <div className={view ? "contact fadein" : "contact"}>
      <header>Contact Me</header>
      <div className="contact-content">
        <div className="contact-frame">
          <span className="box-anim">
            <div className="frame">
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
          </span>
        </div>
        <span className="form">b</span>
      </div>
    </div>
  );
};

export default Contact;

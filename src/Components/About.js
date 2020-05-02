import React from "react";

const ValBar = ({ skill, value, view }) => {
  return (
    <div className="skill-group">
      <span>
        <p>{skill}</p>
        <p>{view ? `${value} %` : `0 %`}</p>
      </span>
      <progress max="100" value={view ? value : "0"}></progress>
    </div>
  );
};

const About = () => {
  const [view, setView] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      const all = document.querySelector(".about").getClientRects()[0];
      if (scroll > all.top && scroll < all.bottom) {
        if (view === false) {
          setView(true);
        }
      }
    });
  }, [view]);
  return (
    <div className={view ? "about fadein" : "about"}>
      <header>About Me</header>
      <div className="about-content">
        <span className="frame"></span>
        <span className="about-text">
          <h1>Hello, I'm Andruraj</h1>
          <p>
            Experienced Programmer with a demonstrated history of working in the
            information technology and services industry. Skilled in React.js,
            Node.js, Python, Django, Core Java, and MySQL, MangoDB. Web
            Developer and passionate in App development and programming.
          </p>
          <div className="skills">
            <ValBar skill="React JS" value="90" view={view} />
            <ValBar skill="Node JS" value="75" view={view} />
            <ValBar skill="Python" value="85" view={view} />
            <ValBar skill="MySQL" value="80" view={view} />
          </div>
        </span>
      </div>
    </div>
  );
};

export default About;

import React from "react";

const Navbar = () => {
  const [navbar, setNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("mousemove", () => {
      setNav(true);
      nomove();
    });
  });

  const nomove = () => {
    var myvar = setTimeout(() => {
      setNav(false);
    }, 30000);
    // clearmove(myvar);
  };

  const clearmove = (myvar) => {
    console.log(myvar);
    if (typeof myvar != "undefined") {
      clearTimeout(myvar);
    }
  };
  return navbar ? (
    <nav
      id="navbar"
      onMouseOver={() => {
        setNav(true);
      }}
    >
      <ul>
        <li className="navlist">
          <a className="listlink" href="#">
            Home
          </a>
        </li>
        <li className="navlist">
          <a className="listlink" href="#about">
            About
          </a>
        </li>
        <li className="navlist">
          <a className="listlink" href="#">
            Portfolio
          </a>
        </li>
        <li className="navlist">
          <a className="listlink" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  ) : null;
};

export default Navbar;

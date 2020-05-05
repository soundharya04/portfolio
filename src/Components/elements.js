import React from "react";

export const AnchorToTop = () => {
  return (
    <div
      className="anchor-to-top"
      onClick={(e) => {
        window.scroll({ top: 0, behavior: "smooth" });
      }}
    >
      <p></p>
    </div>
  );
};

export const RadialProgress = ({
  name,
  value,
  nameColor = null,
  valColor = null,
  width = null,
  height = null,
  parentClass = null,
  seconds = null,
}) => {
  const [view, setView] = React.useState(false);
  React.useEffect(() => {
    if (parentClass) {
      window.addEventListener("scroll", () => {
        const scroll = window.scrollY;
        const all = document
          .querySelector(`.${parentClass}`)
          .getClientRects()[0];
        if (scroll > all.top && scroll < all.bottom) {
          if (view === false) {
            setView(true);
          }
        }
      });
    }
  }, [view, parentClass]);
  return (
    <div className="radial-progress">
      <div className="percent">
        <svg>
          <circle cx="70" cy="70" r="70" shapeRendering="auto"></circle>
          {parentClass ? (
            <circle
              cx="70"
              cy="70"
              r="70"
              shapeRendering="auto"
              style={{
                stroke: valColor ? valColor : "#03a9f4",
                strokeDashoffset: view
                  ? `calc(440 - ((440 * ${value}) / 100))`
                  : `calc(440 - ((440 * 0) / 100))`,
                transition: seconds
                  ? `"stroke-dashoffset ${seconds}s linear"`
                  : "stroke-dashoffset 3s linear",
              }}
            ></circle>
          ) : (
            <circle
              cx="70"
              cy="70"
              r="70"
              shapeRendering="auto"
              style={{
                stroke: valColor ? valColor : "#03a9f4",
                strokeDashoffset: `calc(440 - ((440 * ${value}) / 100))`,
                transition: "stroke-dashoffset 1s linear",
              }}
            ></circle>
          )}
        </svg>
        <div
          className="number"
          style={{ color: nameColor ? nameColor : "#999" }}
        >
          <h2>
            {value}
            <span>%</span>
          </h2>
        </div>
      </div>
      <h2 style={{ color: nameColor ? nameColor : "#000" }}>{name}</h2>
    </div>
  );
};

export const SideHeading = ({ title, style }) => {
  return (
    <header className="side-header" style={{ ...style }}>
      {title}
    </header>
  );
};

export const VSection = ({ title, bodyStyle, className, ...props }) => {
  const [view, setView] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      const all = document
        .querySelector(`.${className ? className : title.split(" ")[0]}`)
        .getClientRects()[0];
      if (scroll > all.top && scroll < all.bottom) {
        if (view === false) {
          setView(true);
        }
      }
    });
  }, [view]);
  return (
    <div
      className={
        view
          ? `vertical-section ${
              className ? className : title.split(" ")[0]
            } fadein`
          : `vertical-section ${className ? className : title.split(" ")[0]}`
      }
    >
      <SideHeading title={title} />
      <div className={`content`} style={bodyStyle}>
        {props.children}
      </div>
    </div>
  );
};

export const BoxHighlighted = ({
  height = null,
  width = null,
  bordered,
  bodyStyle,
  ...props
}) => {
  return (
    <div className="box-highlighted" style={bodyStyle}>
      <span
        className="box-anim"
        style={{
          height: height ? `${height}px` : "100%",
          width: width ? `${width}px` : "100%",
          border: bordered ? "0.1px solid rgba(255,255,255,0.1)" : "none",
        }}
      >
        {props.children}
      </span>
    </div>
  );
};

export const Card = ({ color = null, bodyStyle, width, height, ...props }) => {
  return (
    <div
      className="card"
      style={{
        borderTop: color ? `5px solid ${color}` : "none",
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "100%",
        ...bodyStyle,
      }}
    >
      {props.children}
    </div>
  );
};

export const BorderedCard = ({ bodyStyle, width, height, ...props }) => {
  return (
    <BoxHighlighted bodyStyle={{ margin: "20px" }}>
      <div
        className="bordered-card"
        style={{
          border: "0.02px solid rgba(255,255,255,0.1)",
          backgroundColor: "rgba(255,255,255,0.01)",
          width: width ? `${width}px` : "100%",
          height: height ? `${height}px` : "100%",
          ...bodyStyle,
        }}
      >
        {props.children}
      </div>
    </BoxHighlighted>
  );
};

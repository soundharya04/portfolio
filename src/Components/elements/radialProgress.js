import React from "react";

const RadialProgress = ({
  name,
  value,
  nameColor = null,
  valColor = null,
  width = null,
  height = null,
  view = null,
}) => {
  return (
    <div className="radial-progress">
      <div className="percent">
        <svg>
          <circle cx="70" cy="70" r="70" shapeRendering="auto"></circle>
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
              transition: "stroke-dashoffset 1s linear",
            }}
          ></circle>
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

export default RadialProgress;

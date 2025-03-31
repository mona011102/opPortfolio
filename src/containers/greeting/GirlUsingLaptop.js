import React from "react";
import { ReactComponent as GirlLaptopSVG } from "../greeting/GirlLaptopSVG.svg"; // ✅ Import as React component

const GirlUsingLaptop = ({
  theme,
  width = "811.1879",
  height = "950.68268",
}) => {
  return (
    <div style={{ textAlign: "center" }}>
      {/* SVG with theme support */}
      <GirlLaptopSVG
        width={width}
        height={height}
        style={{ fill: theme.accentColor }} // ✅ Apply theme colors dynamically
      />
    </div>
  );
};

export default GirlUsingLaptop;

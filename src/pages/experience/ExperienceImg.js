import React from "react";
import { ReactComponent as ExperienceSVG } from "./experience.svg"; // Import SVG

const ExperienceImg = ({ theme, width = "3333", height = "2222" }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <ExperienceSVG
        width={width}
        height={height}
        style={{
          maxWidth: "100%",
          height: "auto",
          fill: theme?.accentColor || "currentColor",
        }}
      />
    </div>
  );
};

export default ExperienceImg;

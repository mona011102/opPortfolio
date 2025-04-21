import React from "react";
import { ReactComponent as FullStackSVG } from "../skills/fullstack.svg";

const FullStackImg = ({ theme, width = "3333", height = "2222" }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <FullStackSVG
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

export default FullStackImg;

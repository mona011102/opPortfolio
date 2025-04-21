import React from "react";
import { ReactComponent as CloudSVG } from "../skills/cloud.svg";

const CloudInfraImg = ({ theme, width = "3333", height = "2222" }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <CloudSVG
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

export default CloudInfraImg;

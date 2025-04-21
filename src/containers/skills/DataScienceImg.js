import React from "react";
import { ReactComponent as DataScienceSVG } from "../skills/datascience.svg";

const DataScienceImg = ({ theme, width = "3333", height = "2222" }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <DataScienceSVG
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

export default DataScienceImg;

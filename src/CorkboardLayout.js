import React from "react";
import "./CorkboardLayout.css";
import CombineGraph from "./CombineGraph";
import SeedOilGraph from "./SeedOilGraph";
import ObesityGraph from "./ObesityGraph";

import conspiracyImage from "./assets/conspiracy-image.png"; // Example pinned image

const CorkboardLayout = () => {
  return (
<div className="corkboard">
  {/* Title */}
  <h1 className="corkboard-title">The Seed Oil Conspiracy</h1>

  {/* Graphs */}
  <div className="graph-container" style={{ top: "20%", left: "10%" }}>
    <SeedOilGraph />
  </div>

  <div className="graph-container" style={{ top: "50%", left: "15%" }}>
    <ObesityGraph />
  </div>

  <div className="graph-container" style={{ top: "70%", left: "30%" }}>
    <CombineGraph />
    </div>
      <div className="string" style={{ top: "12%", left: "18%", width: "40%", transform: "rotate(25deg)" }}></div>
      <div className="string" style={{ top: "40%", left: "50%", width: "30%", transform: "rotate(-15deg)" }}></div>
    </div>
  );
};

export default CorkboardLayout;

import React from "react";
import OpenPositions from "./OpenPositions.tsx";
import PositionDescription from "./PositionDescription.tsx";

const CurrentJobs = () => {
  return (
    <div className="flex h-screen overflow-hidden">

      <div
        className="w-1/3 "
      >
        <OpenPositions />
      </div>
      <div className="w-2/3">
        <PositionDescription />
      </div>
    </div>
  ); 
};

export default CurrentJobs;

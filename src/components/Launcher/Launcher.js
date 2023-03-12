import React from "react";
import "./Launcher.css";

const Launcher = () => {
  return (
    <div className="launcher">
      <div className="launcher-details">
        <p className="text-title">Card title</p>
        <p className="text-body">Here are the details of the card</p>
      </div>
      <button className="launcher-button">More info</button>
    </div>
  );
};

export default Launcher;

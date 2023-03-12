import React, { Fragment } from "react";
import "./Launch.css";
import { useState } from "react";

const Launch = ({ launchers, onClick }) => {
  return (
    <Fragment>
      {launchers.map((launcher) => (
        <div className="launcher" key={launcher.id}>
          <div className="launcher-details">
            <p className="text-title">{launcher.name}</p>
            <p className="text-body">
              Mission: {launcher?.mission?.name || "Mission does not exist"}
            </p>
            <p className="text-body">
              Date:
              {" " + launcher.window_start}
            </p>
          </div>
          <button className="launcher-button" onClick={onClick}>
            More info
          </button>
        </div>
      ))}
    </Fragment>
  );
};

export default Launch;

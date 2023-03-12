import React, { Fragment } from "react";
import "./Launch.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Launch = ({ launches, onClick }) => {
  return (
    <Fragment>
      {launches.map((launch) => (
        <div className="launcher" key={launch.id}>
          <div className="launcher-details">
            <p className="text-title">{launch.name}</p>
            <p className="text-body">
              Mission: {launch?.mission?.name || "Mission does not exist"}
            </p>
            <p className="text-body">
              Date:
              {" " + launch.window_start}
            </p>
          </div>
          <Link to={`/${launch.id}`} className="launcher-button">
            More info
          </Link>
        </div>
      ))}
    </Fragment>
  );
};

export default Launch;

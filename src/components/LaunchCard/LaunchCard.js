import React, { Fragment } from "react";
import "./LaunchCard.css";
import { Link } from "react-router-dom";

const LaunchCard = ({ launches }) => {
  console.log(launches);
  return (
    <Fragment>
      {launches &&
        launches.map((launch) => (
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

export default LaunchCard;

import React, { Fragment } from "react";
import "./Launcher.css";

const Launcher = ({ launchers }) => {
  return (
    <Fragment>
      {launchers.map((launcher) => (
        <div className="launcher" key={launcher.id}>
          <div className="launcher-details">
            <p className="text-title">{launcher.name}</p>
            <p className="text-body">Here are the details of the card</p>
          </div>
          <button className="launcher-button">More info</button>
        </div>
      ))}
    </Fragment>
  );
};

export default Launcher;
{
  /*
{launchers.map((l, i) => l[i].name)}
 */
}

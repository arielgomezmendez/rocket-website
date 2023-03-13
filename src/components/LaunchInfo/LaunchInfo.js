import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./LaunchInfo.css";
import "./mobile.css";
import rocket from "../../assets/rocket.png";

const LaunchInfo = () => {
  const [launch, setLaunch] = useState(null);
  const params = useParams(); //obtain the launch id from the url
  console.log(params);

  useEffect(() => {
    const obtainLaunchers = async () => {
      let response = await fetch(
        `https://spacelaunchnow.me/api/3.3.0/launch/upcoming/${params.id}`
      );

      let data = await response.json();
      setLaunch(data);
    };
    obtainLaunchers();
  }, []);

  return (
    <div className="launchInfo-container">
      {launch ? (
        <div className="info">
          <h1 className="title">{launch?.name || "Does not exist"}</h1>
          <p className="text">
            Date: {launch?.window_start || "Does not exist"}
          </p>
          <p className="text">
            Mission name: {launch?.mission?.name || "Does not exist"}{" "}
          </p>
          <p className="text">
            Mission description:{" "}
            {launch?.mission?.description || "Does not exist"}
          </p>
          <p className="text">
            Rocket name:{" "}
            {launch?.rocket?.configuration?.name || "Does not exist"}
          </p>
          <p className="text">
            Pad name: {launch?.pad?.name || "Does not exist"}
          </p>

          <Link to="/" className="return">
            Return
          </Link>
        </div>
      ) : (
        "Loading..."
      )}

      <img className="rocket-img" src={rocket}></img>
    </div>
  );
};

export default LaunchInfo;

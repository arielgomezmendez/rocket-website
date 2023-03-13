import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
    <div>
      {launch ? (
        <div>
          <h1>{launch?.name || "Does not exist"}</h1>
          <p>Date: {launch?.window_start || "Does not exist"}</p>
          <p>Mission name: {launch?.mission?.name || "Does not exist"} </p>
          <p>
            Mission description:{" "}
            {launch?.mission?.description || "Does not exist"}
          </p>
          <p>
            Rocket name:{" "}
            {launch?.rocket?.configuration?.name || "Does not exist"}
          </p>
          <p>
            Launch Service Provider:{" "}
            {launch?.rocket?.configuration?.launch_service_provider ||
              "Does not exist"}
          </p>
          {/*
          launch_service_provider
          >
          <p>{launch.mission.name}</p>
          <p>{launch.mission.description}</p> */}
        </div>
      ) : (
        "Cargando..."
      )}
      <Link to="/">return</Link>
    </div>
  );
};

export default LaunchInfo;

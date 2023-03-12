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
      console.log(data);
      console.log(launch);
    };
    obtainLaunchers();
  }, []);

  return (
    <div>
      {launch ? <h1>{launch.name} </h1> : "Cargando..."}
      <Link to="/">return</Link>
    </div>
  );
};

export default LaunchInfo;

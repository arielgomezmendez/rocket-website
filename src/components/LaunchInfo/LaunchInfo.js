import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./LaunchInfo.css";
import "./mobile.css";
import rocket from "../../assets/rocket.png";
import Loader from "../Loader/Loader";
//redux toolkit
import { useDispatch, useSelector } from "react-redux";
import { setLaunches } from "../../redux/slice";

const LaunchInfo = () => {
  const params = useParams(); //obtain the launch id from the url

  //dispatach the reducer
  const dispatch = useDispatch();
  const launch = useSelector((state) => state.launchesReducer.launches);
  console.log(launch);

  useEffect(() => {
    const obtainLaunchers = async () => {
      let response = await fetch(
        `https://spacelaunchnow.me/api/3.3.0/launch/upcoming/${params.id}`
      );

      let data = await response.json();
      console.log("data " + data);
      dispatch(setLaunches(data));
    };
    obtainLaunchers();
  }, [dispatch]);

  return (
    <div className="launchInfo-button-container">
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
          </div>
        ) : (
          <Loader />
        )}
        <Link to="/" className="return">
          Return
        </Link>
      </div>
      <img className="rocket-img" src={rocket} alt={"Rocket"}></img>
    </div>
  );
};

export default LaunchInfo;

import "./App.css";
import LaunchInfo from "./components/LaunchInfo/LaunchInfo";
import Launches from "./components/Launches/Launches";
import { useState } from "react";

function App() {
  const [showLaunchInfo, setShowLaunchInfo] = useState(false);
  const onClick = () => {
    console.log("Aqui");
    setShowLaunchInfo(!showLaunchInfo);
  };
  return (
    <div className="App">
      {onClick ? (
        <Launches />
      ) : (
        <LaunchInfo
          showLaunchInfo={showLaunchInfo}
          setShowLaunchInfo={setShowLaunchInfo}
        />
      )}
    </div>
  );
}

export default App;

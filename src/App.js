import "./App.css";
import LaunchInfo from "./components/LaunchInfo/LaunchInfo";
import Launches from "./components/Launches/Launches";
import { useState } from "react";

function App() {
  const [showLaunchInfo, setShowLaunchInfo] = useState(false);

  const onClick = () => {
    setShowLaunchInfo(!showLaunchInfo);
  };

  return (
    <div className="App">
      {!showLaunchInfo ? (
        <Launches onClick={onClick} />
      ) : (
        <LaunchInfo onClick={onClick} />
      )}
    </div>
  );
}

export default App;

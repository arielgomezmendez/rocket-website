import "./App.css";
import LaunchInfo from "./components/LaunchInfo/LauncherInfo";
import Launches from "./components/Launches/Launches";

function App() {
  return (
    <div className="App">
      <Launches />
      <LaunchInfo />
    </div>
  );
}

export default App;

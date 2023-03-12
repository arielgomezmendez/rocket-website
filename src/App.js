import "./App.css";
import LaunchInfo from "./components/LaunchInfo/LaunchInfo";
import Launches from "./components/Launches/Launches";

function App(onClick) {
  return <div className="App">{onClick ? <Launches /> : <LaunchInfo />}</div>;
}

export default App;

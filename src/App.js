import "./App.css";
import "./mobile.css";
import LaunchInfo from "./components/LaunchInfo/LaunchInfo";
import Launches from "./components/Launches/Launches";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Launches />} />
        <Route path="/:id" element={<LaunchInfo />} />
      </Routes>
      {/*!showLaunchInfo ? (
        <Launches onClick={onClick} />
      ) : (
        <LaunchInfo onClick={onClick} />
      )*/}
    </div>
  );
}

export default App;

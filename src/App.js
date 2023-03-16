import "./App.css";
import "./mobile.css";
import LaunchInfo from "./components/LaunchInfo/LaunchInfo";
import Launches from "./components/Launches/Launches";
//React-router
import { Route, Routes } from "react-router";
//Redux-toolkit
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Launches />} />
          <Route path="/:id" element={<LaunchInfo />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

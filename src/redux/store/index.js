import { configureStore } from "@reduxjs/toolkit";
import setLaunches from "../slice/index";

const store = configureStore({
  reducer: {
    launchesReducer: setLaunches,
  },
});

export default store;

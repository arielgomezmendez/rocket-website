import { configureStore } from "@reduxjs/toolkit";
import setLaunches from "../slice/index";

const store = configureStore({
  reducer: {
    launchers: setLaunches,
  },
});

export default store;

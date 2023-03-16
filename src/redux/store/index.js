import { configureStore } from "@reduxjs/toolkit";
import launchersReducer from "./reducers/launchersReducer";

const store = configureStore({
  reducer: {
    launchers: launchersReducer,
  },
});

export default store;

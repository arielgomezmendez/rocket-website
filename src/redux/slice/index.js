import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  launches: null,
};

export const launchersSlice = createSlice({
  name: "launchesReducer",
  initialState,
  reducers: {
    setLaunches: (state, action) => {
      state.launches = action.payload;
    },
  },
});

export const { setLaunches } = launchersSlice.actions;
export default launchersSlice.reducer;

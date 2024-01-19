import { createSlice } from "@reduxjs/toolkit";

export const FunctionalSlice = createSlice({
  name: "functionality",
  initialState: {
    sideBarToggle: true,
    greetings: null,
  },
  reducers: {
    setSideBarToggle: (state, action) => {
      state.sideBarToggle = action.payload;
      return state;
    },
    setGreetings: (state, action) => {
      state.greetings = action.payload;
      return state;
    }
  },
 
});

export const {
  setSideBarToggle,
  setGreetings,
} = FunctionalSlice.actions;


export default FunctionalSlice.reducer;

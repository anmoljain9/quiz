import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  runs: [],
};

const scoresSlice = createSlice({
  name: "scores",
  initialState,
  reducers: {
    addScore: (state, action) => {
      state.runs.push(action.payload);
    },
  },
});

export const { addScore } = scoresSlice.actions;
export default scoresSlice.reducer;

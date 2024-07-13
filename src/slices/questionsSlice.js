import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, question: "Can you code in Ruby?" },
  { id: 2, question: "Can you code in JavaScript?" },
  { id: 3, question: "Can you code in Swift?" },
  { id: 4, question: "Can you code in Java?" },
  { id: 5, question: "Can you code in C#?" },
];

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
});

export const {} = questionsSlice.actions;
export default questionsSlice.reducer;

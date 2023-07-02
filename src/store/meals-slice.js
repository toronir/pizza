import { createSlice } from "@reduxjs/toolkit";

export const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    value: 0,
  },
  reducers: {},
});

//export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default mealsSlice.reducer;

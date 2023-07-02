import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: 0,
  },
  reducers: {},
});

//export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default authSlice.reducer;

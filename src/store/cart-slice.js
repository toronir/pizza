import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
  },
  reducers: {},
});

//export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default cartSlice.reducer;

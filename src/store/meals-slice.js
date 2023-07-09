import { createSlice } from "@reduxjs/toolkit";

export const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    products: [],
  },
  reducers: {
    setMealsState(state, actions) {
      state.products = actions.payload;
    },
  },
});

export const { setMealsState } = mealsSlice.actions;

export default mealsSlice.reducer;

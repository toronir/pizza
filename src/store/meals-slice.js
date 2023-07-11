import { createSlice } from '@reduxjs/toolkit';

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    products: [],
  },
  reducers: {
    setMealsState(state, actions) {
      // eslint-disable-next-line no-param-reassign
      state.products = actions.payload;
    },
  },
});

export const { setMealsState } = mealsSlice.actions;

export default mealsSlice.reducer;

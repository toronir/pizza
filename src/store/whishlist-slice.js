import { createSlice } from '@reduxjs/toolkit';

const whishlistSlice = createSlice({
  name: 'whishlist',
  initialState: {
    products: [],
  },
  reducers: {
    setWhishlistState(state, actions) {
      state.products = actions.payload.products;
    },
    addProduct(state, actions) {
      console.log(actions.payload);
    },
    removeProduct(state, actions) {
      console.log(actions.payload);
    },
  },
});

export default whishlistSlice.reducer;

export const { setWhishlistState, addProduct, removeProduct } = whishlistSlice.actions;

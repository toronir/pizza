import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { getWhishlistData, sendWhishlistData } from './whislist-actions';

const whishlistSlice = createSlice({
  name: 'whishlist',
  initialState: {
    products: [],
    isLoading: false,
  },
  reducers: {
    setWhishlistState(state, actions) {
      state.products = actions.payload.products;
    },
    addProduct(state, actions) {
      const { id, name, category, description, price } = actions.payload.item;
      const keyId = `${category}_${id}`;
      state.products.push({ item: { id, keyId, name, category, price, description } });
    },
    removeProduct(state, actions) {
      const { id, category } = actions.payload;
      state.products = state.products.filter(
        (product) => product.item.keyId !== `${category}_${id}`,
      );
    },
    clearWhishlist(state) {
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWhishlistData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getWhishlistData.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.products = actions.payload.products;
    });
    builder.addCase(getWhishlistData.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(sendWhishlistData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sendWhishlistData.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(sendWhishlistData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default whishlistSlice.reducer;

export const { setWhishlistState, addProduct, removeProduct, clearWhishlist } =
  whishlistSlice.actions;

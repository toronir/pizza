import { createSlice } from '@reduxjs/toolkit';

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    detailModal: {
      isModalOpen: false,
      idItemDetail: '',
    },
    products: [],
  },
  reducers: {
    setMealsState(state, actions) {
      // eslint-disable-next-line no-param-reassign
      state.products = actions.payload;
    },
    setModalOpen(state, actions) {
      state.detailModal.isModalOpen = true;
      state.detailModal.idItemDetail = actions.payload;
    },
    setModalClose(state) {
      state.detailModal.isModalOpen = false;
      state.detailModal.idItemDetail = '';
    },
  },
});

export const { setMealsState, setModalOpen, setModalClose } = mealsSlice.actions;

export default mealsSlice.reducer;

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
      state.products = actions.payload;
    },
    setToggleModal(state, actions) {
      state.detailModal.isModalOpen = !state.detailModal.isModalOpen;
      state.detailModal.idItemDetail = actions.payload || '';
    },
  },
});

export const { setMealsState, setModalOpen, setModalClose, setToggleModal } = mealsSlice.actions;

export default mealsSlice.reducer;

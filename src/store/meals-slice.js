import { createSlice } from '@reduxjs/toolkit';

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    category: 'pizza',
    tag: null,
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
    setCategoryState(state, actions) {
      state.category = actions.payload;
      state.tag = null;
    },
    setTagState(state, actions) {
      state.tag = actions.payload;
    },
    setToggleModal(state, actions) {
      state.detailModal.isModalOpen = !state.detailModal.isModalOpen;
      state.detailModal.idItemDetail = actions.payload || '';
    },
  },
});

export const {
  setTagState,
  setCategoryState,
  setMealsState,
  setModalOpen,
  setModalClose,
  setToggleModal,
} = mealsSlice.actions;

export default mealsSlice.reducer;

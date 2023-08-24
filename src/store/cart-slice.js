import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    addToCartModal: {
      isModalOpen: false,
      idAddedItem: null,
    },
  },
  reducers: {
    setCartState(state, actions) {
      state.items = actions.payload.item;
      state.totalQuantity = actions.payload.totalQuantity;
      state.totalPrice = actions.payload.totalPrice;
    },
    addItemCart(state, actions) {
      const addedItem = actions.payload;
      const extraItem = state.items.find((item) => item.itemId === addedItem.id);
      state.totalQuantity += addedItem.quantity;
      state.totalPrice += addedItem.quantity * addedItem.price;

      if (!extraItem) {
        state.items.push({
          itemId: addedItem.id,
          name: addedItem.name,
          price: addedItem.price,
          quantity: addedItem.quantity,
        });
      } else {
        extraItem.quantity += addedItem.quantity;
      }
    },
    removeItemFromCart(state, actions) {
      const id = actions.payload;
      const existingItem = state.items.find((item) => item.itemId === id);
      state.totalQuantity -= 1;
      state.totalPrice -= existingItem.price;

      if (existingItem.quantity <= 1) {
        state.items = state.items.filter((item) => item.itemId !== id);
      } else {
        existingItem.quantity -= 1;
      }
    },
    removeTypeItems(state, actions) {
      const { id } = actions.payload;
      const existingItem = state.items.find((item) => item.itemId === id);
      if (existingItem) {
        const itemTotalPrice = existingItem.quantity * existingItem.price;
        state.totalPrice -= itemTotalPrice;
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter((item) => item.itemId !== id);
      }
    },
    toogleModalVisibility(state, actions) {
      state.addToCartModal.isModalOpen = !state.addToCartModal.isModalOpen;
      state.addToCartModal.idAddedItem = actions.payload || '';
    },
  },
});

export const {
  addItemCart,
  removeItemFromCart,
  setCartState,
  removeTypeItems,
  toogleModalVisibility,
} = cartSlice.actions;

export default cartSlice.reducer;

/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    isChange: false,
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
      state.isChange = true;
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
      state.isChange = true;
      if (existingItem.quantity <= 1) {
        state.items = state.items.filter((item) => item.itemId !== id);
      } else {
        existingItem.quantity -= 1;
      }
    },
  },
});
export const sendCartData = (cart) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        'https://react-b3fdf-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
            totalPrice: cart.totalPrice > 0.01 ? cart.totalPrice : 0,
          }),
        },
      );
      if (!response.ok) {
        throw new Error('Fail');
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};
export const { addItemCart, removeItemFromCart, setCartState } = cartSlice.actions;

export default cartSlice.reducer;

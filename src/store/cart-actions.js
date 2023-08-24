import { createAsyncThunk } from '@reduxjs/toolkit';
import { setCartState } from './cart-slice';
import BASE_URL from '../variables/variables';

export const getCartData = createAsyncThunk(
  'cart/getCartData',
  async (_, { getState, dispatch }) => {
    const { user } = getState().auth;

    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}/cart.json`);
      const responseData = await response.json();

      if (!responseData) return;

      const userId = user ? user.uid : 'default';

      const buyProducts = responseData[userId]; // tutaj jakiś default dla usera np. z local storage

      const fetchCart = {
        item: [],
        totalPrice: 0,
        totalQuantity: 0,
      };

      if (!buyProducts) return;

      if (buyProducts.items) buyProducts.items.forEach((product) => fetchCart.item.push(product));
      fetchCart.totalPrice = buyProducts.totalPrice;
      fetchCart.totalQuantity = buyProducts.totalQuantity;

      dispatch(setCartState(fetchCart));
    };
    fetchData();
  },
);

export const sendCartData = createAsyncThunk('cart/setCartData', async (_, { getState }) => {
  const { user } = getState().auth;
  const { items, totalQuantity, totalPrice } = getState().cart;
  const userId = user ? user.uid : 'default';
  const totalPriceFormatted = totalPrice.toFixed(2);

  const newCart =
    items.length > 0
      ? {
          [userId]: {
            items,
            totalQuantity,
            totalPrice: totalPriceFormatted > 0.01 ? totalPriceFormatted : 0,
          },
        }
      : { [userId]: {} };

  const sendRequest = async () => {
    await fetch(`${BASE_URL}/cart.json`, {
      method: 'PATCH',
      body: JSON.stringify(newCart),
    });
  };

  await sendRequest();
});

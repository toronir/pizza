import { createAsyncThunk } from '@reduxjs/toolkit';
import { setCartState } from './cart-slice';
import BASE_URL from '../variables/variables';

export const getCartData = createAsyncThunk(
  'cart/getCartData',
  async (_, { getState, dispatch }) => {
    const { user, token } = getState().auth;

    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}/cart.json`);
      const responseData = await response.json();

      if (!responseData) return;

      const userId = user ? user.uid : token;
      const buyProducts = responseData[userId];

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
    await fetchData();
  },
);

export const sendCartData = createAsyncThunk('cart/setCartData', async (_, { getState }) => {
  const { user, token } = getState().auth;
  const { items, totalQuantity, totalPrice } = getState().cart;
  const userId = user ? user.uid : token;

  const totalPriceFormatted = +totalPrice.toFixed(2);

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

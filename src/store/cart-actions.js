import { createAsyncThunk } from '@reduxjs/toolkit';
import { setCartState } from './cart-slice';
import BASE_URL from '../variables/variables';

export const getCartData = createAsyncThunk(
  'cart/getCartData',
  async (_, { getState, dispatch }) => {
    const { user } = getState().auth;

    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}/cart.json`);
      if (!response.ok) {
        throw new Error('Error');
      }
      const responseData = await response.json();
      const fetchCart = {
        item: [],
        totalPrice: 0,
        totalQuantity: 0,
      };
      // eslint-disable-next-line no-restricted-syntax
      for (const key in responseData.items) {
        if (Object.hasOwn(responseData.items, key)) {
          fetchCart.item.push({
            itemId: key,
            name: responseData.items[key].name,
            description: responseData.items[key].description,
            price: responseData.items[key].price,
            quantity: responseData.items[key].quantity,
          });
        }
      }
      fetchCart.totalPrice = responseData.totalPrice;
      fetchCart.totalQuantity = responseData.totalQuantity;
      dispatch(setCartState(fetchCart));
    };
    fetchData();
  },
);

export const sendCartData = createAsyncThunk(
  'whishlist/setWhishlistData',
  async (_, { getState }) => {
    const { user } = getState().auth;
    const { items, totalQuantity, totalPrice } = getState().cart;
    const sendRequest = async () => {
      const response = await fetch(`${BASE_URL}/cart.json`, {
        method: 'PUT',
        body: JSON.stringify({
          items,
          totalQuantity,
          totalPrice: totalPrice > 0.01 ? totalPrice : 0,
        }),
      });
      if (!response.ok) {
        throw new Error('Fail');
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  },
);

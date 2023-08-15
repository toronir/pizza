import { createAsyncThunk } from '@reduxjs/toolkit';
import BASE_URL from '../variables/variables';

const userDataURL = `${BASE_URL}/users.json`;

export const getWhishlistData = createAsyncThunk(
  'whishlist/getWhishlistData',
  async (_, { getState }) => {
    const fetchWhishlist = {
      products: [],
    };
    const { user } = getState().auth;

    if (user) {
      const getWhishlist = await fetch(userDataURL);
      const responseWhishlist = await getWhishlist.json();

      fetchWhishlist.products.push(...responseWhishlist[user.uid]);
    }
    return fetchWhishlist;
  },
);

export const sendWhishlistData = createAsyncThunk(
  'whishlist/setWhishlistData',
  async (whishlist, { getState }) => {
    const { user } = getState().auth;
    if (!user) return;

    await fetch(userDataURL, {
      method: 'PATCH',
      body: JSON.stringify({
        [user.uid]: [...whishlist],
      }),
    });
  },
);

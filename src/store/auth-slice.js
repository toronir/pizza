import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    addUserToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setCurrentUser, addUserToken } = authSlice.actions;

export default authSlice.reducer;

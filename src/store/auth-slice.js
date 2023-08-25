import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    addUserToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { login, logout, addUserToken } = authSlice.actions;

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;

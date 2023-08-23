import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/mainTheme';
import router from './router/router';

import { getWhishlistData } from './store/whislist-actions';
import { getMealsData } from './store/meals-actions';
import { getCartData } from './store/cart-actions';

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const userId = user ? user.uid : null;
  const mealsCategory = useSelector((state) => state.meals.category);
  const mealsTag = useSelector((state) => state.meals.tag);
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getWhishlistData());
        dispatch(getMealsData(mealsCategory, mealsTag));
        dispatch(getCartData());
      } catch (error) {
        throw new Error('Something went wrong...');
      }
    };
    fetchData();
  }, [userId, dispatch, mealsCategory, mealsTag]);

  return (
    <React.StrictMode>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;

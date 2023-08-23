import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/mainTheme';

import RootLayout from './Pages/RootLayout';
import ErrorPage from './Pages/ErrorPage';
import HomePage from './Pages/HomePage';
import ListingPage from './Pages/ListingPage';
import AuthenticationPage from './Pages/AuthenticationPage';
import WhishList from './components/WhishList/WhishList';
import UserProfile from './components/UserProfile/UserProfile';

import { getWhishlistData } from './store/whislist-actions';
import { sendCartData } from './store/cart-slice';
import { getMealsData } from './store/meals-actions';
import getCartData from './store/cart-actions';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'authentication', element: <AuthenticationPage /> },
      {
        path: 'my-account',
        element: <UserProfile />,
      },
      {
        path: `category`,
        element: <ListingPage />,
      },
      { path: '/my-account/whishlist', element: <WhishList /> },
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const userId = user ? user.uid : null;
  const mealsCategory = useSelector((state) => state.meals.category);
  const mealsTag = useSelector((state) => state.meals.tag);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([dispatch(getWhishlistData())]);
        dispatch(getMealsData(mealsCategory, mealsTag));
        dispatch(getCartData());
      } catch (error) {
        throw new Error('Something went wrong...');
      }
    };
    fetchData();
  }, [userId, dispatch, mealsCategory, mealsTag]);

  useEffect(() => {
    if (cart.isChange) dispatch(sendCartData(cart));
  }, [cart, dispatch]);

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

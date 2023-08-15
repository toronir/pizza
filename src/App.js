import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/mainTheme';

import RootLayout from './Pages/RootLayout';
import ErrorPage from './Pages/ErrorPage';
import HomePage from './Pages/HomePage';
import AuthenticationPage from './Pages/AuthenticationPage';
import WhishList from './components/WhishList/WhishList';
import UserProfile from './components/UserProfile/UserProfile';

import { sendWhishlistData, getWhishlistData } from './store/whislist-actions';
import { sendCartData } from './store/cart-slice';
import getMealsData from './store/meals-actions';
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
      { path: '/my-account/whishlist', element: <WhishList /> },
    ],
  },
]);

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const userId = user ? user.uid : null;
  const { products, isChanged } = useSelector((state) => state.whishlist);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([dispatch(getWhishlistData())]);
        dispatch(getMealsData());
        dispatch(getCartData());
      } catch (error) {
        throw new Error('Something went wrong...');
      }
    };
    fetchData();
  }, [userId, dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.isChange) dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  useEffect(() => {
    if (isChanged) dispatch(sendWhishlistData(products));
  }, [products, dispatch]);

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

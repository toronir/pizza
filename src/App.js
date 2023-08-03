import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import RootLayout from './Pages/RootLayout';
import ErrorPage from './Pages/ErrorPage';
import HomePage from './Pages/HomePage';
import MyAccountPage from './Pages/MyAccountPage';
import AuthenticationPage from './Pages/AuthenticationPage';
import WhishList from './components/WhishList/WhishList';
import getMealsData from './store/meals-actions';
import { sendCartData } from './store/cart-slice';
import getCartData from './store/cart-actions';
import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/mainTheme';
import UserProfile from './components/UserProfile/UserProfile';

let isInitial = true;
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
        element: <MyAccountPage />,
      },
      { path: '/my-account/whishlist', element: <WhishList /> },
      { path: '/my-account/my-data', element: <UserProfile /> },
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getMealsData());
    dispatch(getCartData());
  }, [dispatch]);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.isChange) {
      dispatch(sendCartData(cart));
    }
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

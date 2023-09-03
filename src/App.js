import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './firebase-config';

import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/mainTheme';
import router from './router/router';
import Detail from './components/Detail/Detail';
import { getWhishlistData } from './store/whislist-actions';
import { getMealsData } from './store/meals-actions';
import { getCartData } from './store/cart-actions';
import { setCookie, getCookie } from './utils/cookie';
import { addUserToken, setCurrentUser } from './store/auth-slice';
import createdToken from './utils/token';

const App = () => {
  const dispatch = useDispatch();
  const detailModal = useSelector((state) => state.meals.detailModal);
  const { user, token } = useSelector((state) => state.auth);
  const mealsCategory = useSelector((state) => state.meals.category);
  const mealsTag = useSelector((state) => state.meals.tag);
  const getCookieToken = getCookie({ name: 'uidapp' });
  const cookieValue = getCookieToken || createdToken;

  useEffect(() => {
    if (!token && !getCookieToken)
      setCookie({ name: 'uidapp', value: cookieValue, expiresDays: 7 });

    const fetchData = async () => {
      try {
        dispatch(addUserToken(cookieValue));
        dispatch(getWhishlistData());
        dispatch(getMealsData(mealsCategory, mealsTag));
        dispatch(getCartData());
      } catch (error) {
        throw new Error('Something went wrong...');
      }
    };
    fetchData();
  }, [user, token, dispatch, mealsCategory, mealsTag]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      const userData = userAuth ? { email: userAuth.email, uid: userAuth.uid } : null;
      dispatch(setCurrentUser(userData));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <React.StrictMode>
      {detailModal.isModalOpen && <Detail />}
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;

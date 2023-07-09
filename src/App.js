import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import MyAccountPage from "./Pages/MyAccountPage";
import AuthenticationPage from "./Pages/AuthenticationPage";
import { getMealsData } from "./store/meals-actions";
import { useDispatch, useSelector } from "react-redux";
import { sendCartData } from "./store/cart-slice";
import { getCartData } from "./store/cart-actions";

let isInitial = true;
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "authentication", element: <AuthenticationPage /> },
      { path: "my-account", element: <MyAccountPage /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
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
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;

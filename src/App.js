import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage"; 
import MyAccountPage from "./Pages/MyAccountPage"; 
import AuthenticationPage from "./Pages/AuthenticationPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "authentication", element: <AuthenticationPage /> },
      { path: "my-account", element: <MyAccountPage /> },
    ],
}
]);

function App() {
 return(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 )
}

export default App;

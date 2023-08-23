import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../Pages/RootLayout';
import ErrorPage from '../Pages/ErrorPage';
import HomePage from '../Pages/HomePage';
import ListingPage from '../Pages/ListingPage';
import AuthenticationPage from '../Pages/AuthenticationPage';
import WhishList from '../components/WhishList/WhishList';
import UserProfile from '../components/UserProfile/UserProfile';

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

export default router;

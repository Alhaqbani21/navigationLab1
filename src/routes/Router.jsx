import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import ErrorPage from '../pages/ErrorPage';
import Info from '../pages/Info';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  { path: '/login', element: <Login /> },
  { path: '/info', element: <Info /> },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;

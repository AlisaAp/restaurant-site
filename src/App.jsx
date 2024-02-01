import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CustomTheme from './utils/theme';
import DefaultTemplate from './templates/DefaultTemplate';
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import OrderPage from './pages/OrderPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultTemplate />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'menu/:category',
        element: <MenuPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'order',
        element: <OrderPage />,
      },
    ],
  },
]);
function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

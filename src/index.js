import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import About from './About';
import Cart from './Cart';
import Contact from './Contact';
import Home from './Home';
import Sidebar from './Sidebar';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ErroePage from './ErroePage';
import Head from './Head';
import Foot from './Foot';
import App from './App';
const AppLayout = () => {
  return (
    <div>
      <Head />
      <Outlet />
      <Foot />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErroePage />,
    children: [
      {
        path: '/Cart',
        element: <Cart />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },

      {
        path: '/Sidebar',
        element: <Sidebar />,
      },

      {
        path: '/About',
        element: <About />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<RouterProvider router={appRouter} />);

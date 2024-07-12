import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Home } from './pages/Home';
import { Tasks } from './pages/Task';
import { Projects } from './pages/Projects';
import { DashboardLayout } from './components/DashboardLayout.jsx';
import { Login } from './pages/Login';
import {Register} from './components/Register.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <DashboardLayout>
        <Home />
      </DashboardLayout>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/tasks',
    element: (
      <DashboardLayout>
        <Tasks />
      </DashboardLayout>
    ),
  },
  {
    path: '/projects',
    element: (
      <DashboardLayout>
        <Projects />
      </DashboardLayout>
    ),
  },
  {
    path: '/register',
    element: (
      <DashboardLayout>
        <Register />
      </DashboardLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster position="top-right" />
    <RouterProvider router={router} />
  </React.StrictMode>
);

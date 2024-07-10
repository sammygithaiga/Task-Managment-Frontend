import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Home } from './pages/Home.jsx';
import { Tasks } from './pages/Task.jsx';
import { Projects } from './pages/Projects.jsx';
import { DashboardLayout } from './components/Layout.jsx';
import { Login } from './pages/Login.jsx';

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Toaster position="top-right" />
        <RouterProvider router={router} />
    </React.StrictMode>
);
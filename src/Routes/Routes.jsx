import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../components/Home/Home';

export const router = createBrowserRouter([
    {
        path:"/",
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('doctors.json'),
                Component: Home,
            }
        ]
    }
]);
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home';
import Login from './Component/Login';
import Register from './Component/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
       element: <Home></Home>,
      },
      {
        path: "/login",
       element: <Login></Login>,
      },
      {
        path: "/register",
       element: <Register></Register>,
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

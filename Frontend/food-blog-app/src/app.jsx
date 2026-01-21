import React from "react";  
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/pages/Home";
import 'app.css';        
const router = createBrowserRouter([
  {
    path: "/",  element: <Home />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

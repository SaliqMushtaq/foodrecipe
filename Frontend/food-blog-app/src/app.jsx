import React from "react";  
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/pages/Home";
import './app.css';   
import axios from "axios";
import MainNavigation from "./components/MainNavigation";

const getAllRecipes = async () => {
  try {
    const res = await axios.get('http://localhost:5000/recipe');
    return res.data || [];
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}

const router = createBrowserRouter([
  {
    path: "/",element: <MainNavigation />, children: [
      {
        path: "/",  element: <Home />,loader: getAllRecipes
      },
    ]
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

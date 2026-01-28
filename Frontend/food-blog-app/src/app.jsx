import React from "react";  
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/pages/Home";
import 'app.css';   
import axios from "axios";
const getAllRecipes = async () => {
  let getAllRecipes=[]
  await axios.get('http://localhost:5000/recipes').then((res)=>{
    getAllRecipes=res.data;
  })
  return getAllRecipes;
}

const router = createBrowserRouter([
  {
    path: "/",element: <mainNavigation />, children: [
      {
        path: "/",  element: <Home />,loader: getAllRecipes
      },
    ]
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

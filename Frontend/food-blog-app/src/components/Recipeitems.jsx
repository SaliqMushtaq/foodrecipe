import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Recipeitems() {
    const AllRecipes=useLoaderData();
    console.log(AllRecipes);
  return (
    <div>
      
    </div>
  )
}

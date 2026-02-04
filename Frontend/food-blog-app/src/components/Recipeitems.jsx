import React from 'react'
import { useLoaderData } from 'react-router-dom'
import foodImg from '../assets/foodRecipe.png'
import { FaStopwatch } from "react-icons/fa6";
export default function Recipeitems() {
    const AllRecipes = useLoaderData() || [];
    console.log(AllRecipes);
  return (

    <div>
      <div className='card-container'>
        {
          AllRecipes && AllRecipes.length > 0 ? (
            AllRecipes.map((recipe,index) => {
              return ( 
                  <div key={index} className='card'>
                    <img src={recipe.coverImage || foodImg} width="100%" height="200px" alt={recipe.title} />
                    <div className='card-body'>
                      <div className='title'>{recipe.title}</div>
                      <div className='icons'></div>
                    </div>
                    <div className='timer'>
                      <FaStopwatch/> {recipe.time || '30 min'}

                    </div>
                  </div>
              )
            })
          ) : (
            <p>No recipes found. Be the first to share one!</p>
          )
        }
      </div>
    </div>
      
  )
}

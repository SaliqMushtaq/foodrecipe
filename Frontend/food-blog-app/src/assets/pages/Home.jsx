import React from 'react'

export default function Home() {
  return (
    <div>
      <section className="home">
        <div className="left">
          <h1>Discover Delicious Recipes</h1>
          <h5>Explore a world of flavors with our collection of easy-to-follow recipes.</h5>
          <button>Add Recipe</button>
        </div>
        <div className="right">
          <div className="bg">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="199.5" stroke="#D4F6E8" strokeWidth="1"/>
              <circle cx="275.5" cy="125.5" r="74.5" fill="#D4F6E8"/>
              <circle cx="125.5" cy="275.5" r="74.5" fill="#D4F6E8"/>
            </svg>
          </div>
        </div>
      </section>
    </div>
  )
}

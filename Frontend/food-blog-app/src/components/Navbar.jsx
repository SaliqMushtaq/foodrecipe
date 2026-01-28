import React from "react";
export default function Navbar() {
    return (
       <header>
        <h2>Food blog</h2>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/MyRecipe">My Recipe</a></li>
            <li><a href="/about">favourite</a></li>
            <li>login</li>
        </ul>
       </header>
    )
}
import React from 'react'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <h3>Food Blog</h3>
        <p>&copy; 2024 Food Blog. All rights reserved.</p>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  )
}

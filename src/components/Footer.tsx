import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <h2>Footer</h2>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer

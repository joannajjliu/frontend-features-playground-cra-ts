import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <header>
      <h1>MyApp</h1>
      <nav>
        <Link to="/">Home</Link>| <Link to="teams/new">Teams</Link>|
        <Link to="roomba">Roomba</Link>
      </nav>
    </header>
  )
}

export default Navigation

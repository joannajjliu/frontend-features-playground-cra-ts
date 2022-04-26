import React from 'react'
import { Outlet } from 'react-router-dom'

function Teams() {
  return (
    <div>
      <h2>Teams</h2>
      <Outlet />
    </div>
  )
}

export default Teams

import React from 'react'
import { useParams } from 'react-router-dom'

function Team() {
  const params = useParams()
  return (
    <div>
      <h2>Team {params.teamId}</h2>
    </div>
  )
}

export default Team

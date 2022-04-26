import React from 'react'
import { useParams } from 'react-router-dom'

function Team() {
  const params = useParams()
  return (
    <div>
      <h3>Team {params.teamId}</h3>
    </div>
  )
}

export default Team

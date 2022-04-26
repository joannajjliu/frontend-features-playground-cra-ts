import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NewTeamForm() {
  const navigate = useNavigate()
  const placeholder = '111'
  const [teamId, setTeamId] = useState<string>('')

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setTeamId(e.target.value)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setTeamId('')
    navigate(`/teams/${teamId}`)
  }

  return (
    <div>
      <h2>NewTeamForm</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="teamId">Team ID</label>
        <input
          type="number"
          id="teamId"
          name="teamId"
          placeholder={placeholder}
          onChange={handleInputChange}
          value={teamId}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewTeamForm

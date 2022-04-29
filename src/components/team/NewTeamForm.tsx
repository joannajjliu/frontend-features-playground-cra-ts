import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import LanguageSwitcher from '@/components/LanguageSwitcher'
import styles from '@/components/team/NewTeamForm.module.scss'

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
      <h3>NewTeamForm</h3>
      <LanguageSwitcher />
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label htmlFor="teamId" className={styles.teamIdLabel}>
          Team ID
        </label>
        <input
          type="number"
          id="teamId"
          name="teamId"
          placeholder={placeholder}
          onChange={handleInputChange}
          value={teamId}
          className={styles.teamIdBtn}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewTeamForm

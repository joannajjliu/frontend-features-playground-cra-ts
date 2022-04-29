/* eslint-disable @typescript-eslint/no-extra-semi */
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import styles from './TypeAhead.module.scss'

const ALL_NAMES = [
  'Jean-Frederic',
  'Jonathan',
  'Jessica',
  'Dominic',
  'John-Jefferson',
  'Cathryn',
  'Kaelig',
  'Monica',
  'Cynthia',
  'Peter',
  'Justin',
]

function TypeAhead() {
  const [typedText, setTypedText] = useState('')
  const [selectedNames, setSelectedNames] = useState<Array<string>>([])

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    console.log('e.target.value', e.target.value)
    setTypedText(e.target.value)
    const typedValue: string = e.target.value as string
    const foundNames = ALL_NAMES.filter((str: string) =>
      str.toLowerCase().includes(typedValue.toLowerCase()),
    )
    setSelectedNames(foundNames)
  }

  const highlightWord = (word: string, searchQuery: string) => {
    const queryStartIdx = word.indexOf(searchQuery)
    const searchQueryLength = searchQuery.length
    const queryEndIdx = queryStartIdx + searchQueryLength
    console.log('highlightWord', [
      word.slice(0, queryStartIdx),
      word.slice(queryStartIdx, queryEndIdx),
      word.slice(queryEndIdx),
    ])
    return [
      word.slice(0, queryStartIdx),
      word.slice(queryStartIdx, queryEndIdx),
      word.slice(queryEndIdx),
    ]
  }

  return (
    <div className={styles.typeAheadContainer}>
      <div className={styles.dropdownContainer}>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Search name"
        />
        <li className={styles.dropdown}>
          {selectedNames.map((name: string) => {
            const foundSections = highlightWord(name, typedText)
            return <ul key={name}>{foundSections[1]}</ul>
          })}
        </li>
      </div>
      <button className={styles.searchButton}>Search</button>
    </div>
  )
}

export default TypeAhead

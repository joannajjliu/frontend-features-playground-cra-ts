import React, { useState } from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'

import Footer from '@/components/Footer'
import Home from '@/components/Home'
import Navigation from '@/components/Navigation'
import NotFound from '@/components/NotFound'
import Roomba from '@/components/Roomba'
import TypeAhead from '@/components/TypeAhead'
import LeagueStandings from '@/components/team/LeagueStandings'
import NewTeamForm from '@/components/team/NewTeamForm'
import Team from '@/components/team/Team'
import Teams from '@/components/team/Teams'

import styles from './App.module.scss'
import LanguageContext from './language-context'
import logo from './logo.svg'

function App() {
  const [language, setLanguage] = useState('en')
  const value = { language, setLanguage }

  return (
    <LanguageContext.Provider value={value}>
      <div className={styles['App']}>
        {/* <Navigation /> */}
        <main>
          <Routes>
            <Route path="/" element={<TypeAhead />}>
              <Route path="teams" element={<Teams />}>
                <Route path=":teamId" element={<Team />} />
                <Route path="new" element={<NewTeamForm />} />
                <Route index element={<LeagueStandings />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/roomba" element={<Roomba />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </LanguageContext.Provider>
  )
}

export default App

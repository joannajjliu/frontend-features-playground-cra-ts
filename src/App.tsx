import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'

import Footer from '@/components/Footer'
import Home from '@/components/Home'
import Navigation from '@/components/Navigation'
import NotFound from '@/components/NotFound'
import LeagueStandings from '@/components/team/LeagueStandings'
import NewTeamForm from '@/components/team/NewTeamForm'
import Team from '@/components/team/Team'
import Teams from '@/components/team/Teams'

import styles from './App.module.scss'
import logo from './logo.svg'

function App() {
  return (
    <div className={styles['App']}>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

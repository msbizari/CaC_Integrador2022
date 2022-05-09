import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/UserProfile'

function App() {

  return (
    <div>
      <Profile></Profile>
    <React.Fragment>
      <Navbar />
    </React.Fragment>
    </div>
  )
}

export default App
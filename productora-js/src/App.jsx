import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/UserProfile'
import Nosotros from './components/Nosotros'

function App() {

  return (
    <div>
      <Profile></Profile>
      <Nosotros></Nosotros> 
    <React.Fragment>
      <Navbar />
    </React.Fragment>
    </div>
  )
}

export default App
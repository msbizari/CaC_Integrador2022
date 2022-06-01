import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/UserProfile'
import Nosotros from './components/Nosotros'
import SearchPage from './components/SearchPage'

function App() {

  return (
    <div>
    <React.Fragment>
      {/* <Navbar /> */}
      <SearchPage />
    </React.Fragment>
    </div>
  )
}

export default App
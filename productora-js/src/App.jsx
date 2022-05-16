import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Profile from './components/UserProfile'
import Nosotros from './components/Nosotros'
import FormularioRegistro from './components/FormularioRegistro'
import Login from './components/Login'

function App() {

  return (
    <div>
    <React.Fragment>
      <Navbar />
      <Homepage></Homepage>
    </React.Fragment>
    </div>
  )
}

export default App
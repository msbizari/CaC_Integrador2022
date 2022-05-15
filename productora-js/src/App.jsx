import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/UserProfile'
import Nosotros from './components/Nosotros'
import FormularioRegistro from './components/FormularioRegistro'
import Login from './components/Login'

function App() {

  return (
    <div>
    <React.Fragment>
      <Navbar />
      <FormularioRegistro/>
    </React.Fragment>
    </div>
  )
}

export default App
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Profile from './components/UserProfile'
import Nosotros from './components/Nosotros'
import FormularioRegistro from './components/FormularioRegistro'
import Login from './components/Login'
import SearchPage from './components/SearchPage'

function App() {

  return (
    <div>
    <React.Fragment>
      <Navbar />
      <Homepage></Homepage>
      <Footer></Footer>
    </React.Fragment>
    </div>
  )
}

export default App
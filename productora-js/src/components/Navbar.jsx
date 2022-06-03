import React from 'react';
import Homepage from '../components/Homepage'
import Login from './Login'
import SearchPage from './SearchPage'
import Formulario from './FormularioRegistro'
import Nosotros from './Nosotros'
import { AiFillInstagram } from "react-icons/ai";
import {ImYoutube} from "react-icons/im";
import {FaFacebookSquare} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function openMenu(){
    const navBar__hamburger = document.querySelector(".navBar__hamburger");
    const navBar__menu = document.querySelector(".navBar__menu");
    navBar__hamburger.classList.toggle("active");
    navBar__menu.classList.toggle("active");
};

function Navbar(){
    //Hamburger menu for small devices
    
    return(
        <div>
            <Router>
                <nav className='navBar'>
                    <div>
                        <Link to="/"  id='navbarLogo'>
                            <div><img src="src/img/logoProductora.svg" alt=""/></div> 
                            <p>React #22014</p>
                        </Link>
                    </div>
                    <ul className="navBar__menu">
                        <li><Link to="/Buscar"><button id="btnSearch"><FaSearch style={ {fill: "#fafafa", fontSize:"1.5rem"} } /></button></Link></li>
                        <li><a href="https://www.instagram.com/" target='_blank'><AiFillInstagram style={ {fill: "#fafafa", fontSize:"1.5rem"} } /></a></li>
                        <li><a href="https://www.youtube.com/" target='_blank'><ImYoutube style={ {fill: "#fafafa", fontSize:"1.5rem"} } /></a></li>
                        <li><a href="https://www.facebook.com/" target='_blank'><FaFacebookSquare style={ {fill: "#fafafa", fontSize:"1.5rem"} } /></a></li>
                        <li><Link to="/IniciarSesion"><button className='btnVioletaRedondo'>Log In</button></Link></li>
                    </ul>
                    <div>
                        <div className="navBar__hamburger" onClick={openMenu}>
                            <span className="hamburger--bar"></span>
                            <span className="hamburger--bar"></span>
                            <span className="hamburger--bar"></span>
                        </div>         
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Homepage></Homepage>}>
                    </Route>
                    <Route path="/Nosotros" element={<Nosotros></Nosotros>}>
                    </Route>
                    <Route path="/Registro" element={<Formulario></Formulario>}>
                    </Route>
                    <Route path="/Buscar" element={<SearchPage />}>
                    </Route>
                    <Route path="/IniciarSesion" element={<Login />}>
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}
export default Navbar;
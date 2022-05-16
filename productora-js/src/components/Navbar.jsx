import React from 'react';
import Homepage from '../components/Homepage'
import Login from './Login'
import SearchPage from './SearchPage'

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

function Navbar(){
    return(
        <div>
            <Router>
                <nav>
                    <div>
                        <Link to="/"  id='navbarLogo'>
                            <div><img src="src/img/logoProductora.svg" alt=""/></div> 
                            <p>React #22014</p>
                        </Link>
                    </div>
                    <ul>
                        <li><Link to="/Buscar"><button id="btnSearch"><FaSearch style={ {fill: "#fafafa", fontSize:"1.5rem"} } /></button></Link></li>
                        <li><a href="https://www.instagram.com/"><AiFillInstagram style={ {fill: "#fafafa", fontSize:"1.5rem"} } /></a></li>
                        <li><a href="https://www.youtube.com/"><ImYoutube style={ {fill: "#fafafa", fontSize:"1.5rem"} } /></a></li>
                        <li><a href="https://www.facebook.com/"><FaFacebookSquare style={ {fill: "#fafafa", fontSize:"1.5rem"} } /></a></li>
                        <li><Link to="/IniciarSesion"><button className='btnVioletaRedondo'>Log In</button></Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Homepage></Homepage>}>
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
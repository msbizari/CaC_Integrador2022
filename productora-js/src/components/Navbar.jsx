import React from 'react';

import { AiFillInstagram } from "react-icons/ai";
import {ImYoutube} from "react-icons/im";
import {FaFacebookSquare} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";

function Navbar(){
    return(
        <div>
            <nav>
                <div>
                    <div><img src="src/img/logoProductora.svg" alt="" /></div> 
                    <p>React #22014</p>
                </div>
                <ul>
                    <li><button><FaSearch style={ {fill: "#fafafa", fontSize:"1.5rem"} } /></button></li>
                    <li><a><AiFillInstagram style={ {fill: "#fafafa", fontSize:"1.5rem"} } /></a></li>
                    <li><a><ImYoutube style={ {fill: "#fafafa", fontSize:"1.5rem"} } /></a></li>
                    <li><a><FaFacebookSquare style={ {fill: "#fafafa", fontSize:"1.5rem"} } /></a></li>
                    <li><button className='btnVioletaRedondo'>Log In</button></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;
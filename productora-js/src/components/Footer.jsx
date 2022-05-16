import React from 'react';

import { AiFillInstagram } from "react-icons/ai";
import {ImYoutube} from "react-icons/im";
import {FaFacebookSquare} from "react-icons/fa";

function Footer(){
    return(
        <div>
            <footer>
                <section>
                    <div>
                        <p>Grupo 4 - React #22014</p>
                    </div>
                    <ul>
                        <li>Seguinos</li>
                        <li><a><AiFillInstagram style={ {fill: "#fafafa", fontSize:"1.2rem"} } /></a></li>
                        <li><a><ImYoutube style={ {fill: "#fafafa", fontSize:"1.2rem"} } /></a></li>
                        <li><a><FaFacebookSquare style={ {fill: "#fafafa", fontSize:"1.2rem"} } /></a></li>
                    </ul>
                </section>                
                <section>
                    <ul>
                        <li><a>Inicio</a></li>
                        <li><a>Nosotros</a></li>
                        <li><a>Búsqueda</a></li>
                    </ul>
                </section>
            </footer>
        </div>
    )
}
export default Footer;
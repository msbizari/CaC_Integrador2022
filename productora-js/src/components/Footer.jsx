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
                        <li><a href="https://www.instagram.com/" target='_blank'><AiFillInstagram style={ {fill: "#fafafa", fontSize:"1.2rem"} } /></a></li>
                        <li><a href="https://www.youtube.com/" target='_blank'><ImYoutube style={ {fill: "#fafafa", fontSize:"1.2rem"} } /></a></li>
                        <li><a href="https://www.facebook.com/" target='_blank'><FaFacebookSquare style={ {fill: "#fafafa", fontSize:"1.2rem"} } /></a></li>
                    </ul>
                </section>                
                <section>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/Nosotros">Nosotros</a></li>
                        <li><a href="/Buscar">Búsqueda</a></li>
                    </ul>
                </section>
            </footer>
        </div>
    )
}
export default Footer;
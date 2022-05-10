import React from 'react';
import '../styles/userProfile.css';
import Navbar from './Navbar';
import { BiTrash } from "react-icons/bi";

export default function Nosotros() {
    return (
        <div>
            <Navbar></Navbar>
            <section className='container'>
                    <p className='encabezadoSize'>Nosotros</p>
                    <article> 
                        <p className='blanco'>Somos especialistas en producciones audiovisuales y storytelling. Trabajamos con los mejores productores para traerte cine de calidad. Traemos prestigio al cine Argentino.</p>
                    </article>
            </section>
        </div>
    )
}
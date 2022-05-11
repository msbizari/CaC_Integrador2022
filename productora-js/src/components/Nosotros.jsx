import React from 'react';
import '../styles/nosotros.css';
import Navbar from './Navbar';

export default function Nosotros() {
    return (
        <div>
            <Navbar></Navbar>
            <header className='container-fluid'>
                <div></div>
                <p className='encabezadoSize'>Nosotros</p>
                <p>Productora+</p>
                <p>Trayendo prestigio al cine Argentino desde 2017</p>
            </header>
            <main>
                <article className='container-fluid'> 
                    <section>
                        <p className='blanco'>Somos especialistas en producciones audiovisuales y storytelling. Trabajamos con los mejores productores para traerte cine de calidad. Traemos prestigio al cine Argentino.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor velit sit amet egestas convallis. Nunc posuere sed sem nec interdum. Cras interdum sodales leo non consectetur. Morbi suscipit dui porta, maximus metus id, efficitur mi. Suspendisse euismod accumsan purus, sollicitudin imperdiet enim vehicula eget. Etiam a purus pharetra, ultrices ligula nec, convallis metus. Cras varius scelerisque orci. In nec nibh urna. Sed tristique vitae sem varius consectetur. Donec malesuada efficitur elit eu viverra. Nulla tellus odio, lobortis non lectus non, placerat pharetra diam. In eleifend lorem non lectus iaculis rhoncus.</p>
                        <div><img src="src/img/working.jpg" alt="" /></div>
                    </section>
                </article>
            </main>
        </div>
    )
}
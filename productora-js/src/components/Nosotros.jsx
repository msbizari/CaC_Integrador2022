import React from 'react';
import '../styles/nosotros.css';

export default function Nosotros() {
    return (
        <div id='nosotros'>
            <header className='container-fluid'>
                <div></div>
                <p className='encabezadoSize'>Nosotros</p>
                <p className='subtitulo'>Productora+</p>
                <p className='subtitulo'>Trayendo prestigio al cine Argentino desde 2017</p>
            </header>
            <main>
                <article className='container-fluid'> 
                    <p className='subtitulo'>Sobre Productora+</p>
                    <section>
                        <p className='blanco'>Traemos prestigio al cine Argentino.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec, convallis metus. Cras varius scelerisque orci. In nec nibh urna. Sed tristique vitae sem varius consectetur. Donec malesuada efficitur elit eu viverra. Nulla tellus odio, lobortis non lectus non, placerat pharetra diam. In eleifend lorem non lectus iaculis rhoncus.</p>
                        <div><img src="src/img/working.jpg" alt="" /></div>
                    </section>
                    <p className='subtitulo'>Nuestra historia</p>
                    <section>
                        <p className='blanco'>Corría el año 2017 cuando, Dorotea, actual dueña y fundadora de Producta+, se juntó con sus hermanos a firmar Somos especialistas en producciones audiovisuales y storytelling. Trabajamos con los mejores productores para traerte cine de calidad. Traemos prestigio al cine Argentino.Lorem ipsum dolor sit amet, consectetur adipiscing elit. . In nec nibh urna. Sed tristique vitae sem varius consectetur. Donec malesuada efficitur elit eu viverra. Nulla tellus odio, lobortis non lectus non, placerat pharetra diam. Aliquam porttitor velit sit amet egestas convallis. Nunc posuere sed sem metus. Cras varius scelerisque orci. In nec nibh urna. Sed vitae sem varius consectetur. Donec malesuada efficitur elit eu viverra. Nulla tellus odio, lobortis non lectus non, placerat pharetra diam. In eleifend lorem non lectus iaculis rhoncus.</p>
                        <div><img src="src/img/recording.jpg" alt="" /></div>
                    </section>
                    <p className='subtitulo'>Quiénes somos</p>
                    <section>
                        <p className='blanco'>Trabajamos con los mejores productores para traerte cine de calidad. velit sit amet egestas convallis. dui porta, maximus metus id, efficitur mi. Suspendisse euismod accumsan purus, sollicitudin imperdiet enim vehicula eget. Etiam a purus pharetra, ultrices ligula nec, convallis metus. Cras varius scelerisque orci. In nec nibh urna. Sed tristique vitae sem varius consectetur. Donec malesuada efficitur elit eu viverra. Nulla tellus odio, lobortis non lectus non, placerat pharetra diam. In eleifend lorem non lectus iaculis rhoncus.</p>
                        <div><img src="src/img/nostrosMan.jpg" alt="" /></div>
                    </section>
                </article>
            </main>
        </div>
    )
}
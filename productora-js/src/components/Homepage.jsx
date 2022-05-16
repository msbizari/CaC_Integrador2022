import React from 'react';
import '../styles/homepage.css';

function Homepage(){
    return(
        <div>
            <section id='banner'>
                <div></div>
                <div>
                    <p className='encabezadoSize blanco'>Productora+</p>
                    <p className='encabezadoSize blanco'>Productores de cine</p>
                </div>
            </section>
            <section class='ctn_page'>
                <article>
                    <div>
                        <img src="src/img/logoProductora.svg" alt="logo de la productora" />
                    </div>
                    <div>
                        <p>Nosotros</p>
                        <p>Especialistas en producciones audiovisuales y storytelling. Trabajamos con los mejores productores para traerte cine de calidad. Traemos prestigio al cine Argentino.</p>
                        <p><a>Leé más sobre nosotros acá</a></p>
                    </div>
                </article>
                <article>
                    <div>
                        <p>Experiencia</p>
                    </div>
                    <div id='containerCards'>
                        
                    </div>
                </article>
                <article>
                    <div>
                        <p>Skills</p>
                    </div>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <p>Creatividad</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>Creatividad</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>Creatividad</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>Creatividad</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>Creatividad</p>
                        </div>
                    </div>
                </article>
                <article>
                    <div>
                        <p>Confían en nosotros</p>
                    </div>
                    <div>
                        
                    <div>
                            <img src="" alt="" />
                            <p>Creatividad</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>Creatividad</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>Creatividad</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>Creatividad</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>Creatividad</p>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}
export default Homepage;
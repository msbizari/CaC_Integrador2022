import React from 'react';
import { useState } from 'react';

export default function Profile() {
    let [userName, setName] = useState();
    let [userPic, setPic] = useState();
    let [userEmail, setEmail] = useState();

    const userNameSeleccionado = function(e){
        setName(e.target.id);
    };
    const userPicSeleccionado = function(e){
        setName(e.target.id);
    };
    const userEmailSeleccionado = function(e){
      setName(e.target.id);
    };
    return (
        <div className='container blanco'>
            <section className='col-sm-12 col-md-12 col-lg-6'>
                <img src="" alt="" />
                <p>Hola izquierda</p>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </section>
            <section className='col-sm-12 col-md-12 col-lg-6'>
                <p>Hola derecha</p>
            </section>
        </div>
    
    )
}

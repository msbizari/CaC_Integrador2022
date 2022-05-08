import React from 'react';
import React, { useState } from 'react';

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
        <div>
            <h1 className='prueba container'>Hola Mundo!</h1>
        </div>
    
    )
}

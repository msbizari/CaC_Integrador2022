import React from 'react';
import { useState } from 'react';
import '../styles/userProfile.css';
import Navbar from './Navbar';


export default function Profile() {
    let [userName, setName] = useState('nombre');
    let [userLastName, setLastName] = useState('apellido');
    let [userPic, setPic] = useState('nonUser.png');
    let [userEmail, setEmail] = useState('nombre.apellido@gmail.com');

    const userNameSeleccionado = function(e){
        setName(e.target.value);
    };
    const userLastNameSeleccionado = function(e){
        setLastName(e.target.value);
    };
    const userEmailSeleccionado = function(e){
        setEmail(e.target.value);
    };
    const userPicSeleccionado = function(){
        setPic('nonUser.png');
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className='container blanco' id='perfilSection'>
                <section className='col-sm-12 col-md-5 col-lg-6'>
                    <p className='encabezadoSize blanco capitalize'>{userName} {userLastName}</p>
                    <img src="src/img/nonUser.png" alt="Foto de perfil" />
                    <img src={'"src/img/' + {userPic} + '"'} alt="Foto de perfil" />
                    <button onClick={userPicSeleccionado} className='btnVioletaRedondo'>Cambiar foto de perfil</button>
                    <button className='btnVioletaRedondo'>Cerrar sesión</button>
                </section>

                <section className='col-sm-12 col-md-7 col-lg-6'>
                    <p className='encabezadoSize blanco'>Configuración de la cuenta</p>
                    <form action="" method='post' id='formProfileEdit'>
                        <fieldset>
                            <div>
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" className='capitalize' autoComplete='given-name' onChange={userNameSeleccionado} placeholder={userName}/>
                            </div>
                            <div>
                                <label htmlFor="apellido">Apellido</label>
                                <input type="text" className='capitalize' autoComplete='family-name' onChange={userLastNameSeleccionado} placeholder={userLastName}/>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div>
                                <label htmlFor="pass">Nueva contraseña</label>
                                <input type="password" autoComplete='new-password' minlength="6"/>
                            </div>
                            <div>
                                <label htmlFor="confirmPass">Confirmar contraseña</label>
                                <input type="password" autoComplete='off'/>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div>
                                <label htmlFor="email">Correo electrónico</label>
                                <input type="email" autoComplete='email' placeholder={userEmail} onChange={userEmailSeleccionado}/>
                            </div>
                            <div>
                                <label htmlFor="apellido">Confirmar correo electrónico</label>
                                <input type="email" required autoComplete='off' placeholder={userEmail}/>
                            </div>
                        </fieldset>
                        <button className='btnVioletaRedondo'>Guardar cambios</button>
                    </form>
                </section>
            </div>
        </div>
    )
}
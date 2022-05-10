import React from 'react';
import { useState } from 'react';
import '../styles/userProfile.css';
import Navbar from './Navbar';
import { BiTrash } from "react-icons/bi";
import {IoMdClose} from "react-icons/io";

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
    /*Modal / overlay*/
    
    var modalForPic = document.getElementById('modalForPic');
    window.addEventListener('click', clickOutsideModal); 
    function displayPicModal() {
        if (modalForPic.style.display == "none") {
            modalForPic.style.display = "flex";
        } else {
            modalForPic.style.display="none"
        }
    } function clickOutsideModal(evento){
        if(evento.target == modalForPic){
            modalForPic.style.display = "none";
        }
    }

    var modalForSession = document.getElementById('modalForSession');
    window.addEventListener('click', clickOutsideModalSession); 
    function displaySessionModal() {
        if (modalForSession.style.display == "none") {
            modalForSession.style.display = "flex";
        } else {
            modalForSession.style.display="none"
        }
    } function clickOutsideModalSession(e){
        if(e.target == modalForSession){
            modalForSession.style.display = "none";
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='container blanco' id='perfilSection'>
                <section className='col-sm-12 col-md-5 col-lg-6'>
                    <p className='encabezadoSize blanco capitalize'>{userName} {userLastName}</p>
                    <article> 
                        <img src="src/img/nonUser.png" alt="Foto de perfil" />
                        <div><BiTrash style={ {fill: "#121212", fontSize:"1.5rem",} }></BiTrash></div>
                    </article>
                    <img src={'"src/img/' + {userPic} + '"'} alt="Foto de perfil" />
                    <button onClick={displayPicModal}className='btnVioletaRedondo'>Cambiar foto</button>
                    <div>
                        <button onClick={displaySessionModal}>Cambiar de cuenta</button>
                        <button>Cerrar sesión</button>
                    </div>
                </section>

                <section className='col-sm-12 col-md-7 col-lg-6'>
                    <p className='encabezadoSize blanco'>Configuración de la cuenta</p>
                    <form action="" method='post' id='formProfileEdit'>
                        <fieldset>
                            <div>
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" className='capitalize' autoComplete='given-name' onChange={userNameSeleccionado} placeholder={userName} name="nombre" />
                            </div>
                            <div>
                                <label htmlFor="apellido">Apellido</label>
                                <input type="text" className='capitalize' autoComplete='family-name' onChange={userLastNameSeleccionado} placeholder={userLastName} name="apellido" />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div>
                                <label htmlFor="pass">Nueva contraseña</label>
                                <input type="password" autoComplete='new-password' minlength="6" name="pass" />
                            </div>
                            <div>
                                <label htmlFor="confirmPass">Confirmar contraseña</label>
                                <input type="password" autoComplete='off' name="confirmPass" />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div>
                                <label htmlFor="email">Correo electrónico</label>
                                <input type="email" autoComplete='email' placeholder={userEmail} onChange={userEmailSeleccionado} name="email" />
                            </div>
                            <div>
                                <label htmlFor="apellido">Confirmar correo electrónico</label>
                                <input type="email" autoComplete='off' placeholder={userEmail} name="apellido" />
                            </div>
                        </fieldset>
                        <button className='btnVioletaRedondo'>Guardar cambios</button>
                    </form>
                </section>
            </div>
            {/*Modal / Overlays*/}
            <section id='modalForPic' className='modalOverlay'>
                <article>
                    <div><button onClick={displayPicModal}><IoMdClose style={ {fill: "var(--white)", fontSize:"1.5rem",} }></IoMdClose></button></div>
                    <label htmlFor="userPicture">Seleccioná una foto de perfil</label>
                    <input type="file" name="userPicture" accept="image/png, image/jpeg" onChange={userPicSeleccionado}/>
                </article>
            </section>
            <section id='modalForSession' className='modalOverlay'>
                <article>
                    <div><button onClick={displaySessionModal}><IoMdClose style={ {fill: "var(--white)", fontSize:"1.5rem",} }></IoMdClose></button></div>
                    <p >Seleccioná una cuenta</p>
                    
                        {/* Array con todas las sesiones iniciadas y display foto y nombre <p>Seleccioná una cuenta</p>
                                {array.forEach(sesionIniciada => {
                                    <button className=''></button>
                                });}
                            </article>
                        */}
                </article>
            </section>

            {/*
            <section id='modalDeletePic' className='modalOverlay'>
                <article>
                    <div><button onClick={displaylDeletePicModal}><IoMdClose style={ {fill: "var(--white)", fontSize:"1.5rem",} }></IoMdClose></button></div>
                    <p>¿Quiere cerrar la sesión?</p>
                </article>
            </section>
            */}
        </div>
    )
}
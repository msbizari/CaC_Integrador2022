import React from 'react';
import { useState, useEffect} from 'react';
import '../styles/userProfile.css';
import Navbar from './Navbar';
import { BiTrash } from "react-icons/bi";
import {IoMdClose} from "react-icons/io";

export default function Profile() {
    let [userName, setName] = useState('nombre');
    let [userLastName, setLastName] = useState('apellido');
    let [userEmail, setEmail] = useState('nombre.apellido@gmail.com');
    let [userPic, setPic] = useState('');

    const userNameSeleccionado = function(e){
        setName(e.target.value);
    };
    const userLastNameSeleccionado = function(e){
        setLastName(e.target.value);
    };
    const userEmailSeleccionado = function(e){
        setEmail(e.target.value);
    };
    function userPicSeleccionado (e){
        const imgPath = e.target.value.split(/[\\/]/);
        console.log(imgPath);
        const imgName = imgPath.at(-1)
        setPic(imgName);
        displayPicModal();
    };
    function userPicEliminado(){
        setPic('nonUser.png');
        displaylDeletePicModal();
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
    
    var modalForExit = document.getElementById('modalForExit');
    window.addEventListener('click', clickOutsideModalExit); 
    function displayExitModal() {
        if (modalForExit.style.display == "none") {
            modalForExit.style.display = "flex";
        } else {
            modalForExit.style.display="none"
        }
    } function clickOutsideModalExit(e){
        if(e.target == modalForExit){
            modalForExit.style.display = "none";
        }
    }

    var modalDeletePic = document.getElementById('modalDeletePic');
    window.addEventListener('click', clickOutsideModalExit); 
    function displaylDeletePicModal() {
        if (modalDeletePic.style.display == "none") {
            modalDeletePic.style.display = "flex";
        } else {
            modalDeletePic.style.display="none"
        }
    } function clickOutsideModalExit(e){
        if(e.target.modalDeletePic){
            modalDeletePic.style.display = "none";
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='container blanco' id='perfilSection'>
                <section className='col-sm-12 col-md-5 col-lg-6'>
                    <p className='encabezadoSize blanco capitalize'>{userName} {userLastName}</p>
                    <article onClick={displaylDeletePicModal}> 
                        <img src={"src/img/" + userPic} id="imgProfile" alt="Foto de perfil" onError={userPicEliminado} />
                        <button><BiTrash style={ {fill: "#121212", fontSize:"1.5rem",} }></BiTrash></button>
                    </article>
                    <button onClick={displayPicModal}className='btnVioletaRedondo'>Cambiar foto</button>
                    <div>
                        <button onClick={displaySessionModal}>Cambiar de cuenta</button>
                        <button onClick={displayExitModal}>Cerrar sesión</button>
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
                                <input type="password" autoComplete='new-password' minLength="6" name="pass" />
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
                    <input type="file" name="userPicture" accept="image/png, image/jpeg, image/jpg" onChange={userPicSeleccionado}/>
                </article>
            </section>
            <section id='modalForSession' className='modalOverlay'>
                <article>
                    <div><button onClick={displaySessionModal}><IoMdClose style={ {fill: "var(--white)", fontSize:"1.5rem",} }></IoMdClose></button></div>
                    <p className='encabezadoModal'>Seleccioná una cuenta</p>
                    
                        {/* Array con todas las sesiones iniciadas y display foto y nombre <p>Seleccioná una cuenta</p>
                                {array.forEach(sesionIniciada => {
                                    <button className=''></button>
                                });}
                            </article>
                        */}
                </article>
            </section>
            <section id='modalForExit' className='modalOverlay'>
                <article>
                    <div><button onClick={displayExitModal}><IoMdClose style={ {fill: "var(--white)", fontSize:"1.5rem",} }></IoMdClose></button></div>
                    <p className='encabezadoModal'>¿Desea cerrar sesión?</p>
                    <div>
                        <button className='btnVioletaRedondo'>Sí, cerrar sesión</button>
                        <button className='btnSecundario' onClick={displayExitModal}>Cancelar</button>
                    </div>
                </article>
            </section>
            <section id='modalDeletePic' className='modalOverlay'>
                <article>
                    <div><button onClick={displaylDeletePicModal}><IoMdClose style={ {fill: "var(--white)", fontSize:"1.5rem",} }></IoMdClose></button></div>
                    <p className='encabezadoModal'>¿Quiere eliminar su foto de perfil?</p>
                    <div>
                        <button onClick={userPicEliminado} className='btnVioletaRedondo'>Sí, eliminarla</button>
                        <button className='btnSecundario' onClick={displaylDeletePicModal}>Cancelar</button>
                    </div>
                </article>
            </section>
        </div>
    )
}
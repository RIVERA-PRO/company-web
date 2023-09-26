import React from 'react';
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Importa los iconos que necesitas
import './Footer.css';

import logo from '../../img/logo-web.png'

export default function Footer() {
    return (
        <div className='footerContain'>
            <div className='textFooter'>
                <div className='logo-footer'>
                    <Anchor to={`/`} ><img src={logo} alt="logo-diseño-web-plus" /></Anchor>
                    <h1>Diseño Web Plus</h1>
                </div>
                <p>

                    Ayudamos a nuestros clientes a maximizar sus beneficios. Somos expertos en Desarrollo Web, Movil, Marketing Digital y Publicidad Online.
                </p>

            </div>

            <div className='textFooter'>
                <h3>Enlaces</h3>
                <Anchor to={`/`} >Inicio</Anchor>
                <Anchor to={`/`} onClick={() => { document.querySelector('.AboutConatin').scrollIntoView({ behavior: 'smooth' }); }} >Acerca de</Anchor>

                <Anchor to={`/`} onClick={() => { document.querySelector('.Proyectos').scrollIntoView({ behavior: 'smooth' }); }} >Proyectos</Anchor>


            </div>

            <div className='textFooter'>
                <h3>Enlaces rápidos</h3>
                <Anchor to={`/BlogDetail/1/Ruta%20de%20aprendizaje%20para%20ser%20un%20programador%20full%20stack`} >Ruta de aprendizaje</Anchor>
                <Anchor to={`/BlogDetail/7/Introducción%20a%20CSS%3A%20Estilizando%20la%20Web`} >Estilizando la Web</Anchor>
                <Anchor to={`/BlogDetail/10/CSS%20Intermedio%20y%20Avanzado%3A%20Diseño%20y%20Animaciones%20Sorprendentes`} > Diseño y Animaciones</Anchor>
            </div>

            <div className='textFooter'>
                <h3>Contacto</h3>

                <Anchor to="https://wa.me/qr/AHQDYWM7EKATH1" target='blank'>
                    <FontAwesomeIcon icon={faPhone} /> 3875683101
                </Anchor>
                <Anchor to="mailto:webdesingplus@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} /> webdesingplus@gmail.com

                </Anchor>
                <Anchor to="https://maps.google.com/?q=Salta, Argentina" target='blank'>
                    <FontAwesomeIcon icon={faMapMarker} /> Salta, Argentina
                </Anchor>
            </div>
        </div>
    );
}

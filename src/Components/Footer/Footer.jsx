import React from 'react';
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";

import './Footer.css';

import logo from '../../img/logo5.png';

export default function Footer() {
    return (
        <div className='footerContain'>
            <div className='textFooter'>
                <Anchor to={`/`} ><img src={logo} alt="logo-diseño-web-plus" /></Anchor>
                <a href="https://wa.me/qr/AHQDYWM7EKATH1 " target='blank'><i className="fas fa-phone"></i> 3875683101</a>
                <a href="mailto:indiojuan2012.jr@gmail.com"><i className="fas fa-envelope"></i> indiojuan2012.jr@gmail.com</a>
                <a href="https://maps.google.com/?q=Salta, Argentina" target="_blank"><i className="fas fa-map-marker-alt"></i> Salta, Argentina</a>
                <p>© 2023 - Todos los derechos reservados</p>
            </div>

        </div>
    );
}

import React, { useState, useEffect } from 'react';
import './About.css'
import logo from '../../img/logo-web.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutImg from '../../img/about-pc.png'

import { faCode } from '@fortawesome/free-solid-svg-icons';
import LogoWeb from '../LogoWeb/LogoWeb'
export default function About() {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 500) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className='AboutConatin'>
            <img src={AboutImg} alt="diseño web plus" className='aboutImg' />


            <div className='flexTitle'>
                <FontAwesomeIcon icon={faCode} className='icon2' />
                <h1 className='titleH1-2'>Sobre Nosotros</h1>
            </div>
            <div className={scrolled ? "AboutText AboutTextScroll" : "AboutText"}>
                <LogoWeb />
                <hr className='hr' />
                <p>Una consultora que se especializa en el desarrollo de software a medida, la provisión de recursos profesionales para proyectos informáticos y servicios de consultoría, soporte e implementaciones en IT. <br />Ayudamos a nuestros clientes a maximizar sus beneficios. Somos expertos en  Desarrollo Web, Marketing Digital y Publicidad Online.</p>

            </div>





        </div>
    )
}

import React, { useState, useEffect } from 'react'
import './Navbar.css'

import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";


import Logo from '../Logo/Logo';
import logo from '../../img/logo-web.png'

export default function Navbar() {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);

    // Cambio de color en navbar al hacer scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 130) {
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
        <header className={scrolled ? "navbar scrolled " : "navbar"}>

            <nav >

                <Logo />


                <div className={`nav_items ${isOpen && "open"}`} >

                    <div className="cerrar-nav" onClick={() => setIsOpen(!isOpen)}>
                        x
                    </div>
                    <div className='logo-nav'>
                        <Anchor to={`/`} ><img src={logo} alt="logo-diseño-web-plus" /></Anchor>
                    </div>

                    <div className='enlaces'>
                        <Anchor to={`/`} className={location.pathname === '/' ? 'active' : ''}>Inicio</Anchor>
                        <Anchor to={`/`} onClick={() => { document.querySelector('.AboutConatin').scrollIntoView({ behavior: 'smooth' }); }} >Acerca de</Anchor>
                        <Anchor to={`/`} onClick={() => { document.querySelector('.serviciosWeb').scrollIntoView({ behavior: 'smooth' }); }} >Servicios</Anchor>
                        <Anchor to={`/`} onClick={() => { document.querySelector('.Proyectos').scrollIntoView({ behavior: 'smooth' }); }} >Proyectos</Anchor>
                        <Anchor to={`/blog`} className={location.pathname === '/blog' ? 'active' : ''}>Blog</Anchor>

                        <Anchor to={`/`} onClick={() => { document.querySelector('.consultaContain').scrollIntoView({ behavior: 'smooth' }); }} id='contact-btn'>Contacto</Anchor>
                    </div>


                </div>

                <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>




            </nav>


        </header>
    );
}

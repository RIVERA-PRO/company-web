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
                        <Anchor to={`/`} onClick={() => {
                            document.querySelector('.AboutConatin').scrollIntoView({ behavior: 'smooth' });
                            setIsOpen(!isOpen);
                        }}>Acerca de</Anchor>

                        <Anchor to={`/`} onClick={() => {
                            document.querySelector('.serviciosWeb').scrollIntoView({ behavior: 'smooth' });
                            setIsOpen(!isOpen);
                        }}
                        >Servicios</Anchor>
                        <Anchor to={`/`} onClick={() => {
                            document.querySelector('.Proyectos').scrollIntoView({ behavior: 'smooth' });
                            setIsOpen(!isOpen);
                        }} >Proyectos</Anchor>
                        <Anchor to={`/blog`} onClick={() => { setIsOpen(!isOpen); }} className={location.pathname === '/blog' ? 'active' : ''}>Blog</Anchor>

                        <Anchor to={`/`} onClick={() => { document.querySelector('.consultaContain').scrollIntoView({ behavior: 'smooth' }); setIsOpen(!isOpen); }} id='contact-btn'>Contacto</Anchor>
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

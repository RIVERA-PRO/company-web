import React, { useState, useEffect } from 'react';
import './MobileDev.css';
import img from '../../img/mobile.png';
import { Link as Anchor } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'; // Utilizamos un icono de código
export default function MobileDev() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 1200) {
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
        <section className='serviciosMovil'>
            <div className='containDev' id='espacio'>
                <div className={scrolled ? "imgDev scrolledMovil" : "imgDev"}>
                    <img src={img} alt="juan-river-developer-mobile" />
                </div>
                <div className={scrolled ? "textDev scrolledMovil" : "textDev"}>
                    <div className='titleSections'>
                        <FontAwesomeIcon icon={faCode} className='iconTitle' />
                        <h1>Aplicaciones Móviles </h1>
                    </div>


                    <p>
                        Transformo ideas en aplicaciones móviles innovadoras.  Desde la concepción hasta la implementación y más allá, estoy comprometido a crear aplicaciones móviles atractivas y funcionales que satisfagan las necesidades de tus usuarios.
                        Mi proceso integral abarca todas las etapas del desarrollo:
                    </p>

                    <ul className="noBulletList">
                        <li>Diseño de Interfaz de Usuario (UI) y Experiencia de Usuario (UX)</li>
                        <li>Desarrollo de la Aplicación (Frontend y Backend)</li>
                        <li>Implementación de Funcionalidades Clave</li>
                        <li>Pruebas y Optimización</li>
                        <li>Lanzamiento y Distribución en Tiendas de Aplicaciones</li>
                        <li>Mantenimiento y Actualizaciones Continuas</li>
                    </ul>



                    <Anchor to={`https://wa.me/qr/AHQDYWM7EKATH1`} target='blank' className='contactar'> Contactar</Anchor>



                </div>
            </div>
        </section>
    );
}

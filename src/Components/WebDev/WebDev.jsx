import React, { useState, useEffect } from 'react';
import './WebDev.css';
import img from '../../img/web.png';
import { Link as Anchor } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGlobe, faSearch, faShareAlt, faMicrochip, faShieldAlt, faServer, faPalette, faTools } from '@fortawesome/free-solid-svg-icons';
export default function WebDev() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 1400) {
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
        <section className='serviciosWeb'>
            <div className='containDev' id='containDevWeb'>
                <div className={scrolled ? "textDev textDevScroll" : "textDev"}>

                    <div className='titleSections'>
                        <FontAwesomeIcon icon={faCode} className='iconTitle' />
                        <h1> Desarrollo Web</h1>
                    </div>
                    <p>
                        Transformamos ideas en sitios web funcionales y receptivos. Utilizando las últimas tecnologías y prácticas recomendadas para crear soluciones web sólidas que se adapten a diferentes dispositivos y tamaños de pantalla.
                    </p>




                    <Anchor to={`https://wa.me/qr/AHQDYWM7EKATH1`} target='blank' className='contactar'> Contactar</Anchor>


                </div>
                <div className={scrolled ? "imgDev imgDevWeb" : "imgDev"}>
                    <img src={img} alt="diseño web plus" />
                </div>
            </div>
            <div className={scrolled ? "serviciosno servicios" : "serviciosno"}>
                <div className='card-servicios'>
                    <FontAwesomeIcon icon={faGlobe} size='1x' color='#5252ea' />
                    <h3>Web Responsive</h3>
                    <p>Adaptable a todos los dispositivos</p>
                </div>

                <div className='card-servicios'>
                    <FontAwesomeIcon icon={faSearch} size='1x' color='#5252ea' />
                    <h3>Optimización SEO</h3>
                    <p>Aparece primero en Google</p>
                </div>

                <div className='card-servicios'>
                    <FontAwesomeIcon icon={faShareAlt} size='1x' color='#5252ea' />
                    <h3>Redes Sociales</h3>
                    <p>Integradas a tu Sitio Web</p>
                </div>

                <div className='card-servicios'>
                    <FontAwesomeIcon icon={faMicrochip} size='1x' color='#5252ea' />
                    <h3>Tecnología</h3>
                    <p>De última generación</p>
                </div>

                <div className='card-servicios'>
                    <FontAwesomeIcon icon={faShieldAlt} size='1x' color='#5252ea' />
                    <h3>Certificado SSL</h3>
                    <p>Máxima seguridad para tu Sitio Web</p>
                </div>

                <div className='card-servicios'>
                    <FontAwesomeIcon icon={faServer} size='1x' color='#5252ea' />
                    <h3>Hosting</h3>
                    <p>A medida para tus necesidades</p>
                </div>

                <div className='card-servicios'>
                    <FontAwesomeIcon icon={faPalette} size='1x' color='#5252ea' />
                    <h3>Diseño</h3>
                    <p>Diseño de Interfaz de Usuario UI/UX</p>
                </div>

                <div className='card-servicios'>
                    <FontAwesomeIcon icon={faTools} size='1x' color='#5252ea' />
                    <h3>Mantenimiento </h3>
                    <p>Servicios de mantenimiento </p>
                </div>
            </div>

        </section>
    );
}

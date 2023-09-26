import React from 'react'
import './Servicios.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGlobe, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
export default function Servicios() {
    return (
        <section className='serviciosHeroContain'>
            <div className='serviciosHero'>
                <div className='card-servicios-Hero'>
                    <FontAwesomeIcon icon={faCode} className='icon' />
                    <h3>Diseño Web </h3>
                    <p>Creo experiencias visuales cautivadoras que reflejan la identidad única de tu marca.</p>
                </div>
                <div className='card-servicios-Hero'>
                    <FontAwesomeIcon icon={faGlobe} className='icon' />
                    <h3>Desarrollo Web</h3>
                    <p>Transformo ideas en sitios web funcionales y receptivos utilizando las últimas tecnologías.</p>
                </div>
                <div className='card-servicios-Hero'>
                    <FontAwesomeIcon icon={faMobileAlt} className='icon' />
                    <h3>Desarrollo Móvil</h3>
                    <p>Diseño y desarrollo aplicaciones móviles intuitivas e innovadoras para satisfacer las necesidades de tus usuarios.</p>
                </div>
            </div>
        </section>
    )
}

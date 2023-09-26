import React from 'react'
import './About.css'
import logo from '../../img/logo-web.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutImg from '../../img/about-pc.png'

import { faCode } from '@fortawesome/free-solid-svg-icons';
export default function About() {
    return (
        <div className='AboutConatin'>
            <img src={AboutImg} alt="AboutImg" className='aboutImg' />
            <div className='flexTitle'>
                <FontAwesomeIcon icon={faCode} className='icon2' />
                <h1 className='titleH1-2'>Sobre Nosotros</h1>
            </div>
            <div className='AboutText'>
                <img src={logo} alt="logo-diseño-web-plus" />
                <hr className='hr' />
                <p>Una consultora que se especializa en el desarrollo de software a medida, la provisión de recursos profesionales para proyectos informáticos y servicios de consultoría, soporte e implementaciones en IT. <br />Ayudamos a nuestros clientes a maximizar sus beneficios. Somos expertos en  Desarrollo Web, Marketing Digital y Publicidad Online.</p>

            </div>





        </div>
    )
}

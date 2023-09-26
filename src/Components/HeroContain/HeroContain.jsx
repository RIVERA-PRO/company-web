import React from 'react'
import './HeroContain.css'
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import img from '../../img/webimg.png'
export default function HeroContain() {
    return (
        <div className='HeroContain'>


            <div className='heroText'>
                <hr className='hr-color' />
                <h1 className='titleH1'>Soluciones Tecnológicas</h1>
                <p className='parrafo1'>Te brindamos asesoramiento profesional y estrategias de Marketing Digital para potenciar tu negocio online.</p>
                <span>Digitalización
                    Desarrollo
                    Creatividad
                    Innovación
                    Soluciones</span>
                <Anchor to={`/`} className='btn'>Contáctanos</Anchor>
            </div>
            <div className='imgHero'>
                <img src={img} alt="" />
            </div>


        </div>
    )
}

import React from 'react'
import './CardPersonal.css'
import img from '../../img/logo-web.png'
import { Link as Anchor } from "react-router-dom";
export default function CardPersonal() {
    return (
        <div className='CardPersonal'>

            <img src={img} alt="juan-rivera-developer" />
            <h3>Diseño Web Plus</h3>
            <p>Software Developer</p>




        </div>
    )
}

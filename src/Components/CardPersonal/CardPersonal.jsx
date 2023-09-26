import React from 'react'
import './CardPersonal.css'
import img from '../../img/JUAN RIVERA.png'
import { Link as Anchor } from "react-router-dom";
export default function CardPersonal() {
    return (
        <div className='CardPersonal'>

            <img src={img} alt="juan-rivera-developer" />
            <h3>Juan Rivera</h3>
            <p>Full Stack Developer</p>

            <div class="redes-sociales-card">
                <a href="#" target="_blank"><i class='fa fa-instagram'></i></a>
                <a href="https://www.linkedin.com/in/juan-rivera-9ba866215/" target="_blank"><i class='fa fa-linkedin'></i></a>
                <a href="https://github.com/RIVERA-PRO" target="_blank"><i class='fa fa-github'></i></a>
            </div>

            <Anchor to={`https://drive.google.com/file/d/1rWwQ8ba2ygG7BVrgMLMkyn7BrgunQmUf/view?usp=sharing`} target='blank' className='cv'>CV</Anchor>

        </div>
    )
}

import React from 'react';
import './CardLenguajes.css'
export default function CardLenguajes() {
    const lenguajesMERN = ['MongoDB', 'Express.js', 'React', 'Node.js', 'HTML', 'CSS', 'Figma', 'React Native',];

    return (
        <div className='CardLenguajes'>
            <h3 className='title-publi'>Stack MERN</h3>
            <div className='lenguajesCard'>
                {lenguajesMERN.map(lenguaje => (

                    <p key={lenguaje}>#{lenguaje}</p>

                ))}
            </div>
        </div>
    );
}

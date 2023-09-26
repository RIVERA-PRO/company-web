import React from 'react';
import './Developer.css';
import logo from '../../img/logo-web.png';

export default function Developer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className='developerContain'>
            <p>
                Copyright {currentYear} - Diseño Web Puls
            </p>

            <img src={logo} alt="juan-rivera-developer" />
        </div>
    );
}

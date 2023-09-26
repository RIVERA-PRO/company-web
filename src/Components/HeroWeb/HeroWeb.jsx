import React from 'react';
import { useLocation } from 'react-router-dom'; // Importar useLocation
import './HeroWeb.css';

export default function HeroWeb() {
    const location = useLocation(); // Obtener la ubicación actual desde React Router

    // Función para obtener el nombre de la página del pathname
    const getPageName = (pathname) => {
        const parts = pathname.split('/');
        const lastPart = parts[parts.length - 1];
        return lastPart !== '' ? lastPart : 'Inicio';
    };

    const pageName = getPageName(location.pathname); // Usar el pathname de la ubicación actual

    return (
        <div className='HeroWebContain'>
            {/* <h1>Bienvenido a {pageName}</h1> */}
        </div>
    );
}

import React, { useState, useEffect } from 'react';

import Header from '../Pages/Header/Header';

import ButonScroll from '../Components/ButonScroll/ButonScroll';
import HeroContain from '../Components/HeroContain/HeroContain';
import Proyectosy from '../Components/ProyectosY/ProyectosY'
import WebDev from '../Components/WebDev/WebDev'
import MobilWeb from '../Components/MobileDev/MobileDev'
import Servicios from '../Components/Servicios/Servicios';
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer';
import Consulta from '../Components/Consulta/Consulta';
export default function IndexLayout() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>

            <Header />
            <HeroContain />

            <Servicios />
            <About />
            <WebDev />
            <MobilWeb />
            <Proyectosy />
            <Consulta />
            <Footer />
            <ButonScroll />
        </div>
    );
}

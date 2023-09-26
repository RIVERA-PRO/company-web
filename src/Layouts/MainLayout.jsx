import React from 'react'
import Header from '../Pages/Header/Header'
import { Outlet } from "react-router-dom";
import HeroWeb from '../Components/HeroWeb/HeroWeb';
import Footer from '../Components/Footer/Footer';
import ButonScroll from '../Components/ButonScroll/ButonScroll';

export default function MainLayout() {
    return (
        <div>
            <Header />
            <HeroWeb />
            <Outlet />

            <Footer />
            <ButonScroll />
        </div>
    )
}

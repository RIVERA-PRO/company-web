import React from 'react'
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import './Logo.css'


import logo from '../../img/logo-web.png'
export default function Logo() {
    return (
        <div className='logo'>
            <Anchor to={`/`} ><img src={logo} alt="logo-diseño-web-plus" />  <h1>Diseño Web Plus</h1></Anchor>
        </div>
    )
}

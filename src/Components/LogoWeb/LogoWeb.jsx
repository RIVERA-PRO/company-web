import React from 'react'
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import './LogoWeb.css'


import logo from '../../img/logo-web.png'
export default function LogoWeb() {
    return (
        <div className='logoWeb'>
            <Anchor ><img src={logo} alt="logo-diseño-web-plus" /> </Anchor>
        </div>
    )
}

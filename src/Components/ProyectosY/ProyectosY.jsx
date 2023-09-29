import React, { useState, useEffect, useRef } from 'react'
import './ProyectosY.css';

import { Link as Anchor } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFigma, } from '@fortawesome/free-brands-svg-icons';
import { faSignOutAlt, faHeart, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../img/proyectos/Tasteit-web.png'
import img2 from '../../img/proyectos/Small-apps-web.png'
import img3 from '../../img/proyectos/Crypto-web.png'
import img4 from '../../img/proyectos/Fitness Cloud.png'
import img5 from '../../img/proyectos/Fitness Gym.png'
import img6 from '../../img/proyectos/Activitar Gym.png'
import img7 from '../../img/proyectos/Fitness Cloud app.png'
import img8 from '../../img/proyectos/Ortopedia.png'
import img9 from '../../img/proyectos/Ley maestra.png'
import img10 from '../../img/proyectos/Riverx.png'




import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
export default function ProyectosY() {
    const [showSpiral, setShowSpiral] = useState(true);

    const swiperRef = useRef(null);
    SwiperCore.use([Navigation, Pagination, Autoplay]);

    const Projectos = [

        {
            title: "Tasteit-web",

            lengujes: "HTML - CSS - JAVASCRIPT - REACT ",
            img: img1,
            link: "https://lovely-muffin-87a301.netlify.app/",


        },
        {
            title: "Small-apps-web",

            lengujes: "HTML - CSS - JAVASCRIPT - REACT ",
            img: img2,
            link: "https://illustrious-buttercream-816617.netlify.app/",


        },
        {
            title: "Crypto-web",

            lengujes: "HTML - CSS - JAVASCRIPT - REACT ",
            img: img3,
            link: "https://velvety-empanada-a120ad.netlify.app/",


        },
        {
            title: "Ley maestra",
            lengujes: "HTML - CSS - JAVASCRIPT - REACT",
            img: img9,
            link: "https://startling-snickerdoodle-9a96ce.netlify.app/",

        },
        {
            title: "Riverx",
            lengujes: "HTML - CSS - JAVASCRIPT - REACT",
            img: img10,
            link: "https://lucent-cassata-7bf593.netlify.app/",


        },
        {
            title: "Fitness Cloud",
            description: "",
            lengujes: "HTML - CSS - JAVASCRIPT - REACT - NODE - EXPRESS - MONGO DB",
            img: img4,
            link: "https://dazzling-donut-b93dd7.netlify.app/",


        },


        {
            title: "Fitness Cloud app",

            lengujes: "HTML - CSS - JAVASCRIPT - REACT NATIVE",
            img: img7,
            link: "",


        },









    ]

    const [scrolled, setScrolled] = useState(false);

    // Cambio de color en navbar al hacer scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 2800) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNext = () => {
        swiperRef.current.slideNext();
    };

    const handlePrev = () => {
        swiperRef.current.slidePrev();
    };

    return (
        <div className={"Proyectos"}>
            <div className='deFlexProyects'>

                <div className='flexTitle'>
                    <FontAwesomeIcon icon={faCode} className='icon2' />
                    <h1 className='titleH1-2'>Nuestros Proyectos</h1>
                </div>

                <div className='bnsFlex'>

                    <button className='next-prev-btn' onClick={handlePrev}><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <button className='next-prev-btn' onClick={handleNext}><FontAwesomeIcon icon={faChevronRight} /> </button>
                </div>
            </div>



            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                autoplay={{ delay: 3000 }} // Cambia el valor de 'delay' según tus preferencias
                pagination={{ clickable: true, }}
                onSwiper={(swiper) => {
                    console.log(swiper);
                    swiperRef.current = swiper;
                }}
                id={"swiper_container_scroll"}
            >


                {Projectos.map((item, index) => (
                    <SwiperSlide id='SwiperSlide-scroll'  >


                        <div key={index} className={scrolled ? "card-project-y-none card-project-y" : "card-project-y-none"} >
                            <Anchor to={`${item.link}`} target="_blank" >
                                <img src={item.img} alt={`diseño web plus ${item.img}`} />
                            </Anchor>
                            <div className='card-project-y-TextY'>
                                <h3>{item.title}</h3>
                                <p>{item.lengujes}</p>
                                <div className='links'>
                                    <Anchor to={`${item.link}`}>Ver Pagina</Anchor>


                                </div>

                            </div>
                        </div>

                    </SwiperSlide>
                ))}

            </Swiper>





        </div>
    );
}

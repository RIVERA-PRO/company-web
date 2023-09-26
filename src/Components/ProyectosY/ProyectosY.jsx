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
import img9 from '../../img/proyectos/Mangas.png'
import img10 from '../../img/proyectos/Odyssey.png'
import img11 from '../../img/proyectos/Project Hacker.png'
import img12 from '../../img/proyectos/my-music.png'
import img13 from '../../img/proyectos/salta-jobs.png'
import img14 from '../../img/proyectos/Barber Master.png'
import img15 from '../../img/proyectos/Restaurante.png'



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
            link: "https://gentle-fudge-b68c4a.netlify.app/",

            figma: "https://www.figma.com/file/gkHwsv8lGKjDeUQ4q1Y6aJ/tasteit-web?type=design&node-id=0-1&mode=design&t=NHdOr8UayiiSxVRS-0"
        },
        {
            title: "Small-apps-web",

            lengujes: "HTML - CSS - JAVASCRIPT - REACT ",
            img: img2,
            link: "https://gorgeous-sfogliatella-fd369b.netlify.app/",

            figma: "https://www.figma.com/file/omwyPREG3Pg99z7Rd0Wjj4/Small-apps?type=design&mode=design&t=NHdOr8UayiiSxVRS-0"
        },
        {
            title: "Crypto-web",

            lengujes: "HTML - CSS - JAVASCRIPT - REACT ",
            img: img3,
            link: "https://unique-vacherin-447135.netlify.app/",

            figma: "https://www.figma.com/file/a1iCqZg8AAZTdZ3kzrIDI1/Crypto-web?type=design&mode=design&t=NHdOr8UayiiSxVRS-0"
        },

        {
            title: "Fitness Cloud",
            description: "",
            lengujes: "HTML - CSS - JAVASCRIPT - REACT - NODE - EXPRESS - MONGO DB",
            img: img4,
            link: "https://dazzling-donut-b93dd7.netlify.app/",

            figma: ""
        },
        {
            title: "Fitness Gym",
            description: "",
            lengujes: "HTML - CSS - JAVASCRIPT - REACT",
            img: img5,
            link: "https://bejewelled-axolotl-a610ef.netlify.app/",

            figma: ""
        },

        {
            title: "Activitar Gym",

            lengujes: "HTML - CSS - BOOTSTRAP",
            img: img6,
            link: "https://rivera-pro.github.io/activitar-jr-dev/",

            figma: ""
        },

        {
            title: "Fitness Cloud app",

            lengujes: "HTML - CSS - JAVASCRIPT - REACT NATIVE",
            img: img7,
            link: "",

            figma: ""
        },

        {
            title: "Ortopedia",

            lengujes: "HTML - CSS - BOOTSTRAP",
            img: img8,
            link: "https://rivera-pro.github.io/ortopedia-jr-dev/",

            figma: ""
        },




        {
            title: "Project Hacker",

            lengujes: "HTML - CSS - JAVASCRIPT",
            img: img11,
            link: "https://rivera-pro.github.io/Juan-Rivera-Project-Hacker/",

            figma: ""
        },
        {
            title: "My Music",

            lengujes: "HTML - CSS - JAVASCRIPT - REACT",
            img: img12,
            link: "https://moonlit-madeleine-d33347.netlify.app/",

            figma: ""
        },

        {
            title: "Salta Jobs",

            lengujes: "HTML - CSS - JAVASCRIPT - REACT - NODE - EXPRESS - MONGO DB",
            img: img13,
            link: "https://unrivaled-sherbet-85ef07.netlify.app/",

            figma: ""
        },

        {
            title: "Barber Master",

            lengujes: "HTML - CSS - BOOTSTRAP",
            img: img14,
            link: "https://rivera-pro.github.io/barber-jr-dev/",

            figma: ""
        },
        {
            title: "Restaurante",
            description: "",
            lengujes: "HTML - CSS - BOOTSTRAP",
            img: img15,
            link: "https://rivera-pro.github.io/restaurante-jr-dev/",

            figma: ""
        },




    ]

    const [scrolled, setScrolled] = useState(false);

    // Cambio de color en navbar al hacer scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
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
                                <img src={item.img} alt={`juan-rivera-developer ${item.img}`} />
                            </Anchor>
                            <div className='card-project-y-TextY'>
                                <h3>{item.title}</h3>
                                <p>{item.lengujes}</p>
                                <div className='links'>
                                    <Anchor to={`${item.link}`}>Deploy</Anchor>

                                    {item.figma !== '' && (
                                        <a href={item.figma} target="_blank">
                                            <FontAwesomeIcon icon={faFigma} /> Figma
                                        </a>
                                    )}
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>
                ))}

            </Swiper>





        </div>
    );
}

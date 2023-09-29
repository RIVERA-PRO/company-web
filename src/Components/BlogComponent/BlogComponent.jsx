import React, { useState, useEffect } from 'react';
import './BlogComponent.css'
import { Link } from 'react-router-dom';
import blog from '../../Components/dataBlog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
export default function BlogComponent() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 3500) {
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
    return (
        <section className='BlogHome'>
            <div className='titleSections'>
                <FontAwesomeIcon icon={faCode} className='iconTitle' />
                <h1>Nuestro Blog</h1>
            </div>
            <div className={scrolled ? "BlogComponent BlogComponentScroll" : "BlogComponent"}>

                {blog.slice(0, 3).map(blogItem => (
                    <Link
                        key={blogItem.id}
                        to={`/BlogDetail/${blogItem.id}/${encodeURIComponent(blogItem.titulo)}`}

                    >
                        <div className="blog-card-component">
                            <img src={blogItem.img} alt="juan-rivera-developer-BLOG" />
                            <div className='blog-card-text'>
                                <h3>{blogItem.titulo}</h3>
                                <p>{blogItem.descripcion.slice(0, 100)}..</p>
                                <div className='deFlexblog'>
                                    <span>Leer más</span>
                                    <span>{blogItem.fecha}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </section>
    )
}

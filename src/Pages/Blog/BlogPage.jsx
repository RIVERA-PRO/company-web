import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blog from '../../Components/dataBlog';
import './BlogPage.css';
import CardPersonal from '../../Components/CardPersonal/CardPersonal';

import CardLenguajes from '../../Components/CardLenguajes/CardLenguajes';
import TitlePage from '../../Components/TitlePage/TitlePage';
export default function BlogPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [visibleBlogs, setVisibleBlogs] = useState(5);

    const filteredBlogs = blog.filter(blogItem =>
        blogItem.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const showMoreBlogs = () => {
        setVisibleBlogs(prevVisibleBlogs => prevVisibleBlogs + 10);
    };

    return (
        <div className='BlogPageContain'>
            <TitlePage firstLinkText="Home" secondLinkText="Blog" />
            <input
                type="text"
                placeholder="Buscar por título..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='input-busqueda'
            />

            <div className="grid-container">
                <div className='blog-cards'>
                    {filteredBlogs.slice(0, visibleBlogs).map(blogItem => (
                        <Link
                            key={blogItem.id}
                            to={`/BlogDetail/${blogItem.id}/${encodeURIComponent(blogItem.titulo)}`}
                            className="blog-card-link"
                        >
                            <div className="blog-card">
                                <img src={blogItem.img} alt="diseño web plus" />
                                <div className='blog-card-text'>
                                    <h3>{blogItem.titulo}</h3>
                                    <p>{blogItem.descripcion.slice(0, 200)}..</p>
                                    <div className='deFlexblog'>
                                        <span>Leer más</span>
                                        <span>{blogItem.fecha}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                    {filteredBlogs.length > visibleBlogs && (
                        <button className="show-more-button" onClick={showMoreBlogs}>
                            Mostrar más
                        </button>
                    )}
                    {filteredBlogs.length === 0 && (
                        <div className="no-result">
                            <p>No hay resultados.</p>
                        </div>
                    )}

                </div>
                <div className='card-personal'>
                    <CardPersonal />


                    <CardLenguajes />

                </div>
            </div>
        </div>
    );
}

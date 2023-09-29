import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blog from '../../Components/dataBlog';
import './BlogDetail.css';
import CardPersonal from '../../Components/CardPersonal/CardPersonal';

import CardLenguajes from '../../Components/CardLenguajes/CardLenguajes';


import TitlePage from '../../Components/TitlePage/TitlePage';

const isEmptyString = (str) => str.trim() === '';

export default function BlogDetail() {
    const { id, title } = useParams();
    const selectedBlog = blog.find(blogItem => blogItem.id === parseInt(id, 10));
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    if (!selectedBlog) {
        return <p>Blog no encontrado</p>;
    }

    return (
        <div className='BlogPageContain'>
            <TitlePage firstLinkText="Home" secondLinkText="Blog" tercerLinkText={selectedBlog.titulo} />


            <div className="grid-container">
                <div className='blog-detail'>
                    <div className='detail'>
                        <div className='text-blog'>
                            {selectedBlog.img !== "" && (
                                <img
                                    src={selectedBlog.img}
                                    alt={`diseño web plus ${selectedBlog.titulo}`}
                                    className='img-blog-1'
                                />
                            )}
                            <p>{selectedBlog.fecha}</p>
                            <h2>{selectedBlog.titulo}</h2>
                            <p>{selectedBlog.descripcion}</p>
                        </div>
                        <div className='text-blog'>
                            {selectedBlog?.imgs?.img1 && (
                                <img
                                    src={selectedBlog.imgs.img1}
                                    alt="diseño web plus"
                                    className='img-blog'
                                />
                            )}


                            {!isEmptyString(selectedBlog.subTitulo) && (
                                <>
                                    <h3>{selectedBlog.subTitulo}</h3>
                                    <p>{selectedBlog.subDescripcion}</p>
                                    {selectedBlog.ejemplos.ejemplo1 && (
                                        <div className='ejemplos'>
                                            {selectedBlog.ejemplos.ejemplo1 && <p>{selectedBlog.ejemplos.ejemplo1}</p>}
                                            {selectedBlog.ejemplos.ejemplo2 && <p>{selectedBlog.ejemplos.ejemplo2}</p>}
                                            {selectedBlog.ejemplos.ejemplo3 && <p>{selectedBlog.ejemplos.ejemplo3}</p>}
                                            {selectedBlog.ejemplos.ejemplo4 && <p>{selectedBlog.ejemplos.ejemplo4}</p>}
                                            {selectedBlog.ejemplos.ejemplo5 && <p>{selectedBlog.ejemplos.ejemplo5}</p>}
                                            {selectedBlog.ejemplos.ejemplo6 && <p>{selectedBlog.ejemplos.ejemplo6}</p>}
                                            {selectedBlog.ejemplos.ejemplo7 && <p>{selectedBlog.ejemplos.ejemplo7}</p>}
                                            {selectedBlog.ejemplos.ejemplo8 && <p>{selectedBlog.ejemplos.ejemplo8}</p>}
                                        </div>
                                    )}

                                </>
                            )}
                        </div>

                        <div className='text-blog'>
                            {selectedBlog?.imgs?.img2 && (
                                <img
                                    src={selectedBlog.imgs.img2}
                                    alt="diseño web plus"
                                    className='img-blog'
                                />
                            )}



                            {!isEmptyString(selectedBlog.subTitulo2) && (
                                <>
                                    <h3>{selectedBlog.subTitulo2}</h3>
                                    <p>{selectedBlog.subDescripcion2}</p>


                                    {selectedBlog.ejemplos2.ejemplo2_1 && (
                                        <div className='ejemplos'>
                                            <p>{selectedBlog.ejemplos2?.ejemplo2_1}</p>
                                            <p>{selectedBlog.ejemplos2?.ejemplo2_2}</p>
                                            <p>{selectedBlog.ejemplos2?.ejemplo2_3}</p>
                                            <p>{selectedBlog.ejemplos2?.ejemplo2_4}</p>
                                            <p>{selectedBlog.ejemplos2?.ejemplo2_5}</p>
                                            <p>{selectedBlog.ejemplos2?.ejemplo2_6}</p>
                                            <p>{selectedBlog.ejemplos2?.ejemplo2_7}</p>
                                            <p>{selectedBlog.ejemplos2?.ejemplo2_8}</p>
                                            <p>{selectedBlog.ejemplos2?.ejemplo2_9}</p>
                                        </div>
                                    )}

                                </>
                            )}
                        </div>

                        <div className='text-blog'>
                            {selectedBlog?.imgs?.img3 && (
                                <img
                                    src={selectedBlog.imgs.img3}
                                    alt="diseño web plus"
                                    className='img-blog'
                                />
                            )}



                            {!isEmptyString(selectedBlog.subTitulo3) && (
                                <>
                                    <h3>{selectedBlog.subTitulo3}</h3>
                                    <p>{selectedBlog.subDescripcion3}</p>


                                    {selectedBlog.ejemplos3.ejemplo3_1 && (
                                        <div className='ejemplos'>
                                            <p>{selectedBlog.ejemplos3?.ejemplo3_1}</p>
                                            <p>{selectedBlog.ejemplos3?.ejemplo3_2}</p>
                                            <p>{selectedBlog.ejemplos3?.ejemplo3_3}</p>
                                            <p>{selectedBlog.ejemplos3?.ejemplo3_4}</p>
                                            <p>{selectedBlog.ejemplos3?.ejemplo3_5}</p>
                                            <p>{selectedBlog.ejemplos3?.ejemplo3_6}</p>
                                            <p>{selectedBlog.ejemplos3?.ejemplo3_7}</p>
                                            <p>{selectedBlog.ejemplos3?.ejemplo3_8}</p>
                                            <p>{selectedBlog.ejemplos3?.ejemplo3_9}</p>
                                            <p>{selectedBlog.ejemplos3?.ejemplo3_10}</p>
                                        </div>
                                    )}

                                </>
                            )}

                        </div>


                        <div className='text-blog'>
                            {selectedBlog?.imgs?.img4 && (
                                <img
                                    src={selectedBlog.imgs.img4}
                                    alt="diseño web plus"
                                    className='img-blog'
                                />
                            )}

                            {!isEmptyString(selectedBlog.subTitulo4) && (
                                <>
                                    <h3>{selectedBlog.subTitulo4}</h3>
                                    <p>{selectedBlog.subDescripcion4}</p>

                                    {selectedBlog.ejemplos4.ejemplo4_1 && (
                                        <div className='ejemplos'>
                                            <p>{selectedBlog.ejemplos4?.ejemplo4_1}</p>
                                            <p>{selectedBlog.ejemplos4?.ejemplo4_2}</p>
                                            <p>{selectedBlog.ejemplos4?.ejemplo4_3}</p>
                                            <p>{selectedBlog.ejemplos4?.ejemplo4_4}</p>
                                            <p>{selectedBlog.ejemplos4?.ejemplo4_5}</p>
                                            <p>{selectedBlog.ejemplos4?.ejemplo4_6}</p>
                                            <p>{selectedBlog.ejemplos4?.ejemplo4_7}</p>
                                            <p>{selectedBlog.ejemplos4?.ejemplo4_8}</p>
                                            <p>{selectedBlog.ejemplos4?.ejemplo4_9}</p>
                                            <p>{selectedBlog.ejemplos4?.ejemplo4_10}</p>
                                            <p>{selectedBlog.ejemplos4?.ejemplo4_11}</p>
                                        </div>
                                    )}

                                </>
                            )}
                        </div>


                        <div className='text-blog'>
                            <h3>Conclusion</h3>
                            <p>{selectedBlog?.conclucion}</p>
                        </div>

                    </div>


                </div>

                <div className='card-personal'>
                    <CardPersonal />


                    <CardLenguajes />
                </div>
            </div>
        </div>
    );
}

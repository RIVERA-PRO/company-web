import React, { useRef, useState } from 'react';
import './Consulta.css';
import axios from 'axios';
import Spiral from '../../Components/Spiral/Spiral'
import img from '../../img/consulta.png'
export default function Consulta() {
    const dataForm = useRef();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleFormSubmit(e) {
        e.preventDefault();

        const formInputs = Object.values(dataForm.current.elements).reduce(
            (acc, element) => {
                if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
                    acc[element.name] = element.value;
                }
                return acc;
            },
            {}
        );

        const data = {
            name: formInputs.name,
            email: formInputs.email,
            question: formInputs.question,
        };

        const url = 'https://diseno-web-plus.onrender.com/consulta/queries';

        try {
            setLoading(true); // Mostrar indicador de carga

            await axios.post(url, data);
            setSuccessMessage('Consulta enviada');
            dataForm.current.reset();
        } catch (error) {
            console.error('Error al enviar la consulta:', error);
            let errorMessage = '';
            if (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) {
                if (typeof error.response.data.message === 'string') {
                    errorMessage = error.response.data.message;
                } else {
                    errorMessage = error.response.data.message.join(' ');
                }
            } else {
                errorMessage = 'Se produjo un error al procesar la solicitud.';
            }
            setErrorMessage(errorMessage);
        } finally {


            setLoading(false);
            setTimeout(() => {
                setSuccessMessage('');
                setErrorMessage('');
            }, 3000);

        }
    }

    return (
        <div className='consultaContain'>

            <img src={img} alt="img" className='consultaImg' />
            <form action="" className="Formulario" onSubmit={handleFormSubmit} ref={dataForm}>
                <label htmlFor="">Comienza Tu Proyecto</label>

                <div className="deFlexInputs">
                    <input className="inputt" type="text" placeholder="Nombre" name="name" id="name" style={{ color: 'white' }} />

                    <input className="inputt" type="email" placeholder="Email" name="email" id="email" style={{ color: 'white' }} />
                </div>

                <textarea placeholder="Consulta" name="question" id="question" style={{ color: 'white' }}></textarea>
                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="enviar">
                    {loading ? (
                        <Spiral />
                    ) : (
                        <input type="submit" value="Enviar"></input>
                    )}
                </div>
            </form>


        </div>
    );
}

import React from 'react';
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers';
// import * as Yup from 'yup';

export default function ControlLectura() {
    const contador = 1;

    // const validationSchema = Yup.object().shape({
    //     numberOfQuestions: Yup.string()
    //         .required('Numero de preguntas para el Quizz es requirido'),
    //     preguntas: Yup.array().of(
    //         Yup.object().shape({
    //             pregunta: Yup.string()
    //                 .required('Campo pregunta obligatorio'),
    //             tipo: Yup.string()
    //                 .required('Tipo de pregunta obligatoria.'),
    //         })
    //     )
    // });

    // handleClick = () => {
        
    // }

    return (
        <div>
            <div>
                Nombre del Control:
                <input type="" value=""/>

            </div>
            <div>
                Pregunta # {contador}
                <input type="" value=""/>

                
            </div>
            <div><button onClick="">Agregar otra pregunta</button></div>
        </div>
    )
}

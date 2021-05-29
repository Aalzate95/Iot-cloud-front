import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { get } from 'lodash';

const evaluationType = {
    E1: "CONTROL_LECTURA",
    E2: "LECCION",
    E3: "EXAMEN",
};

const Evaluation = () => {
    let history = useHistory();

    const handleClick = (evt) => {
        switch(evt){
            case evaluationType.E1:
                return history.push("/evaluations/controlLectura");
            case evaluationType.E2:
                return history.push("/evaluations/leccion");
            case evaluationType.E3:
                return history.push("/evaluations/examen");
        }
        
    };

    return ( 
        <div className="flex flex-col mx-5">
            <div className="text-blue-900 text-5xl text-left" >Evaluaciones</div>
            <div className="py-4"><p className="text-left">En esta seccion puede crear, editar, asignar y eliminar las evaluaciones para cada curso que desee.</p></div>
            <div className="flex flex-row space-x-4 justify-center items-center" >
                <div ><button className="bg-button p-5 focus:bg-black rounded-md text-white" onClick={() => handleClick("CONTROL_LECTURA")} >Control de lectura</button></div>
                <div ><button  className="bg-button p-5 rounded-md text-white" onClick={() => handleClick("LECCION")} >Lección</button></div>
                <div ><button  className="bg-button p-5 rounded-md text-white" onClick={() => handleClick("EXAMEN")} >Examen</button></div>
            </div>
        </div>
     );
}
 
export default Evaluation;
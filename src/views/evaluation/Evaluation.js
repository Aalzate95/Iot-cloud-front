import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { get } from 'lodash';

const Evaluation = () => {
    
    let history = useHistory();

    const handleLecture = () => {
        history.push("/evaluations/controlLectura");
    }
    const handleLeccion = () => {
        history.push("/evaluations/leccion");
    }
    

    return ( 
        <div>
            <div>
                <div><button onClick={() =>handleLecture()} >Control de lectura</button></div>
                <div><button onClick={() => handleLeccion()} >Lección</button></div>
            </div>
        </div>
     );
}
 
export default Evaluation;
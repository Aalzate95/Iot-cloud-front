import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { get } from 'lodash';

const Evaluation = () => {
    const typeEvaluation = useState({1: "ControlLectura", 2: "Leccion"});
    let history = useHistory();

    function handleLecture() { 
        history.push("/ControlLectura");
    }
    function handleLeccion() {
        history.push("Leccion");
    }
    

    return ( 
        <div>
            <div>
                <div><button onclick={handleLecture()} >Control de lectura</button></div>
                <div><button onclick={handleLeccion()} >Lección</button></div>
            </div>
        </div>
     );
}
 
export default Evaluation;
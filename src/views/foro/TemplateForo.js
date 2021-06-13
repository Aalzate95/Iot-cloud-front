import React from "react";
import { useParams } from "react-router-dom";


const TemplateForo = () => {

    const {id} = useParams();

    return ( 
        <div>
            <h1>el id es: {id}</h1>
        </div>
     );
};
 
export default TemplateForo;
import React, {useState} from 'react';


const Evaluation = () => {
    const [texto,setText] = useState('')
    const [nombre, setNombre] = useState(null)

    const OnClickEnviar = ()=>{
        alert(
            `El usuario ${nombre}, envió: ${texto}`
        )
    }

    const listaDatos = [
        {nombre:"recurso1", descripcion:"lonadsjdansda", calificaciones:[12,34]},
        {nombre:"recurso3", descripcion:"dasdjnasdaknd", calificaciones:[13,43]}
    ]

    const renderDatos = listaDatos.map((e)=>{
        return(
            <div>
                <h1>{e.nombre}</h1>
                <p>{e.descripcion}</p>
                {e.calificaciones.map((calificacion)=>{
                    return(
                        <h4>{calificacion}</h4>
                        )
                })}
            </div>
            )
    })

    return ( 
        <div>
            <label>
            Nombre:
                <input type="text" onChange={(e)=>{setNombre(e.target.value)}}/>
            </label>
            <label>
                Mensaje:
                <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
            </label>
            
            <br/>
            <button onClick={()=>{OnClickEnviar()}}>Enviar</button>

            <br/>
            {renderDatos}
        </div>
     );
}
 
export default Evaluation;
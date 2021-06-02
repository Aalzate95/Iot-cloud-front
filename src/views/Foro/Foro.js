import React, {useState} from 'react';

const Foro = () => {
  const [question,setQuestion] = useState('')
  const [tema, setTema] = useState(null)

  const OnClickEnviar = ()=>{
      alert(
          `Se envió la siguiente pregunta: ${question}`
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
          Tema:
              <select value={this.state.value} onChange={(e)=>{setTema(e.target.value)}}>
              <option value="Tema1">Tema1</option>
              <option value="Tema2">Tema2</option>
              <option value="Tema3">Tema3</option>
              <option value="Tema4">Tema4</option>
              </select>
          </label>
          <label>
              Mensaje:
              <textarea type="text" onChange={(e)=>{setQuestion(e.target.value)}}/>
          </label>
          
          <br/>
          <button onClick={()=>{OnClickEnviar()}}>Enviar</button>

          <br/>
      </div>
   );
} 
export default Foro;
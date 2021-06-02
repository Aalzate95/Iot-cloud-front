import React, {useState} from 'react';

const Foro = () => {
  const [question,setQuestion] = useState('')
  const [tema, setTema] = useState(null)
  const [questions] = useState([]);
  const [questionId,setQuestionId] = useState(0);
  let questionId = 0;

  const OnClickEnviar = ()=>{
    setQuestionId(questionId+=1);
    const q= {
        id: questionId,
        question: question,
        subject: tema
    }
    questions.push(q);
      alert(
          `Se envió la siguiente pregunta: ${question}`
      )
  }

  const listaDatos = [
      {nombre:"recurso1", descripcion:"lonadsjdansda", calificaciones:[12,34]},
      {nombre:"recurso3", descripcion:"dasdjnasdaknd", calificaciones:[13,43]}
  ]
  const temas = [{tema:"POO"},{tema:"Analisis de Algoritmos"}, {tema:"IA"}];

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
  });
  const renderTema = temas.map((x,index)=>{
    return(
    <option value={x.tema} key={index}>{x.tema}</option>
    )

  });

  return ( 
      <div>
          Aqui puedes realizar preguntas sobre los temas revisados
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <label>
          Tema:
              <select defaultValue = {tema} onChange={(e)=>{setTema(e.target.value)}}>
              {renderTema}
              </select>
          </label>
          <label>
              Pregunta:
              <textarea type="text" onChange={(e)=>{setQuestion(e.target.value)}}/>
          </label>
          
          <br/>
          <button onClick={()=>{OnClickEnviar()}}>Enviar</button>

          <br/>
      </div>
   );
} 
export default Foro;
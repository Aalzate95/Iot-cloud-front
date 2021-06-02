import React from 'react';
import './TableView.css'

/*
Componente que permite renderizar en una tabla contenido con un header fijo
    - Titulo
    - Descripción
    - Cursos
    - Tags
Parametros:
    - Requiere que le envien la data a renderizar como lista de objetos.
    - Listado de elementos seleccionados
    - Actualizador del listado de elementos seleccionados

Funcionalidades Pendientes:
    Paginador.
    Filtros de ordenamiento.
    Filtros de busqueda por:
        - Titulo
        - Tags
        - Cursos
*/

const TableView = ({data,selectedRows,updateSelectedList}) =>{

    const RenderRows = data.map((element)=>{
        return(
            <li className="table-row" key={element.id}>
                <div className="col0">
                    <input 
                        type="checkbox" 
                        value={element.id} 
                        checked={selectedRows.includes(element.id)} 
                        readOnly 
                        onClick={()=>{updateSelectedList(element.id)}}
                    />
                </div>
                <div className="col1 bold">{element.title}</div>
                <div className="col2">{element.description}</div>
                <div className="col3">
                    {element.courses.map((e,index)=>(<div key={index}>{e}</div>))}
                </div>
                <div className="col4 small bold">
                    {element.tags.map((e,index)=>(<div key={index}>{e}</div>))}
                </div>
            </li>
            )
    })
    
    return(
        <div className="TableView">
            <ul className="table-style">
                <li className="table-header">
                    <div className="col0"></div>
                    <div className="col1">Titulo</div>
                    <div className="col2">Descripción</div>
                    <div className="col3">Cursos</div>
                    <div className="col4">Tags</div>
                </li>
            </ul>
            <ul className="content-table-style">
                {data.length>0?RenderRows:<p>Sin datos</p>}
            </ul>
        </div>
        )
}
 
export default TableView;
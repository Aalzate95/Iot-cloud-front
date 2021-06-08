import React,{useState, useEffect} from 'react';
import './TableView.css'

/*
Componente que permite renderizar en una tabla contenido con un header fijo
    - Titulo
    - Descripción
    - Cursos
    - Tags
Parametros:
    - data -> Requiere que le envien la data a renderizar como lista de objetos.
    - selectedRows -> Listado de elementos seleccionados
    - updateSelectedList -> Actualizador del listado de elementos seleccionados
    - cantPerPage -> cantidad de elementos por pagina

Funcionalidades Pendientes:
    Filtros de ordenamiento.
    Filtros de busqueda por:
        - Titulo
        - Tags
        - Cursos
*/

const TableView = ({data,selectedRows,updateSelectedList,cantPerPage=5}) =>{

    const [currentPage, setCurrentPage] = useState(1)
    const [orderBy,setOrderBy] = useState(null)
    const [orderedList,setOrderedList] = useState([])

    useEffect(() => {
        setOrderedList(data)
      }, [data])

    /* const SortByTitle = ()=>{
        let newList = orderedList.sort(function(a,b){
            if(a.title>b.title){
                return -1
            }
            else if(a.title < b.title){
                return 1
            }
            else{return 0}
        })
        setOrderedList(newList)
    } */


    const handleChangePage =(e)=>{
        setCurrentPage(e)
    }

    const finalIndex = currentPage * cantPerPage;
    const firstIndex = finalIndex - cantPerPage;

    const elementsPerPages = Object.keys(orderedList).slice(firstIndex, finalIndex)
    const numberOfPages = [];

    for (let i = 1; i <= Math.ceil(Object.keys(orderedList).length / cantPerPage); i++) {
        numberOfPages.push(i);
    }

    const RenderRows = elementsPerPages.map((element, index) => {
        let content = orderedList[element];
        return(
            <li className="table-row" key={content.id}>
                <div className="col0">
                    <input 
                        type="checkbox" 
                        value={content.id} 
                        checked={selectedRows.includes(content.id)} 
                        readOnly 
                        onClick={()=>{updateSelectedList(content.id)}}
                    />
                </div>
                <div className="col1 bold">{content.title}</div>
                <div className="col2">{content.description}</div>
                <div className="col3">
                    {content.courses.map((e,index)=>(<div key={index}>{e}</div>))}
                </div>
                <div className="col4 small bold">
                    {content.tags.map((e,index)=>(<div key={index}>{e}</div>))}
                </div>
            </li>
            )
    })

    const renderNumberOfPages = numberOfPages.map(number => {
        return (
          <li
            style={{color:`${currentPage===number?"blue":"gray"}`,fontWeight:`${currentPage===number?"bold":"normal"}`}}
            key={number}
            id={number}
            onClick={(e)=>handleChangePage(number,e)}
          >
            {number}
          </li>
        );
      });
    
    return(
        <div className="TableView">
            <ul id="numeroPaginas">
                {renderNumberOfPages}
            </ul>
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
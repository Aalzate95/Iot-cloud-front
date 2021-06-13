import React,{useState,useEffect} from "react";
import "./Foro.css";
import { Link } from "react-router-dom";

const data = {
    prev:"",
    next:"",
    results:[
        {
            id:1,
            title:"Ingenieria de Software II",
            description:"Foro para el curso de Ingenieria de Software II de la ESPOL.",
            user:"Alexander Alzate",
            courses:[2,1],
            topics:[
                {
                    id:"",
                    title:"",
                    description:"",
                    user:"",
                    replies:[
                        {
                            id:"",
                            content:"",
                            creationDate:"",
                            updateDate:"",
                            deleted:"",
                            user:""
                        },
                        {
                            id:"",
                            content:"",
                            creationDate:"",
                            updateDate:"",
                            deleted:"",
                            user:""
                        }
                    ]
                    
                },
                {
                    title:"",
                    description:"",
                    creator:"",
                }
            ]
        }
    ]
};

const Foro = () => {
    const[foros, setForos] = useState([]);
    /* const history = useHistory(); */

    useEffect(() => {
        setForos(data.results);
      }, [data]);

    console.log(foros);

    return ( 
        <div className="Foro">
            <div>
                filtros de busqueda y ordenamiento
            </div>
            <ul className="table-style">
                <li className="table-header">
                    <div className="col0"></div>
                    <div className="col1">Titulo</div>
                    <div className="col2">Descripción</div>
                    <div className="col3">Creador</div>
                    <div className="col4">cursos</div>
                </li>
            </ul>
            <ul className="content-table-style">
                {
                    foros.map((foro,index)=>{
                        return(
                            <Link className="table-row" key={index} to={`/foro/${foro.id}`}>
                                <div className="col0"></div>
                                <div className="col1 bold">{foro.title}</div>
                                <div className="col2">{foro.description}</div>
                                <div className="col3">{foro.user}</div>
                                <div className="col4">{foro.courses}</div>
                            </Link>
                            );
                    })
                }
            </ul>
        </div>
     );
};
 
export default Foro;
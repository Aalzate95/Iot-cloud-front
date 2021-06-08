import React,{useState} from 'react';
import './Papers.css'
import { useHistory} from 'react-router-dom';


const CreatePaper = (props) => {
    const [title,setTitle]=useState('')
    const [description,setDescription] =useState('')
    const [authors,setAuthors] = useState([])
    const [courses,setCourses] = useState([])
    const [file, setFile] = useState(null)
    const [tags,setTags] = useState([])
    const history = useHistory();
/*     const location = useLocation(); */

    const CreateNewPaper = () =>{
        
        let newList = props.resourcesData/* location.state.papersData */
        let id = newList.results["papers"].length;
        newList.results["papers"].push({
                id,
                title, 
                description, 
                authors,
                courses,
                file,
                tags
            })
        props.setResourcesData(newList)
        /* location.setPapersData(newList) */
        history.push('/resources/papers')
    }

    const handleChangeSelect = (e)=>{
        let selection = Array.from(e.target.selectedOptions, item => item.value)
        setCourses(selection)
    }

    return ( 
        <div className="create-paper-form">
            <div className="go-back">
                <p onClick={()=>{history.push('/resources/papers')}}>Volver</p>
            </div>
            <h3>Formulario creación Paper</h3>
            <div className="form-content">
                <div className="content-top">
                    <label>
                        Titulo:
                        <input type="text" onChange={(e)=>{setTitle(e.target.value)}}/>
                    </label>

                    <label>
                        Descripción:
                        <textarea onChange={(e)=>{setDescription(e.target.value)}} name="textarea" rows="2" cols="50" placeholder="Describa brevemente el contenido del paper..."></textarea>
                    </label>
                </div>
                <div className="content-middle">
                    <label>
                        Autor(es/as):
                        <input type="text" onChange={(e)=>{setAuthors([`${e.target.value}`])}}/>
                    </label>

                    <div className="content-middle-select">
                        <label>Cursos:</label>
                        <select name="courses" id="courses" onChange={(e)=>{handleChangeSelect(e)}} multiple>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                        </select>
                    </div>
                </div>
                
                <div className="content-bottom">
                    <label>
                        Cargar Archivo:
                        <input type="file" onChange={(e)=>{setFile(e.target.value)}}/>
                    </label>
                    <label>
                        Tags:
                        <input onChange={(e)=>{setTags([`${e.target.value}`])}} type="text"/>
                    </label>
                </div>
            </div>

            <div className="btn-actions">
                <button className="btn-action" onClick={()=>{history.push('/resources/papers')}}>Cancelar</button>
                <button className="btn-action" onClick={()=>{CreateNewPaper()}}>Crear</button>

            </div>
            

        </div>
     );
}

 
export default CreatePaper;
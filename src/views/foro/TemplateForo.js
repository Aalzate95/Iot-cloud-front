import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import "./TemplateForo.css";
import data from "../../data/dataForo.json";

const RenderReplies = ({reply}) =>{
    const [isDeleted,setIsDeleted] = useState(reply.deleted)

    const handleDelete = () =>{
        setIsDeleted(!isDeleted)
        
    }
    return( 
        <div className="reply" style={{display:`${isDeleted?"none":"block"}`}}>
            <div className="reply-buttons">
                <button onClick={()=>{handleDelete()}}>Eliminar</button>
            </div>
            <p>@{reply.user} dice:</p>
            <p>{reply.content}</p>
        </div>
    );
 }

const RenderTopic = ({topic,forceUpdate}) =>{
    const [isHide,setIsHide] = useState(true)
    const [isOpened,setIsOpened] = useState(true)

    useEffect(() => {
        setIsOpened(topic.isOpened);
    }, [topic]);

    const HandleChangeIsOpened =() =>{
        setIsOpened(!isOpened)
        forceUpdate()
    }

    return(
        <div className="Topic">
            <div className="Topic-header">
                <h3>{topic.title}</h3>
                <div className="status">
                    <h3 style={{color:`${isOpened?"#54bb5d":"red"}`}}>{isOpened?"Abierto":"Cerrado"}</h3>
                    <label className="switch">
                        <input type="checkbox" checked={isOpened} onChange={()=>{HandleChangeIsOpened()}}/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
            <p>{topic.description}</p>
            <p>Autor: @{topic.user}</p>
            <button onClick={()=>{setIsHide(!isHide)}}>{isHide?"Mostrar":"Ocultar"}</button>
            <div className="Replies" style={{display:`${isHide?"none":"block"}`}}>
                {topic.replies.map((reply)=>{
                    return(
                            <RenderReplies
                                reply={reply}
                                key={reply.id}
                            />
                        )
                })}
                <div className="Answer" style={{display:`${isOpened?"inline":"none"}`}}>
                    <textarea placeholder="Responder ..."></textarea>
                    <div>
                        <label htmlFor="uploadImage" name="Image_Uploads">Cargar imagen: </label>
                        <input type="file" accept="image/*" id="uploadImage"/>
                        <button>Responder</button>
                    </div>
                </div>
              
            </div>
        </div>
    )
};



const TemplateForo = (props) => {
    const [topics,setTopics] = useState([]);

    const {id} = useParams();
    
    useEffect(() => {
        getTopicsData(data);
    }, [data]);

    const getTopicsData = (data) =>{
        data.results.map((foro)=>{
            if(foro.id==id){
               return setTopics(foro.topics);
            }
            return [];
        });
    };


    const RenderTopics = topics.map((topic)=>{
        return(
            <RenderTopic
                topic={topic}
                key={topic.id}
                forceUpdate={props.forceUpdate}
            />
            );
    });

    return ( 
        <div className="TemplateForo">
            <div>
                <a href="/foros">Volver</a>
            </div>
            <div>
                {RenderTopics}
            </div>
        </div>
     );
};
 
export default TemplateForo;
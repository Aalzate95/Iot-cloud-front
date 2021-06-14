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

const RenderTopic = ({topic}) =>{
    const [isHide,setIsHide] = useState(true)

    return(
        <div className="Topic">
            <h3>{topic.title}</h3>
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
                
                <textarea placeholder="Responder ..."></textarea>
                <button>Responder</button>
              
            </div>
        </div>
    )
};



const TemplateForo = () => {
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
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import "./TemplateForo.css";
import data from "../../data/dataForo.json";


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

    console.log(topics);

    const RenderReplies = (replie) =>{
        return( 
            <div key={replie.id} className="Replie">
                <p>@{replie.user} dice:</p>
                <p>{replie.content}</p>
            </div>
        );
     }

    const RenderTopic = (topic) =>{
        return(
            <div key={topic.id} className="Topic">
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <p>Autor: @{topic.user}</p>
                <div className="Replies">
                    {topic.replies.map((replie)=>{
                        return(
                                RenderReplies(replie)
                            )
                    })}
                    
                    <textarea placeholder="Responder ..."></textarea>
                    <button>Responder</button>
                  
                </div>
            </div>
        )
    };

    const RenderTopics = topics.map((topic)=>{
        return(
            RenderTopic(topic)
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
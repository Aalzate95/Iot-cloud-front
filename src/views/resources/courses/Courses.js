import React,{useState,useEffect} from "react";
import "./Courses.css";
import Videoscript from "../../../components/videoScript/Videoscript";
/* 
  Tengo una duda con respecto a los "cursos", estos siempre serán videos de Youtube?
*/

const Courses = (props) => {
  const [dataVideos,setDataVideos] = useState([]);

  useEffect(() => {
    setDataVideos(props.resourcesData.results["courses"]);
  }, [props.resourcesData]);

  const createVideos = dataVideos.map((video,index)=>{
      return(
          <Videoscript 
              data={video}
              key={index}
            />
          );
  });
  return ( 
    <div className="Courses">
      <div>
        <p>Filtros de busqueda</p>
      </div>
      <div className="Courses-videos">
        {createVideos}
      </div>
    </div>
   );
};
 
export default Courses;

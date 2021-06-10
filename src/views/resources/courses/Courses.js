import React,{useState,useEffect} from "react";
import "./Courses";
import Videoscript from "../../../components/videoScript/Videoscript";


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
    <div className="content">
        <div className="container-fluid">
          {createVideos}
        </div>
    </div>
   );
};
 
export default Courses;

/* export default class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: [],
    };
  }

  componentDidMount() {
    this.cargarVideos();
  }

  cargarVideos = () => {
    let videosKeys = Object.keys(DataVideos);
    this.setState({ keys: videosKeys });
  };

  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <Videoscript data={DataVideos} keys={this.state.keys} />
        </div>

      </div>
    );
  }
} */


import React from 'react';
import './Courses'
import DataVideos from "./local/videos.json";
import Videoscript from "../../components/courses/Videoscript";


export default class Courses extends React.Component {
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
          {/* <h1>Nimatron Anime</h1>           */}
          <Videoscript data={DataVideos} keys={this.state.keys} />
        </div>
      </div>
    );
  }
};
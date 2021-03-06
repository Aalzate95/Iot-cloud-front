import React from "react";
import "./Videoscript.css";

const Videoscript = (props) => {
  return ( 
    <div className="VideoScript">
        <div className="Card">
          <iframe
            src={props.data["src"]}
            className="card-img-top"
            alt="..."
            title={props.data["title"]}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="card-body">
            <h5 className="card-title">{props.data["title"]}</h5>
            <p className="card-text">
              <br />
              {props.data["subject"]}
              <br />
              <i>
                {props.data["author"]}
              </i>
            </p>
          </div>
        </div>

    </div>
   );
};
 
export default Videoscript;

/* export default class Videoscript extends React.Component {


  render() {
    const {keys, data} = this.props;
    return (
      <div className="content card-deck row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 justify-content-center">
        {keys.map((value, index) => {
          return (
            <div key={index}>
              <Card detalle={data[value]} />
            </div>
          );
        })}
      </div>
    );
  }
}
 */
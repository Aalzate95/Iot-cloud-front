import React from "react"

export default class Card extends React.Component{
    render(){
        return (
          <div className="card rounded col col-sm-12 mx-auto my-auto">
            <iframe
              src={this.props.detalle["src"]}
              className="card-img-top"
              alt="..."
              title={this.props.detalle["title"]}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="card-body">
              <h5 className="card-title">{this.props.detalle["title"]}</h5>
              <p className="card-text">
                <br />
                {this.props.detalle["oped"]}
                <br />{" "}
                <i>
                  <strong>"{this.props.detalle["songname"]}"</strong>
                  <br />
                  {this.props.detalle["artist"]}
                </i>
              </p>
            </div>
          </div>
        );
        }
}

import React from "react"
import Card from './Card'


export default class Videoscript extends React.Component {


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
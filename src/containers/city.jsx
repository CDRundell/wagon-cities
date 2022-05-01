import React, { Component } from 'react';


class City extends Component {
  render (props) {
    const style = {
      paddingLeft: "24px"
    };

    return (
      <div style={style}>
        <h1>{this.props.city.name}</h1>
      </div>
    )
  }
}

export default City;

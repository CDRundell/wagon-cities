import React, { Component } from 'react';

class CityList extends Component {
  render() {
    const style = {
      paddingLeft: "24px"
    };

    return (
      this.props.cities.map((item) => {
        return (
          <div key={item.slug} style={style}>
            <h1>{item.name}</h1>
          </div>
        );
      })
    );
  }
}


export default CityList;

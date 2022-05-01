import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setCities } from '../actions';
import City from './city';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }


  render() {
    return (
      <div className="cities">
        <ul>
          {this.props.cities.cities.map((city) => {
            return (
              <City city={city} key={city.slug} />
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);

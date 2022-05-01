import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class City extends Component {
  render (props) {
    const style = {
      paddingLeft: "24px"
    };

    return (
      <h2 onClick={() => this.props.setActiveCity(this.props.city)}> {this.props.city.name}</h2>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    activeCity: state
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);

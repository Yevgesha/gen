import React, { Component } from "react";
import { connect } from "react-redux";
import { API_URL } from "../api/index";
import { setInitState } from "../redux/actions/index";

const withAppInit = WrappedComponent =>
  class extends Component {
    state = { isDataLoaded: false };

    componentDidMount = async () => {
      await fetch(API_URL)
        .then(resp => resp.json())
        .then(data => this.props.setInitState(data));

      this.setState({ isDataLoaded: true });
    };

    render() {
      const { isDataLoaded } = this.state;

      return isDataLoaded && <WrappedComponent {...this.props} />;
    }
  };

const mapDispatchToProps = {
  setInitState
};

export default WrappedComponent =>
  connect(
    null,
    mapDispatchToProps
  )(withAppInit(WrappedComponent));

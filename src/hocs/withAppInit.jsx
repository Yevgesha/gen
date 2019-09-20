import React, { Component } from "react";
import { connect } from "react-redux";
import { API_URL } from "../api/index";
import { setInitState } from "../redux/actions/index";

const withAppInit = WrappedComponent =>
  class extends Component {
    state = { isDataLoaded: false, error: "" };

    fetchResolve = json => {
      this.props.setInitState(json);
      this.setState({ isDataLoaded: true });
    };

    fetchReject = error => {
      this.setState({ error: error.toString() });
    };

    componentDidMount = async () => {
      const { fetchResolve, fetchReject } = this;

      await fetch(API_URL)
        .then(resp => resp.json())
        .then(fetchResolve, fetchReject);
    };

    render() {
      const { isDataLoaded, error } = this.state;

      if (error) {
        return error;
      } else {
        return isDataLoaded ? (
          <WrappedComponent {...this.props} />
        ) : (
          "Loading..."
        );
      }
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

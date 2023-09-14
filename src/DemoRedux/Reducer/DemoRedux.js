import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";
import { connect } from "react-redux";

class DemoRedux extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container text-center mt-5">
        <button onClick={this.props.handleTang} className="btn btn-dark">
          +
        </button>
        <strong>{this.props.number}</strong>
        <button onClick={this.props.handleGiam} className="btn btn-dark">
          -
        </button>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    number: state.soLuong,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleTang: () => {
      let action = {
        type: "TANG",
        slTang: 111,
      };
      dispatch(action);

      console.log("tanggg");
    },
    handleGiam: () => {
      let action = {
        type: "GIAM",
        payLoad: 111,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);

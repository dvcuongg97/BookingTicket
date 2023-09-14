import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderXucXac = () => {
    let { mangXucXac } = this.props;
    return mangXucXac.map((xucXac, index) => {
      return (
        <img
          className="ml-2"
          style={{ width: "75px", height: "75px" }}
          key={index}
          src={xucXac.hinhAnh}
          alt={xucXac.hinhAnh}
        />
      );
    });
  };

  render() {
    return <div>{this.renderXucXac()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { mangXucXac: state.gameXucXacReducer.mangXucXac };
};

export default connect(mapStateToProps, null)(XucXac);

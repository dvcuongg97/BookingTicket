import React, { Component } from "react";
import { connect } from "react-redux";

class GamePlay extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning">{this.props.ketQua}</div>
        <div className="display-4 text-success">
          {" "}
          so ban choi: <span>{this.props.soBanChoi}</span>
        </div>
        <div className="display-4 text-primary">
          {" "}
          so ban thang: <span>{this.props.soBanThang}</span>{" "}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.gameOanXuXiReducer.ketQua,
    soBanThang: state.gameOanXuXiReducer.soBanThang,
    soBanChoi: state.gameOanXuXiReducer.soBanChoi,
  };
};
export default connect(mapStateToProps)(GamePlay);

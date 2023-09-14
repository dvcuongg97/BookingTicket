import React, { Component } from "react";
import { connect } from "react-redux";

class GamePlay extends Component {
  render() {
    let { taiXiu, soBanThang, tongSoBanChoi } = this.props;
    return (
      <div>
        <div className="display-4">
          BẠN CHỌN:{" "}
          <span className="text-secondary">{taiXiu ? "TÀI" : "XỈU"} </span>
        </div>

        <div className="display-4">
          Số Bàn Thắng: <span className="text-success">{soBanThang}</span>
        </div>

        <div className="display-4">
          Số Bàn Chơi: <span className="text-primary">{tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taiXiu: state.gameXucXacReducer.taiXiu,
    soBanThang: state.gameXucXacReducer.soBanThang,
    tongSoBanChoi: state.gameXucXacReducer.tongSoBanChoi,
  };
};
export default connect(mapStateToProps, null)(GamePlay);

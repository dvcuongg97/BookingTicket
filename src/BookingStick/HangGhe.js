import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../reducer/actions/movieBookingAction";

class HangGhe extends Component {
  // render ghe
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      // logic ghe da duoc dat
      let cssGheDaDat = null;
      let disable = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable = true;
      }
      // logic ghe co the dat
      let cssGheDangDat = null;
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          onClick={() => {
            this.props.btnDatGhe(ghe);
          }}
          key={index}
          disabled={disable}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  // so hang
  renderSoHang = () => {
    this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return (
        <button key={index} className="rowNumber">
          {hang.soGhe}
        </button>
      );
    });
  };
  // render hang ghe
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="ml-5">
          {this.props.hangGhe.hang}
          {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderGhe}
        </div>
      );
    }
  };
  render() {
    return (
      <div
        className="text-light text-center ml-5 mt-1"
        style={{ fontSize: "30px" }}
      >
        {this.props.hangGhe.hang} {this.renderGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.movieBookingReducer.danhSachGheDangDat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    btnDatGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);

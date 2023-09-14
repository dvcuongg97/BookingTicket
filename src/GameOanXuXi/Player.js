import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div className="playerGame">
        <div className="theThink pt-5">
          <img
            width={100}
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            alt="bao"
          />
        </div>
        <div className="speech-bubble"></div>
        <img width={250} src="./img/gameOanXuXi/player.png" alt="player" />

        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            // border cho item duoc chon
            let border = null;
            if (item.datCuoc) {
              border = {
                border: "5px solid red",
              };
            }
            return (
              <div className="col-4" key={index}>
                <button
                  onClick={() => {
                    this.props.btnDatCuoc(item.ma);
                  }}
                  style={border}
                  className="btnItem"
                >
                  <img width={75} src={item.hinhAnh} alt={item.hinhAnh} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.gameOanXuXiReducer.mangDatCuoc,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    btnDatCuoc: (maCuoc) => {
      let action = {
        type: "DAT_CUOC",
        maCuoc,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);

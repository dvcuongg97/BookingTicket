import React, { Component } from "react";
import { connect } from "react-redux";
import "./GameXucXac.css";
import XucXac from "./XucXac";
import GamePlay from "./GamePlay";

class GameXucXac extends Component {
  render() {
    return (
      <div className="game">
        <div className="title-game text-center mt-5 display-4">
          CyberSoft - Game Xúc Xắc
        </div>

        <div className="row text-center mt-5">
          {/* btn tài */}
          <div className="col-5">
            <button
              onClick={() => {
                this.props.datCuoc(true);
              }}
              className="btnGame"
            >
              TÀI
            </button>
          </div>
          <div className="col-2">
            <XucXac />
          </div>
          {/* btn xỉu */}
          <div className="col-5">
            <button
              onClick={() => {
                this.props.datCuoc(false);
              }}
              className="btnGame"
            >
              XỈU
            </button>
          </div>
        </div>

        <div className="gamePlay text-center">
          <GamePlay />

          {/* btn play game */}
          <button
            onClick={() => {
              this.props.playGame();
            }}
            className="btn btn-danger display-4 p-3"
          >
            Play Game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      let action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      dispatch(action);
    },
    // play game
    playGame: () => {
      let action = {
        type: "PLAY_GAME",
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(GameXucXac);

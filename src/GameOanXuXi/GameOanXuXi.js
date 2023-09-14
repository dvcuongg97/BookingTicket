import React, { Component } from "react";
import Player from "./Player";
import Computer from "./Computer";
import "./GameOanXuXi.css";
import GamePlay from "./GamePlay";
import { connect } from "react-redux";
import { clear } from "@testing-library/user-event/dist/clear";

class GameOanXuXi extends Component {
  render() {
    return (
      <div className="GameOanXuXi">
        <div className="row text-center mt-5">
          <div className="col-4 ">
            <Player />
          </div>
          <div className="col-4">
            <GamePlay />
            <button
              onClick={() => {
                this.props.btnPlayGame();
              }}
              className="btn btn-danger display-4 mt-5"
            >
              play game
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    btnPlayGame: () => {
      // let action = {
      //   type: "PLAY_GAME",
      // };
      // dispatch(action);
      let count = 10;
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "PLAY_GAME",
        });
        count++;
        if (count > 100) {
          clearInterval(randomComputerItem);
          // endgame
          dispatch({
            type: "END_GAME",
          });
        }
      }, 10);
    },
  };
};
export default connect(null, mapDispatchToProps)(GameOanXuXi);

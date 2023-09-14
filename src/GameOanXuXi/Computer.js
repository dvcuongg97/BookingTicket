import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    return (
      <div className="playerGame">
        <div className="theThink pt-5">
          <img
            width={100}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          width={250}
          src="./img/gameOanXuXi/playerComputer.png"
          alt="player"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.gameOanXuXiReducer.computer,
  };
};

export default connect(mapStateToProps)(Computer);

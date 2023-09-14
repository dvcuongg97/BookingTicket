import React, { Component } from "react";
import { connect } from "react-redux";
import ItemShoe from "./ItemShoe";

class ListShoe extends Component {
  renderListShoe = () => {
    let { shoeArr } = this.props;
    return shoeArr.map((item, index) => {
      return <ItemShoe item={item} key={index} />;
    });
  };
  render() {
    return <div className="row col-6">{this.renderListShoe()}</div>;
  }
}

let mapStateToProps = (state) => {
  return {
    shoeArr: state.shoeReducer.shoeArr,
  };
};
export default connect(mapStateToProps, null)(ListShoe);

import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_TO_CART, VIEW_DETAIL } from "../reducer/constant/shoeConstant";

class ItemShoe extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="card text-left col-3">
        <img className="card-img-top" src={item.image} alt />
        <div className="card-body ">
          <h4 className="card-title">{item.name}</h4>
          <div>
            <button
              className="btn btn-dark"
              onClick={() => {
                this.props.handleDetail(item);
              }}
            >
              Detail
            </button>
            <button
              onClick={() => this.props.btnAddToCart(item)}
              className="btn btn-info"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    btnAddToCart: (item) => {
      let action = {
        type: ADD_TO_CART,
        payload: item,
      };
      dispatch(action);
    },
    // handle detail
    handleDetail: (item) => {
      let action = {
        type: VIEW_DETAIL,
        payload: item,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemShoe);

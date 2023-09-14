import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_TO_CART, TANG_GIAM } from "../reducer/constant/shoeConstant";
import { GIAM_SO_LUONG, TANG_SO_LUONG } from "./data";

class CartShoe extends Component {
  //
  renderTable = () => {
    let { cart } = this.props;
    return cart.map((item, index) => {
      let { id, name, price, image, soLuong } = item;
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>
            <img width={"75px"} src={image} />
          </td>
          <td>{price}</td>
          <td>
            <button
              onClick={() => {
                this.props.handleTangGiam(id, TANG_SO_LUONG);
              }}
              className="btn btn-secondary"
            >
              +
            </button>
            {soLuong}
            <button
              onClick={() => {
                this.props.handleTangGiam(id, GIAM_SO_LUONG);
              }}
              className="btn btn-secondary"
            >
              -
            </button>
          </td>
          <td>{soLuong * price}</td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      );
    });
  };
  //
  render() {
    return (
      <div className=" col-6">
        <table className="table">
          <thead>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.shoeReducer.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleTangGiam: (id, option) => {
      let action = {
        type: TANG_GIAM,
        payload: {
          id,
          option,
        },
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartShoe);

import React, { Component } from "react";
import CartShoe from "./CartShoe";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";

export default class Ex_Shoe_Redux extends Component {
  // phương thức render
  render() {
    return (
      <div>
        <div className="row container-fluid">
          <ListShoe />
          <CartShoe />
        </div>
        <DetailShoe />
      </div>
    );
  }
}

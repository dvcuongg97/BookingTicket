import React, { Component } from "react";
import FormSinhVien from "./FormSinhVien";
import TableSinhVien from "./TableSinhVien";

export default class QuanLySinhVien extends Component {
  render() {
    return (
      <div className="container">
        <h3>Bai Tap Form</h3>
        <FormSinhVien />
        <TableSinhVien />
      </div>
    );
  }
}

import React, { Component } from "react";
import { connect } from "react-redux";

class TableSinhVien extends Component {
  // render table
  renderTable = () => {
    const { mangSinhVien } = this.props;
    return mangSinhVien.map((sinhvien, index) => {
      const { maSV, hoTen, soDienThoai, email } = sinhvien;
      return (
        <tr key={index}>
          <td>{maSV}</td>
          <td>{hoTen}</td>
          <td>{soDienThoai}</td>
          <td>{email}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr className="bg-dark text-light">
            <th>ma sinh vien</th>
            <th>ten sinh vien</th>
            <th>so dien thoai</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>{this.renderTable()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien,
  };
};
export default connect(mapStateToProps)(TableSinhVien);

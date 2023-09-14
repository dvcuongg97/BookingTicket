import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../reducer/actions/movieBookingAction";
import { HUY_GHE } from "../reducer/constant/movieBookingTypes";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>{" "}
          <span style={{ fontSize: "30px", color: "#fff" }}>ghế được chọn</span>
          <br />
          <button className="gheDangChon"></button>{" "}
          <span style={{ fontSize: "30px", color: "#fff" }}>ghế được chọn</span>
          <br />
          <button className="gheTrong"></button>{" "}
          <span style={{ fontSize: "30px", color: "#fff" }}>ghế được chọn</span>
          <br />
        </div>

        <div className="mt-5">
          <table class="table" border={2}>
            <thead>
              <tr className="text-light" style={{ fontSize: "1.2rem" }}>
                <th>ghế</th>
                <th>giá</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr
                    key={index}
                    className="text-info"
                    style={{ fontSize: "1.1rem" }}
                  >
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                        className="btn btn-danger"
                      >
                        Huy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tbody>
              <tr className="text-danger">
                <td></td>
                <td>Thanh Tien</td>
                <td>
                  {this.props.danhSachGheDangDat
                    .reduce((tongTien, gheChon, index) => {
                      return (tongTien += gheChon.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.movieBookingReducer.danhSachGheDangDat,
  };
};
export default connect(mapStateToProps)(ThongTinDatGhe);

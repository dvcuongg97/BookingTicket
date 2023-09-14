import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import dataDanhSachGhe from "./danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BookingTicket extends Component {
  // render danh sach ghe
  renderDSGhe = () => {
    return dataDanhSachGhe.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: `url(./img/bookingStick/bgmovie.jpg)`,
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-light display-4 mt-3">
                  ĐẶT VÉ XEM PHIM CYBERLEARN
                </div>
                <div style={{ fontSize: "1.5rem" }} className="mt-3 text-light">
                  Màn Hình
                </div>
                {/* screen */}
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                </div>
                {/* danhsachghe */}
                {this.renderDSGhe()}
              </div>
              <div className="col-4  mt-5">
                <div className="text-light" style={{ fontSize: "40px" }}>
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

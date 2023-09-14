import React, { Component } from "react";
import { connect } from "react-redux";
import "./BurgerCSS.css";

class BaiTapBurger extends Component {
  // // render breadmid
  renderBreadMid = () => {
    let { burger } = this.props;
    let content = [];
    for (let propsBurger in burger) {
      let burgerMid = [];
      for (let i = 0; i < burger[propsBurger]; i++) {
        burgerMid.push(<div key={i} className={propsBurger}></div>);
      }
      content.push(burgerMid);
    }
    return content;
  };
  // render menu
  renderMenu = () => {
    let { burger, menu } = this.props;
    let content = [];
    for (let propsMenu in menu) {
      content.push(
        <tr>
          <td style={{ textTransform: "capitalize" }}>{propsMenu}</td>
          <td>
            <button
              onClick={() => {
                this.props.changeBreadMid(propsMenu, 1);
              }}
              className="btn btn-primary"
            >
              +
            </button>
            {burger[propsMenu]}
            <button
              onClick={() => {
                this.props.changeBreadMid(propsMenu, -1);
              }}
              className="btn btn-primary"
            >
              -
            </button>
          </td>
          <td>{menu[propsMenu]}</td>
          <td>{menu[propsMenu] * burger[propsMenu]}</td>
        </tr>
      );
    }
    return content;

    // return Object.entries(menu).map(([propsMenu, price], index) => {
    //   return (
    //     <tr key={index}>
    //       <td style={{ textTransform: "capitalize" }}>{propsMenu}</td>
    //       <td>{burger[propsMenu]}</td>
    //       <td>{price}</td>
    //     </tr>
    //   );
    // });
  };
  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-success">Bài Tập Burger CyberSoft</h3>
        <div className="row">
          <div className="col-7">
            <h3 className="text-center text-danger">Burger của bạn</h3>
            <div className="breadTop"></div>
            {this.renderBreadMid()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-5">
            <h3 className="text-center">Menu Table</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Choice</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>{this.renderMenu()}</tbody>
              <tfoot></tfoot>
              <tr>
                <td colSpan="2"></td>
                <td>Amount Total</td>
                <td>{this.props.total}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.burgerReducer.burger,
    menu: state.burgerReducer.menu,
    total: state.burgerReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeBreadMid: (propsBurger, amount) => {
      let action = {
        type: "CHANGE_BREAD_MID",
        payload: {
          propsBurger,
          amount,
        },
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BaiTapBurger);

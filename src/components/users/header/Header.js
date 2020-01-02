import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GetCategoryAPI, SearchProductsAPI } from "../../../actions/ActionUs";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }
  
  componentDidMount() {
    this.props.getcate();
    // if (sessionStorage.getItem("TOKEN")){
    //   this.setState({
    //     isLoggedIn: true
    //   });
    // } 
  }
  logout = () => {
    sessionStorage.removeItem("TOKEN");
  };
  
  
  showcate = category => {
    let result = null;
    if (category.length > 0) {
      result = category.map((item, index) => {
        return (
          <Link
            className="dropdown-item"
            to="/"
            key={index}
            onClick={() => this.props.searchproduct(item.tenloai)}
          >
            {item.tenloai}
          </Link>
        );
      });
    }
    return result;
  };
  render() {
    const isLoggedIn = this.props.checklogin;
    let button;
    
    if (isLoggedIn) {
        button = (
          <div className="floatR">
            <ul className="ul_giohang navbar-nav">
              <li className="nav-item ">
                <Link to="/giohang" className="linkgiohang">
                  <i
                    className="fa fa-shopping-cart"
                    style={{ fontSize: "36px" }}
                  ></i>
                </Link>
              </li>
              <li className="nav-item nav-item1">
                <Link
                  to="/profiles"
                  style={{ border: "none" }}
                  className="linkprofile"
                >
                  Hồ Sơ
                </Link>
              </li>
              <li className="nav-item nav-item1">
                <button to="/" style={{ border: "none" }} onClick={()=>this.logout()}>
                  Đăng Xuất
                </button>
              </li>
            </ul>
          </div>
        );
      } else {
      button = (
        <div className="floatR">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/dangnhap" className="linkapp" >
                Đăng nhập
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dangky" style={{ border: "none" }}>
                Đăng ký
              </Link>
            </li>
          </ul>
        </div>
      );
    }
    return (
      <header>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Trang Chủ <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sản Phẩm
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  {this.showcate(this.props.category)}
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">{button}</form>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    category: state.UsCategory,
    checklogin: state.UsCheckLoginMenu
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getcate: () => {
      dispatch(GetCategoryAPI());
    },
    searchproduct: value => {
      dispatch(SearchProductsAPI(value));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);

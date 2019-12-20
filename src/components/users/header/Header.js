import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  logout=()=>{
    sessionStorage.removeItem('TOKEN');
  }
  render() {
    let button;
    if (sessionStorage.getItem("TOKEN")) {
      button = (
          <ul className="ul_giohang">
            <li className="nav-item">
              <Link to="/giohang">
                {/* <img src="/img-cart.jpg" alt="" style={{width:'10%'}}/> */}
                
                <i className="fa fa-shopping-cart" style={{fontSize:"36px"}}></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profiles" style={{ border: "none" }}>
                Hồ Sơ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" style={{ border: "none" }} onClick={this.logout}>
                Đăng Xuất
              </Link>
            </li>
          </ul>
      );
    } else {
      button = (
        <div className="login_register">
          <ul>
            <li>
              <Link to="/dangnhap">Đăng nhập</Link>
            </li>
            <li>
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
        <nav className="">
          <ul style={{marginRight:"auto"}}>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <a href="true" className="active">
                Sản phẩm
              </a>
            </li>
            <li>
              <a href="true">Tin tức</a>
            </li>
            <li>
              <a href="true">Giới thiệu</a>
            </li>
            <li>
              <a href="true" style={{ border: "none" }}>
                Liên hệ
              </a>
            </li>
            {button}
          </ul>
          
        </nav>
      </header>
    );
  }
}

export default Header;

import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <a href>Trang chủ</a>
            </li>
            <li>
              <a href className="active">
                Sản phẩm
              </a>
            </li>
            <li>
              <a href>Tin tức</a>
            </li>
            <li>
              <a href>Giới thiệu</a>
            </li>
            <li>
              <a href style={{ border: "none" }}>
                Liên hệ
              </a>
            </li>
          </ul>
          <div className="login_register">
            <ul>
              <li>
                <a href="login.html">Đăng nhập</a>
              </li>
              <li>
                <a href="register.html" style={{ border: "none" }}>
                  Đăng ký
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;

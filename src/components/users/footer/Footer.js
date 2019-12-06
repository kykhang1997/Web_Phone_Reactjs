import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div id="footer-content">
          <li>
            <h2>CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ BẢO KHANG</h2>
            <p>Địa chỉ: 79 Quang Trung, Quận Hải Châu, TP.Đà Nẵng</p>
            <p>SĐT: 0123456789</p>
            <p>Email: abc@gmail.com</p>
            <p>http://www.abc.com</p>
          </li>
          <li>
            <h2>HỖ TRỢ KHÁCH HÀNG</h2>
            <a href>
              <p>Quy định đổi trả</p>
            </a>
            <a href>
              <p>Quy định giao hàng</p>
            </a>
            <a href>
              <p>Hình thức thanh toán</p>
            </a>
            <a href>
              <p>Quy định bảo hành</p>
            </a>
          </li>
          <li>
            <h2>THÔNG TIN</h2>
            <a href>
              <p>Về chúng tôi</p>
            </a>
            <a href>
              <p>Tuyển dụng</p>
            </a>
            <a href>
              <p>Liên hệ</p>
            </a>
            <a href>
              <p>Trợ giúp</p>
            </a>
          </li>
        </div>
        <div id="footer-bottom">
          <p>Copyright © 2019 by Bảo Khang. All right reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;

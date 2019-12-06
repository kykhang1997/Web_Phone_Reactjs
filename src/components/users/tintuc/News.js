import React, { Component } from "react";

export class News extends Component {
  render() {
    return (
      <aside>
        <nav id="nav">
          <div id="header">
            <h1>LIÊN KẾT KHÁC:</h1>
            <a href="http://facebook.com">
              {/* <img src="../css/facebook.png" title="Facebook" /> */}
            </a>
            <a href="http://youtube.com">
              {/* <img src="../css/youtube.png" title="Youtube" /> */}
            </a>
            <a href="http://twitter.com">
              {/* <img src="../css/twitter.png" title="Twitter" /> */}
            </a>
          </div>
          <div id="main">
            <h1>TIN TỨC MỚI NHẤT</h1>
            <li>
              <a href="https://shopdidong.vn/tren-tay-oppo-f9-man-hinh-giot-nuoc-la-mat-co-sac-nhanh-vooc">
                {/* <img src="../css/OPPO-F9.jpg" title="Oppo-F9" /> */}
                <h4>
                  TRÊN TAY OPPO F9: MÀN HÌNH “GIỌT NƯỚC” LẠ MẮT, CÓ SẠC NHANH
                  VOOC
                </h4>
              </a>
              <span>Ngày đăng: 06/09/2019</span>
            </li>
            <li>
              <a href="https://shopdidong.vn/cuoc-chien-nghin-do-chon-galaxy-note-9-hay-iphone-x">
                {/* <img src="../css/GALAXY-NOTE-9.jpg" title="GALAXY-NOTE-9" /> */}
                <h4>CUỘC CHIẾN NGHÌN ĐÔ: CHỌN GALAXY NOTE 9 HAY IPHONE X?</h4>
              </a>
              <span>Ngày đăng: 06/09/2019</span>
            </li>
            <li>
              <a href="https://shopdidong.vn/danh-gia-sony-xperia-xz2-compact-be-hat-tieu-sieu-khoe-chup-anh-dep-xau-trai-de-noi-nong">
                {/* <img src="../css/XPERiA-X72.jpg" title="XPERA-X72" /> */}
                <h4>
                  ĐÁNH GIÁ SONY XPERIA XZ2 COMPACT: BÉ HẠT TIÊU SIÊU KHỎE, CHỤP
                  ẢNH ĐẸP, "XẤU TRAI", DỄ "NỔI NÓNG"
                </h4>
              </a>
              <span>Ngày đăng: 06/09/2019</span>
            </li>
            <li>
              <a href="https://shopdidong.vn/cuoc-chien-nghin-do-chon-galaxy-note-9-hay-iphone-x">
                {/* <img src="../css/iphone-x.jpg" title="XPERA-X72" /> */}
                <h4>CUỘC CHIẾN NGHÌN ĐÔ: CHỌN GALAXY NOTE 9 HAY IPHONE X?</h4>
              </a>
              <span>Ngày đăng: 06/09/2019</span>
            </li>
          </div>
        </nav>
      </aside>
    );
  }
}

export default News;

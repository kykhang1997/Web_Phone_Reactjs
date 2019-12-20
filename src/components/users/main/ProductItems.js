import React, { Component } from "react";
import { Link } from "react-router-dom";
export class ProductItems extends Component {
  render() {
    let { hinhanh, giadexuat, giamgia, tensp, id } = this.props.sanpham;
    return (
      <div className="product-item">
        <Link to={`/sanpham/${id}`}>
          <img src={hinhanh} alt="asha 206" />

          <span className="sale">{giamgia}%</span>

          <h2 className="name">{tensp}</h2>

          <div className="price">
            <span className="price-new"> {this.numberFormat(giadexuat)} <sup>đ</sup></span>
            <span className="price-old" />
          </div>
          <div className="action">
            <button>Mua</button>
          </div>
        </Link>
      </div>
    );
  }
  numberFormat = value => {
    var result = value.toLocaleString();
    return result;
  };
}

export default ProductItems;

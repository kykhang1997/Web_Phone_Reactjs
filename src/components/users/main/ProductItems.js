import React, { Component } from "react";
import { Link } from "react-router-dom";
export class ProductItems extends Component {
  render() {
    let { hinhanh, giadexuat, giamgia, tensp, id } = this.props.sanpham;
    return (
      <div className=" col-xs-12 col-sm-3 text-center">
        <div className="product-item">
          <Link to={`/sanpham/${id}`}>
            <img src={hinhanh} alt={tensp} className="img-fluid" />
            <div className='sale'>
              <span >{giamgia}%</span>
            </div>
            
            
            <h2 className="name">{tensp}</h2>

            <div className="price">
              <span className="price-new">
                {" "}
                {this.numberFormat(giadexuat)} <sup>đ</sup>
              </span>
              <span className="price-old" />
            </div>
            <div className="action">
              <button type="button" className="btn btn-primary">
                Mua
              </button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
  numberFormat = value => {
    var result = value.toLocaleString();
    return result;
  };
}

export default ProductItems;

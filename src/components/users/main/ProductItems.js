import React, { Component } from "react";

export class ProductItems extends Component {
  render() {
    return (
      <div className="product-item">
        <a href>
          <img src="../img/asha206.jpg" alt="asha 206" />
        </a>
        <span className="sale">0%</span>
        <a href>
          <h2 className="name">NOKIA ASHA 206</h2>
        </a>
        <div className="price">
          <span className="price-new">7.039.500đ</span>
          <span className="price-old" />
        </div>
        <div className="action">
          <button>Mua</button>
        </div>
      </div>
    );
  }
}

export default ProductItems;

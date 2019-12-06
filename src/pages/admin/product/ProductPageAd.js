import React, { Component } from "react";
import ProductList from "../../../components/admin/main/ProductList";

export class ProductPageAd extends Component {
  render() {
    return (
      <div id="content">
        <div id="form_search">
          <form action>
            <input type="text" />
            <button id="product_search">Tìm sản phẩm</button>
            <button id="product_search">Thêm Mới</button>
          </form>
        </div>
        <ProductList/>
      </div>
    );
  }
}

export default ProductPageAd;

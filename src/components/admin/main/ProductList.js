import React, { Component } from "react";
import ProductListItem from "./ProductListItem";

export class ProductList extends Component {
  render() {
    return (
      
        <table id="product" border={1} cellSpacing={0}>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Tên sản phẩm</th>
              <th>Tình trạng</th>
              <th colSpan={2}>Quản lý</th>
            </tr>
            <ProductListItem/>
          </tbody>
        </table>

    );
  }
}

export default ProductList;

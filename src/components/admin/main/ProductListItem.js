import React, { Component } from "react";

export class ProductListItem extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>Iphone</td>
        <td>Kích hoạt</td>
        <td>
          <a href="edit_product.html">Chỉnh sửa</a>
        </td>
        <td>
          <a href>Xóa</a>
        </td>
      </tr>
    );
  }
}

export default ProductListItem;

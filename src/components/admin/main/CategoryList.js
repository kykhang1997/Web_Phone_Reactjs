import React, { Component } from "react";
import CategoryListItem from "./CategoryListItem";

export class CategoryList extends Component {
  render() {
    return (
      <table id="product" border={1} cellSpacing={0}>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Tên loại sản phẩm</th>
            <th>Tình trạng</th>
            <th colSpan={2}>Quản lý</th>
          </tr>
          <CategoryListItem/>
        </tbody>
      </table>
    );
  }
}

export default CategoryList;

import React, { Component } from "react";
import CategoryList from "../../../components/admin/main/CategoryList";
import {Link} from 'react-router-dom';

export class CategoryPageAd extends Component {
  render() {
    return (
      <div id="content">
        <div id="form_search">
          <form>
            <input type="text" />
            <button id="product_type_search">Tìm loại sản phẩm</button>
            <Link to='/admin/category/add' >Thêm Mới</Link>
          </form>
        </div>
        <CategoryList/>
      </div>
    );
  }
}


export default CategoryPageAd;

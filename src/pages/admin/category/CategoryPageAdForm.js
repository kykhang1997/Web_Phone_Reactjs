import React, { Component } from "react";

export class CategoryPageAdForm extends Component {
  render() {
    return (
      <div id="content">
        <form>
              <tr>
                <th colSpan={2}>Thêm Loại Sản Phẩm</th>
              </tr>
              <tr>
                <td>Tên loại sản phẩm: </td>
                <td>
                  <input type="text" id="add_product" />
                </td>
              </tr>
              <tr>
                <td>Tình trạng</td>
                <td>
                  <input
                    type="checkbox"
                    defaultValue="active_product"
                    id="active_product"
                    defaultChecked
                  />
                  Kích hoạt
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button type="submit" className="btn btn-primary">
                    Lưu Lại
                  </button>
                </td>
              </tr>
           
          </form>
      </div>
    );
  }
}

export default CategoryPageAdForm;

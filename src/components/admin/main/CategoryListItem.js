import React, { Component } from 'react';
import {Link } from 'react-router-dom';
export class CategoryListItem extends Component {
    render() {
        return (
            <tr>
            <td>1</td>
            <td>NOKIA ASHA 206</td>
            <td>Kích hoạt</td>
            <td>
              <Link to="/admin/category/add">Chỉnh sửa</Link>
            </td>
            <td>
              <Link to='/admin/category'>Xóa</Link>
            </td>
          </tr>
        );
    }
}

export default CategoryListItem;

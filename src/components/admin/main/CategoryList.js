import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CategoryList extends Component {
  render() {
    let { item, index } = this.props;
    return (
      <tbody className="table-hover table-bordered">
        <tr>
          <td>{index + 1}</td>
          <td>{item.tenloai}</td>
          <td>
            <Link to={`/admin/category/${item.id}/edit`} className='btn btn-outline-success'>Chỉnh sửa</Link>
          </td>
          <td>
            <button className='btn btn-outline-danger' onClick={()=>this.del(item.id)}>Xóa</button>
          </td>
        </tr>
      </tbody>
    );
  }
  del  = (id) => {
    let valid = true
    if(confirm('Bạn Có Muốn Xoá')){ //eslint-disable-line
      valid = true;
      this.props.delcategory(id)
    } else {
      valid = false
    }
    return valid
  }
  
}

export default CategoryList;

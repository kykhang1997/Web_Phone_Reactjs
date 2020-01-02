import React, { Component } from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
export class ProductListItem extends Component {
  
  render() {


    let { item, index } = this.props;
    var statusName = item.tinhtrang ? "Còn Hàng" : "Hết Hàng";
    var statusClass = item.tinhtrang ? "warning" : "danger";
    
    return (
      <tbody className="table-hover table-bordered">
        <tr>
          <td>{index + 1}</td>
          <td>{item.tensp}</td>
          <td>
            <img src={item.hinhanh} alt="" className="img-sanpham" />
          </td>
          <td>
            <NumberFormat
              value={item.giadexuat}
              displayType={"text"}
              thousandSeparator={true}
              renderText={value => value}
            />
            {""} VND
          </td>
          <td>{item.giamgia}%</td>
          <td>
            <NumberFormat
              value={item.gia}
              displayType={"text"}
              thousandSeparator={true}
              renderText={value => value}
            />
            {""} VND
          </td>
          {/* <td></td> */}
          <td>{item.tenloaisp}</td>
          <td>{item.noidung}</td>
          <td>
            <span className={`badge badge-pill badge-${statusClass}`}>
              {statusName}
            </span>
          </td>
          <td>
            <Link
              to={`/admin/product/${item.id}/edit`}
              className="btn btn-outline-success"
            >
              Chỉnh sửa
            </Link>
          </td>
          <td>
            <button
              className="btn btn-outline-danger"
              onClick={() => this.del(item.id)}
            >
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    );
  }


  del = id => {
    let valid = true;
    if (confirm("Bạn Có Muốn Xoá")) {  //eslint-disable-line
      valid = true;
      this.props.delsanpham(id);
    } else {
      valid = false;
    }
    return valid;
  };
}

export default ProductListItem

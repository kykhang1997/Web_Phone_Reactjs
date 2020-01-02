import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
export class BillList extends Component {
  render() {
    // console.log(this.props.item);
    let { item, index } = this.props;
    var statusName = item.tinhtrang ? "Đã Chuyển" : "Chưa Nhận";
    var statusClass = item.tinhtrang ? "warning" : "danger";
    return (
      <tbody className="table-hover table-bordered">
        <tr>
          <td>{index + 1}</td>
          <td>{item.thongtin.email}</td>
          <td>{item.thongtin.tennguoinhan}</td>
          <td>{item.thongtin.diachinhan}</td>
          <td>{item.thongtin.phone}</td>
          <tr>
            <td>Tên Sản Phẩm</td>
            <td>Số Lượng</td>
            <td>Giá</td>
          </tr>
          {this.showCart(item.cart)}
          <td>
            <NumberFormat
              value={item.tongtien}
              displayType={"text"}
              thousandSeparator={true}
              renderText={value => value}
            />
            {""} VND
          </td>
          <td>
            <Moment format="DD/MM/YYYY">{item.thongtin.ngaytao}</Moment>
          </td>
          <td>
            <span className={`badge badge-pill badge-${statusClass}`}>
              {statusName}
            </span>
          </td>
          <td>
            <Link
              to={`/admin/bill/${item.id}/edit`}
              className="btn btn-outline-success"
            >
              Chỉnh sửa
            </Link>
          </td>
        </tr>
      </tbody>
    );
  }
  showCart = cart => {
    let result = null;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.sanpham.tensp}</td>
            <td>{item.count}</td>
            <td>
              <NumberFormat
                value={item.count * item.sanpham.gia}
                displayType={"text"}
                thousandSeparator={true}
                renderText={value => value}
              />
              {""} VND
            </td>
          </tr>
        );
      });
    }
    return result;
  };
}

export default BillList;

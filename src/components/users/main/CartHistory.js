import React, { Component } from "react";
import Moment from "react-moment";
import NumberFormat from "react-number-format";

export class CartHistory extends Component {
  render() {
    console.log(this.props.item);
    // console.log(this.props.index);
    let { item, index } = this.props;
    var statusName = item.tinhtrang ? "Đã Chuyển" : "Chưa Nhận";
    var statusClass = item.tinhtrang ? "warning" : "danger";
    return (
      <tr>
        <td className="carthistory-td">{index + 1}</td>
        <td className="carthistory-td">{item.thongtin.tennguoinhan}</td>
        <td className="carthistory-td">{item.thongtin.phone}</td>
        <td className="carthistory-td">{item.thongtin.diachinhan}</td>
        <td className="carthistory-td">
          <Moment format='DD/MM/YYYY' >{item.thongtin.ngaytao}</Moment>
        </td>
        <td className="carthistory-td" >
          <td className="carthistory-td" style={{width:'100%', bordertop: "1px solid #dee2e6"}}>Tên Sản Phẩm</td>
          <td className="carthistory-td">Số Lượng </td>
          <td className="carthistory-td">Giá</td>
          {this.showcart(item.cart)}
        </td>
        <td className="carthistory-td"><NumberFormat
              value={item.tongtien}
              displayType={"text"}
              thousandSeparator={true}
              renderText={value => value}
            />
            {""} VND</td>
        <td className="carthistory-td">
        <span className={`badge badge-pill badge-${statusClass}`}>
              {statusName}
            </span>
        </td>
      </tr>
    );
  }
  
  showcart = cart => {
    var result = null;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <tr key={index} style={{height:'100%'}}>
            <td className="carthistory-td" >{item.sanpham.tensp}</td>
            <td className="carthistory-td">{item.count}</td>
            <td className="carthistory-td"><NumberFormat
                value={item.count * item.sanpham.gia}
                displayType={"text"}
                thousandSeparator={true}
                renderText={value => value}
              />
              {""} VND</td>
          </tr>
        );
      });
    }
    return result;
  };
}

export default CartHistory;

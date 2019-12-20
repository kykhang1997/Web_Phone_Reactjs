import React, { Component } from "react";
import Moment from "react-moment";
export class CartHistory extends Component {
  render() {
    // console.log(this.props.item);
    // console.log(this.props.index);
    let { item, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{item.thongtin.tennguoinhan}</td>
        <td>{item.thongtin.phone}</td>
        <td>{item.thongtin.email}</td>
        <td>{item.thongtin.diachinhan}</td>
        <td>
          <Moment date={item.thongtin.ngaytao} />
        </td>
        <td>
          <td>tên Sản Phẩm</td>
          <td>Số Lượng </td>
          <td>Giá</td>
          {this.showcart(item.cart)}
        </td>
        <td>{item.tongtien}</td>
        <td>{item.thongtin.tinhtrang}</td>
      </tr>
    );
  }
  showamount  = (count,price) => {
      var result = count*price;
      return result;
  }
  
  showcart = cart => {
    var result = null;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.sanpham.tensp}</td>
            <td>{item.count}</td>
            <td>{this.showamount(item.count,item.sanpham.gia)}</td>
          </tr>
        );
      });
    }
    return result;
  };
}

export default CartHistory;

import React, { Component } from "react";
import NumberFormat from "react-number-format";

export class Cart extends Component {
  render() {
      // console.log(this.props.cart);

    return (
      <table className="table ">
        <thead>
          <tr>
            <th></th>
            <th>TÊN SẢN PHẨM</th>
            <th>GIÁ</th>
            <th>SỐ LƯỢNG</th>
            <th>THÀNH TIỀN</th>
            <th>XOÁ</th>
          </tr>
        </thead>
        <tbody>{this.props.children}</tbody>
        <tfoot>
          <tr>
            <th colSpan={4} className="footerTC">
              Tổng tiền:
            </th>
            <td>
              <NumberFormat
                value={this.showTotalAmount(this.props.cart)}
                displayType={"text"}
                thousandSeparator={true}
                renderText={value => value}
              />
              <sup>đ</sup>
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
  showTotalAmount = item => {
    var total = 0;
    if (item.length > 0) {
      for (var i = 0; i < item.length; i++) {
        total += item[i].sanpham.gia * item[i].count;
      }
    }
    return total;
  };
}

export default Cart;

import React, { Component } from "react";

export class CartTotal extends Component {
  render() {
    //   console.log(this.props);
      let {item} = this.props;
    return (
      <tfoot>
        <tr>
          <th colSpan={4} className="footerTC">
            Tổng tiền:
          </th>
          <td>
            {this.showTotalAmount(item)}
            <sup>đ</sup>
          </td>
        </tr>
      </tfoot>
    );
  }
  
  
}

export default CartTotal;

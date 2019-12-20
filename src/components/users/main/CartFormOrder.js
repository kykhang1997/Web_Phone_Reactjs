import React, { Component } from "react";
import Moment from 'react-moment';

export class CartFormOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      tennguoinhan:'',
      phone:'',
      diachinhan:'',
      ngaytao:'',
      tinhtrang:''
    };
  }
  handleOnChange = e => {
    switch (e.target.name) {
      case "tennguoinhan":
        this.setState({
          ...this.state,
          tennguoinhan: e.target.value
        });
        break;
      case "phone":
        this.setState({
          ...this.state,
          phone: e.target.value
        });
        break;
      case "diachinhan":
        this.setState({
          ...this.state,
          diachinhan: e.target.value
        });
        break;
      default:
        break;
    }
  };

  render() {
    // console.log(JSON.parse(sessionStorage.getItem('TOKEN')));
    let { id,diachinhan,phone,tennguoinhan,ngaytao,tinhtrang } = this.state;
    let email = JSON.parse(sessionStorage.getItem('TOKEN'));
    let { cart } = this.props;
    let tongtien = this.total(cart);
    let date = new Date();
    let datetime = <Moment date={date}/>
    let dateformat = datetime.props.date;
    console.log(dateformat);
    
    let cartapi ={
      email,
      diachinhan,
      phone,
      tennguoinhan,
      ngaytao:dateformat,
      tinhtrang
    }
    let bill = {
      id,
      thongtin:cartapi,
      cart,
      tongtien
    };
    return (
      <div id="thongtin_khachhang">
        <h2>Thông tin khách hàng</h2>
        <label>Họ và tên:</label>
        <input
          type="text"
          placeholder="Nhập họ và tên"
          name="tennguoinhan"
          onChange={this.handleOnChange}
        />
        <br />
        <label>Số điện thoại:</label>
        <input
          type="text"
          placeholder="Nhập số điện thoại"
          onChange={this.handleOnChange}
          name="phone"
        />
        <br />
        <label>Địa chỉ nhận:</label>
        <input
          type="text"
          placeholder="Địa chỉ nhận"
          onChange={this.handleOnChange}
          name="diachinhan"
        />
        <br />
        <label>&nbsp;</label>
        <input
          type="button"
          id="thanh_toan"
          value="THANH TOÁN"
          onClick={() => this.addbill(bill)}
        />
      </div>
    );
  }
  
  addbill = sanpham => {
    // comfim('Mua Hàng Thành Công') //eslint-disable-line
    this.props.addbillapi(sanpham);
    localStorage.removeItem('CART');
    this.props.history.push('/')
  };
  total = item => {
    var total = 0;
    if (item.length > 0) {
      for (var i = 0; i < item.length; i++) {
        total += item[i].sanpham.gia * item[i].count;
      }
    }
    return total;
  };
}

export default CartFormOrder;

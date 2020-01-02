import React, { Component } from "react";

export class CartFormOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      tennguoinhan: "",
      phone: "",
      diachinhan: "",
      tinhtrang: "",
      errors: {
        tennguoinhan: "",
        phone: "",
        diachinhan: ""
      }
    };
  }
  handleOnChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "tennguoinhan":
        errors.tennguoinhan =
          value.length < 5 ? "Nhập Đầy Đủ Họ Và Tên Người Nhận!" : "";
        break;
      case "phone":
        errors.phone = value.length < 10
          ? "Số Điện Thoại Có Độ Dài 10 Ký Tự !"
          : "";
        break;
      case "diachinhan":
        errors.diachinhan =
          value.length < 10 ? "Nhập Chính Xác Địa Chỉ Muốn Nhận!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  };

  render() {
    // console.log(JSON.parse(sessionStorage.getItem('TOKEN')));
    let { id, diachinhan, phone, tennguoinhan, tinhtrang, errors } = this.state;
    let email = sessionStorage.getItem("TOKEN");
    let { cart } = this.props;
    let tongtien = this.total(cart);
    let date = new Date();
    let cartapi = {
      email,
      diachinhan,
      phone,
      tennguoinhan,
      ngaytao: date
    };
    let bill = {
      id,
      thongtin: cartapi,
      cart,
      tongtien,
      tinhtrang
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
        <span style={{color:'red'}}>{errors.tennguoinhan}</span>
        <br />
        <label>Số điện thoại:</label>
        <input
          type="text"
          placeholder="Nhập số điện thoại"
          onChange={this.handleOnChange}
          name="phone"
        />
        <br />
        <span style={{color:'red'}}>{errors.phone}</span>
        <br />
        <label>Địa chỉ nhận:</label>
        <input
          type="text"
          placeholder="Địa chỉ nhận"
          onChange={this.handleOnChange}
          name="diachinhan"
        />
        <br />
        <span style={{color:'red'}}>{errors.diachinhan}</span>
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
    localStorage.removeItem("CART");
    this.props.history.push("/");
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

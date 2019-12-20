import React, { Component } from "react";
import {connect} from 'react-redux';
import { dangkyAPI } from "../../actions/ActionUs";

export class DangkyCTN extends Component {
  constructor(props) {
    super(props);
    this.txtname =  React.createRef();
    this.txtemail =  React.createRef();
    this.txtpass =  React.createRef();
    this.txtrepass =  React.createRef();
    this.txtphone =  React.createRef();
    this.txtaddress =  React.createRef();
    this.state = {id:''}
  }
  
  render() {
    console.log(this.props.userState);
    
    return (
      <div id="dang_ky_tai_khoan">
        <h2>Đăng ký tài khoản</h2>
        <form onSubmit={e=>{
          e.preventDefault();
          let { id } = this.state
          var name = this.txtname.current.value
          var email = this.txtemail.current.value
          var password = this.txtpass.current.value
          var re_pass = this.txtrepass.current.value
          var phone = this.txtphone.current.value
          var diachi = this.txtaddress.current.value
          var user = {
            id,
            name,
            email,
            password,
            re_pass,
            phone,
            diachi,
          }
          this.props.adduser(user);
          comfim('Đăng Ký Thành Công') //eslint-disable-line
          this.props.history.push('/login')
        }}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              ref={this.txtname}
              placeholder="Nhập tên"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              className="form-control"
              ref={this.txtemail}
              placeholder="Nhập email"
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu:</label>
            <input
              type="text"
              className="form-control"
              ref={this.txtpass}
              placeholder="Nhập mật khẩu"
            />
          </div>
          <div className="form-group">
            <label>Nhập lại mật khẩu:</label>
            <input
              type="text"
              className="form-control"
              ref={this.txtrepass}
              placeholder="Nhập lại mật khẩu"
            />
          </div>
          <div className="form-group">
            <label>SĐT:</label>
            <input
              type="text"
              className="form-control"
              ref={this.txtphone}
              placeholder="Nhập số điện thoại"
            />
          </div>
          <div className="form-group">
            <label>Địa chỉ:</label>
            <input
              type="text"
              className="form-control"
              ref={this.txtaddress}
              placeholder="Nhập địa chỉ"
            />
          </div>
          <div className="form-group">
            <label>&nbsp;</label>
            <button
              type="submit"
              className="form-control"
              id="dang_ky"
            >Hoàn tất</button>
          </div>
        </form>
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    adduser: (user) => {
      dispatch(dangkyAPI(user))
    }
  }
}

export default connect(null, mapDispatchToProps)(DangkyCTN)


import React, { Component } from "react";

export class Login extends Component {
  render() {
    //   console.log(this.props.item);
      
    return (
      
        <form
          onSubmit={e => {
            e.preventDefault();
            var name = this.txtname.current.value;
            var pass = this.txtpass.current.value;
          }}
        >
          <label htmlFor="user_name">Tên tài khoản:</label>
          <input
            type="text"
            id="user_name"
            placeholder="Nhập tên tài khoản"
            ref={this.txtname}
          />
          <br />
          <label htmlFor="pass">Mật khẩu:</label>
          <input
            type="text"
            id="password"
            placeholder="Nhập mật khẩu"
            ref={this.txtpass}
          />
          <br />
          <div className="clearfix">
            <label>&nbsp;</label>
            <button type="submit" id="btn">
              Hoàn tất
            </button>
          </div>
        </form>
      
    );
  }
}

export default Login;

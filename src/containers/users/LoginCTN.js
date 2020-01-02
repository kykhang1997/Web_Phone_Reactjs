import React, { Component } from "react";
import { connect } from "react-redux";
import { GetUserAPi, checklogin } from "../../actions/ActionUs";
import {Link} from 'react-router-dom';
export class LoginCTN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      error: {
        email: '',
        pass: '',
      }
    };
  }

  handleOnChange = e => {
    switch (e.target.name) {
      case "email":
        this.setState({
          ...this.state,
          email: e.target.value
        });
        break;
      case "pass":
        this.setState({
          ...this.state,
          pass: e.target.value
        });
        break;
      default:
        break;
    }
  };

  dologin(loginData) {
    let email = loginData.hasOwnProperty("email") ? loginData["email"] : "";
    let pass = loginData.hasOwnProperty("pass")
      ? loginData["pass"]
      : "";
    let { userState, history } = this.props;
    let {error} = this.state;
    let valid = true
    userState.forEach(eachRow => {
      
      if (email === eachRow["email"] && pass === eachRow["password"]) {
        sessionStorage.setItem("TOKEN", email);
        alert('Đăng Nhập Thành Công');
        error.email = '';
        error.pass = '';
        this.setState({...error})
        history.push("/");
      } else {
        valid = false;
        error.email = 'Sai Email hoặc Mật Khẩu';
        error.pass = 'Sai Email hoặc Mật Khẩu';
        this.setState({...error})
      }
    });
    return valid;
  }
  handleValid(){
    let {email,pass,error} = this.state;
    let valid = true;
    //email
    if (!email) {
      valid = false;
      error.email = "Cannot be empty";
    }
    if (typeof email !== "undefined") {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        valid = false;
        error.email = "Email Không đúng định dạng";
      }
    }
    
    //pass
    if (!pass) {
      valid = false;
      error.pass = "Cannot be empty";
    }
    if (pass.length < 6 ){
      valid = false;
      error.pass = "Mật Khẩu ít nhất 6 ký tự";
    }
    this.setState({ ...error });
    return valid;
  }
  handleLogin = () => {
    if (!this.handleValid()) {
      alert('Đăng Nhập Không Thành Công (Mời Nhập Lại)');
    } else {
      this.dologin(this.state);
      this.props.checkloginmenu()
    }
  };

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    // console.log(this.props.userState);
    
    return (
      <div className="login">
        <h2>Đăng nhập tài khoản</h2>
        <form onSubmit={this.handleLogin}>
            <label htmlFor="user_name">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Nhập tên tài khoản"
            onChange={this.handleOnChange}
          />
          <span style={{color:'red'}}>{this.state.error.email}</span>
          <br />
          <label htmlFor="pass">Mật khẩu:</label>
          <input
            type="password"
            className="form-control"
            name="pass"
            placeholder="Nhập mật khẩu"
            onChange={this.handleOnChange}
          />
          <span style={{color:'red'}}>{this.state.error.pass}</span>
          <br />
          <div className="clearfix">
            <label>&nbsp;</label>
            <button type="submit" className="btn btn-success buttonLogin">
              Đăng Nhập
            </button>
            <Link className="btn btn-info" to="/">Huỷ</Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userState: state.UsLogin,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: () => {
      dispatch(GetUserAPi());
    },
    checkloginmenu:()=>{
      dispatch(checklogin())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginCTN);

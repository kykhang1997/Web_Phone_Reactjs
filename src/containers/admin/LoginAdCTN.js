import { connect } from "react-redux";
import React, { Component } from "react";
import { GetAdminLoginAPI } from "../../actions/ActionAdmin";

export class LoginAdCTN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tk: "",
      pass: "",
      error: {
        tk: "",
        pass: ""
      }
    };
  }
  handleOnChange = e => {
    switch (e.target.name) {
      case "tk":
        this.setState({
          ...this.state,
          tk: e.target.value
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
    let tk = this.state.tk;
    let pass = loginData.hasOwnProperty("pass")
      ? loginData["pass"]
      : "";
    let { admin, history } = this.props;
    let {error} = this.state;
    let valid = true
    admin.forEach(eachRow => {
        console.log(tk === eachRow["tenadmin"] && pass === eachRow["password"]);
        
      if (tk === eachRow["tenadmin"] && pass === eachRow["password"]) {
        sessionStorage.setItem("ADMIN", tk);
        alert('Đăng Nhập Thành Công');
        history.push("/admin/Home");
        error.tk = '';
        error.pass = '';
        this.setState({...error})
      } else {
        valid = false;
        alert('Đăng Nhập Không Thành Công Sai Tài Khoản Hoặc Mật Khẩu')
        
      }
    });
    return valid;
  }
  handleLogin = (e) => {
    e.preventDefault();
    this.dologin(this.state);
  };
  componentDidMount() {
    this.props.getadmin();
  }
  render() {
    return (
      <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
        <form className="login100-form validate-form" onSubmit={this.handleLogin}>
          <span className="login100-form-title p-b-33">Login Admin</span>
          <div className="wrap-input100 validate-input">
            <input
              className="input100"
              type="text"
              name="tk"
              placeholder="Nhập Tài Khoản..."
              onChange={this.handleOnChange}
            />
            <span style={{ color: "red" }}>{this.state.error.tk}</span>
          </div>
          <div className="wrap-input100 rs1 validate-input">
            <input
              className="input100"
              type="password"
              name="pass"
              placeholder="Nhập Mật Khẩu..."
              onChange={this.handleOnChange}
            />
            <span style={{ color: "red" }}>{this.state.error.pass}</span>
          </div>
          <div className="container-login100-form-btn m-t-20">
            <button type='submit' className="login100-form-btn">Sign in</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    admin: state.AdLogin
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getadmin: () => {
      dispatch(GetAdminLoginAPI());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginAdCTN);

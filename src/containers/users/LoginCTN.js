import React, { Component } from "react";
import { connect } from "react-redux";
import { GetUserAPi } from "../../actions/ActionUs";

export class LoginCTN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleOnChange = e => {
    switch (e.target.name) {
      case 'email':
        this.setState({
          ...this.state,
          email: e.target.value
        });
        break;
      case 'password':
        this.setState({
          ...this.state,
          password: e.target.value
        });
        break;
      default:
        break;
    }
  };

  dologin(loginData) {
    let email = loginData.hasOwnProperty('email')
      ? loginData['email']
      : "";
    let password = loginData.hasOwnProperty('password')
      ? loginData['password']
      : "";
    let { userState, history } = this.props;
    userState.forEach(eachRow => {
      if (email === eachRow['email'] && password === eachRow['password']) {
        history.push("/giohang");
        sessionStorage.setItem('TOKEN',JSON.stringify(email))
      }
    });
    return "Incorrect email or password";
  }

  handleLogin = () => {
    let errorMsg = "";
    Object.keys(this.state).forEach(k => {
      if (!this.state["" + k]) {
        errorMsg = k + "is required";
      }
    });
    if (errorMsg) {
      // this.setState(errorMsg);
      // console.log('erro');
    } else {
      // this.setState('');
      let resLogin = this.dologin(this.state);
      
      console.log(resLogin);
      if (resLogin) {
        // this.mess(resLogin);
      }
    }
  };

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    
    return (
      <div id="form_login">
        <h2>Đăng nhập tài khoản</h2>
        <form >
          <span>{this.mess}</span>
          <label htmlFor="user_name">Tên tài khoản:</label>
          <input
            type="text"
            id="user_name"
            name="email"
            placeholder="Nhập tên tài khoản"
            onChange={this.handleOnChange}
          />
          <br />
          <label htmlFor="pass">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Nhập mật khẩu"
            onChange={this.handleOnChange}
          />
          <br />
          <div className="clearfix">
            <label>&nbsp;</label>
            <button type="button" id="btn" onClick={this.handleLogin}>
              Hoàn tất
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userState: state.UsLogin
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: () => {
      dispatch(GetUserAPi());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginCTN);

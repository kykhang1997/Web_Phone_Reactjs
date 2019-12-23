import React, { Component } from "react";
import { connect } from "react-redux";
import { dangkyAPI, GetUserAPi, getProfileAPI } from "../../actions/ActionUs";
import { Link } from "react-router-dom";
export class DangkyCTN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      pass: "",
      re_pass: "",
      phone: "",
      diachi: "",
      error: {
        name: "",
        email: "",
        pass: "",
        re_pass: "",
        phone: "",
        diachi: ""
      }
    };
  }

  componentDidMount() {
    this.props.getUser();
  }
  handleOnChange = e => {
    switch (e.target.name) {
      case "name":
        this.setState({
          ...this.state,
          name: e.target.value
        });
        break;
      case "pass":
        this.setState({
          ...this.state,
          pass: e.target.value
        });
        break;
      case "re_pass":
        this.setState({
          ...this.state,
          re_pass: e.target.value
        });
        break;
      case "phone":
        this.setState({
          ...this.state,
          phone: e.target.value
        });
        break;
      case "diachi":
        this.setState({
          ...this.state,
          diachi: e.target.value
        });
        break;
      case "email":
        this.setState({
          ...this.state,
          email: e.target.value
        });
        break;
      default:
        break;
    }
  };
  handleValidate = () => {
    let {userState} = this.props;
    let { name, email, pass, re_pass, phone, diachi, error } = this.state;
    let valid = true;
    
    //name
    if (!name) {
      valid = false;
      error.name = "Cannot be empty";
    }
    if (typeof name !== "undefined") {
      if (!name.match(/^[a-zA-Z]+$/)) {
        valid = false;
        error.name = "Tên chỉ được viết chữ";
      }
    }
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
    if(email){
      userState.forEach(eachRow=>{
        let api = {eachRow};
        if(api.eachRow.email === email){
          valid = false;
          error.email = 'Email Đã Tồn Tại';
        }
      })
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
    //re-pass 
    if (!re_pass) {
      valid = false;
      error.re_pass = "Cannot be empty";
    }
    if(re_pass !== pass) {
      valid = false;
      error.re_pass = "Phải giống với Mật Khẩu ";
    }
    //phone
    if (!phone) {
      valid = false;
      error.phone = "Cannot be empty";
    }
    if (phone.length !== 10 ) {
      valid = false;
      error.phone = "Số Điện Thoại Phải Có 10 số";
    }
    //diachi
    if (!diachi) {
      valid = false;
      error.diachi = "Cannot be empty";
    }

    this.setState({ ...error });
    return valid;
  };
  
  handleSubmit = e => {
    e.preventDefault();
    let { name, email, pass, re_pass, phone, diachi } = this.state;
    if (!this.handleValidate()) {
      alert("Đăng Ký Không Thành Công");
    } else {
      var user = {
        name,
        email,
        pass,
        re_pass,
        phone,
        diachi
      };
      confirm("Đăng Ký Thành Công"); //eslint-disable-line
      this.props.adduser(user);
      this.props.history.push("/dangnhap");
    }
  };

  render() {
    // console.log(this.state);
    let { error } = this.state;
    return (
      <div className="registration">
        <h2>Đăng ký tài khoản</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nhập tên"
              onChange={this.handleOnChange}
              name="name"
            />
            <span style={{color:'red'}}>{error.name}</span>
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nhập email"
              onChange={this.handleOnChange}
              name="email"
              required
            />
            <span style={{color:'red'}}>{error.email}</span>
          </div>
          <div className="form-group">
            <label>Mật khẩu:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Nhập mật khẩu"
              onChange={this.handleOnChange}
              name="pass"
            />
            <span style={{color:'red'}}>{error.pass}</span>
          </div>
          <div className="form-group">
            <label>Nhập lại mật khẩu:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Nhập lại mật khẩu"
              onChange={this.handleOnChange}
              name="re_pass"
            />
            <span style={{color:'red'}}>{error.re_pass}</span>
          </div>
          <div className="form-group">
            <label>SĐT:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Nhập số điện thoại"
              onChange={this.handleOnChange}
              name="phone"
            />
            <span style={{color:'red'}}>{error.phone}</span>
          </div>
          <div className="form-group">
            <label>Địa chỉ:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nhập địa chỉ"
              onChange={this.handleOnChange}
              name="diachi"
            />
            <span style={{color:'red'}}>{error.diachi}</span>
          </div>
          <div className="form-group">
            <label>&nbsp;</label>
            <button type="submit" className="btn btn-success">
              Hoàn tất
            </button>
            <Link to="/" className="btn btn-link">
              HỦY
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    userState: state.UsLogin,
    check: state.UsProfile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    adduser: user => {
      dispatch(dangkyAPI(user));
    },
    getUser: () => {
      dispatch(GetUserAPi());
    },
    checkapi: value => {
      dispatch(getProfileAPI(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DangkyCTN);

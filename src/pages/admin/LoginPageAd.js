import React, { Component } from "react";
import "../../css/admin.css";
import "../../css/util.css";


export class LoginPageAd extends Component {
    
  render() {
    return (
      <div className="container-login100">
        {this.props.children}
      </div>
    );
  }
}


export default LoginPageAd

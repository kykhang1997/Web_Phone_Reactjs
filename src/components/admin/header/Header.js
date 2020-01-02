import React, { Component } from "react";
export class Header extends Component {
  render() {
    return (
      <div className="container-fluid" style={{width:'100%'}}>
        <div className="jumbotron">
          <h1 className="display-3 text-center">BK Admin</h1>
          <hr className="my-2" />
        </div>
      </div>
    );
  }
}

export default Header;

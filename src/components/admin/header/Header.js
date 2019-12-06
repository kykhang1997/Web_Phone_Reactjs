import React, { Component } from "react";
import { Link } from 'react-router-dom';
export class Header extends Component {
  render() {
    return (
        <header>
        <h3>
          <Link to='/admin' >BK SHOP</Link>
        </h3>
        <div className="log_out">
          <Link to='/admin'>Đăng xuất</Link>
        </div>
      </header>
      
    );
  }
}

export default Header;

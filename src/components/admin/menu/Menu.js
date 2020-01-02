import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    name: "Quản Lý Sản Phẩm",
    to: "/admin/product",
    exact: false
  },
  {
    name: "Quản Lý Loại Sản Phẩm",
    to: "/admin/category",
    exact: false
  },
  {
    name: "Quản Lý Tài Khoản",
    to: "/admin/users",
    exact: false
  },
  {
    name: "Quản Lý Bill",
    to: "/admin/bill",
    exact: false
  },
  
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};


export class Menu extends Component {
  showMenus = menus => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
  logout = ()=>{
    sessionStorage.removeItem('ADMIN')
  }
  render() {
    return (
      <div className="sidenav">
        <ul>{this.showMenus(menus)}
        <li>
          <Link to='/admin' onClick={this.logout}>Đăng Xuất</Link>
        </li>
        </ul>
      </div>
    );
  }
}

export default Menu;

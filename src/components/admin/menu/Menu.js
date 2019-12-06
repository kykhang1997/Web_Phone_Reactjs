import React, { Component } from "react";
import {Route , Link} from 'react-router-dom';

const menus = [
  {
    name : 'Quản Lý Sản Phẩm',
    to:'/admin/product',
    exact:false
  },
  {
    name : 'Quản Lý Loại Sản Phẩm',
    to:'/admin/category',
    exact:false
  },
  {
    name : 'Quản Lý Tin Tức',
    to:'/admin/new',
    exact:false
  },
  {
    name : 'Quản Lý Bill',
    to:'/admin/bill',
    exact:false
  }
]

const MenuLink = ({ label,to,activeOnlyWhenExact}) =>{
  return (
    <Route 
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? 'active' : '';
        return (
          <li className={active}>
            <Link to={to}>
              {label}
            </Link>
          </li>
        )
      }}
    />
  )
}


export class Menu extends Component {
  showMenus  = (menus) => {
    var result = null;
    if(menus.length > 0) {
      result = menus.map( (menu,index) => {
        return (
          <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact}/>
        )
      }
      )
    }
    return result;  
  }
  render() {
    return (
      <aside>
        <ul>
          <li>
            <Link  to='/admin' className="active">
              Trang chủ Admin
            </Link>
          </li>
          {this.showMenus(menus)}
        </ul>
      </aside>
    );
  }
}

export default Menu;

import React, { Component } from "react";
import Header from "../../components/admin/header/Header";
import Menu from "../../components/admin/menu/Menu";

import "../../css/admin.css";

export class HomePageAd extends Component {
  render() {
    return (
      <div>
          <Header />
          <main>
            <Menu />
            {this.props.children}
          </main>
      </div>
    );
  }

 
}

export default HomePageAd;

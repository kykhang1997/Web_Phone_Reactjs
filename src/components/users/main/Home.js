import React, { Component } from "react";


export class Home extends Component {
  render() {
    return (
      <main className="content">
        <h1>SẢN PHẨM</h1>
        <hr />
        <br />
        {this.props.children}
      </main>
    );
  }
}

export default Home;

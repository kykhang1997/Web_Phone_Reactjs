import React, { Component } from "react";


export class Home extends Component {
  render() {
    return (
      <main id="content">
        <h1>SẢN PHẨM</h1>
        <hr />
        <br />
        <div id="type">
          <span>Loại sản phẩm :</span>
          <a href="../html/index.html" className="active-type-all">
            Tất cả
          </a>
          <a href="../html/iphone.html">Iphone</a>
          <a href="../html/oppo.html">Oppo</a>
          <a href="../html/nokia.html">Nokia</a>
          <a href="../html/samsung.html" style={{ border: "none" }}>
            Samsung
          </a>
        </div>
        {this.props.children}
      </main>
    );
  }
}

export default Home;

import React, { Component } from "react";

export class ProductDetails extends Component {
  render() {
    return (
      <div id="thongtin_sp">
       {this.props.children}
      </div>
    );
  }
}

export default ProductDetails;

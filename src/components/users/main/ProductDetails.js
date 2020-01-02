import React, { Component } from "react";

export class ProductDetails extends Component {
  render() {
    return (
      <div id="thongtin_sp" >
        <div className="row mobitext">{this.props.children}</div>
      </div>
    );
  }
}

export default ProductDetails;

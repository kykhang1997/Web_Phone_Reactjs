import React, { Component } from "react";
import ProductItems from "../../components/users/main/ProductItems";
import Home from "../../components/users/main/Home";
import { connect } from "react-redux";
import { actFetchProductsRequest } from "../../actions/ActionUs";
export class Product extends Component {
  render() {
    console.log(this.props);
    var { sanpham } = this.props.listproduct;
    return (
      <div id="product-box">
        <Home>
          {this.showProducts(sanpham)}
        </Home>
      </div>
    );
  }
  showProducts(sanpham) {
    var result = null;
    if (sanpham.length > 0) {
      result = sanpham.map((sanpham, index) => {
        return (
          <ProductItems
            key={index}
            sanpham={sanpham}
            index={index}
            onDel={this.onDel}
          />
        );
      });
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    listproduct: state.UsProduct
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

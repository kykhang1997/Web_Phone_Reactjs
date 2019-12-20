import React, { Component } from "react";
import ProductItems from "../../components/users/main/ProductItems";
import Home from "../../components/users/main/Home";
import { connect } from "react-redux";
import { actFetchProductsRequest, actGetProductRequest } from "../../actions/ActionUs";

export class Product extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }
  showProducts(sanpham) {
    var result = null;
    if (sanpham.length > 0) {
      result = sanpham.map((sanpham, index) => {
        return <ProductItems key={index} sanpham={sanpham} index={index} />;
      });
    }
    return result;
  }
  render() {
    // console.log(JSON.parse(localStorage.getItem('TOKEN')));
    var { listproduct } = this.props;
    return (
      <div id="product-box">
        <Home>
          <div className="flex-box">{this.showProducts(listproduct)}</div>
        </Home>
      </div>
    );
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
    },
    onDetails: (id) => {
      dispatch(actGetProductRequest(id))
    }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

import React, { Component } from "react";
import { connect } from "react-redux";
import { actGetProductRequest, addToCart } from "../../actions/ActionUs";
import ProductDetails from "../../components/users/main/ProductDetails";
import NumberFormat from "react-number-format";
export class ProductDetailsCTN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }
  handerAdd = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };
  handerMinus = () => {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  };
  numberformat = value => {
    var result = value.toLocaleString();
    return result;
  };

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onDetails(id);
    }
  }
  add = (sanpham, count) => {
    this.props.addcart(sanpham, count);
  };
  checklogin = (sanpham, count) => {
    if (sessionStorage.getItem("TOKEN")) {
      this.add(sanpham, count);
      this.props.history.push("/giohang");
    } else {
      this.props.history.push("/dangnhap");
    }
  };
  render() {
    // console.log(this.state.count);
    let { details } = this.props;
    return (
      <div className="container-fluid">
        <ProductDetails>
          <div className="col-sm-6">
            <img
              src={details.hinhanh}
              alt="img"
              className="img-details img-fluid "
            />
          </div>
          <div className=" col-sm-6 marginR4">
            <h2 href="true">{details.tensp}</h2>
            <h4 style={{ color: "red" }}>
              <NumberFormat
                value={details.giadexuat}
                displayType={"text"}
                thousandSeparator={true}
                renderText={value => value}
              />{" "}
              VND
            </h4>
            <div className="btnSoLuong ">
              <button className="btn btn-success" onClick={this.handerMinus}>
                -
              </button>
              <input
                value={this.state.count}
                style={{ width: "30%" }}
                className="btn"
              ></input>
              <button className="btn btn-success" onClick={this.handerAdd}>
                +
              </button>
            </div>
            <div className="khuyenmai    marginR4">
            <h2>KHUYẾN MÃI ÁP DỤNG:</h2>
            <p>
            {details.noidung}
            </p>
          </div>
          <div className="  marginR4"></div>
          <button
            onClick={() => this.checklogin(details, this.state.count)}
            className="mua  btn btn-warning   marginR4"
          >
            <p>
              Chỉ Với{" "}
              <NumberFormat
                value={details.gia}
                displayType={"text"}
                thousandSeparator={true}
                renderText={value => value}
              />{" "}
              VND Mua Ngay
            </p>
          </button>
            </div>
         
        </ProductDetails>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    details: state.UsProduct
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDetails: id => {
      dispatch(actGetProductRequest(id));
    },
    addcart: (sanpham, count) => {
      dispatch(addToCart(sanpham, count));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsCTN);

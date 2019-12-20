import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProfileAPI, getHistoryCartAPI } from "../../actions/ActionUs";
import File from "../../components/users/main/File";
import CartHistory from "../../components/users/main/CartHistory";

export class ProfileUserCTN extends Component {
  componentDidMount() {
    let email = sessionStorage.getItem("TOKEN");
    this.props.getfile(email);
    this.props.gethistory(email);
  }
  render() {
    //   console.log(this.props);

    let { profile, historycart } = this.props;
    return (
      <div id="profiles">
        <div id="my_account">
          <Link to="">Hồ sơ của tôi</Link>
          <br />
          {/* <Link to="">Đơn mua</Link> */}
        </div>

        <div id="show_profiles">
          <h3>Hồ Sơ Của Tôi</h3>
          {this.showprofile(profile)}
          <hr />
		  <h3>Lịch Sử Mua Hàng</h3>
          <table border={1}>
            <tbody>
              <tr>
                <td>ID</td>
                <td>Tên</td>
                <td>SĐT</td>
                <td>Email</td>
                <td>Địa chỉ Nhận</td>
                <td>Ngày Mua</td>
                <td >Sản Phẩm</td>
                
                <td>Tổng Tiền</td>
                <td>Tình Trạng</td>
              </tr>
              {/* <tr>
                <td>{index + 1}</td>
                <td>{item.thongtin.tennguoinhan}</td>
                <td>{item.thongtin.phone}</td>
                <td>{item.thongtin.email}</td>
                <td>{item.thongtin.diachinhan}</td>
                <td>
                  <Moment date={item.thongtin.ngaytao} />
                </td>
                <td colSpan={3}>{this.showcart(item.cart)}</td>
                <td>{item.tongtien}</td>
                <td>{item.thongtin.tinhtrang}</td>
              </tr> */}
              {this.showhistorycart(historycart)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  showprofile = profile => {
    var result = null;
    if (profile.length > 0) {
      result = profile.map((item, index) => {
        return <File item={item} key={index} index={index} />;
      });
    }
    return result;
  };
  showhistorycart = cart => {
    var result = null;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return <CartHistory item={item} key={index} index={index} />;
      });
    }
    return result;
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    profile: state.UsProfile,
    historycart: state.UsHistory
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getfile: value => {
      dispatch(getProfileAPI(value));
    },
    gethistory: value => {
      dispatch(getHistoryCartAPI(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUserCTN);

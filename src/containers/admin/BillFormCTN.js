import React, { Component } from "react";
import { connect } from "react-redux";
import { EditBillAPI, UpBillAPI } from "../../actions/ActionAdmin";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
export class BillFormCTN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      thongtin: '',
      cart: [],
      tongtien: "",
      tinhtrang:''
    };
  }

  componentDidMount() {
    let { match, editbill } = this.props;
    if (match.params.id) {
      editbill(match.params.id);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.bill) {
      let { bill } = nextProps;
      this.setState({
        id: bill.id,
        thongtin: bill.thongtin,
        cart: bill.cart,
        tongtien: bill.tongtien,
        tinhtrang:bill.tinhtrang,
      });
    }
  }
  handleOnChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
        [name]: value
    });
  };
  handleSubmit  = (e) => {
      e.preventDefault();
      let {id,thongtin,cart,tongtien,tinhtrang} = this.state
      let {history,upbill}= this.props;
      let thanhtoan = {
          id,
          thongtin,
          cart,
          tongtien,
          tinhtrang
      }
      upbill(thanhtoan);
      history.push('/admin/bill')
  }
  
  render() {
    // console.log(this.state);
    let { thongtin, cart, tongtien,tinhtrang } = this.state;
    return (
      <div id="content">
        <div className="forminput">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group form-inline">
              <label htmlFor="name">Email User: </label>
              <label htmlFor="name" className="inputform">
             {thongtin.email}
            </label>
            </div>
            <div className="form-group form-inline">
              <label htmlFor="name">Tên Người Nhận: </label>
              <label htmlFor="name" className="inputform">
                {thongtin.tennguoinhan}
              </label>
            </div>
            <div className="form-group form-inline">
              <label htmlFor="name">Địa Chỉ Nhận: </label>
              <label htmlFor="name" className="inputform">
                {thongtin.diachinhan}
              </label>
            </div>
            <div className="form-group form-inline">
              <label htmlFor="name">Số Điện Thoại: </label>
              <label htmlFor="name" className="inputform">
                {thongtin.phone}
              </label>
            </div>
            <div className="form-group form-inline">
              <label htmlFor="name">Ngày Tạo: </label>
              <label htmlFor="name" className="inputform">
                <Moment format="DD/MM/YYYY">{thongtin.ngaytao}</Moment>
              </label>
            </div>
            <div className="form-group form-inline">
              <label htmlFor="name">Sản Phẩm: </label>
              <label htmlFor="name" className="inputform">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Tên Sản Phẩm</th>
                      <th>Số Lượng</th>
                      <th>Giá</th>
                    </tr>
                  </thead>
                  <tbody>{this.showcart(cart)}</tbody>
                </table>
              </label>
            </div>
            <div className="form-group form-inline">
              <label htmlFor="name">Tổng Tiền: </label>
              <label htmlFor="name" className="inputform">
                <NumberFormat
                  value={tongtien}
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={value => value}
                />
                {""} VND
              </label>
            </div>

            <div className="form-group form-inline">
              <label className="form-check-label">
                <input
                  name="tinhtrang"
                  type="checkbox"
                  className="form-check-input"
                  onChange={this.handleOnChange}
                  checked={tinhtrang}
                />
                Đã Chuyển
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  showcart = cart => {
    let result = null;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.sanpham.tensp}</td>
            <td>{item.count}</td>
            <td>
              <NumberFormat
                value={item.count * item.sanpham.gia}
                displayType={"text"}
                thousandSeparator={true}
                renderText={value => value}
              />
              {""} VND
            </td>
          </tr>
        );
      });
    }
    return result;
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    bill: state.AdBill
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editbill: id => {
      dispatch(EditBillAPI(id));
    },
    upbill: bill => {
        dispatch(UpBillAPI(bill))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BillFormCTN);

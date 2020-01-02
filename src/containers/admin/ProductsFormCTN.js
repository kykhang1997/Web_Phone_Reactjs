import React, { Component } from "react";
import { connect } from "react-redux";
import {
  GetLoaispAPI,
  AddSanPhamAPI,
  EditSanPhamAPI,
  UpSanPhamAPI
} from "../../actions/ActionAdmin";
export class ProductsFormCTN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      tensp: "",
      giadexuat: "",
      giamgia: "",
      hinhanh: "",
      tinhtrang: "",
      noidung: "",
      tenloaisp: ""
    };
  }

  componentDidMount() {
    this.props.getloaisp();
    let { match, editsanpham } = this.props;
    if (match.params.id) {
      editsanpham(match.params.id);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editSanPham) {
      let { editSanPham } = nextProps;
      this.setState({
        id: editSanPham.id,
        tensp: editSanPham.tensp,
        hinhanh: editSanPham.hinhanh,
        giadexuat: editSanPham.giadexuat,
        giamgia: editSanPham.giamgia,
        tenloaisp: editSanPham.tenloaisp,
        noidung: editSanPham.noidung,
        tinhtrang: editSanPham.tinhtrang
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
  handleSubmit = e => {
    e.preventDefault();
    let {
      id,
      tensp,
      hinhanh,
      giadexuat,
      giamgia,
      tenloaisp,
      noidung,
      tinhtrang
    } = this.state;
    let { history, addsanpham, upsanpham } = this.props;
    let sanpham = {
      id,
      tensp,
      hinhanh,
      giadexuat,
      giamgia,
      gia: giadexuat - (giadexuat * giamgia) / 100,
      tenloaisp,
      noidung,
      tinhtrang
    };
    if (id) {
      upsanpham(sanpham);
      history.push("/admin/product");
    } else {
      addsanpham(sanpham);
      history.push("/admin/product");
    }
  };

  render() {
    console.log(this.props);
    let { category } = this.props;
    let {
      tensp,
      giadexuat,
      giamgia,
      hinhanh,
      tenloaisp,
      noidung,
      tinhtrang
    } = this.state;
    return (
      <div id="content">
        <form className="forminput" onSubmit={this.handleSubmit}>
          <div className="form-group form-inline">
            <label htmlFor="name" className="labelform">
              Tên Sản Phẩm :
            </label>
            <input
              type="text"
              name="tensp"
              className="form-control inputform"
              placeholder="Nhập Tên Sản Phẩm ... "
              onChange={this.handleOnChange}
              aria-describedby="helpId"
              defaultValue={tensp}
            />
            <small id="helpId" className="text-muted"></small>
          </div>
          <div className="form-group form-inline">
            <label htmlFor="name" className="labelform">
              Hình Ảnh :
            </label>
            <input
              type="text"
              name="hinhanh"
              className="form-control inputform"
              placeholder="Nhập Link Hình Ảnh ... "
              onChange={this.handleOnChange}
              aria-describedby="helpId"
              defaultValue={hinhanh}
            />
            <small id="helpId" className="text-muted"></small>
          </div>
          <div className="form-group form-inline">
            <label htmlFor="name" className="labelform">
              Giá Đề Xuất :
            </label>
            <input
              type="number"
              name="giadexuat"
              className="form-control inputform"
              placeholder="Nhập Giá Đề Xuất ... "
              onChange={this.handleOnChange}
              aria-describedby="helpId"
              defaultValue={giadexuat}
            />
            <small id="helpId" className="text-muted"></small>
          </div>
          <div className="form-group form-inline">
            <label htmlFor="name" className="labelform">
              Giảm Giá :
            </label>
            <input
              type="number"
              name="giamgia"
              className="form-control inputform"
              placeholder="Nhập Giảm Giá ... "
              onChange={this.handleOnChange}
              aria-describedby="helpId"
              defaultValue={giamgia}
            />
            %<small id="helpId" className="text-muted"></small>
          </div>
          <div className="form-group form-inline">
            <label htmlFor="loaisp" className="labelform">
              Loại Sản Phẩm:{" "}
            </label>
            <select
              className="form-control inputform"
              name="tenloaisp"
              onChange={this.handleOnChange}
              value={tenloaisp}
            >
              <option></option>
              {this.showcate(category)}
            </select>
          </div>

          <div className="form-group form-inline">
            <label htmlFor="name" className="labelform">
              Nội Dung:
            </label>
            <textarea
              className="inputform form-control"
              placeholder="Nhập Nội Dung..."
              onChange={this.handleOnChange}
              name="noidung"
              defaultValue={noidung}
            />
            <small id="helpId" className="text-muted"></small>
          </div>
          <div className="form-group form-inline">
            <label className="form-check-label">
              <input
                name="tinhtrang"
                type="checkbox"
                className="form-check-input"
                // value={tinhtrang}
                onChange={this.handleOnChange}
                checked={tinhtrang}
              />
              Còn Hàng
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
  showcate = category => {
    let result = null;
    if (category.length > 0) {
      result = category.map((item, index) => {
        return (
          <option key={index} value={item.tenloai}>
            {item.tenloai}
          </option>
        );
      });
    }
    return result;
  };
}
const mapStateToProps = (state, ownProps) => {
  return {
    category: state.AdCategory,
    editSanPham: state.AdProducts
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getloaisp: () => {
      dispatch(GetLoaispAPI());
    },
    addsanpham: sanpham => {
      dispatch(AddSanPhamAPI(sanpham));
    },
    editsanpham: id => {
      dispatch(EditSanPhamAPI(id));
    },
    upsanpham: sanpham => {
      dispatch(UpSanPhamAPI(sanpham));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsFormCTN);

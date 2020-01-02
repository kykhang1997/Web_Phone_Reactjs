import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GetSanPhamAPI, DelSanPhamAPI,SearchSanPhamAPI } from "../../actions/ActionAdmin";
import ProductListItem from "../../components/admin/main/ProductListItem";
export class ProductsCTN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:''
    }
  }
  handleChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  };
  
  componentDidMount() {
    this.props.getsanpham();
  }
  render() {
    // console.log(this.props);
    let { sanpham,searchsanpham } = this.props;
    return (
      <div id="content">
        <div className="active-pink-3 active-pink-4 mb-4">
          <input
            className="form-control"
            type="text"
            placeholder="Search ..."
            aria-label="Search"
            name='search'
            onChange={this.handleChange}
          />
          {/* bỏ arrowfunction ở onclick thì sẽ tự động tìm kiếm không cần phải nhấn nút */}
          <button type="button" className="btn btn-info btnSearch" onClick={()=>searchsanpham(this.state.search)}>
            Tìm Kiếm
          </button>
        </div>
        <div>
          <Link
            to="/admin/product/add"
            className="btn btn-primary btnSearch btnAdd"
          >
            Thêm Mới...
          </Link>
        </div>
        <div className="table-responsive ">
          <table className="table table-bordered text-center  " cellSpacing={0}>
            <thead className="table-dark">
              <tr>
                <td>ID</td>
                <td>Tên Sản Phẩm</td>
                <td>Hình Ảnh</td>
                <td>Giá Đề Xuất</td>
                <td>Giảm Giá</td>
                <td>Giá</td>
                <td>Loại Sản Phẩm</td>
                <td>Nội Dung</td>
                <td>Tình Trạng</td>
                <td colSpan={2}>Quản lý</td>
              </tr>
            </thead>
            {this.showSanPham(sanpham)}
          </table>
        </div>
      </div>
    );
  }
  showSanPham = sanpham => {
    let result = null;
    let {delsanpham} = this.props;
    if (sanpham.length > 0) {
      result = sanpham.map((item, index) => {
        return <ProductListItem item={item} index={index} key={index} delsanpham={delsanpham}  />;
      });
    }
    return result;
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    sanpham: state.AdProducts,
    category: state.AdCategory
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getsanpham: () => {
      dispatch(GetSanPhamAPI());
    },
    delsanpham: (id)=> {
      dispatch(DelSanPhamAPI(id))
    },
    searchsanpham: (value)=>{
      dispatch(SearchSanPhamAPI(value))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsCTN);

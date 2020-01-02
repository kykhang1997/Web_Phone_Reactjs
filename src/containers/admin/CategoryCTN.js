import React, { Component } from "react";
import { Link } from "react-router-dom";
import CategoryList from "../../components/admin/main/CategoryList";
import { connect } from "react-redux";
import {
  GetLoaispAPI,
  DelLoaispAPI,
  SearchLoaispAPI
} from "../../actions/ActionAdmin";
export class CategoryCTN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
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
    this.props.getloaisp();
  }
  render() {
    // console.log(this.state);
    let { loaisp,searchcategory } = this.props;
    return (
      <div id="content">
        <div className="active-pink-3 active-pink-4 mb-4">
          <input
            className="form-control"
            type="text"
            name='search'
            placeholder="Nhập Tên Loại"
            aria-label="Search"
            onChange={this.handleChange}
          />
          <button type="button" className="btn btn-info btnSearch" onClick={()=>searchcategory(this.state.search)}>
            Tìm Kiếm
          </button>
        </div>
        <div>
          <Link
            to="/admin/category/add"
            className="btn btn-primary btnSearch btnAdd"
          >
            Thêm Mới...
          </Link>
        </div>

        <table className="table table-bordered text-center " cellSpacing={0}>
          <thead className="table-dark">
            <tr>
              <td>ID</td>
              <td>Tên loại sản phẩm</td>
              <td colSpan={2}>Quản lý</td>
            </tr>
          </thead>
          {this.showLoaisp(loaisp)}
        </table>
      </div>
    );
  }
  showLoaisp = loaisp => {
    let result = null;
    let { delcategory } = this.props;
    if (loaisp.length > 0) {
      result = loaisp.map((item, index) => {
        return (
          <CategoryList
            item={item}
            index={index}
            key={index}
            delcategory={delcategory}
          />
        );
      });
    }
    return result;
  };
}
const mapStateToProps = (state, ownProps) => {
  return {
    loaisp: state.AdCategory
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getloaisp: () => {
      dispatch(GetLoaispAPI());
    },
    delcategory: id => {
      dispatch(DelLoaispAPI(id));
    },
    searchcategory: value => {
      dispatch(SearchLoaispAPI(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCTN);

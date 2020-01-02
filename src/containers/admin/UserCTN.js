import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GetAccUserAPI, SearchAccUsersAPI } from "../../actions/ActionAdmin";
import AccUserList from "../../components/admin/main/AccUserList";
export class UserCTN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search : ''
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
  componentDidMount() {
    this.props.getAccUser();
  }
  render() {
    console.log(this.state);
    let {accUser,searchaccuser} = this.props
    return (
      <div id="content">
        <div className="active-pink-3 active-pink-4 mb-4">
          <input
            className="form-control"
            type="text"
            name='search'
            placeholder="Nhập Email ..."
            aria-label="Search"
            onChange={this.handleOnChange}
          />
          <button type="button" className="btn btn-info btnSearch" onClick={()=>searchaccuser(this.state.search)}>
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
              <td>Tên Users</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Địa Chỉ</td>
            </tr>
          </thead>
          {this.showUser(accUser)}
        </table>
      </div>
    );
  }
  showUser  = (accUser) => {
    let result = null;
    if(accUser.length > 0) {
      result = accUser.map((item,index)=>{
        return <AccUserList index={index} key={index} item={item}/>
      })
    }
    return result;
  }
  
}
const mapStateToProps = state => {
  return {
    accUser: state.AdUsers
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAccUser: () => {
      dispatch(GetAccUserAPI());
    },
    searchaccuser: (value) => {
      dispatch(SearchAccUsersAPI(value))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserCTN);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetBillAPI, SearchBillAPI } from '../../actions/ActionAdmin';
import BillList from '../../components/admin/main/BillList';
export class BillCTN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search : '',
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
  componentDidMount(){
    this.props.getbill();
  }
    render() {
        // console.log(this.props.bill);
        let {bill,searchbill} = this.props;
        return (
            <div id="content">
        <div className="active-pink-3 active-pink-4 mb-4">
          <input
            className="form-control"
            type="text"
            placeholder="Tìm User Email ..."
            aria-label="Search"
            name='search'
            onChange={this.handleChange}
          />
          <button type="button" className="btn btn-info btnSearch" onClick={()=>searchbill(this.state.search)}>
            Tìm Kiếm
          </button>
        </div>
        

        <table className="table table-bordered text-center table-responsive" cellSpacing={0}>
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Email User</th>
              <th>Tên Người Nhận</th>
              <th>Địa Chỉ Nhận</th>
              <th>Số Điện Thoại</th>
              <th >Sản Phẩm</th>
              <th>Tổng Tiền</th>
              <th>Ngày Tạo</th>
              <th>Tình trạng</th>
              <th >Quản lý</th>
            </tr>
          </thead>
          {this.showBill(bill)}
        </table>
      </div>
        );
    }
    showBill  = (bill) => {
      let result = null;
      if(bill.length > 0){
        result = bill.map((item,index)=>{
          return <BillList index={index} key={index} item={item}/>
        })
      }
      return result;
    }
    
}

const mapStateToProps = (state, ownProps) => {
    return {
        bill: state.AdBill
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getbill: () => {
            dispatch(GetBillAPI())
        },
        searchbill: (value)=>{
          dispatch(SearchBillAPI(value))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BillCTN)

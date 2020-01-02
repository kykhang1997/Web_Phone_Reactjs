import React, { Component } from "react";
import NumberFormat from "react-number-format";


export class CartItems extends Component {
  render() {
    // console.log(this.props.delcart);
    let { sanpham, count } = this.props.item;
    return (
      <tr>
        <td style={{width: "200px"}}>
          <img src={sanpham.hinhanh} alt="" className="img-fluid" />
        </td>
        <td>{sanpham.tensp}</td>
        <td>
          <NumberFormat
            value={sanpham.gia}
            displayType={"text"}
            thousandSeparator={true}
            renderText={value => value}
          />
          <sup>đ</sup>
        </td>
        <td style={{ width: "20%"}} >
          
          <input
            className='btn btn-success'
            defaultValue={count}
            style={{ width: "30%" }}
            
          ></input>
          
        </td>
        <td>
          <NumberFormat
            value={this.showAmount(sanpham.gia, count)}
            displayType={"text"}
            thousandSeparator={true}
            renderText={value => value}
          />

          <sup>đ</sup>
        </td>
        <td>
          <button
            type="button "
            className="btn btn-danger"
            onClick={()=>this.del(this.props.item.sanpham)}
          >
            Xoá
          </button>
        </td>
      </tr>
    );
  }
  showAmount = (gia, count) => {
    var result = gia * count;
    return result;
  };
  del = sanpham => {
    if(sanpham){
      if(confirm("Bạn Có Thật Sự Muốn Xoá ???")){//eslint-disable-line
        this.props.delcart(sanpham);
      }; 
    }
    
  };
}

export default CartItems;

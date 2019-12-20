import React, { Component } from "react";
import CartItems from '../../components/users/main/CartItems';
import CartFormOrder from "../../components/users/main/CartFormOrder";
import { connect } from 'react-redux';
import Cart from "../../components/users/main/Cart";
import { delToCart, BillAPI } from "../../actions/ActionUs";

export class CartCTN extends Component {
  
  render() {
    // console.log(this.props.cart);
    
    let { cart,addbillapi,history } = this.props
    
    return (
      <div className="thongtin">
        <Cart cart={cart}>
          {this.showcartitem(cart)}
        </Cart>

        <CartFormOrder cart={cart} addbillapi={addbillapi} history={history} />
      </div>
    );
  }
  
  
  
  showcartitem = (cart) => {
    var result = null;
    if(cart.length > 0){
      result = cart.map((item,index)=>{
        return <CartItems item={item} key={index} delcart={this.props.delcart}/>
      })
    }
    return result
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.UsCart
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    delcart: (sanpham) => {
      dispatch(delToCart(sanpham))
    },
    addbillapi: (sanpham) => {
      dispatch(BillAPI(sanpham))
    }
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartCTN)


import * as Types from "../../constants/ActionType";

var data = JSON.parse(localStorage.getItem("CART"));
const UsCartInitialState = data ? data : [];
const UsCart = (state = UsCartInitialState, action) => {
  let { sanpham, count } = action;
  var index = -1;
  switch (action.type) {
    case Types.ADDTOCART:
      index = findProductInCart(state, sanpham);
      if (index !== -1) {
        state[index].count += count;
      } else {
        state.push({
          sanpham,
          count
        });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case Types.DELTOCART:
      index = findProductInCart(state, sanpham);
      if(index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
     
    default:
      return state;
  }
};
var findProductInCart = (cart, sanpham) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].sanpham.id === sanpham.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};
export default UsCart;

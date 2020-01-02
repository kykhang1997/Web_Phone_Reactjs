import * as Types from "../../constants/ActionType";

const AdProductsInitialState = [];
export const AdProducts = (state = AdProductsInitialState, action) => {
  switch (action.type) {
    case Types.GETSANPHAM:
      state = action.sanpham;
      return [...state];
    case Types.ADDSANPHAM:
      state.push(action.sanpham);
      return [...state];
    case Types.DELSANPHAM:
      var index = state.findIndex(item => {
        return item.id === action.id;
      });
      state.splice(index, 1);
      return [...state];
    case Types.EDITSANPHAM:
      return action.sanpham;
    case Types.UPDATESANPHAM:
      var index2 = state.findIndex(({ id }) => id === action.sanpham.id);
      state[index2] = action.sanpham;
      return [...state];
    case Types.SEARCHSANPHAM:
      state = action.sanpham;
      return state;
    default:
      return state;
  }
};
export default AdProducts;

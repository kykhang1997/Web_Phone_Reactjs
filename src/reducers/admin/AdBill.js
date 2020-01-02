import * as Types from "../../constants/ActionType";
const AdBillInitialState = [];
export const AdBill = (state = AdBillInitialState, action) => {
  switch (action.type) {
    case Types.GETBILLAD:
      state = action.bill;
      return [...state];
    case Types.EDITBILLAD:
      return action.bill;
    case Types.UPDATEBILLAD:
      var index2 = state.findIndex(({ id }) => id === action.bill.id);
      state[index2] = action.bill;
      return [...state];
    case Types.SEARCHBILLAD:
      state = action.bill;
      return [...state];
    default:
      return state;
  }
};

export default AdBill;

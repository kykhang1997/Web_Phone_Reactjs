import * as Types from "../../constants/ActionType";
const AdCategoryInitialState = [];
export const AdCategory = (state = AdCategoryInitialState, action) => {
  switch (action.type) {
    case Types.GETLOAISP:
      state = action.loaisp;
      return [...state];
    case Types.ADDLOAISP:
      state.push(action.loaisp);
      return [...state];
    case Types.DELETELOAISP:
      var index = state.findIndex(item => {
        return item.id === action.id;
      });
      state.splice(index, 1);
      return [...state];
    case Types.EDITLOAISP:
      return action.loaisp;
    case Types.UPDATELOAISP:
      var index2 = state.findIndex(({ id }) => id === action.loaisp.id);
      state[index2] = action.loaisp;
      return [...state];
    case Types.SEARCHLOAISP:
      state = action.loaisp
      return [...state];
    default:
      return state;
  }
};
export default AdCategory;

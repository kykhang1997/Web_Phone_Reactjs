import * as Types from '../../constants/ActionType';
const UsBillInitialState = []
export const UsBill = (state = UsBillInitialState, action) => {
    let {sanpham} = action;
    switch (action.type) {
        case Types.ADDTOBILLAPI:
            state.push({
                sanpham
            })
            return [...state]
        
        default:
            return state
    }
}

export default UsBill;
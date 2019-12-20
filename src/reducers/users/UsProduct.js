import * as Types from '../../constants/ActionType';


const UsProductInitialState = []
const UsProduct = (state = UsProductInitialState, action) => {
    switch (action.type) {
        case Types.USLISTPRODUCT:
            state = action.sanpham;
            return [...state];
        case Types.USDETAILSPRODUCT:          
            return action.sanpham;
        default:
            return state
    }
}

export default UsProduct;
import * as Types from '../../constants/ActionType';

const UsCheckLoginMenuInitialState = false ;
export const UsCheckLoginMenu = (state = UsCheckLoginMenuInitialState, action) => {
    switch (action.type) {
        case Types.CHECKLOGIN:
            state = true;
            return state;
        default:
            return state
    }
}
export default UsCheckLoginMenu
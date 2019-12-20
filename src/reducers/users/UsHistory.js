import * as Types from '../../constants/ActionType';
const UsHistoryInitialState = []
export const UsHistory = (state = UsHistoryInitialState, action) => {
    switch (action.type) {
        case Types.GETHISTORYCART:
            state = action.cart
            return [...state]
        default:
            return state
    }
}

export default UsHistory;
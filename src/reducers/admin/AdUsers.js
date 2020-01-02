import * as Types from '../../constants/ActionType';

const AdUsersInitialState = []
export const AdUsers = (state = AdUsersInitialState, action) => {
    switch (action.type) {
        case Types.GETACCUSER:
            state = action.users
            return [...state]
        case Types.SEARCHACCUSER:
            state = action.users
            return [...state]
        default:
            return state
    }
}
export default AdUsers
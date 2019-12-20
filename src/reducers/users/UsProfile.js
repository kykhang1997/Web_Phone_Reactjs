import * as Types from '../../constants/ActionType';

const UsProfileInitialState = []
export const UsProfile = (state = UsProfileInitialState, action) => {
    switch (action.type) {
        case Types.GETPROFILE:
            state = action.users
            return [...state]
        default:
            return state
    }
}

export default UsProfile;
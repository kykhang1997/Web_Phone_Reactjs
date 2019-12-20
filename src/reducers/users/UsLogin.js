import * as Types from '../../constants/ActionType';

const UsLoginInitialState = []
export const UsLogin = (state = UsLoginInitialState, action) => {
    switch (action.type) {
        case Types.GETUSER:
            state = action.user
            return [...state]
        default:
            return state
    }
}

export default UsLogin;
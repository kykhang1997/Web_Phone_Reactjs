import * as Types from '../../constants/ActionType';
const AdLoginInitialState = []
export const AdLogin = (state = AdLoginInitialState, action) => {
    switch (action.type) {
        case Types.GETADMINLOGIN:
            state = action.admin
            return [...state]
        default:
            return state
    }
}
export default AdLogin
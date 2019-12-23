import * as Type from '../../constants/ActionType';
const UsDangKyInitialState = []
export const UsDangKy = (state = UsDangKyInitialState, action) => {
    switch (action.type) {
        case Type.DANGKYUSER:
            state.push(action.user)
            return [...state]
        default:
            return state
    }
}

export default UsDangKy;
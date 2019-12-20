import * as Type from '../../constants/ActionType';
import { stringify } from 'querystring';

const UsDangKyInitialState = []
export const UsDangKy = (state = UsDangKyInitialState, action) => {
    switch (action.type) {
        case Type.DANGKYUSER:
            // console.log(action.user);
            state.push(action.user)
            sessionStorage.setItem('TOKEN',JSON.parse(stringify(state)))
            return [...state]
        default:
            return state
    }
}

export default UsDangKy;
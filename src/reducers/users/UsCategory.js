import * as Types from './../../constants/ActionType';

const UsCategoryInitialState = []
export const UsCategory = (state = UsCategoryInitialState, action) => {
    switch (action.type) {
        case Types.GETCATEGORY:
            state = action.category
            return [...state]
        
        default:
            return state
    }
}
export default UsCategory
import * as Types from '../constants/ActionType';
import ApiCall from '../util/ApiCall';


export const actFetchProductsRequest  = () => {
    return (dispatch) => {
        return ApiCall('sanpham','GET',null).then(res => {
            dispatch(actFetchProducts(res.data))
        })
    }
}

export const actFetchProducts = (sanpham) => {
    return {
        type : Types.USLISTPRODUCT,
        sanpham
    }
}
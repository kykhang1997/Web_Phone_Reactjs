import * as Types from '../constants/ActionType';
import ApiCall from '../util/ApiCall';

//show view data
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

//details dữ liệu
export const actGetProductRequest  = (id) => {
    return dispatch => {
        ApiCall(`sanpham/${id}`,'GET',null).then(res=>{
            dispatch(actGetProduct(res.data));
        })
    }
}


export const actGetProduct  = (sanpham) => {
    return {
        type : Types.USDETAILSPRODUCT,
        sanpham
    }
}


//add cart
export const addToCart = (sanpham,count) => {
    return {
        type: Types.ADDTOCART,
        sanpham,
        count,
    }
}

//del cart
export const delToCart  = (sanpham) => {
    return{
        type: Types.DELTOCART,
        sanpham
    }
}

//dang ky
export const dangkyAPI = (user) => {
    return dispatch => {
        ApiCall(`users`,'POST',user).then(res=>{
            dispatch(dangky(res.data))
        })
    }
}

export const dangky = (user) => {
    return {
        type : Types.DANGKYUSER,
        user
    }
}

//Get User
export const GetUserAPi  = () => {
    return dispatch => {
        ApiCall(`users`,'GET',null).then(res=>{
            dispatch(getuser(res.data))
        })
    }
}


export const getuser = (user) => {
    return {
        type : Types.GETUSER,
        user
    }
}

//add to bill api
export const BillAPI  = (sanpham) => {
    return dispatch => {
        ApiCall(`thanhtoan`,'POST',sanpham).then(res=>{
            dispatch(addToBillApi(res.data))
        })
    }
}


export const addToBillApi  = (sanpham,total) => {
    return {
        type : Types.ADDTOBILLAPI,
        sanpham,
    }
}

//add cart api




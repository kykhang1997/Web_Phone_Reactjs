import ApiCall from '../ApiCall';
import * as config from '../../constants/config';

const url = '/sanpham';

export const getList = ()=>{
    return ApiCall.get(`${config.API_URL}/${url}`)
}
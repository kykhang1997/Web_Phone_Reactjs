import { combineReducers  } from 'redux';
import UsProduct from './users/UsProduct'
import UsCart from './users/UsCart';
import UsDangKy from './users/UsDangKy';
import UsLogin from './users/UsLogin';
import UsBill from './users/UsBill';

const myreducer = combineReducers({
    UsProduct,
    UsCart,
    UsDangKy,
    UsLogin,
    UsBill,
})

export default myreducer;
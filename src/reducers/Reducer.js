import { combineReducers  } from 'redux';
import UsProduct from './users/UsProduct'
import UsCart from './users/UsCart';
import UsDangKy from './users/UsDangKy';
import UsLogin from './users/UsLogin';
import UsBill from './users/UsBill';
import UsProfile from './users/UsProfile';
import UsHistory from './users/UsHistory';
const myreducer = combineReducers({
    UsProduct,
    UsCart,
    UsDangKy,
    UsLogin,
    UsBill,
    UsProfile,
    UsHistory
})

export default myreducer;
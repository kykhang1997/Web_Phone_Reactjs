import { combineReducers  } from 'redux';
import UsProduct from './users/UsProduct'
import UsCart from './users/UsCart';
import UsDangKy from './users/UsDangKy';
import UsLogin from './users/UsLogin';
import UsCheckLoginMenu from './users/UsCheckLoginMenu';
import UsBill from './users/UsBill';
import UsCategory from './users/UsCategory';
import UsProfile from './users/UsProfile';
import UsHistory from './users/UsHistory';
import AdCategory from './admin/AdCategory';
import AdProducts from './admin/AdProducts';
import AdUsers from './admin/AdUsers';
import AdBill from './admin/AdBill';
import AdLogin from './admin/AdLogin';

const myreducer = combineReducers({
    UsProduct,
    UsCheckLoginMenu,
    UsCart,
    UsDangKy,
    UsLogin,
    UsBill,
    UsProfile,
    UsCategory,
    UsHistory,
    //admin
    AdLogin,
    AdCategory,
    AdProducts,
    AdUsers,
    AdBill,
})

export default myreducer;
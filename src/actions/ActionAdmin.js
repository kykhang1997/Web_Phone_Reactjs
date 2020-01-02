import * as Types from '../constants/ActionType';
import ApiCall from '../util/ApiCall';


//----ADMIN LOGIN-----
export const GetAdminLoginAPI  = () => {
    return dispatch => {
        ApiCall(`admin`,'GET',null).then(res=>{
            dispatch(getadminlogin(res.data))
        })
    }
}

export const getadminlogin  = (admin) => {
    return {
        type : Types.GETADMINLOGIN,
        admin
    }
}



//----LOAISP-----
export const GetLoaispAPI = () => {
    return dispatch => {
        ApiCall(`loaisp`,'GET',null).then(res=>{
            dispatch(getloaisp(res.data))
        })
    }
}
export const getloaisp  = (loaisp) => {
    return {
        type : Types.GETLOAISP,
        loaisp
    }
}
export const AddLoaispAPI  = (loaisp) => {
    return dispatch => {
        ApiCall(`loaisp`,'POST',loaisp).then(res=>{
            dispatch(addloaisp(res.data));
        })
    }
}
export const addloaisp = (loaisp) => {
    return {
        type : Types.ADDLOAISP,
        loaisp
    }
}
export const DelLoaispAPI  = (id) => {
    return dispatch => {
        ApiCall(`loaisp/${id}`,'DELETE',null).then(res=>{
            dispatch(delloaisp(id))
        })
    }
}

export const delloaisp  = (id) => {
    return {
        type : Types.DELETELOAISP,
        id
    }
}
export const EditLoaispAPI  = (id) => {
    return dispatch => {
        ApiCall(`loaisp/${id}`,'GET',null).then(res=>{
            dispatch(editloaisp(res.data))
        })
    }
}

export const editloaisp  = (loaisp) => {
    return {
        type : Types.EDITLOAISP,
        loaisp,
    }
}

export const UpLoaispAPI  = (loaisp) => {
    return dispatch => {
        ApiCall(`loaisp/${loaisp.id}`,'PUT',loaisp).then(res=>{
            dispatch(uploaisp(res.data))
        })
    }
}

export const uploaisp = (loaisp) => {
    return {
        type : Types.UPDATELOAISP,
        loaisp
    }
}
export const SearchLoaispAPI  = (value) => {
    return dispatch => {
        ApiCall(`loaisp?tenloai_like=${value}`,'GET',null).then(res=>{
            dispatch(searchloaisp(res.data))
        })
    }
}

export const searchloaisp = (loaisp)=> {
    return {
        type : Types.SEARCHLOAISP,
        loaisp
    }
}



//---SANPHAM
export const GetSanPhamAPI = () => {
    return dispatch => {
        ApiCall(`sanpham`,'GET',null).then(res=>{
            dispatch(getsanpham(res.data))
        })
    }
}
export const getsanpham  = (sanpham) => {
    return {
        type : Types.GETSANPHAM,
        sanpham
    }
}


export const AddSanPhamAPI  = (sanpham) => {
    return dispatch => {
        ApiCall(`sanpham`,'POST',sanpham).then(res=>{
            dispatch(addsanpham(res.data))
        })
    }
}

export const addsanpham  = (sanpham) => {
    return {
        type : Types.ADDSANPHAM,
        sanpham
    }
}
export const DelSanPhamAPI  = (id) => {
    return dispatch => {
        ApiCall(`sanpham/${id}`,'DELETE',null).then(res=>{
            dispatch(delsanpham(id))
        })
    }
}

export const delsanpham  = (id) => {
    return {
        type : Types.DELSANPHAM,
        id
    }
}
export const EditSanPhamAPI  = (id) => {
    return dispatch => {
        ApiCall(`sanpham/${id}`,'GET',null).then(res=>{
            dispatch(editsanpham(res.data))
        })
    }
}

export const editsanpham  = (sanpham) => {
    return {
        type : Types.EDITSANPHAM,
        sanpham,
    }
}
export const UpSanPhamAPI  = (sanpham) => {
    return dispatch => {
        ApiCall(`sanpham/${sanpham.id}`,'PUT',sanpham).then(res=>{
            dispatch(upsanpham(res.data))
        })
    }
}

export const upsanpham = (sanpham) => {
    return {
        type : Types.UPDATESANPHAM,
        sanpham
    }
}

export const SearchSanPhamAPI  = (value) => {
    return dispatch => {
        ApiCall(`sanpham?tensp_like=${value}`,'GET',null).then(res=>{
            dispatch(searchsanpham(res.data))
        })
    }
}


export const searchsanpham =(sanpham)=>{
    return {
        type : Types.SEARCHSANPHAM,
        sanpham
    }
}
//----USER
export const GetAccUserAPI  = () => {
    return dispatch => {
        ApiCall(`users`,'GET',null).then(res=>{
            dispatch(getaccuser(res.data))
        })
    }
}

export const getaccuser = (users) => {
    return {
        type : Types.GETACCUSER,
        users
    }
}
export const SearchAccUsersAPI  = (value) => {
    return dispatch => {
        ApiCall(`users?email_like=${value}`,'GET',null).then(res=>{
            dispatch(searchaccuser(res.data))
        })
    }
}


export const searchaccuser = (users)=>{
    return {
        type : Types.SEARCHACCUSER,
        users
    }
}

//----bill
export const GetBillAPI  = () => {
    return dispatch => {
        ApiCall(`thanhtoan`,'GET',null).then(res=>{
            dispatch(getbill(res.data))
        })
    }
}

export const getbill  = (bill) => {
    return {
        type : Types.GETBILLAD,
        bill
    }
}
export const EditBillAPI  = (id) => {
    return dispatch => {
        ApiCall(`thanhtoan/${id}`,'GET',null).then(res=>{
            dispatch(editbillad(res.data))
        })
    }
}

export const editbillad  = (bill) => {
    return {
        type : Types.EDITBILLAD,
        bill,
    }
}

export const UpBillAPI  = (bill) => {
    return dispatch => {
        ApiCall(`thanhtoan/${bill.id}`,'PUT',bill).then(res=>{
            dispatch(upbillad(res.data))
        })
    }
}

export const upbillad = (bill) => {
    return {
        type : Types.UPDATEBILLAD,
        bill
    }
}
export const SearchBillAPI  = (value) => {
    return dispatch => {
        ApiCall(`thanhtoan?thongtin.email_like=${value}`,'GET',null).then(res=>{
            dispatch(searchbillad(res.data))
        })
    }
}


export const searchbillad =(bill)=>{
    return {
        type : Types.SEARCHBILLAD,
        bill
    }
}






import React, { Component } from "react";


export class Profiles extends Component {
  render() {
    return (
    	<div id="profiles">
	        <div className="floatL" style={{width:"20%"}}>
	          <a href="true">Thông tin tài khoản</a><br/>
	          <a href="true">Lịch sử mua hàng</a>
	        </div>

	        
            <div className="div floatR" style={{width:"80%"}}>
                <label htmlFor="name">Họ tên:</label>
                <input type="text" className="form-control" id="name" placeholder="Nguyễn văn A" />
                <label htmlFor="sdt">Số điện thoại:</label>
                <input type="text" className="form-control" id="sdt" placeholder="Nguyễn văn A" />
                <label htmlFor="mail">Email:</label>
                <input type="text" className="form-control" id="mail" placeholder="Nguyễn văn A" />
                
                <label htmlFor="gender">Giới tính:</label>
                <input type="radio" name="gender" defaultValue="male" /> Nam
                <input type="radio" name="gender" defaultValue="female" /> Nữ
                <input type="radio" name="gender" defaultValue="other" /> Khác

                <div className="form-group">
                    <label>Ngày sinh</label>
                    <input type="date" name="bday" min="1000-01-01" max="3000-12-31" className="form-control" />
                </div>
                <label htmlFor="pass">Mật khẩu:</label>
                <input type="password" className="form-control" id="pass"  /> 
                <div style={{marginTop:"2%"}}>
                    <button className="btn btn-primary">Đổi mật khẩu</button>
                    <button className="btn btn-primary">Lưu</button>
                </div>
                
            </div>
                
                
     	 </div>
    )
  }
}

export default Profiles;
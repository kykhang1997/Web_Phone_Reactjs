import React, { Component } from "react";

export class File extends Component {
  render() {
    // console.log(this.props.item);
    let {item}= this.props;
    return (
      <table>
        <tbody>
          <tr>
            <td className="file-item">ID:</td>
            <td className="file-item">{item.id}</td>
          </tr>
          <tr>
            <td className="file-item">Tên:</td>
            <td className="file-item">{item.name}</td>
          </tr>
          <tr>
            <td className="file-item">Email:</td>
            <td className="file-item">{item.email}</td>
          </tr>
          <tr>
            <td className="file-item">SĐT:</td>
            <td className="file-item">{item.phone}</td>
          </tr>
          <tr>
            <td className="file-item">Địa chỉ:</td>
            <td className="file-item">{item.diachi}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default File;

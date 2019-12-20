import React, { Component } from "react";

export class File extends Component {
  render() {
    // console.log(this.props.item);
    let {item}= this.props;
    return (
      <table>
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{item.id}</td>
          </tr>
          <tr>
            <td>Tên:</td>
            <td>{item.name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{item.email}</td>
          </tr>
          <tr>
            <td>SĐT:</td>
            <td>{item.phone}</td>
          </tr>
          <tr>
            <td>Địa chỉ:</td>
            <td>{item.diachi}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default File;

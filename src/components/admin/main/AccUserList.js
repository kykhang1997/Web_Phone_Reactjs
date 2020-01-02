import React, { Component } from "react";

export class AccUserList extends Component {
  render() {
    //   console.log(this.props.item);
      let {item,index} = this.props;
    return (
      <tbody className="table-hover table-bordered">
        <tr>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>
            {item.email}
          </td>
          <td>
            {item.phone}
          </td>
          <td>
            {item.diachi}
          </td>
         
        </tr>
      </tbody>
    );
  }
}

export default AccUserList;

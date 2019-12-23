import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { SearchProductsAPI } from "../../../actions/ActionUs";
export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search : '',
    }
  }
  handleOnchange  = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case "search":
        this.setState({
          ...this.state,
          search: e.target.value
        });
        break;
      }
  }
  handerSubmit  = (e) => {
    e.preventDefault();
    let{search} = this.state;
    this.props.searchAPI(search);
  }
  
  
  render() {
    console.log(this.state);
    
    return (
      <section id="header-content">
        <Link to={"/"}><img src="../img/nova.png" alt="nova-logo" /></Link>
          
    
        <form onSubmit={this.handerSubmit}>
          <input type="text" placeholder="Tìm kiếm Sản Phẩm..." name='search' onChange={this.handleOnchange}/>
          <button type="submit" id="search">
            Tìm kiếm
          </button>
        </form>
      </section>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchAPI: (value) => {
      dispatch(SearchProductsAPI(value))
    }
  }
}

export default connect(null, mapDispatchToProps)(Search)

import React, { Component } from "react";

export class Search extends Component {
  render() {
    return (
      <section id="header-content">
        <a href>
          <img src="../img/nova.png" alt="nova-logo" />
        </a>
        <form>
          <input type="text" placeholder="Tìm kiếm..." />
          <button type="button" id="search">
            Tìm kiếm
          </button>
        </form>
      </section>
    );
  }
}

export default Search;

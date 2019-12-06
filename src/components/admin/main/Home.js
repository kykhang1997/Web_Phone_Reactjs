import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div id="content">
        <div id="items1">
          <div className="item">
            <h1>1</h1>
          </div>
          <div className="item">
            <h1>2</h1>
          </div>
          <div className="item">
            <h1>3</h1>
          </div>
          <div className="item">
            <h1>4</h1>
          </div>
        </div>
        <div id="items2">
          <div id="item_left">
            <h1>abc</h1>
          </div>
          <div id="item_right">
          <h1>abc</h1>
          </div>
        </div>
        <div id="card">
          <div id="card_1" />
          <div id="card_2" />
          <div id="card_3" />
          <div id="card_4" />
        </div>
      </div>
    );
  }
}

export default Home;

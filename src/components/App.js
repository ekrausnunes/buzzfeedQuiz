import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Body />
      </React.Fragment>
    );
  }
}

export default App;

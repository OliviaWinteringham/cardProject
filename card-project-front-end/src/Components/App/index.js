import React, { Component } from "react";
import "./App.modules.css";
import Cards from "../Cards";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <>
            <h1>Cards of the World</h1>
            <p>A project by Olivia created in React</p>
            <Cards />
          </>
        </header>
      </div>
    );
  }
}

export default App;

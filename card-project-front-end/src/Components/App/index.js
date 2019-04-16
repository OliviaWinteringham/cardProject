import React, { Component } from "react";
import "./App.modules.css";
import Cards from "../Cards";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <>
            <p > I'm making a new project in React </p>
            <p>
              and I've just set up the basic template to start my database using
              Express{" "}
            </p>
            <Cards />
          </>
        </header>
      </div>
    );
  }
}

export default App;

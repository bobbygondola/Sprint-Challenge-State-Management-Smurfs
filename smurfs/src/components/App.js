import React, { Component } from "react";
import "./App.css";
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <Home />
      </div>
    );
  }
}

export default App;

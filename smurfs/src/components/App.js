import React, { Component } from "react";
import "./App.css";
import Home from './Home'
import SmurfForm from './SmurfForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the SMURFS!</h1>
        <div>Explore the Village! Add your friends!</div>
        <SmurfForm />
        <Home />
      </div>
    );
  }
}

export default App;

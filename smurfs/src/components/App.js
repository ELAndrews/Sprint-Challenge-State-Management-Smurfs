import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Smurfs from "./Smurfs";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Smurfs />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movies from "./components/movies";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
class App extends Component {
  render() {
    return (
      <main role="main" class="container">
        <Movies />
      </main>
    );
  }
}

export default App;
